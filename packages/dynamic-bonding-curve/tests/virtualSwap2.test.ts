import {
    Keypair,
    PublicKey,
    Connection,
    sendAndConfirmTransaction,
} from '@solana/web3.js'
import { test, describe, beforeEach, expect } from 'vitest'
import { fundSol, LOCALNET_RPC_URL } from './utils/common'
import {
    ActivationType,
    BaseFeeMode,
    buildCurveWithCustomSqrtPrices,
    CollectFeeMode,
    ConfigParameters,
    createSqrtPrices,
    DammV2BaseFeeMode,
    DammV2DynamicFeeMode,
    deriveDbcPoolAddress,
    DynamicBondingCurveClient,
    MigratedCollectFeeMode,
    MigrationFeeOption,
    MigrationOption,
    Swap2Params,
    SwapMode,
    TokenDecimal,
    TokenType,
    TokenAuthorityOption,
    VirtualSwap2Params,
} from '../src'
import BN from 'bn.js'
import {
    getAccount,
    getAssociatedTokenAddressSync,
    NATIVE_MINT,
} from '@solana/spl-token'

const connection = new Connection(LOCALNET_RPC_URL, 'confirmed')

const buildTestCurveConfig = (
    migrationFee: {
        feePercentage: number
        creatorFeePercentage: number
    },
    migrationQuoteAmountCap?: BN
): ConfigParameters => {
    const customPrices = [0.000000001, 0.00000000105, 0.000000002, 0.000001]
    const tokenBaseDecimal = TokenDecimal.SIX
    const tokenQuoteDecimal = TokenDecimal.NINE
    const sqrtPrices = createSqrtPrices(
        customPrices,
        tokenBaseDecimal,
        tokenQuoteDecimal
    )

    return buildCurveWithCustomSqrtPrices({
        token: {
            tokenType: TokenType.SPLToken,
            tokenBaseDecimal: tokenBaseDecimal,
            tokenQuoteDecimal: tokenQuoteDecimal,
            tokenAuthorityOption: TokenAuthorityOption.PartnerUpdateAuthority,
            totalTokenSupply: 1_000_000_000,
            leftover: 1000,
        },
        fee: {
            baseFeeParams: {
                baseFeeMode: BaseFeeMode.FeeSchedulerExponential,
                feeSchedulerParam: {
                    startingFeeBps: 9000,
                    endingFeeBps: 120,
                    numberOfPeriod: 60,
                    totalDuration: 60,
                },
            },
            dynamicFeeEnabled: true,
            collectFeeMode: CollectFeeMode.QuoteToken,
            creatorTradingFeePercentage: 0,
            poolCreationFee: 1,
            enableFirstSwapWithMinFee: false,
        },
        migration: {
            migrationOption: MigrationOption.MET_DAMM_V2,
            migrationFeeOption: MigrationFeeOption.Customizable,
            migrationFee,
            migratedPoolFee: {
                collectFeeMode: MigratedCollectFeeMode.QuoteToken,
                dynamicFee: DammV2DynamicFeeMode.Enabled,
                poolFeeBps: 120,
                baseFeeMode: DammV2BaseFeeMode.FeeTimeSchedulerLinear,
            },
            migrationQuoteAmountCap,
        },
        liquidityDistribution: {
            partnerLiquidityPercentage: 0,
            partnerPermanentLockedLiquidityPercentage: 100,
            creatorLiquidityPercentage: 0,
            creatorPermanentLockedLiquidityPercentage: 0,
        },
        lockedVesting: {
            totalLockedVestingAmount: 0,
            numberOfVestingPeriod: 0,
            cliffUnlockAmount: 0,
            totalVestingDuration: 0,
            cliffDurationFromMigrationTime: 0,
        },
        activationType: ActivationType.Timestamp,
        sqrtPrices,
        liquidityWeights: [2, 1, 1],
    })
}

describe('virtualSwap2 Tests', { timeout: 90000 }, () => {
    let partner: Keypair
    let user: Keypair
    let poolCreator: Keypair
    let virtualSwapAuthority: Keypair
    let dbcClient: DynamicBondingCurveClient
    let config: Keypair
    let pool: PublicKey
    let baseMint: Keypair
    let curveConfig: ConfigParameters

    beforeEach(async () => {
        partner = Keypair.generate()
        user = Keypair.generate()
        poolCreator = Keypair.generate()
        // the local-feature program build accepts any payer as the virtual swap authority
        virtualSwapAuthority = Keypair.generate()
        config = Keypair.generate()
        baseMint = Keypair.generate()

        for (const account of [
            partner,
            user,
            poolCreator,
            virtualSwapAuthority,
        ]) {
            await fundSol(connection, account.publicKey)
        }

        dbcClient = new DynamicBondingCurveClient(connection, 'confirmed')

        curveConfig = buildTestCurveConfig({
            feePercentage: 0,
            creatorFeePercentage: 0,
        })

        // create config
        const createConfigTx = await dbcClient.partner.createConfig({
            config: config.publicKey,
            feeClaimer: partner.publicKey,
            leftoverReceiver: partner.publicKey,
            payer: partner.publicKey,
            quoteMint: NATIVE_MINT,
            ...curveConfig,
        })

        createConfigTx.feePayer = partner.publicKey

        await sendAndConfirmTransaction(connection, createConfigTx, [
            partner,
            config,
        ])

        // create pool
        const createPoolTx = await dbcClient.creator.createPool({
            baseMint: baseMint.publicKey,
            config: config.publicKey,
            name: 'TEST',
            symbol: 'TEST',
            uri: 'https://ipfs.io/ipfs/QmdcU6CRSNr6qYmyQAGjvFyZajEs9W1GH51rddCFw7S6p2',
            payer: poolCreator.publicKey,
            poolCreator: poolCreator.publicKey,
        })

        createPoolTx.feePayer = poolCreator.publicKey

        await sendAndConfirmTransaction(connection, createPoolTx, [
            baseMint,
            poolCreator,
        ])

        pool = deriveDbcPoolAddress(
            NATIVE_MINT,
            baseMint.publicKey,
            config.publicKey
        )
    })

    test('virtualSwap2ExactIn credits base tokens without debiting quote', async () => {
        const virtualSwapParam: VirtualSwap2Params = {
            swapMode: SwapMode.ExactIn,
            amountIn: new BN(1000000000),
            minimumAmountOut: new BN(1),
            owner: user.publicKey,
            pool: pool,
            payer: virtualSwapAuthority.publicKey,
        }

        const swapTx = await dbcClient.pool.virtualSwap2(virtualSwapParam)

        swapTx.feePayer = virtualSwapAuthority.publicKey

        await sendAndConfirmTransaction(connection, swapTx, [
            virtualSwapAuthority,
        ])

        // virtual quote reserve increases; real quote reserve is untouched
        const virtualPool = await dbcClient.state.getPool(pool)
        expect(virtualPool).not.toBeNull()
        expect(virtualPool!.poolState.virtualQuoteReserve.gt(new BN(0))).toBe(
            true
        )
        expect(virtualPool!.poolState.quoteReserve.isZero()).toBe(true)

        // recipient really receives base tokens
        const userBaseAta = getAssociatedTokenAddressSync(
            baseMint.publicKey,
            user.publicKey
        )
        const userBaseAccount = await getAccount(connection, userBaseAta)
        expect(userBaseAccount.amount > 0n).toBe(true)

        // recipient's quote (wSOL) account is created but never debited or credited
        const userQuoteAta = getAssociatedTokenAddressSync(
            NATIVE_MINT,
            user.publicKey
        )
        const userQuoteAccount = await getAccount(connection, userQuoteAta)
        expect(userQuoteAccount.amount).toBe(0n)
    })

    test('virtual swap completes the curve and blocks further swaps', async () => {
        const poolConfigState = await dbcClient.state.getPoolConfig(
            config.publicKey
        )
        const threshold = poolConfigState.migrationQuoteThreshold

        // partial-fill with far more than the threshold to complete the curve
        // (the starting fee is 90%, so completing needs >10x the threshold as input)
        const virtualSwapParam: VirtualSwap2Params = {
            swapMode: SwapMode.PartialFill,
            amountIn: threshold.muln(20),
            minimumAmountOut: new BN(1),
            owner: user.publicKey,
            pool: pool,
            payer: virtualSwapAuthority.publicKey,
        }

        const swapTx = await dbcClient.pool.virtualSwap2(virtualSwapParam)
        swapTx.feePayer = virtualSwapAuthority.publicKey
        await sendAndConfirmTransaction(connection, swapTx, [
            virtualSwapAuthority,
        ])

        const virtualPool = await dbcClient.state.getPool(pool)
        expect(virtualPool).not.toBeNull()
        const totalQuoteReserve = virtualPool!.poolState.quoteReserve.add(
            virtualPool!.poolState.virtualQuoteReserve
        )
        expect(totalQuoteReserve.gte(threshold)).toBe(true)
        expect(virtualPool!.poolState.quoteReserve.isZero()).toBe(true)

        // curve progress counts the virtual reserve
        const progress =
            await dbcClient.state.getPoolQuoteTokenCurveProgress(pool)
        expect(progress).toBe(1)

        // a regular swap on the completed pool fails on-chain
        const swap2Param: Swap2Params = {
            swapMode: SwapMode.ExactIn,
            swapBaseForQuote: false,
            amountIn: new BN(1000000000),
            minimumAmountOut: new BN(1),
            owner: user.publicKey,
            pool: pool,
            referralTokenAccount: null as PublicKey | null,
            payer: user.publicKey,
        }
        const failingSwapTx = await dbcClient.pool.swap2(swap2Param)
        failingSwapTx.feePayer = user.publicKey
        await expect(
            sendAndConfirmTransaction(connection, failingSwapTx, [user])
        ).rejects.toThrow()
    })

    test('base-to-quote swaps are rejected client-side', async () => {
        const swap2Param: Swap2Params = {
            swapMode: SwapMode.ExactIn,
            swapBaseForQuote: true,
            amountIn: new BN(1000000),
            minimumAmountOut: new BN(1),
            owner: user.publicKey,
            pool: pool,
            referralTokenAccount: null as PublicKey | null,
            payer: user.publicKey,
        }

        await expect(dbcClient.pool.swap2(swap2Param)).rejects.toThrow(
            'Sells are disabled'
        )
    })

    test('createPool rejects a deadline in the past', async () => {
        const newBaseMint = Keypair.generate()

        await expect(
            dbcClient.creator.createPool({
                baseMint: newBaseMint.publicKey,
                config: config.publicKey,
                name: 'TEST',
                symbol: 'TEST',
                uri: 'https://ipfs.io/ipfs/QmdcU6CRSNr6qYmyQAGjvFyZajEs9W1GH51rddCFw7S6p2',
                payer: poolCreator.publicKey,
                poolCreator: poolCreator.publicKey,
                deadlineTimestamp: new BN(Math.floor(Date.now() / 1000) - 100),
            })
        ).rejects.toThrow('Deadline timestamp must be 0 or in the future')
    })

    test('swaps fail after the pool deadline passes', async () => {
        const newBaseMint = Keypair.generate()

        const createPoolTx = await dbcClient.creator.createPool({
            baseMint: newBaseMint.publicKey,
            config: config.publicKey,
            name: 'TEST',
            symbol: 'TEST',
            uri: 'https://ipfs.io/ipfs/QmdcU6CRSNr6qYmyQAGjvFyZajEs9W1GH51rddCFw7S6p2',
            payer: poolCreator.publicKey,
            poolCreator: poolCreator.publicKey,
            deadlineTimestamp: new BN(Math.floor(Date.now() / 1000) + 10),
        })
        createPoolTx.feePayer = poolCreator.publicKey
        await sendAndConfirmTransaction(connection, createPoolTx, [
            newBaseMint,
            poolCreator,
        ])

        const deadlinePool = deriveDbcPoolAddress(
            NATIVE_MINT,
            newBaseMint.publicKey,
            config.publicKey
        )

        const deadlinePoolState = await dbcClient.state.getPool(deadlinePool)
        expect(deadlinePoolState).not.toBeNull()
        expect(
            deadlinePoolState!.poolState.deadlineTimestamp.gt(new BN(0))
        ).toBe(true)

        // wait for the deadline to pass
        await new Promise((resolve) => setTimeout(resolve, 15000))

        const swap2Param: Swap2Params = {
            swapMode: SwapMode.ExactIn,
            swapBaseForQuote: false,
            amountIn: new BN(1000000000),
            minimumAmountOut: new BN(1),
            owner: user.publicKey,
            pool: deadlinePool,
            referralTokenAccount: null as PublicKey | null,
            payer: user.publicKey,
        }
        const swapTx = await dbcClient.pool.swap2(swap2Param)
        swapTx.feePayer = user.publicKey
        await expect(
            sendAndConfirmTransaction(connection, swapTx, [user])
        ).rejects.toThrow()
    })

    test('createConfig rejects a migration quote amount cap above the threshold', async () => {
        const cappedConfig = buildTestCurveConfig(
            { feePercentage: 0, creatorFeePercentage: 0 },
            // u64::MAX, guaranteed to exceed any threshold
            new BN('18446744073709551615')
        )

        await expect(
            dbcClient.partner.createConfig({
                config: Keypair.generate().publicKey,
                feeClaimer: partner.publicKey,
                leftoverReceiver: partner.publicKey,
                payer: partner.publicKey,
                quoteMint: NATIVE_MINT,
                ...cappedConfig,
            })
        ).rejects.toThrow(
            'Migration quote amount cap must be less than or equal to the migration quote threshold'
        )
    })

    test('createConfig rejects a non-zero migration fee percentage', async () => {
        const feeConfig = buildTestCurveConfig({
            feePercentage: 10,
            creatorFeePercentage: 50,
        })

        await expect(
            dbcClient.partner.createConfig({
                config: Keypair.generate().publicKey,
                feeClaimer: partner.publicKey,
                leftoverReceiver: partner.publicKey,
                payer: partner.publicKey,
                quoteMint: NATIVE_MINT,
                ...feeConfig,
            })
        ).rejects.toThrow('Migration fee percentage must be 0')
    })
})
