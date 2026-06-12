import { PublicKey, AccountMeta, Transaction, Keypair, Connection, Commitment, TransactionInstruction, GetProgramAccountsFilter } from '@solana/web3.js';
import { IdlTypes, BN, IdlAccounts, Accounts, Program, ProgramAccount } from '@coral-xyz/anchor';
import BN$1 from 'bn.js';
import Decimal from 'decimal.js';

/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/dynamic_bonding_curve.json`.
 */
type DynamicBondingCurve = {
    address: 'DBCMoopTYxovF6tWuNXzQjSG9oJs5Ap4UV3HMWU7mFh7';
    metadata: {
        name: 'dynamicBondingCurve';
        version: '0.2.0';
        spec: '0.1.0';
        description: 'Created with Anchor';
    };
    instructions: [
        {
            name: 'claimCreatorTradingFee';
            docs: ['Accepts: VirtualPool only.'];
            discriminator: [82, 220, 250, 189, 3, 85, 107, 45];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The treasury token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The treasury token b account'];
                    writable: true;
                },
                {
                    name: 'baseVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                },
                {
                    name: 'baseMint';
                    docs: ['The mint of token a'];
                },
                {
                    name: 'quoteMint';
                    docs: ['The mint of token b'];
                },
                {
                    name: 'creator';
                    signer: true;
                },
                {
                    name: 'tokenBaseProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'maxBaseAmount';
                    type: 'u64';
                },
                {
                    name: 'maxQuoteAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'claimCreatorTradingFee2';
            docs: ['Accepts: VirtualPool or TransferHookPool.'];
            discriminator: [238, 247, 213, 94, 110, 145, 88, 142];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The treasury token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The treasury token b account'];
                    writable: true;
                },
                {
                    name: 'baseVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                },
                {
                    name: 'baseMint';
                    docs: ['The mint of token a'];
                },
                {
                    name: 'quoteMint';
                    docs: ['The mint of token b'];
                },
                {
                    name: 'creator';
                    signer: true;
                },
                {
                    name: 'tokenBaseProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'maxBaseAmount';
                    type: 'u64';
                },
                {
                    name: 'maxQuoteAmount';
                    type: 'u64';
                },
                {
                    name: 'transferHookAccountsInfo';
                    type: {
                        defined: {
                            name: 'transferHookAccountsInfo';
                        };
                    };
                }
            ];
        },
        {
            name: 'claimPartnerPoolCreationFee';
            docs: ['Accepts: VirtualPool or TransferHookPool.'];
            discriminator: [250, 238, 26, 4, 139, 10, 101, 248];
            accounts: [
                {
                    name: 'config';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'feeClaimer';
                    signer: true;
                },
                {
                    name: 'feeReceiver';
                    writable: true;
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'claimProtocolFee';
            docs: ['Accepts: VirtualPool only.'];
            discriminator: [165, 228, 133, 48, 99, 249, 255, 33];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'config';
                    relations: ['pool'];
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'baseVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'quoteVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'baseMint';
                    docs: ['The mint of token a'];
                    relations: ['pool'];
                },
                {
                    name: 'quoteMint';
                    docs: ['The mint of token b'];
                    relations: ['config'];
                },
                {
                    name: 'tokenBaseAccount';
                    writable: true;
                },
                {
                    name: 'tokenQuoteAccount';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    docs: ['Signer'];
                    signer: true;
                },
                {
                    name: 'tokenBaseProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'maxBaseAmount';
                    type: 'u64';
                },
                {
                    name: 'maxQuoteAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'claimProtocolFee2';
            docs: ['Accepts: VirtualPool or TransferHookPool.'];
            discriminator: [235, 194, 54, 69, 65, 10, 236, 112];
            accounts: [
                {
                    name: 'receiverTokenAccount';
                    docs: [
                        'receiver token account for the claimed token. validated through the protocol_fee program'
                    ];
                    writable: true;
                },
                {
                    name: 'baseMint';
                },
                {
                    name: 'quoteMint';
                },
                {
                    name: 'tokenBaseProgram';
                },
                {
                    name: 'tokenQuoteProgram';
                },
                {
                    name: 'config';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'baseVault';
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    writable: true;
                },
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'signer';
                    signer: true;
                    address: 'FkU5rQCWQM131skHCpcEbK8P1JrQGsBgqXe55w525SSF';
                }
            ];
            args: [
                {
                    name: 'maxAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'claimProtocolPoolCreationFee';
            docs: ['Accepts: VirtualPool or TransferHookPool.'];
            discriminator: [114, 205, 83, 188, 240, 153, 25, 54];
            accounts: [
                {
                    name: 'config';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    docs: ['operator'];
                    signer: true;
                },
                {
                    name: 'treasury';
                    writable: true;
                    address: 'Ff4kZLzK89T3tjMknyNHAyTU1sUzMtnbvbzuuaNvXFcZ';
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'claimTradingFee';
            docs: ['Accepts: VirtualPool only.'];
            discriminator: [8, 236, 89, 49, 152, 125, 177, 81];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'config';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The treasury token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The treasury token b account'];
                    writable: true;
                },
                {
                    name: 'baseVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                },
                {
                    name: 'baseMint';
                    docs: ['The mint of token a'];
                },
                {
                    name: 'quoteMint';
                    docs: ['The mint of token b'];
                },
                {
                    name: 'feeClaimer';
                    signer: true;
                },
                {
                    name: 'tokenBaseProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'maxAmountA';
                    type: 'u64';
                },
                {
                    name: 'maxAmountB';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'claimTradingFee2';
            docs: ['Accepts: VirtualPool or TransferHookPool.'];
            discriminator: [84, 191, 71, 50, 9, 162, 55, 193];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'config';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The treasury token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The treasury token b account'];
                    writable: true;
                },
                {
                    name: 'baseVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                },
                {
                    name: 'baseMint';
                    docs: ['The mint of token a'];
                },
                {
                    name: 'quoteMint';
                    docs: ['The mint of token b'];
                },
                {
                    name: 'feeClaimer';
                    signer: true;
                },
                {
                    name: 'tokenBaseProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'maxAmountA';
                    type: 'u64';
                },
                {
                    name: 'maxAmountB';
                    type: 'u64';
                },
                {
                    name: 'transferHookAccountsInfo';
                    type: {
                        defined: {
                            name: 'transferHookAccountsInfo';
                        };
                    };
                }
            ];
        },
        {
            name: 'closeClaimProtocolFeeOperator';
            discriminator: [8, 41, 87, 35, 80, 48, 121, 26];
            accounts: [
                {
                    name: 'claimFeeOperator';
                    writable: true;
                },
                {
                    name: 'rentReceiver';
                    writable: true;
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'closeOperatorAccount';
            discriminator: [171, 9, 213, 74, 120, 23, 3, 29];
            accounts: [
                {
                    name: 'operator';
                    writable: true;
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'rentReceiver';
                    writable: true;
                }
            ];
            args: [];
        },
        {
            name: 'createConfig';
            discriminator: [201, 207, 243, 114, 75, 111, 47, 189];
            accounts: [
                {
                    name: 'config';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'feeClaimer';
                },
                {
                    name: 'leftoverReceiver';
                },
                {
                    name: 'quoteMint';
                    docs: ['quote mint'];
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'configParameters';
                    type: {
                        defined: {
                            name: 'configParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'createConfigWithTransferHook';
            discriminator: [216, 37, 1, 57, 88, 226, 25, 41];
            accounts: [
                {
                    name: 'config';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'feeClaimer';
                },
                {
                    name: 'leftoverReceiver';
                },
                {
                    name: 'quoteMint';
                    docs: ['quote mint'];
                },
                {
                    name: 'transferHookProgram';
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'configParameters';
                    type: {
                        defined: {
                            name: 'configParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'createLocker';
            docs: [
                'PERMISSIONLESS FUNCTIONS ///',
                'create locker',
                'Accepts: VirtualPool or TransferHookPool.'
            ];
            discriminator: [167, 90, 137, 154, 75, 47, 17, 84];
            accounts: [
                {
                    name: 'virtualPool';
                    writable: true;
                },
                {
                    name: 'config';
                },
                {
                    name: 'poolAuthority';
                    writable: true;
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'baseVault';
                    writable: true;
                },
                {
                    name: 'baseMint';
                    writable: true;
                },
                {
                    name: 'base';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    98,
                                    97,
                                    115,
                                    101,
                                    95,
                                    108,
                                    111,
                                    99,
                                    107,
                                    101,
                                    114
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'virtualPool';
                            }
                        ];
                    };
                },
                {
                    name: 'creator';
                },
                {
                    name: 'escrow';
                    writable: true;
                },
                {
                    name: 'escrowToken';
                    writable: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                },
                {
                    name: 'lockerProgram';
                    address: 'LocpQgucEQHbqNABEYvBvwoxCPsSbG91A1QaQhQQqjn';
                },
                {
                    name: 'lockerEventAuthority';
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [];
        },
        {
            name: 'createOperatorAccount';
            discriminator: [221, 64, 246, 149, 240, 153, 229, 163];
            accounts: [
                {
                    name: 'operator';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [111, 112, 101, 114, 97, 116, 111, 114];
                            },
                            {
                                kind: 'account';
                                path: 'whitelistedAddress';
                            }
                        ];
                    };
                },
                {
                    name: 'whitelistedAddress';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'permission';
                    type: 'u128';
                }
            ];
        },
        {
            name: 'createPartnerMetadata';
            docs: ['PARTNER FUNCTIONS ///'];
            discriminator: [192, 168, 234, 191, 188, 226, 227, 255];
            accounts: [
                {
                    name: 'partnerMetadata';
                    docs: ['Partner metadata'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    112,
                                    97,
                                    114,
                                    116,
                                    110,
                                    101,
                                    114,
                                    95,
                                    109,
                                    101,
                                    116,
                                    97,
                                    100,
                                    97,
                                    116,
                                    97
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'feeClaimer';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: ['Payer of the partner metadata.'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'feeClaimer';
                    docs: ['Fee claimer for partner'];
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'metadata';
                    type: {
                        defined: {
                            name: 'createPartnerMetadataParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'createVirtualPoolMetadata';
            docs: ['Accepts: VirtualPool or TransferHookPool.'];
            discriminator: [45, 97, 187, 103, 254, 109, 124, 134];
            accounts: [
                {
                    name: 'virtualPool';
                },
                {
                    name: 'virtualPoolMetadata';
                    docs: ['Virtual pool metadata'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    118,
                                    105,
                                    114,
                                    116,
                                    117,
                                    97,
                                    108,
                                    95,
                                    112,
                                    111,
                                    111,
                                    108,
                                    95,
                                    109,
                                    101,
                                    116,
                                    97,
                                    100,
                                    97,
                                    116,
                                    97
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'virtualPool';
                            }
                        ];
                    };
                },
                {
                    name: 'creator';
                    signer: true;
                },
                {
                    name: 'payer';
                    docs: ['Payer of the virtual pool metadata.'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'metadata';
                    type: {
                        defined: {
                            name: 'createVirtualPoolMetadataParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'creatorWithdrawSurplus';
            docs: ['Accepts: VirtualPool or TransferHookPool.'];
            discriminator: [165, 3, 137, 7, 28, 134, 76, 80];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'config';
                },
                {
                    name: 'virtualPool';
                    writable: true;
                },
                {
                    name: 'tokenQuoteAccount';
                    docs: ['The receiver token account'];
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                },
                {
                    name: 'quoteMint';
                    docs: ['The mint of quote token'];
                },
                {
                    name: 'creator';
                    signer: true;
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'initializeVirtualPoolWithSplToken';
            docs: ['POOL CREATOR FUNCTIONS ////', 'Accepts: VirtualPool only.'];
            discriminator: [140, 85, 215, 176, 102, 54, 104, 79];
            accounts: [
                {
                    name: 'config';
                    docs: ['Which config the pool belongs to.'];
                },
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'creator';
                    signer: true;
                },
                {
                    name: 'baseMint';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'quoteMint';
                    relations: ['config'];
                },
                {
                    name: 'pool';
                    docs: ['Initialize an account to store the pool state'];
                    writable: true;
                },
                {
                    name: 'baseVault';
                    docs: ['Token a vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'baseMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'quoteVault';
                    docs: ['Token b vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'quoteMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'mintMetadata';
                    writable: true;
                },
                {
                    name: 'metadataProgram';
                    address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
                },
                {
                    name: 'payer';
                    docs: ['Address paying to create the pool. Can be anyone'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'tokenProgram';
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'initializePoolParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'initializeVirtualPoolWithToken2022';
            docs: ['Accepts: VirtualPool only.'];
            discriminator: [169, 118, 51, 78, 145, 110, 220, 155];
            accounts: [
                {
                    name: 'config';
                    docs: ['Which config the pool belongs to.'];
                },
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'creator';
                    signer: true;
                },
                {
                    name: 'baseMint';
                    docs: ['Unique token mint address, initialize in contract'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'quoteMint';
                    relations: ['config'];
                },
                {
                    name: 'pool';
                    docs: ['Initialize an account to store the pool state'];
                    writable: true;
                },
                {
                    name: 'baseVault';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'baseMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'quoteVault';
                    docs: ['Token quote vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'quoteMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: ['Address paying to create the pool. Can be anyone'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'tokenProgram';
                    docs: ['token program for base mint'];
                    address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'initializePoolParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'initializeVirtualPoolWithToken2022TransferHook';
            docs: ['Accepts: TransferHookPool only.'];
            discriminator: [182, 13, 233, 177, 42, 145, 135, 2];
            accounts: [
                {
                    name: 'config';
                    docs: [
                        'Transfer hook config — contains the transfer hook program set by partner'
                    ];
                },
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'creator';
                    signer: true;
                },
                {
                    name: 'baseMint';
                    docs: ['Unique token mint address, initialize in contract'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'quoteMint';
                    relations: ['config'];
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'baseVault';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'baseMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'quoteVault';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'quoteMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'transferHookProgram';
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'tokenQuoteProgram';
                },
                {
                    name: 'tokenProgram';
                    address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'initializePoolParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'migrateMeteoraDamm';
            docs: ['Accepts: VirtualPool only.'];
            discriminator: [27, 1, 48, 22, 180, 63, 118, 217];
            accounts: [
                {
                    name: 'virtualPool';
                    docs: ['virtual pool'];
                    writable: true;
                    relations: ['migrationMetadata'];
                },
                {
                    name: 'migrationMetadata';
                    writable: true;
                },
                {
                    name: 'config';
                    relations: ['virtualPool'];
                },
                {
                    name: 'poolAuthority';
                    writable: true;
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'dammConfig';
                    docs: ['pool config'];
                },
                {
                    name: 'lpMint';
                    writable: true;
                },
                {
                    name: 'tokenAMint';
                    writable: true;
                },
                {
                    name: 'tokenBMint';
                },
                {
                    name: 'aVault';
                    writable: true;
                },
                {
                    name: 'bVault';
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    writable: true;
                },
                {
                    name: 'aVaultLpMint';
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    writable: true;
                },
                {
                    name: 'bVaultLp';
                    writable: true;
                },
                {
                    name: 'baseVault';
                    writable: true;
                    relations: ['virtualPool'];
                },
                {
                    name: 'quoteVault';
                    writable: true;
                    relations: ['virtualPool'];
                },
                {
                    name: 'virtualPoolLp';
                    writable: true;
                },
                {
                    name: 'protocolTokenAFee';
                    writable: true;
                },
                {
                    name: 'protocolTokenBFee';
                    writable: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'rent';
                },
                {
                    name: 'mintMetadata';
                    writable: true;
                },
                {
                    name: 'metadataProgram';
                },
                {
                    name: 'ammProgram';
                    address: 'Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB';
                },
                {
                    name: 'vaultProgram';
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'associatedTokenProgram';
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [];
        },
        {
            name: 'migrateMeteoraDammClaimLpToken';
            docs: ['Accepts: VirtualPool only.'];
            discriminator: [139, 133, 2, 30, 91, 145, 127, 154];
            accounts: [
                {
                    name: 'virtualPool';
                    relations: ['migrationMetadata'];
                },
                {
                    name: 'migrationMetadata';
                    docs: ['migration metadata'];
                    writable: true;
                },
                {
                    name: 'poolAuthority';
                    writable: true;
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'lpMint';
                    relations: ['migrationMetadata'];
                },
                {
                    name: 'sourceToken';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'poolAuthority';
                            },
                            {
                                kind: 'const';
                                value: [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'migrationMetadata';
                            }
                        ];
                        program: {
                            kind: 'const';
                            value: [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ];
                        };
                    };
                },
                {
                    name: 'destinationToken';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'owner';
                            },
                            {
                                kind: 'const';
                                value: [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'migrationMetadata';
                            }
                        ];
                        program: {
                            kind: 'const';
                            value: [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ];
                        };
                    };
                },
                {
                    name: 'owner';
                },
                {
                    name: 'sender';
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [];
        },
        {
            name: 'migrateMeteoraDammLockLpToken';
            docs: ['Accepts: VirtualPool only.'];
            discriminator: [177, 55, 238, 157, 251, 88, 165, 42];
            accounts: [
                {
                    name: 'virtualPool';
                    relations: ['migrationMetadata'];
                },
                {
                    name: 'migrationMetadata';
                    docs: ['migrationMetadata'];
                    writable: true;
                },
                {
                    name: 'poolAuthority';
                    writable: true;
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'pool';
                    writable: true;
                    relations: ['lockEscrow'];
                },
                {
                    name: 'lpMint';
                    relations: ['migrationMetadata'];
                },
                {
                    name: 'lockEscrow';
                    writable: true;
                },
                {
                    name: 'owner';
                    relations: ['lockEscrow'];
                },
                {
                    name: 'sourceTokens';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'poolAuthority';
                            },
                            {
                                kind: 'const';
                                value: [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'migrationMetadata';
                            }
                        ];
                        program: {
                            kind: 'const';
                            value: [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ];
                        };
                    };
                },
                {
                    name: 'escrowVault';
                    writable: true;
                },
                {
                    name: 'ammProgram';
                    address: 'Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB';
                },
                {
                    name: 'aVault';
                },
                {
                    name: 'bVault';
                },
                {
                    name: 'aVaultLp';
                },
                {
                    name: 'bVaultLp';
                },
                {
                    name: 'aVaultLpMint';
                },
                {
                    name: 'bVaultLpMint';
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [];
        },
        {
            name: 'migrationDammV2';
            docs: ['Accepts: VirtualPool or TransferHookPool.'];
            discriminator: [156, 169, 230, 103, 53, 228, 80, 64];
            accounts: [
                {
                    name: 'virtualPool';
                    writable: true;
                },
                {
                    name: 'migrationMetadata';
                },
                {
                    name: 'config';
                },
                {
                    name: 'poolAuthority';
                    writable: true;
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'firstPositionNftMint';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'firstPositionNftAccount';
                    writable: true;
                },
                {
                    name: 'firstPosition';
                    writable: true;
                },
                {
                    name: 'secondPositionNftMint';
                    writable: true;
                    signer: true;
                    optional: true;
                },
                {
                    name: 'secondPositionNftAccount';
                    writable: true;
                    optional: true;
                },
                {
                    name: 'secondPosition';
                    writable: true;
                    optional: true;
                },
                {
                    name: 'dammPoolAuthority';
                },
                {
                    name: 'ammProgram';
                    address: 'cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG';
                },
                {
                    name: 'baseMint';
                    writable: true;
                },
                {
                    name: 'quoteMint';
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    writable: true;
                },
                {
                    name: 'tokenBVault';
                    writable: true;
                },
                {
                    name: 'baseVault';
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    writable: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'tokenBaseProgram';
                },
                {
                    name: 'tokenQuoteProgram';
                },
                {
                    name: 'token2022Program';
                },
                {
                    name: 'dammEventAuthority';
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [];
        },
        {
            name: 'migrationDammV2CreateMetadata';
            docs: ['Accepts: VirtualPool or TransferHookPool.'];
            discriminator: [109, 189, 19, 36, 195, 183, 222, 82];
            accounts: [
                {
                    name: 'virtualPool';
                },
                {
                    name: 'config';
                },
                {
                    name: 'migrationMetadata';
                },
                {
                    name: 'payer';
                },
                {
                    name: 'systemProgram';
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'migrationMeteoraDammCreateMetadata';
            docs: ['Accepts: VirtualPool only.'];
            discriminator: [47, 94, 126, 115, 221, 226, 194, 133];
            accounts: [
                {
                    name: 'virtualPool';
                },
                {
                    name: 'config';
                    relations: ['virtualPool'];
                },
                {
                    name: 'migrationMetadata';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [109, 101, 116, 101, 111, 114, 97];
                            },
                            {
                                kind: 'account';
                                path: 'virtualPool';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'partnerWithdrawSurplus';
            docs: ['Accepts: VirtualPool or TransferHookPool.'];
            discriminator: [168, 173, 72, 100, 201, 98, 38, 92];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'config';
                },
                {
                    name: 'virtualPool';
                    writable: true;
                },
                {
                    name: 'tokenQuoteAccount';
                    docs: ['The receiver token account'];
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                },
                {
                    name: 'quoteMint';
                    docs: ['The mint of quote token'];
                },
                {
                    name: 'feeClaimer';
                    signer: true;
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'swap';
            docs: ['TRADING BOTS FUNCTIONS ////', 'Accepts: VirtualPool only.'];
            discriminator: [248, 198, 158, 145, 225, 117, 135, 200];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'config';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'inputTokenAccount';
                    docs: ['The user token account for input token'];
                    writable: true;
                },
                {
                    name: 'outputTokenAccount';
                    docs: ['The user token account for output token'];
                    writable: true;
                },
                {
                    name: 'baseVault';
                    docs: ['The vault token account for base token'];
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    docs: ['The vault token account for quote token'];
                    writable: true;
                },
                {
                    name: 'baseMint';
                    docs: ['The mint of base token'];
                },
                {
                    name: 'quoteMint';
                    docs: ['The mint of quote token'];
                },
                {
                    name: 'payer';
                    docs: ['The user performing the swap'];
                    signer: true;
                },
                {
                    name: 'tokenBaseProgram';
                    docs: ['Token base program'];
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Token quote program'];
                },
                {
                    name: 'referralTokenAccount';
                    docs: ['referral token account'];
                    writable: true;
                    optional: true;
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'swapParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'swap2';
            docs: ['Accepts: VirtualPool only.'];
            discriminator: [65, 75, 63, 76, 235, 91, 91, 136];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'config';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'inputTokenAccount';
                    docs: ['The user token account for input token'];
                    writable: true;
                },
                {
                    name: 'outputTokenAccount';
                    docs: ['The user token account for output token'];
                    writable: true;
                },
                {
                    name: 'baseVault';
                    docs: ['The vault token account for base token'];
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    docs: ['The vault token account for quote token'];
                    writable: true;
                },
                {
                    name: 'baseMint';
                    docs: ['The mint of base token'];
                },
                {
                    name: 'quoteMint';
                    docs: ['The mint of quote token'];
                },
                {
                    name: 'payer';
                    docs: ['The user performing the swap'];
                    signer: true;
                },
                {
                    name: 'tokenBaseProgram';
                    docs: ['Token base program'];
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Token quote program'];
                },
                {
                    name: 'referralTokenAccount';
                    docs: ['referral token account'];
                    writable: true;
                    optional: true;
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'swapParameters2';
                        };
                    };
                }
            ];
        },
        {
            name: 'swap2WithTransferHook';
            docs: ['Accepts: TransferHookPool only.'];
            discriminator: [183, 93, 153, 40, 24, 230, 194, 151];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'config';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'inputTokenAccount';
                    docs: ['The user token account for input token'];
                    writable: true;
                },
                {
                    name: 'outputTokenAccount';
                    docs: ['The user token account for output token'];
                    writable: true;
                },
                {
                    name: 'baseVault';
                    docs: ['The vault token account for base token'];
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    docs: ['The vault token account for quote token'];
                    writable: true;
                },
                {
                    name: 'baseMint';
                    docs: [
                        'The mint of base token',
                        'must be mutable so we can revoke the transfer hook after the last swap is performed'
                    ];
                    writable: true;
                },
                {
                    name: 'quoteMint';
                    docs: ['The mint of quote token'];
                },
                {
                    name: 'payer';
                    docs: ['The user performing the swap'];
                    signer: true;
                },
                {
                    name: 'tokenBaseProgram';
                    docs: ['Token base program'];
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Token quote program'];
                },
                {
                    name: 'referralTokenAccount';
                    docs: ['referral token account'];
                    writable: true;
                    optional: true;
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'swapParameters2';
                        };
                    };
                },
                {
                    name: 'transferHookAccountsInfo';
                    type: {
                        defined: {
                            name: 'transferHookAccountsInfo';
                        };
                    };
                }
            ];
        },
        {
            name: 'transferPoolCreator';
            docs: ['Accepts: VirtualPool or TransferHookPool.'];
            discriminator: [20, 7, 169, 33, 58, 147, 166, 33];
            accounts: [
                {
                    name: 'virtualPool';
                    writable: true;
                },
                {
                    name: 'config';
                },
                {
                    name: 'creator';
                    signer: true;
                },
                {
                    name: 'newCreator';
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'virtualSwap2';
            docs: ['Accepts: VirtualPool only.'];
            discriminator: [227, 189, 120, 105, 163, 220, 191, 84];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'config';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'inputTokenAccount';
                    docs: ['The user token account for input token'];
                    writable: true;
                },
                {
                    name: 'outputTokenAccount';
                    docs: ['The user token account for output token'];
                    writable: true;
                },
                {
                    name: 'baseVault';
                    docs: ['The vault token account for base token'];
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    docs: ['The vault token account for quote token'];
                    writable: true;
                },
                {
                    name: 'baseMint';
                    docs: ['The mint of base token'];
                },
                {
                    name: 'quoteMint';
                    docs: ['The mint of quote token'];
                },
                {
                    name: 'payer';
                    docs: ['The user performing the swap'];
                    signer: true;
                },
                {
                    name: 'tokenBaseProgram';
                    docs: ['Token base program'];
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Token quote program'];
                },
                {
                    name: 'referralTokenAccount';
                    docs: ['referral token account'];
                    writable: true;
                    optional: true;
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'swapParameters2';
                        };
                    };
                }
            ];
        },
        {
            name: 'withdrawLeftover';
            docs: ['Accepts: VirtualPool or TransferHookPool.'];
            discriminator: [20, 198, 202, 237, 235, 243, 183, 66];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'config';
                },
                {
                    name: 'virtualPool';
                    writable: true;
                },
                {
                    name: 'tokenBaseAccount';
                    docs: ['The receiver token account, withdraw to ATA'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'leftoverReceiver';
                            },
                            {
                                kind: 'account';
                                path: 'tokenBaseProgram';
                            },
                            {
                                kind: 'account';
                                path: 'baseMint';
                            }
                        ];
                        program: {
                            kind: 'const';
                            value: [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ];
                        };
                    };
                },
                {
                    name: 'baseVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                },
                {
                    name: 'baseMint';
                    docs: ['The mint of quote token'];
                },
                {
                    name: 'leftoverReceiver';
                },
                {
                    name: 'tokenBaseProgram';
                    docs: ['Token base program'];
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'withdrawMigrationFee';
            docs: [
                'BOTH partner and creator FUNCTIONS ///',
                'Accepts: VirtualPool or TransferHookPool.'
            ];
            discriminator: [237, 142, 45, 23, 129, 6, 222, 162];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'config';
                },
                {
                    name: 'virtualPool';
                    writable: true;
                },
                {
                    name: 'tokenQuoteAccount';
                    docs: ['The receiver token account'];
                    writable: true;
                },
                {
                    name: 'quoteVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                },
                {
                    name: 'quoteMint';
                    docs: ['The mint of quote token'];
                },
                {
                    name: 'sender';
                    signer: true;
                },
                {
                    name: 'tokenQuoteProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'flag';
                    type: 'u8';
                }
            ];
        },
        {
            name: 'zapProtocolFee';
            docs: ['Accepts: VirtualPool only.'];
            discriminator: [213, 155, 187, 34, 56, 182, 91, 240];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio';
                },
                {
                    name: 'config';
                    relations: ['pool'];
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'tokenVault';
                    writable: true;
                },
                {
                    name: 'tokenMint';
                },
                {
                    name: 'receiverToken';
                    writable: true;
                },
                {
                    name: 'operator';
                    docs: ['zap claim fee operator'];
                },
                {
                    name: 'signer';
                    docs: ['operator'];
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program'];
                },
                {
                    name: 'sysvarInstructions';
                    address: 'Sysvar1nstructions1111111111111111111111111';
                }
            ];
            args: [
                {
                    name: 'maxAmount';
                    type: 'u64';
                }
            ];
        }
    ];
    accounts: [
        {
            name: 'claimFeeOperator';
            discriminator: [166, 48, 134, 86, 34, 200, 188, 150];
        },
        {
            name: 'configWithTransferHook';
            discriminator: [40, 220, 194, 251, 41, 199, 123, 253];
        },
        {
            name: 'meteoraDammMigrationMetadata';
            discriminator: [17, 155, 141, 215, 207, 4, 133, 156];
        },
        {
            name: 'operator';
            discriminator: [219, 31, 188, 145, 69, 139, 204, 117];
        },
        {
            name: 'partnerMetadata';
            discriminator: [68, 68, 130, 19, 16, 209, 98, 156];
        },
        {
            name: 'poolConfig';
            discriminator: [26, 108, 14, 123, 116, 230, 129, 43];
        },
        {
            name: 'transferHookPool';
            discriminator: [237, 219, 184, 23, 42, 189, 169, 35];
        },
        {
            name: 'virtualPool';
            discriminator: [213, 224, 5, 209, 98, 69, 119, 92];
        },
        {
            name: 'virtualPoolMetadata';
            discriminator: [217, 37, 82, 250, 43, 47, 228, 254];
        }
    ];
    events: [
        {
            name: 'evtClaimCreatorTradingFee';
            discriminator: [154, 228, 215, 202, 133, 155, 214, 138];
        },
        {
            name: 'evtClaimPoolCreationFee';
            discriminator: [149, 111, 149, 44, 136, 64, 175, 62];
        },
        {
            name: 'evtClaimProtocolFee';
            discriminator: [186, 244, 75, 251, 188, 13, 25, 33];
        },
        {
            name: 'evtClaimProtocolFee2';
            discriminator: [187, 133, 66, 9, 205, 161, 84, 13];
        },
        {
            name: 'evtClaimTradingFee';
            discriminator: [26, 83, 117, 240, 92, 202, 112, 254];
        },
        {
            name: 'evtCloseClaimFeeOperator';
            discriminator: [111, 39, 37, 55, 110, 216, 194, 23];
        },
        {
            name: 'evtCreateClaimFeeOperator';
            discriminator: [21, 6, 153, 120, 68, 116, 28, 177];
        },
        {
            name: 'evtCreateConfig';
            discriminator: [131, 207, 180, 174, 180, 73, 165, 54];
        },
        {
            name: 'evtCreateConfigV2';
            discriminator: [163, 74, 66, 187, 119, 195, 26, 144];
        },
        {
            name: 'evtCreateConfigV2WithTransferHook';
            discriminator: [182, 81, 135, 4, 39, 46, 132, 253];
        },
        {
            name: 'evtCreateMeteoraMigrationMetadata';
            discriminator: [99, 167, 133, 63, 214, 143, 175, 139];
        },
        {
            name: 'evtCreatorWithdrawSurplus';
            discriminator: [152, 73, 21, 15, 66, 87, 53, 157];
        },
        {
            name: 'evtCurveComplete';
            discriminator: [229, 231, 86, 84, 156, 134, 75, 24];
        },
        {
            name: 'evtCurveCompleteWithTransferHook';
            discriminator: [59, 47, 109, 205, 13, 31, 44, 159];
        },
        {
            name: 'evtInitializePool';
            discriminator: [228, 50, 246, 85, 203, 66, 134, 37];
        },
        {
            name: 'evtInitializePoolWithTransferHook';
            discriminator: [213, 137, 164, 53, 193, 74, 15, 110];
        },
        {
            name: 'evtPartnerClaimPoolCreationFee';
            discriminator: [174, 223, 44, 150, 145, 98, 89, 195];
        },
        {
            name: 'evtPartnerMetadata';
            discriminator: [200, 127, 6, 55, 13, 32, 8, 150];
        },
        {
            name: 'evtPartnerWithdrawSurplus';
            discriminator: [195, 56, 152, 9, 232, 72, 35, 22];
        },
        {
            name: 'evtSwap';
            discriminator: [27, 60, 21, 213, 138, 170, 187, 147];
        },
        {
            name: 'evtSwap2';
            discriminator: [189, 66, 51, 168, 38, 80, 117, 153];
        },
        {
            name: 'evtSwap2WithTransferHook';
            discriminator: [134, 59, 168, 120, 94, 51, 114, 231];
        },
        {
            name: 'evtUpdatePoolCreator';
            discriminator: [107, 225, 165, 237, 91, 158, 213, 220];
        },
        {
            name: 'evtVirtualPoolMetadata';
            discriminator: [188, 18, 72, 76, 195, 91, 38, 74];
        },
        {
            name: 'evtWithdrawLeftover';
            discriminator: [191, 189, 104, 143, 111, 156, 94, 229];
        },
        {
            name: 'evtWithdrawMigrationFee';
            discriminator: [26, 203, 84, 85, 161, 23, 100, 214];
        }
    ];
    errors: [
        {
            code: 6000;
            name: 'mathOverflow';
            msg: 'Math operation overflow';
        },
        {
            code: 6001;
            name: 'invalidFee';
            msg: 'Invalid fee setup';
        },
        {
            code: 6002;
            name: 'exceededSlippage';
            msg: 'Exceeded slippage tolerance';
        },
        {
            code: 6003;
            name: 'exceedMaxFeeBps';
            msg: 'Exceeded max fee bps';
        },
        {
            code: 6004;
            name: 'invalidAdmin';
            msg: 'Invalid admin';
        },
        {
            code: 6005;
            name: 'amountIsZero';
            msg: 'Amount is zero';
        },
        {
            code: 6006;
            name: 'typeCastFailed';
            msg: 'Type cast error';
        },
        {
            code: 6007;
            name: 'invalidActivationType';
            msg: 'Invalid activation type';
        },
        {
            code: 6008;
            name: 'invalidQuoteMint';
            msg: 'Invalid quote mint';
        },
        {
            code: 6009;
            name: 'invalidCollectFeeMode';
            msg: 'Invalid collect fee mode';
        },
        {
            code: 6010;
            name: 'invalidMigrationFeeOption';
            msg: 'Invalid migration fee option';
        },
        {
            code: 6011;
            name: 'invalidInput';
            msg: 'Invalid input';
        },
        {
            code: 6012;
            name: 'notEnoughLiquidity';
            msg: 'Not enough liquidity';
        },
        {
            code: 6013;
            name: 'poolIsCompleted';
            msg: 'Pool is completed';
        },
        {
            code: 6014;
            name: 'poolIsIncompleted';
            msg: 'Pool is incompleted';
        },
        {
            code: 6015;
            name: 'invalidMigrationOption';
            msg: 'Invalid migration option';
        },
        {
            code: 6016;
            name: 'invalidTokenDecimals';
            msg: 'Invalid token decimals';
        },
        {
            code: 6017;
            name: 'invalidTokenType';
            msg: 'Invalid token type';
        },
        {
            code: 6018;
            name: 'invalidFeePercentage';
            msg: 'Invalid fee percentage';
        },
        {
            code: 6019;
            name: 'invalidQuoteThreshold';
            msg: 'Invalid quote threshold';
        },
        {
            code: 6020;
            name: 'invalidTokenSupply';
            msg: 'Invalid token supply';
        },
        {
            code: 6021;
            name: 'invalidCurve';
            msg: 'Invalid curve';
        },
        {
            code: 6022;
            name: 'notPermitToDoThisAction';
            msg: 'Not permit to do this action';
        },
        {
            code: 6023;
            name: 'invalidOwnerAccount';
            msg: 'Invalid owner account';
        },
        {
            code: 6024;
            name: 'invalidConfigAccount';
            msg: 'Invalid config account';
        },
        {
            code: 6025;
            name: 'surplusHasBeenWithdraw';
            msg: 'Surplus has been withdraw';
        },
        {
            code: 6026;
            name: 'leftoverHasBeenWithdraw';
            msg: 'Leftover has been withdraw';
        },
        {
            code: 6027;
            name: 'totalBaseTokenExceedMaxSupply';
            msg: 'Total base token is exceeded max supply';
        },
        {
            code: 6028;
            name: 'unsupportNativeMintToken2022';
            msg: 'Unsupport native mint token 2022';
        },
        {
            code: 6029;
            name: 'insufficientLiquidityForMigration';
            msg: 'Insufficient liquidity for migration';
        },
        {
            code: 6030;
            name: 'missingPoolConfigInRemainingAccount';
            msg: 'Missing pool config in remaining account';
        },
        {
            code: 6031;
            name: 'invalidVestingParameters';
            msg: 'Invalid vesting parameters';
        },
        {
            code: 6032;
            name: 'invalidLeftoverAddress';
            msg: 'Invalid leftover address';
        },
        {
            code: 6033;
            name: 'insufficientLiquidity';
            msg: 'Liquidity in bonding curve is insufficient';
        },
        {
            code: 6034;
            name: 'invalidFeeScheduler';
            msg: 'Invalid fee scheduler';
        },
        {
            code: 6035;
            name: 'invalidCreatorTradingFeePercentage';
            msg: 'Invalid creator trading fee percentage';
        },
        {
            code: 6036;
            name: 'invalidNewCreator';
            msg: 'Invalid new creator';
        },
        {
            code: 6037;
            name: 'invalidTokenAuthorityOption';
            msg: 'Invalid token authority option';
        },
        {
            code: 6038;
            name: 'invalidAccount';
            msg: 'Invalid account for the instruction';
        },
        {
            code: 6039;
            name: 'invalidMigratorFeePercentage';
            msg: 'Invalid migrator fee percentage';
        },
        {
            code: 6040;
            name: 'migrationFeeHasBeenWithdraw';
            msg: 'Migration fee has been withdraw';
        },
        {
            code: 6041;
            name: 'invalidBaseFeeMode';
            msg: 'Invalid base fee mode';
        },
        {
            code: 6042;
            name: 'invalidFeeRateLimiter';
            msg: 'Invalid fee rate limiter';
        },
        {
            code: 6043;
            name: 'failToValidateSingleSwapInstruction';
            msg: 'Fail to validate single swap instruction in rate limiter';
        },
        {
            code: 6044;
            name: 'invalidMigratedPoolFee';
            msg: 'Invalid migrated pool fee params';
        },
        {
            code: 6045;
            name: 'undeterminedError';
            msg: 'Undertermined error';
        },
        {
            code: 6046;
            name: 'rateLimiterNotSupported';
            msg: 'Rate limiter not supported';
        },
        {
            code: 6047;
            name: 'amountLeftIsNotZero';
            msg: 'Amount left is not zero';
        },
        {
            code: 6048;
            name: 'nextSqrtPriceIsSmallerThanStartSqrtPrice';
            msg: 'Next sqrt price is smaller than start sqrt price';
        },
        {
            code: 6049;
            name: 'invalidMinBaseFee';
            msg: 'Invalid min base fee';
        },
        {
            code: 6050;
            name: 'accountInvariantViolation';
            msg: 'Account invariant violation';
        },
        {
            code: 6051;
            name: 'invalidPoolCreationFee';
            msg: 'Invalid pool creation fee';
        },
        {
            code: 6052;
            name: 'poolCreationFeeHasBeenClaimed';
            msg: 'Pool creation fee has been claimed';
        },
        {
            code: 6053;
            name: 'unauthorized';
            msg: 'Not permit to do this action';
        },
        {
            code: 6054;
            name: 'zeroPoolCreationFee';
            msg: 'Pool creation fee is zero';
        },
        {
            code: 6055;
            name: 'invalidMigrationLockedLiquidity';
            msg: 'Invalid migration locked liquidity';
        },
        {
            code: 6056;
            name: 'invalidFeeMarketCapScheduler';
            msg: 'Invalid fee market cap scheduler';
        },
        {
            code: 6057;
            name: 'firstSwapValidationFailed';
            msg: 'Fail to validate first swap with minimum fee';
        },
        {
            code: 6058;
            name: 'incorrectAta';
            msg: 'Incorrect ATA';
        },
        {
            code: 6059;
            name: 'insufficientPoolLamports';
            msg: 'Pool has insufficient lamports to perform the operation';
        },
        {
            code: 6060;
            name: 'invalidPermission';
            msg: 'Invalid permission';
        },
        {
            code: 6061;
            name: 'invalidWithdrawProtocolFeeZapAccounts';
            msg: 'Invalid withdraw protocol fee zap accounts';
        },
        {
            code: 6062;
            name: 'mintRestrictedFromZap';
            msg: 'SOL,USDC protocol fee cannot be withdrawn via zap';
        },
        {
            code: 6063;
            name: 'invalidZapOutParameters';
            msg: 'Invalid zap out parameters';
        },
        {
            code: 6064;
            name: 'cpiDisabled';
            msg: 'CPI disabled';
        },
        {
            code: 6065;
            name: 'missingZapOutInstruction';
            msg: 'Missing zap out instruction';
        },
        {
            code: 6066;
            name: 'invalidZapAccounts';
            msg: 'Invalid zap accounts';
        },
        {
            code: 6067;
            name: 'invalidCompoundingParameters';
            msg: 'Invalid compounding parameters';
        },
        {
            code: 6068;
            name: 'invalidClaimProtocolFeeAccounts';
            msg: 'Invalid claim protocol fee accounts';
        },
        {
            code: 6069;
            name: 'invalidInstructionsSysvar';
            msg: 'Invalid instructions sysvar account';
        },
        {
            code: 6070;
            name: 'invalidRemainingAccountsLength';
            msg: 'Invalid remaining accounts length';
        },
        {
            code: 6071;
            name: 'missingRemainingAccountForTransferHook';
            msg: 'Missing remaining account for transfer hook';
        },
        {
            code: 6072;
            name: 'noTransferHookProgram';
            msg: 'No transfer hook program';
        },
        {
            code: 6073;
            name: 'duplicatedRemainingAccountTypes';
            msg: 'Duplicated remaining account types';
        },
        {
            code: 6074;
            name: 'invalidTransferHookProgram';
            msg: 'Invalid transfer hook program';
        },
        {
            code: 6075;
            name: 'invalidPoolAccount';
            msg: 'Invalid pool account';
        },
        {
            code: 6076;
            name: 'poolTypeMismatch';
            msg: 'Pool type does not match instruction';
        },
        {
            code: 6077;
            name: 'invalidRemainingAccountSliceType';
            msg: 'Invalid remaining account slice type for this instruction';
        },
        {
            code: 6078;
            name: 'sellDisabled';
            msg: 'Sells are disabled on this curve';
        },
        {
            code: 6079;
            name: 'invalidDeadlineTimestamp';
            msg: 'Invalid deadline timestamp';
        }
    ];
    types: [
        {
            name: 'accountsType';
            repr: {
                kind: 'rust';
            };
            type: {
                kind: 'enum';
                variants: [
                    {
                        name: 'transferHookBase';
                    },
                    {
                        name: 'transferHookBaseReferral';
                    }
                ];
            };
        },
        {
            name: 'baseFeeConfig';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'secondFactor';
                        type: 'u64';
                    },
                    {
                        name: 'thirdFactor';
                        type: 'u64';
                    },
                    {
                        name: 'firstFactor';
                        type: 'u16';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'padding0';
                        type: {
                            array: ['u8', 5];
                        };
                    }
                ];
            };
        },
        {
            name: 'baseFeeParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'firstFactor';
                        type: 'u16';
                    },
                    {
                        name: 'secondFactor';
                        type: 'u64';
                    },
                    {
                        name: 'thirdFactor';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'claimFeeOperator';
            docs: ['Parameter that set by the protocol'];
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'operator';
                        docs: ['operator'];
                        type: 'pubkey';
                    },
                    {
                        name: 'padding';
                        docs: ['Reserve'];
                        type: {
                            array: ['u8', 128];
                        };
                    }
                ];
            };
        },
        {
            name: 'config';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolFees';
                        type: {
                            defined: {
                                name: 'poolFees';
                            };
                        };
                    },
                    {
                        name: 'activationDuration';
                        type: 'u64';
                    },
                    {
                        name: 'vaultConfigKey';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreatorAuthority';
                        type: 'pubkey';
                    },
                    {
                        name: 'activationType';
                        type: 'u8';
                    },
                    {
                        name: 'partnerFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 219];
                        };
                    }
                ];
            };
        },
        {
            name: 'configParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolFees';
                        type: {
                            defined: {
                                name: 'poolFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'collectFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'migrationOption';
                        type: 'u8';
                    },
                    {
                        name: 'activationType';
                        type: 'u8';
                    },
                    {
                        name: 'tokenType';
                        type: 'u8';
                    },
                    {
                        name: 'tokenDecimal';
                        type: 'u8';
                    },
                    {
                        name: 'partnerLiquidityPercentage';
                        type: 'u8';
                    },
                    {
                        name: 'partnerPermanentLockedLiquidityPercentage';
                        type: 'u8';
                    },
                    {
                        name: 'creatorLiquidityPercentage';
                        type: 'u8';
                    },
                    {
                        name: 'creatorPermanentLockedLiquidityPercentage';
                        type: 'u8';
                    },
                    {
                        name: 'migrationQuoteThreshold';
                        type: 'u64';
                    },
                    {
                        name: 'migrationQuoteAmountCap';
                        type: 'u64';
                    },
                    {
                        name: 'sqrtStartPrice';
                        type: 'u128';
                    },
                    {
                        name: 'lockedVesting';
                        type: {
                            defined: {
                                name: 'lockedVestingParams';
                            };
                        };
                    },
                    {
                        name: 'migrationFeeOption';
                        type: 'u8';
                    },
                    {
                        name: 'tokenSupply';
                        type: {
                            option: {
                                defined: {
                                    name: 'tokenSupplyParams';
                                };
                            };
                        };
                    },
                    {
                        name: 'creatorTradingFeePercentage';
                        type: 'u8';
                    },
                    {
                        name: 'tokenUpdateAuthority';
                        type: 'u8';
                    },
                    {
                        name: 'migrationFee';
                        type: {
                            defined: {
                                name: 'migrationFee';
                            };
                        };
                    },
                    {
                        name: 'migratedPoolFee';
                        type: {
                            defined: {
                                name: 'migratedPoolFee';
                            };
                        };
                    },
                    {
                        name: 'poolCreationFee';
                        docs: ['pool creation fee in SOL lamports value'];
                        type: 'u64';
                    },
                    {
                        name: 'partnerLiquidityVestingInfo';
                        type: {
                            defined: {
                                name: 'liquidityVestingInfoParams';
                            };
                        };
                    },
                    {
                        name: 'creatorLiquidityVestingInfo';
                        type: {
                            defined: {
                                name: 'liquidityVestingInfoParams';
                            };
                        };
                    },
                    {
                        name: 'migratedPoolBaseFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'migratedPoolMarketCapFeeSchedulerParams';
                        type: {
                            defined: {
                                name: 'migratedPoolMarketCapFeeSchedulerParams';
                            };
                        };
                    },
                    {
                        name: 'enableFirstSwapWithMinFee';
                        type: 'bool';
                    },
                    {
                        name: 'compoundingFeeBps';
                        type: 'u16';
                    },
                    {
                        name: 'padding';
                        docs: ['padding for future use'];
                        type: {
                            array: ['u8', 2];
                        };
                    },
                    {
                        name: 'curve';
                        type: {
                            vec: {
                                defined: {
                                    name: 'liquidityDistributionParameters';
                                };
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'configWithTransferHook';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'config';
                        type: {
                            defined: {
                                name: 'poolConfig';
                            };
                        };
                    },
                    {
                        name: 'transferHookProgram';
                        type: 'pubkey';
                    },
                    {
                        name: 'padding0';
                        type: {
                            array: ['u64', 6];
                        };
                    }
                ];
            };
        },
        {
            name: 'createPartnerMetadataParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 96];
                        };
                    },
                    {
                        name: 'name';
                        type: 'string';
                    },
                    {
                        name: 'website';
                        type: 'string';
                    },
                    {
                        name: 'logo';
                        type: 'string';
                    }
                ];
            };
        },
        {
            name: 'createVirtualPoolMetadataParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 96];
                        };
                    },
                    {
                        name: 'name';
                        type: 'string';
                    },
                    {
                        name: 'website';
                        type: 'string';
                    },
                    {
                        name: 'logo';
                        type: 'string';
                    }
                ];
            };
        },
        {
            name: 'dynamicFeeConfig';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'initialized';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 7];
                        };
                    },
                    {
                        name: 'maxVolatilityAccumulator';
                        type: 'u32';
                    },
                    {
                        name: 'variableFeeControl';
                        type: 'u32';
                    },
                    {
                        name: 'binStep';
                        type: 'u16';
                    },
                    {
                        name: 'filterPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'decayPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u16';
                    },
                    {
                        name: 'padding2';
                        type: {
                            array: ['u8', 8];
                        };
                    },
                    {
                        name: 'binStepU128';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'dynamicFeeParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'binStep';
                        type: 'u16';
                    },
                    {
                        name: 'binStepU128';
                        type: 'u128';
                    },
                    {
                        name: 'filterPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'decayPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u16';
                    },
                    {
                        name: 'maxVolatilityAccumulator';
                        type: 'u32';
                    },
                    {
                        name: 'variableFeeControl';
                        type: 'u32';
                    }
                ];
            };
        },
        {
            name: 'evtClaimCreatorTradingFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenBaseAmount';
                        type: 'u64';
                    },
                    {
                        name: 'tokenQuoteAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtClaimPoolCreationFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'receiver';
                        type: 'pubkey';
                    },
                    {
                        name: 'creationFee';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtClaimProtocolFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenBaseAmount';
                        type: 'u64';
                    },
                    {
                        name: 'tokenQuoteAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtClaimProtocolFee2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'receiverTokenAccount';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'amount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtClaimTradingFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenBaseAmount';
                        type: 'u64';
                    },
                    {
                        name: 'tokenQuoteAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtCloseClaimFeeOperator';
            docs: ['Close claim fee operator'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'claimFeeOperator';
                        type: 'pubkey';
                    },
                    {
                        name: 'operator';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtCreateClaimFeeOperator';
            docs: ['Create claim fee operator'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'operator';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtCreateConfig';
            docs: ['Create config'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'config';
                        type: 'pubkey';
                    },
                    {
                        name: 'quoteMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'feeClaimer';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolFees';
                        type: {
                            defined: {
                                name: 'poolFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'collectFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'migrationOption';
                        type: 'u8';
                    },
                    {
                        name: 'activationType';
                        type: 'u8';
                    },
                    {
                        name: 'tokenDecimal';
                        type: 'u8';
                    },
                    {
                        name: 'tokenType';
                        type: 'u8';
                    },
                    {
                        name: 'partnerPermanentLockedLiquidityPercentage';
                        type: 'u8';
                    },
                    {
                        name: 'partnerLiquidityPercentage';
                        type: 'u8';
                    },
                    {
                        name: 'creatorPermanentLockedLiquidityPercentage';
                        type: 'u8';
                    },
                    {
                        name: 'creatorLiquidityPercentage';
                        type: 'u8';
                    },
                    {
                        name: 'swapBaseAmount';
                        type: 'u64';
                    },
                    {
                        name: 'migrationQuoteThreshold';
                        type: 'u64';
                    },
                    {
                        name: 'migrationBaseAmount';
                        type: 'u64';
                    },
                    {
                        name: 'sqrtStartPrice';
                        type: 'u128';
                    },
                    {
                        name: 'lockedVesting';
                        type: {
                            defined: {
                                name: 'lockedVestingParams';
                            };
                        };
                    },
                    {
                        name: 'migrationFeeOption';
                        type: 'u8';
                    },
                    {
                        name: 'fixedTokenSupplyFlag';
                        type: 'u8';
                    },
                    {
                        name: 'preMigrationTokenSupply';
                        type: 'u64';
                    },
                    {
                        name: 'postMigrationTokenSupply';
                        type: 'u64';
                    },
                    {
                        name: 'curve';
                        type: {
                            vec: {
                                defined: {
                                    name: 'liquidityDistributionParameters';
                                };
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'evtCreateConfigV2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'config';
                        type: 'pubkey';
                    },
                    {
                        name: 'quoteMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'feeClaimer';
                        type: 'pubkey';
                    },
                    {
                        name: 'leftoverReceiver';
                        type: 'pubkey';
                    },
                    {
                        name: 'configParameters';
                        type: {
                            defined: {
                                name: 'configParameters';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'evtCreateConfigV2WithTransferHook';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'config';
                        type: 'pubkey';
                    },
                    {
                        name: 'quoteMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'feeClaimer';
                        type: 'pubkey';
                    },
                    {
                        name: 'leftoverReceiver';
                        type: 'pubkey';
                    },
                    {
                        name: 'configParameters';
                        type: {
                            defined: {
                                name: 'configParameters';
                            };
                        };
                    },
                    {
                        name: 'transferHookProgram';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtCreateMeteoraMigrationMetadata';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'virtualPool';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtCreatorWithdrawSurplus';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'surplusAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtCurveComplete';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'config';
                        type: 'pubkey';
                    },
                    {
                        name: 'baseReserve';
                        type: 'u64';
                    },
                    {
                        name: 'quoteReserve';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtCurveCompleteWithTransferHook';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'config';
                        type: 'pubkey';
                    },
                    {
                        name: 'baseReserve';
                        type: 'u64';
                    },
                    {
                        name: 'quoteReserve';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtInitializePool';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'config';
                        type: 'pubkey';
                    },
                    {
                        name: 'creator';
                        type: 'pubkey';
                    },
                    {
                        name: 'baseMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolType';
                        type: 'u8';
                    },
                    {
                        name: 'activationPoint';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtInitializePoolWithTransferHook';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'config';
                        type: 'pubkey';
                    },
                    {
                        name: 'creator';
                        type: 'pubkey';
                    },
                    {
                        name: 'baseMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolType';
                        type: 'u8';
                    },
                    {
                        name: 'activationPoint';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtPartnerClaimPoolCreationFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'partner';
                        type: 'pubkey';
                    },
                    {
                        name: 'creationFee';
                        type: 'u64';
                    },
                    {
                        name: 'feeReceiver';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtPartnerMetadata';
            docs: ['Create partner metadata'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'partnerMetadata';
                        type: 'pubkey';
                    },
                    {
                        name: 'feeClaimer';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtPartnerWithdrawSurplus';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'surplusAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtSwap';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'config';
                        type: 'pubkey';
                    },
                    {
                        name: 'tradeDirection';
                        type: 'u8';
                    },
                    {
                        name: 'hasReferral';
                        type: 'bool';
                    },
                    {
                        name: 'params';
                        type: {
                            defined: {
                                name: 'swapParameters';
                            };
                        };
                    },
                    {
                        name: 'swapResult';
                        type: {
                            defined: {
                                name: 'swapResult';
                            };
                        };
                    },
                    {
                        name: 'amountIn';
                        type: 'u64';
                    },
                    {
                        name: 'currentTimestamp';
                        type: 'u64';
                    },
                    {
                        name: 'isVirtual';
                        type: 'bool';
                    },
                    {
                        name: 'payer';
                        type: 'pubkey';
                    },
                    {
                        name: 'recipient';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtSwap2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'config';
                        type: 'pubkey';
                    },
                    {
                        name: 'tradeDirection';
                        type: 'u8';
                    },
                    {
                        name: 'hasReferral';
                        type: 'bool';
                    },
                    {
                        name: 'swapParameters';
                        type: {
                            defined: {
                                name: 'swapParameters2';
                            };
                        };
                    },
                    {
                        name: 'swapResult';
                        type: {
                            defined: {
                                name: 'swapResult2';
                            };
                        };
                    },
                    {
                        name: 'quoteReserveAmount';
                        type: 'u64';
                    },
                    {
                        name: 'migrationThreshold';
                        type: 'u64';
                    },
                    {
                        name: 'currentTimestamp';
                        type: 'u64';
                    },
                    {
                        name: 'isVirtual';
                        type: 'bool';
                    },
                    {
                        name: 'payer';
                        type: 'pubkey';
                    },
                    {
                        name: 'recipient';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtSwap2WithTransferHook';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'config';
                        type: 'pubkey';
                    },
                    {
                        name: 'tradeDirection';
                        type: 'u8';
                    },
                    {
                        name: 'hasReferral';
                        type: 'bool';
                    },
                    {
                        name: 'swapParameters';
                        type: {
                            defined: {
                                name: 'swapParameters2';
                            };
                        };
                    },
                    {
                        name: 'swapResult';
                        type: {
                            defined: {
                                name: 'swapResult2';
                            };
                        };
                    },
                    {
                        name: 'quoteReserveAmount';
                        type: 'u64';
                    },
                    {
                        name: 'migrationThreshold';
                        type: 'u64';
                    },
                    {
                        name: 'currentTimestamp';
                        type: 'u64';
                    },
                    {
                        name: 'payer';
                        type: 'pubkey';
                    },
                    {
                        name: 'recipient';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtUpdatePoolCreator';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'creator';
                        type: 'pubkey';
                    },
                    {
                        name: 'newCreator';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtVirtualPoolMetadata';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'virtualPoolMetadata';
                        type: 'pubkey';
                    },
                    {
                        name: 'virtualPool';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtWithdrawLeftover';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'leftoverReceiver';
                        type: 'pubkey';
                    },
                    {
                        name: 'leftoverAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtWithdrawMigrationFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'fee';
                        type: 'u64';
                    },
                    {
                        name: 'flag';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'initializePoolParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'name';
                        type: 'string';
                    },
                    {
                        name: 'symbol';
                        type: 'string';
                    },
                    {
                        name: 'uri';
                        type: 'string';
                    },
                    {
                        name: 'deadlineTimestamp';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'liquidityDistributionConfig';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'sqrtPrice';
                        type: 'u128';
                    },
                    {
                        name: 'liquidity';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'liquidityDistributionParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'sqrtPrice';
                        type: 'u128';
                    },
                    {
                        name: 'liquidity';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'liquidityVestingInfo';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'isInitialized';
                        type: 'u8';
                    },
                    {
                        name: 'vestingPercentage';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 2];
                        };
                    },
                    {
                        name: 'bpsPerPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'numberOfPeriods';
                        type: 'u16';
                    },
                    {
                        name: 'frequency';
                        type: 'u32';
                    },
                    {
                        name: 'cliffDurationFromMigrationTime';
                        type: 'u32';
                    }
                ];
            };
        },
        {
            name: 'liquidityVestingInfoParams';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'vestingPercentage';
                        type: 'u8';
                    },
                    {
                        name: 'bpsPerPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'numberOfPeriods';
                        type: 'u16';
                    },
                    {
                        name: 'cliffDurationFromMigrationTime';
                        type: 'u32';
                    },
                    {
                        name: 'frequency';
                        type: 'u32';
                    }
                ];
            };
        },
        {
            name: 'lockEscrow';
            docs: ['State of lock escrow account'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'escrowVault';
                        type: 'pubkey';
                    },
                    {
                        name: 'bump';
                        type: 'u8';
                    },
                    {
                        name: 'totalLockedAmount';
                        type: 'u64';
                    },
                    {
                        name: 'lpPerToken';
                        type: 'u128';
                    },
                    {
                        name: 'unclaimedFeePending';
                        type: 'u64';
                    },
                    {
                        name: 'aFee';
                        type: 'u64';
                    },
                    {
                        name: 'bFee';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'lockedVestingConfig';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'amountPerPeriod';
                        type: 'u64';
                    },
                    {
                        name: 'cliffDurationFromMigrationTime';
                        type: 'u64';
                    },
                    {
                        name: 'frequency';
                        type: 'u64';
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u64';
                    },
                    {
                        name: 'cliffUnlockAmount';
                        type: 'u64';
                    },
                    {
                        name: 'padding';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'lockedVestingParams';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'amountPerPeriod';
                        type: 'u64';
                    },
                    {
                        name: 'cliffDurationFromMigrationTime';
                        type: 'u64';
                    },
                    {
                        name: 'frequency';
                        type: 'u64';
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u64';
                    },
                    {
                        name: 'cliffUnlockAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'meteoraDammMigrationMetadata';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'virtualPool';
                        docs: ['pool'];
                        type: 'pubkey';
                    },
                    {
                        name: 'padding0';
                        docs: [
                            '!!! BE CAREFUL to use tombstone field, previous is pool creator'
                        ];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'partner';
                        docs: ['partner'];
                        type: 'pubkey';
                    },
                    {
                        name: 'lpMint';
                        docs: ['lp mint'];
                        type: 'pubkey';
                    },
                    {
                        name: 'partnerLockedLiquidity';
                        docs: ['partner locked liquidity'];
                        type: 'u64';
                    },
                    {
                        name: 'partnerLiquidity';
                        docs: ['partner liquidity'];
                        type: 'u64';
                    },
                    {
                        name: 'creatorLockedLiquidity';
                        docs: ['creator locked liquidity'];
                        type: 'u64';
                    },
                    {
                        name: 'creatorLiquidity';
                        docs: ['creator liquidity'];
                        type: 'u64';
                    },
                    {
                        name: 'padding0';
                        docs: ['padding'];
                        type: 'u8';
                    },
                    {
                        name: 'creatorLockedStatus';
                        docs: [
                            'flag to check whether liquidity token is locked for creator'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'partnerLockedStatus';
                        docs: [
                            'flag to check whether liquidity token is locked for partner'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'creatorClaimStatus';
                        docs: [
                            'flag to check whether creator has claimed liquidity token'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'partnerClaimStatus';
                        docs: [
                            'flag to check whether partner has claimed liquidity token'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        docs: ['Reserve'];
                        type: {
                            array: ['u8', 107];
                        };
                    }
                ];
            };
        },
        {
            name: 'migratedPoolFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'collectFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'dynamicFee';
                        type: 'u8';
                    },
                    {
                        name: 'poolFeeBps';
                        type: 'u16';
                    }
                ];
            };
        },
        {
            name: 'migratedPoolMarketCapFeeSchedulerParams';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'sqrtPriceStepBps';
                        type: 'u16';
                    },
                    {
                        name: 'schedulerExpirationDuration';
                        type: 'u32';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'migrationFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'feePercentage';
                        type: 'u8';
                    },
                    {
                        name: 'creatorFeePercentage';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'operator';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'whitelistedAddress';
                        type: 'pubkey';
                    },
                    {
                        name: 'permission';
                        type: 'u128';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u64', 2];
                        };
                    }
                ];
            };
        },
        {
            name: 'partnerMetadata';
            docs: ['Metadata for a partner.'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'feeClaimer';
                        docs: ['fee claimer'];
                        type: 'pubkey';
                    },
                    {
                        name: 'padding';
                        docs: ['padding for future use'];
                        type: {
                            array: ['u128', 6];
                        };
                    },
                    {
                        name: 'name';
                        docs: ['Name of partner.'];
                        type: 'string';
                    },
                    {
                        name: 'website';
                        docs: ['Website of partner.'];
                        type: 'string';
                    },
                    {
                        name: 'logo';
                        docs: ['Logo of partner'];
                        type: 'string';
                    }
                ];
            };
        },
        {
            name: 'poolConfig';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'quoteMint';
                        docs: ['quote mint'];
                        type: 'pubkey';
                    },
                    {
                        name: 'feeClaimer';
                        docs: ['Address to get the fee'];
                        type: 'pubkey';
                    },
                    {
                        name: 'leftoverReceiver';
                        docs: [
                            'Address to receive extra base token after migration, in case token is fixed supply'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'poolFees';
                        docs: ['Pool fee'];
                        type: {
                            defined: {
                                name: 'poolFeesConfig';
                            };
                        };
                    },
                    {
                        name: 'partnerLiquidityVestingInfo';
                        type: {
                            defined: {
                                name: 'liquidityVestingInfo';
                            };
                        };
                    },
                    {
                        name: 'creatorLiquidityVestingInfo';
                        type: {
                            defined: {
                                name: 'liquidityVestingInfo';
                            };
                        };
                    },
                    {
                        name: 'migrationQuoteAmountCap';
                        docs: [
                            'fixed quote token amount to seed migration liquidity; zero uses migration_quote_threshold'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'padding0';
                        docs: ['Padding for future use'];
                        type: {
                            array: ['u8', 6];
                        };
                    },
                    {
                        name: 'padding1';
                        docs: [
                            'Previously was protocol and referral fee percent. Beware of tombstone.'
                        ];
                        type: 'u16';
                    },
                    {
                        name: 'collectFeeMode';
                        docs: ['Collect fee mode'];
                        type: 'u8';
                    },
                    {
                        name: 'migrationOption';
                        docs: ['migration option'];
                        type: 'u8';
                    },
                    {
                        name: 'activationType';
                        docs: ['whether mode slot or timestamp'];
                        type: 'u8';
                    },
                    {
                        name: 'tokenDecimal';
                        docs: ['token decimals'];
                        type: 'u8';
                    },
                    {
                        name: 'version';
                        docs: ['version'];
                        type: 'u8';
                    },
                    {
                        name: 'tokenType';
                        docs: ['token type of base token'];
                        type: 'u8';
                    },
                    {
                        name: 'quoteTokenFlag';
                        docs: ['quote token flag'];
                        type: 'u8';
                    },
                    {
                        name: 'partnerPermanentLockedLiquidityPercentage';
                        docs: ['partner locked liquidity percentage'];
                        type: 'u8';
                    },
                    {
                        name: 'partnerLiquidityPercentage';
                        docs: ['partner liquidity percentage'];
                        type: 'u8';
                    },
                    {
                        name: 'creatorPermanentLockedLiquidityPercentage';
                        docs: ['creator post migration fee percentage'];
                        type: 'u8';
                    },
                    {
                        name: 'creatorLiquidityPercentage';
                        docs: ['creator liquidity percentage'];
                        type: 'u8';
                    },
                    {
                        name: 'migrationFeeOption';
                        docs: ['migration fee option'];
                        type: 'u8';
                    },
                    {
                        name: 'fixedTokenSupplyFlag';
                        docs: [
                            'flag to indicate whether token is dynamic supply (0) or fixed supply (1)'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'creatorTradingFeePercentage';
                        docs: ['creator trading fee percentage'];
                        type: 'u8';
                    },
                    {
                        name: 'tokenUpdateAuthority';
                        docs: ['token update authority'];
                        type: 'u8';
                    },
                    {
                        name: 'migrationFeePercentage';
                        docs: ['migration fee percentage'];
                        type: 'u8';
                    },
                    {
                        name: 'creatorMigrationFeePercentage';
                        docs: ['creator migration fee percentage'];
                        type: 'u8';
                    },
                    {
                        name: 'padding2';
                        type: {
                            array: ['u8', 7];
                        };
                    },
                    {
                        name: 'swapBaseAmount';
                        docs: ['swap base amount'];
                        type: 'u64';
                    },
                    {
                        name: 'migrationQuoteThreshold';
                        docs: ['migration quote threshold (in quote token)'];
                        type: 'u64';
                    },
                    {
                        name: 'migrationBaseThreshold';
                        docs: ['migration base threshold (in base token)'];
                        type: 'u64';
                    },
                    {
                        name: 'migrationSqrtPrice';
                        docs: ['migration sqrt price'];
                        type: 'u128';
                    },
                    {
                        name: 'lockedVestingConfig';
                        docs: ['locked vesting config'];
                        type: {
                            defined: {
                                name: 'lockedVestingConfig';
                            };
                        };
                    },
                    {
                        name: 'preMigrationTokenSupply';
                        docs: ['pre migration token supply'];
                        type: 'u64';
                    },
                    {
                        name: 'postMigrationTokenSupply';
                        docs: ['post migration token supply'];
                        type: 'u64';
                    },
                    {
                        name: 'migratedCollectFeeMode';
                        docs: ['migrated pool collect fee mode'];
                        type: 'u8';
                    },
                    {
                        name: 'migratedDynamicFee';
                        docs: ['migrated dynamic fee option.'];
                        type: 'u8';
                    },
                    {
                        name: 'migratedPoolFeeBps';
                        docs: ['migrated pool fee in bps'];
                        type: 'u16';
                    },
                    {
                        name: 'migratedPoolBaseFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'enableFirstSwapWithMinFee';
                        type: 'u8';
                    },
                    {
                        name: 'migratedCompoundingFeeBps';
                        docs: [
                            'compounding fee bps for migrated DAMM v2 pool, should only be non-zero if migrated_collect_fee_mode is 2 (Compounding)'
                        ];
                        type: 'u16';
                    },
                    {
                        name: 'poolCreationFee';
                        docs: ['pool creation fee in lamports value'];
                        type: 'u64';
                    },
                    {
                        name: 'migratedPoolBaseFeeBytes';
                        docs: [
                            'serialized MigratedPoolMarketCapFeeSchedulerParams, only used when migrated_pool_base_fee_mode is market cap scheduler'
                        ];
                        type: {
                            array: ['u8', 16];
                        };
                    },
                    {
                        name: 'sqrtStartPrice';
                        docs: ['minimum price'];
                        type: 'u128';
                    },
                    {
                        name: 'curve';
                        docs: [
                            'curve, only use 20 point firstly, we can extend that latter'
                        ];
                        type: {
                            array: [
                                {
                                    defined: {
                                        name: 'liquidityDistributionConfig';
                                    };
                                },
                                20
                            ];
                        };
                    }
                ];
            };
        },
        {
            name: 'poolFeeParameters';
            docs: ['Information regarding fee charges'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'baseFee';
                        docs: ['Base fee'];
                        type: {
                            defined: {
                                name: 'baseFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'dynamicFee';
                        docs: ['dynamic fee'];
                        type: {
                            option: {
                                defined: {
                                    name: 'dynamicFeeParameters';
                                };
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'poolFees';
            docs: ['Information regarding fee charges'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tradeFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'tradeFeeDenominator';
                        type: 'u64';
                    },
                    {
                        name: 'protocolTradeFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'protocolTradeFeeDenominator';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'poolFeesConfig';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'baseFee';
                        type: {
                            defined: {
                                name: 'baseFeeConfig';
                            };
                        };
                    },
                    {
                        name: 'dynamicFee';
                        type: {
                            defined: {
                                name: 'dynamicFeeConfig';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'poolMetrics';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'totalProtocolBaseFee';
                        type: 'u64';
                    },
                    {
                        name: 'totalProtocolQuoteFee';
                        type: 'u64';
                    },
                    {
                        name: 'totalTradingBaseFee';
                        type: 'u64';
                    },
                    {
                        name: 'totalTradingQuoteFee';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'poolState';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'volatilityTracker';
                        docs: ['volatility tracker'];
                        type: {
                            defined: {
                                name: 'volatilityTracker';
                            };
                        };
                    },
                    {
                        name: 'config';
                        docs: ['config key'];
                        type: 'pubkey';
                    },
                    {
                        name: 'creator';
                        docs: ['creator'];
                        type: 'pubkey';
                    },
                    {
                        name: 'baseMint';
                        docs: ['base mint'];
                        type: 'pubkey';
                    },
                    {
                        name: 'baseVault';
                        docs: ['base vault'];
                        type: 'pubkey';
                    },
                    {
                        name: 'quoteVault';
                        docs: ['quote vault'];
                        type: 'pubkey';
                    },
                    {
                        name: 'baseReserve';
                        docs: ['base reserve'];
                        type: 'u64';
                    },
                    {
                        name: 'quoteReserve';
                        docs: ['quote reserve'];
                        type: 'u64';
                    },
                    {
                        name: 'protocolBaseFee';
                        docs: ['protocol base fee'];
                        type: 'u64';
                    },
                    {
                        name: 'protocolQuoteFee';
                        docs: ['protocol quote fee'];
                        type: 'u64';
                    },
                    {
                        name: 'partnerBaseFee';
                        docs: ['partner base fee'];
                        type: 'u64';
                    },
                    {
                        name: 'partnerQuoteFee';
                        docs: ['trading quote fee'];
                        type: 'u64';
                    },
                    {
                        name: 'sqrtPrice';
                        docs: ['current price'];
                        type: 'u128';
                    },
                    {
                        name: 'activationPoint';
                        docs: ['Activation point'];
                        type: 'u64';
                    },
                    {
                        name: 'poolType';
                        docs: ['pool type, spl token or token2022'];
                        type: 'u8';
                    },
                    {
                        name: 'isMigrated';
                        docs: ['is migrated'];
                        type: 'u8';
                    },
                    {
                        name: 'isPartnerWithdrawSurplus';
                        docs: ['is partner withdraw surplus'];
                        type: 'u8';
                    },
                    {
                        name: 'isProtocolWithdrawSurplus';
                        docs: ['is protocol withdraw surplus'];
                        type: 'u8';
                    },
                    {
                        name: 'migrationProgress';
                        docs: ['migration progress'];
                        type: 'u8';
                    },
                    {
                        name: 'isWithdrawLeftover';
                        docs: ['is withdraw leftover'];
                        type: 'u8';
                    },
                    {
                        name: 'isCreatorWithdrawSurplus';
                        docs: ['is creator withdraw surplus'];
                        type: 'u8';
                    },
                    {
                        name: 'migrationFeeWithdrawStatus';
                        docs: [
                            'migration fee withdraw status',
                            'bit 1 (0b010) creator',
                            'bit 2 (0b100) partner'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'metrics';
                        docs: ['pool metrics'];
                        type: {
                            defined: {
                                name: 'poolMetrics';
                            };
                        };
                    },
                    {
                        name: 'finishCurveTimestamp';
                        docs: ['The time curve is finished'];
                        type: 'u64';
                    },
                    {
                        name: 'creatorBaseFee';
                        docs: ['creator base fee'];
                        type: 'u64';
                    },
                    {
                        name: 'creatorQuoteFee';
                        docs: ['creator quote fee'];
                        type: 'u64';
                    },
                    {
                        name: 'legacyCreationFeeBits';
                        docs: ['legacy creation fee bits, we dont use this now'];
                        type: 'u8';
                    },
                    {
                        name: 'creationFeeBits';
                        docs: ['pool creation fee claim status'];
                        type: 'u8';
                    },
                    {
                        name: 'hasSwap';
                        docs: ['Cached flag'];
                        type: 'u8';
                    },
                    {
                        name: 'padding0';
                        docs: ['Padding for further use'];
                        type: {
                            array: ['u8', 5];
                        };
                    },
                    {
                        name: 'protocolLiquidityMigrationFeeBps';
                        type: 'u16';
                    },
                    {
                        name: 'padding1';
                        type: {
                            array: ['u8', 6];
                        };
                    },
                    {
                        name: 'protocolMigrationBaseFeeAmount';
                        type: 'u64';
                    },
                    {
                        name: 'protocolMigrationQuoteFeeAmount';
                        type: 'u64';
                    },
                    {
                        name: 'deadlineTimestamp';
                        docs: [
                            'Timestamp at which the sale can complete before the quote threshold is reached. 0 means disabled.'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'virtualQuoteReserve';
                        docs: [
                            'Virtual quote raised off-chain. Counts toward curve completion, but never funds migration.'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'padding2';
                        docs: ['Padding for further use'];
                        type: {
                            array: ['u64', 1];
                        };
                    }
                ];
            };
        },
        {
            name: 'remainingAccountsSlice';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'accountsType';
                        type: {
                            defined: {
                                name: 'accountsType';
                            };
                        };
                    },
                    {
                        name: 'length';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'swapParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'amountIn';
                        type: 'u64';
                    },
                    {
                        name: 'minimumAmountOut';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'swapParameters2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'amount0';
                        docs: [
                            "When it's exact in, partial fill, this will be amount_in. When it's exact out, this will be amount_out"
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'amount1';
                        docs: [
                            "When it's exact in, partial fill, this will be minimum_amount_out. When it's exact out, this will be maximum_amount_in"
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'swapMode';
                        docs: ['Swap mode, refer [SwapMode]'];
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'swapResult';
            docs: ['Encodes all results of swapping'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'actualInputAmount';
                        type: 'u64';
                    },
                    {
                        name: 'outputAmount';
                        type: 'u64';
                    },
                    {
                        name: 'nextSqrtPrice';
                        type: 'u128';
                    },
                    {
                        name: 'tradingFee';
                        type: 'u64';
                    },
                    {
                        name: 'protocolFee';
                        type: 'u64';
                    },
                    {
                        name: 'referralFee';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'swapResult2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'includedFeeInputAmount';
                        type: 'u64';
                    },
                    {
                        name: 'excludedFeeInputAmount';
                        type: 'u64';
                    },
                    {
                        name: 'amountLeft';
                        type: 'u64';
                    },
                    {
                        name: 'outputAmount';
                        type: 'u64';
                    },
                    {
                        name: 'nextSqrtPrice';
                        type: 'u128';
                    },
                    {
                        name: 'tradingFee';
                        type: 'u64';
                    },
                    {
                        name: 'protocolFee';
                        type: 'u64';
                    },
                    {
                        name: 'referralFee';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'tokenSupplyParams';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'preMigrationTokenSupply';
                        docs: ['pre migration token supply'];
                        type: 'u64';
                    },
                    {
                        name: 'postMigrationTokenSupply';
                        docs: [
                            'post migration token supply',
                            'because DBC allow user to swap over the migration quote threshold, so in extreme case user may swap more than allowed buffer on curve',
                            'that result the total supply in post migration may be increased a bit (between pre_migration_token_supply and post_migration_token_supply)'
                        ];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'transferHookAccountsInfo';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'slices';
                        type: {
                            vec: {
                                defined: {
                                    name: 'remainingAccountsSlice';
                                };
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'transferHookPool';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolState';
                        type: {
                            defined: {
                                name: 'poolState';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'virtualPool';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolState';
                        type: {
                            defined: {
                                name: 'poolState';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'virtualPoolMetadata';
            docs: ['Metadata for a virtual pool.'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'virtualPool';
                        docs: ['virtual pool'];
                        type: 'pubkey';
                    },
                    {
                        name: 'padding';
                        docs: ['padding for future use'];
                        type: {
                            array: ['u128', 6];
                        };
                    },
                    {
                        name: 'name';
                        docs: ['Name of project.'];
                        type: 'string';
                    },
                    {
                        name: 'website';
                        docs: ['Website of project.'];
                        type: 'string';
                    },
                    {
                        name: 'logo';
                        docs: ['Logo of project'];
                        type: 'string';
                    }
                ];
            };
        },
        {
            name: 'volatilityTracker';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lastUpdateTimestamp';
                        type: 'u64';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 8];
                        };
                    },
                    {
                        name: 'sqrtPriceReference';
                        type: 'u128';
                    },
                    {
                        name: 'volatilityAccumulator';
                        type: 'u128';
                    },
                    {
                        name: 'volatilityReference';
                        type: 'u128';
                    }
                ];
            };
        }
    ];
};

type DynamicCurveProgram = Program<DynamicBondingCurve>;
type CreateConfigAccounts = Accounts<DynamicBondingCurve['instructions']['10']>['createConfig'];
type CreateDammV1MigrationMetadataAccounts = Accounts<DynamicBondingCurve['instructions']['25']>['migrationMeteoraDammCreateMetadata'];
type InitializeSplPoolAccounts = Accounts<DynamicBondingCurve['instructions']['17']>['initializeVirtualPoolWithSplToken'];
type InitializeToken2022PoolAccounts = Accounts<DynamicBondingCurve['instructions']['18']>['initializeVirtualPoolWithToken2022'];
type ConfigParameters = IdlTypes<DynamicBondingCurve>['configParameters'];
type LockedVestingParameters = IdlTypes<DynamicBondingCurve>['lockedVestingParams'];
type InitializePoolParameters = IdlTypes<DynamicBondingCurve>['initializePoolParameters'];
type PoolFeeParameters = IdlTypes<DynamicBondingCurve>['poolFeeParameters'];
type DynamicFeeParameters = IdlTypes<DynamicBondingCurve>['dynamicFeeParameters'];
type LiquidityDistributionParameters = IdlTypes<DynamicBondingCurve>['liquidityDistributionParameters'];
type MigratedPoolMarketCapFeeSchedulerParameters = IdlTypes<DynamicBondingCurve>['migratedPoolMarketCapFeeSchedulerParams'];
type LiquidityVestingInfoParameters = IdlTypes<DynamicBondingCurve>['liquidityVestingInfoParams'];
type CreateVirtualPoolMetadataParameters = IdlTypes<DynamicBondingCurve>['createVirtualPoolMetadataParameters'];
type CreatePartnerMetadataParameters = IdlTypes<DynamicBondingCurve>['createPartnerMetadataParameters'];
type PoolFeesConfig = IdlTypes<DynamicBondingCurve>['poolFeesConfig'];
type BaseFeeConfig = IdlTypes<DynamicBondingCurve>['baseFeeConfig'];
type DynamicFeeConfig = IdlTypes<DynamicBondingCurve>['dynamicFeeConfig'];
type MigratedPoolFee = IdlTypes<DynamicBondingCurve>['migratedPoolFee'];
type SwapResult = IdlTypes<DynamicBondingCurve>['swapResult'];
type SwapResult2 = IdlTypes<DynamicBondingCurve>['swapResult2'];
type TransferHookAccountsInfo = IdlTypes<DynamicBondingCurve>['transferHookAccountsInfo'];
type VolatilityTracker = IdlTypes<DynamicBondingCurve>['volatilityTracker'];
type LockEscrow = IdlTypes<DynamicBondingCurve>['lockEscrow'];
type PoolConfig = IdlAccounts<DynamicBondingCurve>['poolConfig'];
type ConfigWithTransferHook = IdlAccounts<DynamicBondingCurve>['configWithTransferHook'];
type VirtualPool = IdlAccounts<DynamicBondingCurve>['virtualPool'];
type TransferHookPool = IdlAccounts<DynamicBondingCurve>['transferHookPool'];
type MeteoraDammMigrationMetadata = IdlAccounts<DynamicBondingCurve>['meteoraDammMigrationMetadata'];
type PartnerMetadata = IdlAccounts<DynamicBondingCurve>['partnerMetadata'];
type VirtualPoolMetadata = IdlAccounts<DynamicBondingCurve>['virtualPoolMetadata'];
declare enum ActivationType {
    Slot = 0,
    Timestamp = 1
}
declare enum TokenType {
    SPLToken = 0,
    Token2022 = 1
}
declare enum CollectFeeMode {
    QuoteToken = 0,
    OutputToken = 1
}
declare enum MigratedCollectFeeMode {
    QuoteToken = 0,
    OutputToken = 1,
    Compounding = 2
}
declare enum DammV2DynamicFeeMode {
    Disabled = 0,
    Enabled = 1
}
declare enum DammV2BaseFeeMode {
    FeeTimeSchedulerLinear = 0,
    FeeTimeSchedulerExponential = 1,
    RateLimiter = 2,
    FeeMarketCapSchedulerLinear = 3,
    FeeMarketCapSchedulerExponential = 4
}
declare enum MigrationOption {
    MET_DAMM = 0,
    MET_DAMM_V2 = 1
}
declare enum BaseFeeMode {
    FeeSchedulerLinear = 0,
    FeeSchedulerExponential = 1,
    RateLimiter = 2
}
declare enum MigrationFeeOption {
    FixedBps25 = 0,
    FixedBps30 = 1,
    FixedBps100 = 2,
    FixedBps200 = 3,
    FixedBps400 = 4,
    FixedBps600 = 5,
    Customizable = 6
}
declare enum TokenDecimal {
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9
}
declare enum TradeDirection {
    BaseToQuote = 0,
    QuoteToBase = 1
}
declare enum Rounding {
    Up = 0,
    Down = 1
}
declare enum TokenAuthorityOption {
    CreatorUpdateAuthority = 0,
    Immutable = 1,
    PartnerUpdateAuthority = 2,
    CreatorUpdateAndMintAuthority = 3,
    PartnerUpdateAndMintAuthority = 4
}
declare enum SwapMode {
    ExactIn = 0,
    PartialFill = 1,
    ExactOut = 2
}
declare const AccountsType: {
    readonly TransferHookBase: {
        readonly transferHookBase: {};
    };
    readonly TransferHookBaseReferral: {
        readonly transferHookBaseReferral: {};
    };
};
type CreateConfigParams = Omit<CreateConfigAccounts, 'program' | 'eventAuthority' | 'systemProgram'> & ConfigParameters;
type CreateConfigWithTransferHookParams = CreateConfigParams & {
    transferHookProgram: PublicKey;
};
type CreateDammV1MigrationMetadataParams = Omit<CreateDammV1MigrationMetadataAccounts, 'program' | 'eventAuthority' | 'systemProgram' | 'migrationMetadata'>;
type BaseFee = Omit<BaseFeeConfig, 'padding0'>;
type TokenConfig = {
    tokenType: TokenType;
    tokenBaseDecimal: TokenDecimal;
    tokenQuoteDecimal: TokenDecimal;
    tokenAuthorityOption: TokenAuthorityOption;
    totalTokenSupply: number;
    leftover: number;
};
type FeeSchedulerParams = {
    startingFeeBps: number;
    endingFeeBps: number;
    numberOfPeriod: number;
    totalDuration: number;
};
type RateLimiterParams = {
    baseFeeBps: number;
    feeIncrementBps: number;
    referenceAmount: number;
    maxLimiterDuration: number;
};
type BaseFeeParams = {
    baseFeeMode: BaseFeeMode.FeeSchedulerLinear | BaseFeeMode.FeeSchedulerExponential;
    feeSchedulerParam: FeeSchedulerParams;
} | {
    baseFeeMode: BaseFeeMode.RateLimiter;
    rateLimiterParam: RateLimiterParams;
};
type FeeConfig = {
    baseFeeParams: BaseFeeParams;
    dynamicFeeEnabled: boolean;
    collectFeeMode: CollectFeeMode;
    creatorTradingFeePercentage: number;
    poolCreationFee: number;
    enableFirstSwapWithMinFee: boolean;
};
type MigrationFee = {
    feePercentage: number;
    creatorFeePercentage: number;
};
type MigratedPoolFeeConfig = {
    collectFeeMode: MigratedCollectFeeMode;
    dynamicFee: DammV2DynamicFeeMode;
    poolFeeBps: number;
    compoundingFeeBps?: number;
    baseFeeMode?: DammV2BaseFeeMode;
    marketCapFeeSchedulerParams?: MigratedPoolMarketCapFeeSchedulerParams;
};
type MigratedPoolMarketCapFeeSchedulerParams = {
    endingBaseFeeBps: number;
    numberOfPeriod: number;
    priceMultiple: number;
    schedulerExpirationDuration: number;
};
type MigrationConfig = {
    migrationOption: MigrationOption;
    migrationFeeOption: MigrationFeeOption;
    migrationFee: MigrationFee;
    migratedPoolFee?: MigratedPoolFeeConfig;
    migrationQuoteAmountCap?: BN;
};
type LiquidityVestingInfoParams = {
    vestingPercentage: number;
    bpsPerPeriod: number;
    numberOfPeriods: number;
    cliffDurationFromMigrationTime: number;
    totalDuration: number;
};
type LiquidityDistributionConfig = {
    partnerPermanentLockedLiquidityPercentage: number;
    partnerLiquidityPercentage: number;
    partnerLiquidityVestingInfoParams?: LiquidityVestingInfoParams;
    creatorPermanentLockedLiquidityPercentage: number;
    creatorLiquidityPercentage: number;
    creatorLiquidityVestingInfoParams?: LiquidityVestingInfoParams;
};
type LockedVestingParams = {
    totalLockedVestingAmount: number;
    numberOfVestingPeriod: number;
    cliffUnlockAmount: number;
    totalVestingDuration: number;
    cliffDurationFromMigrationTime: number;
};
type BuildCurveBaseParams = {
    token: TokenConfig;
    fee: FeeConfig;
    migration: MigrationConfig;
    liquidityDistribution: LiquidityDistributionConfig;
    lockedVesting: LockedVestingParams;
    activationType: ActivationType;
};
type BuildCurveParams = BuildCurveBaseParams & {
    percentageSupplyOnMigration: number;
    migrationQuoteThreshold: number;
};
type BuildCurveWithMarketCapParams = BuildCurveBaseParams & {
    initialMarketCap: number;
    migrationMarketCap: number;
};
type BuildCurveWithTwoSegmentsParams = BuildCurveBaseParams & {
    initialMarketCap: number;
    migrationMarketCap: number;
    percentageSupplyOnMigration: number;
};
type BuildCurveWithMidPriceParams = BuildCurveBaseParams & {
    initialMarketCap: number;
    migrationMarketCap: number;
    midPrice: number;
    percentageSupplyOnMigration: number;
};
type BuildCurveWithLiquidityWeightsParams = BuildCurveBaseParams & {
    initialMarketCap: number;
    migrationMarketCap: number;
    liquidityWeights: number[];
};
type BuildCurveWithCustomSqrtPricesParams = BuildCurveBaseParams & {
    sqrtPrices: BN[];
    liquidityWeights?: number[];
};
type InitializePoolBaseParams = {
    name: string;
    symbol: string;
    uri: string;
    pool: PublicKey;
    config: PublicKey;
    payer: PublicKey;
    poolCreator: PublicKey;
    baseMint: PublicKey;
    baseVault: PublicKey;
    quoteVault: PublicKey;
    quoteMint: PublicKey;
    deadlineTimestamp: BN;
    mintMetadata?: PublicKey;
};
type CreatePoolParams = {
    name: string;
    symbol: string;
    uri: string;
    payer: PublicKey;
    poolCreator: PublicKey;
    config: PublicKey;
    baseMint: PublicKey;
    deadlineTimestamp?: BN;
};
type CreatePoolWithTransferHookParams = CreatePoolParams & {
    transferHookProgram: PublicKey;
};
type CreateConfigAndPoolParams = CreateConfigParams & {
    preCreatePoolParam: CreatePoolBaseParams;
};
type CreateConfigAndPoolWithFirstBuyParams = CreateConfigAndPoolParams & {
    firstBuyParam?: FirstBuyParams;
};
type CreateConfigAndPoolWithTransferHookParams = CreateConfigWithTransferHookParams & {
    preCreatePoolParam: CreatePoolBaseParams;
};
type CreateConfigAndPoolWithFirstBuyWithTransferHookParams = CreateConfigAndPoolWithTransferHookParams & {
    firstBuyParam?: FirstBuyWithTransferHookParams;
};
type CreatePoolWithFirstBuyParams = {
    createPoolParam: CreatePoolParams;
    firstBuyParam?: FirstBuyParams;
};
type CreatePoolWithFirstBuyWithTransferHookParams = {
    createPoolParam: CreatePoolWithTransferHookParams;
    firstBuyParam?: FirstBuyWithTransferHookParams;
};
type CreatePoolWithPartnerAndCreatorFirstBuyParams = {
    createPoolParam: CreatePoolParams;
    partnerFirstBuyParam?: PartnerFirstBuyParams;
    creatorFirstBuyParam?: CreatorFirstBuyParams;
};
type CreatePoolWithPartnerAndCreatorFirstBuyWithTransferHookParams = {
    createPoolParam: CreatePoolWithTransferHookParams;
    partnerFirstBuyParam?: PartnerFirstBuyWithTransferHookParams;
    creatorFirstBuyParam?: CreatorFirstBuyWithTransferHookParams;
};
type CreatePoolBaseParams = {
    name: string;
    symbol: string;
    uri: string;
    poolCreator: PublicKey;
    baseMint: PublicKey;
    deadlineTimestamp?: BN;
};
type FirstBuyParams = {
    buyer: PublicKey;
    receiver?: PublicKey;
    buyAmount: BN;
    minimumAmountOut: BN;
    referralTokenAccount: PublicKey | null;
};
type TransferHookRemainingAccounts = {
    transferHookAccountsInfo: TransferHookAccountsInfo;
    transferHookAccounts: AccountMeta[];
};
type FirstBuyWithTransferHookParams = FirstBuyParams & Partial<TransferHookRemainingAccounts>;
type PartnerFirstBuyParams = {
    partner: PublicKey;
    receiver: PublicKey;
    buyAmount: BN;
    minimumAmountOut: BN;
    referralTokenAccount: PublicKey | null;
};
type PartnerFirstBuyWithTransferHookParams = PartnerFirstBuyParams & Partial<TransferHookRemainingAccounts>;
type CreatorFirstBuyParams = {
    creator: PublicKey;
    receiver: PublicKey;
    buyAmount: BN;
    minimumAmountOut: BN;
    referralTokenAccount: PublicKey | null;
};
type CreatorFirstBuyWithTransferHookParams = CreatorFirstBuyParams & Partial<TransferHookRemainingAccounts>;
type SwapParams = {
    owner: PublicKey;
    pool: PublicKey;
    amountIn: BN;
    minimumAmountOut: BN;
    swapBaseForQuote: boolean;
    referralTokenAccount: PublicKey | null;
    payer?: PublicKey;
};
type Swap2Params = {
    owner: PublicKey;
    pool: PublicKey;
    swapBaseForQuote: boolean;
    referralTokenAccount: PublicKey | null;
    payer?: PublicKey;
} & ({
    swapMode: SwapMode.ExactIn;
    amountIn: BN;
    minimumAmountOut: BN;
} | {
    swapMode: SwapMode.PartialFill;
    amountIn: BN;
    minimumAmountOut: BN;
} | {
    swapMode: SwapMode.ExactOut;
    amountOut: BN;
    maximumAmountIn: BN;
});
/**
 * Params for `virtualSwap2`. The swap is always quote-to-base, referrals are not supported,
 * and `payer` must be the virtual swap authority (defaults to `VIRTUAL_SWAP_AUTHORITY`).
 * `owner` is the recipient of the base tokens; their quote balance is never debited.
 */
type VirtualSwap2Params = {
    owner: PublicKey;
    pool: PublicKey;
    payer?: PublicKey;
} & ({
    swapMode: SwapMode.ExactIn;
    amountIn: BN;
    minimumAmountOut: BN;
} | {
    swapMode: SwapMode.PartialFill;
    amountIn: BN;
    minimumAmountOut: BN;
} | {
    swapMode: SwapMode.ExactOut;
    amountOut: BN;
    maximumAmountIn: BN;
});
type SwapQuoteParams = {
    virtualPool: VirtualPool;
    config: PoolConfig;
    swapBaseForQuote: boolean;
    amountIn: BN;
    slippageBps?: number;
    hasReferral: boolean;
    eligibleForFirstSwapWithMinFee: boolean;
    currentPoint: BN;
};
type SwapQuote2Params = {
    virtualPool: VirtualPool;
    config: PoolConfig;
    swapBaseForQuote: boolean;
    hasReferral: boolean;
    eligibleForFirstSwapWithMinFee: boolean;
    currentPoint: BN;
    slippageBps?: number;
} & ({
    swapMode: SwapMode.ExactIn;
    amountIn: BN;
} | {
    swapMode: SwapMode.PartialFill;
    amountIn: BN;
} | {
    swapMode: SwapMode.ExactOut;
    amountOut: BN;
});
interface SwapQuoteConfig {
    poolFees: {
        baseFee: {
            cliffFeeNumerator: BN;
            firstFactor: number;
            secondFactor: BN;
            thirdFactor: BN;
            baseFeeMode: number;
        };
        dynamicFee?: {
            initialized?: number;
            binStep: number;
            variableFeeControl: number;
        } | null;
    };
    collectFeeMode: number;
    sqrtStartPrice: BN;
    migrationQuoteThreshold: BN;
    curve: Array<{
        sqrtPrice: BN;
        liquidity: BN;
    }>;
    migrationSqrtPrice?: BN;
}
type SimulatedQuoteBaseParams = {
    config: SwapQuoteConfig;
    swapBaseForQuote: boolean;
    slippageBps?: number;
    hasReferral?: boolean;
    currentPoint?: BN;
    eligibleForFirstSwapWithMinFee?: boolean;
};
type SimulatedQuoteFromInputAmountParams = SimulatedQuoteBaseParams & {
    amountIn: BN;
    swapMode?: SwapMode.ExactIn | SwapMode.PartialFill;
};
type SimulatedQuoteFromOutputAmountParams = SimulatedQuoteBaseParams & {
    amountOut: BN;
};
type MigrateToDammV1Params = {
    payer: PublicKey;
    pool: PublicKey;
    dammConfig: PublicKey;
};
type MigrateToDammV2Params = MigrateToDammV1Params;
type MigrateToDammV2Response = {
    transaction: Transaction;
    firstPositionNftKeypair: Keypair;
    secondPositionNftKeypair: Keypair;
};
type DammLpTokenParams = {
    payer: PublicKey;
    pool: PublicKey;
    dammConfig: PublicKey;
    isPartner: boolean;
};
type CreateLockerParams = {
    payer: PublicKey;
    pool: PublicKey;
};
type ClaimPartnerTradingFeeParams = {
    feeClaimer: PublicKey;
    payer: PublicKey;
    pool: PublicKey;
    maxBaseAmount: BN;
    maxQuoteAmount: BN;
    receiver?: PublicKey;
    tempWSolAcc?: PublicKey;
};
type ClaimPartnerTradingFeeToReceiverParams = {
    feeClaimer: PublicKey;
    payer: PublicKey;
    pool: PublicKey;
    maxBaseAmount: BN;
    maxQuoteAmount: BN;
    receiver: PublicKey;
};
type ClaimCreatorTradingFeeParams = {
    creator: PublicKey;
    payer: PublicKey;
    pool: PublicKey;
    maxBaseAmount: BN;
    maxQuoteAmount: BN;
    receiver?: PublicKey;
    tempWSolAcc?: PublicKey;
};
type ClaimCreatorTradingFeeToReceiverParams = {
    creator: PublicKey;
    payer: PublicKey;
    pool: PublicKey;
    maxBaseAmount: BN;
    maxQuoteAmount: BN;
    receiver: PublicKey;
};
type ClaimCreatorTradingFeeWithQuoteMintNotSolParams = {
    creator: PublicKey;
    payer: PublicKey;
    feeReceiver: PublicKey;
    pool: PublicKey;
    virtualPool: VirtualPool;
    poolConfigState: PoolConfig;
    tokenBaseProgram: PublicKey;
    tokenQuoteProgram: PublicKey;
};
type ClaimCreatorTradingFeeWithQuoteMintSolParams = ClaimCreatorTradingFeeWithQuoteMintNotSolParams & {
    tempWSolAcc: PublicKey;
};
type PartnerWithdrawSurplusParams = {
    feeClaimer: PublicKey;
    pool: PublicKey;
};
type CreatorWithdrawSurplusParams = {
    creator: PublicKey;
    pool: PublicKey;
};
type WithdrawLeftoverParams = {
    payer: PublicKey;
    pool: PublicKey;
};
type CreateVirtualPoolMetadataParams = {
    virtualPool: PublicKey;
    name: string;
    website: string;
    logo: string;
    creator: PublicKey;
    payer: PublicKey;
};
type CreatePartnerMetadataParams = {
    name: string;
    website: string;
    logo: string;
    feeClaimer: PublicKey;
    payer: PublicKey;
};
type TransferPoolCreatorParams = {
    pool: PublicKey;
    creator: PublicKey;
    newCreator: PublicKey;
};
type WithdrawMigrationFeeParams = {
    pool: PublicKey;
    sender: PublicKey;
};
type ClaimPartnerPoolCreationFeeParams = {
    pool: PublicKey;
    feeReceiver: PublicKey;
};
type MigratedPoolFeeResult = {
    migratedPoolFee: {
        collectFeeMode: MigratedCollectFeeMode;
        dynamicFee: DammV2DynamicFeeMode;
        poolFeeBps: number;
    };
    migratedPoolBaseFeeMode: DammV2BaseFeeMode;
    migratedPoolMarketCapFeeSchedulerParams: MigratedPoolMarketCapFeeSchedulerParameters;
    migrationFeeOption: MigrationFeeOption;
    compoundingFeeBps: number;
};
interface BaseFeeHandler {
    validate(collectFeeMode: CollectFeeMode, activationType: ActivationType): boolean;
    getMinBaseFeeNumerator(): BN;
    getBaseFeeNumeratorFromIncludedFeeAmount(currentPoint: BN, activationPoint: BN, tradeDirection: TradeDirection, includedFeeAmount: BN): BN;
    getBaseFeeNumeratorFromExcludedFeeAmount(currentPoint: BN, activationPoint: BN, tradeDirection: TradeDirection, excludedFeeAmount: BN): BN;
}
interface FeeResult {
    amount: BN;
    protocolFee: BN;
    tradingFee: BN;
    referralFee: BN;
}
interface FeeMode {
    feesOnInput: boolean;
    feesOnBaseToken: boolean;
    hasReferral: boolean;
}
interface SwapQuoteResult extends SwapResult {
    minimumAmountOut: BN;
}
interface SwapQuote2Result extends SwapResult2 {
    minimumAmountOut?: BN;
    maximumAmountIn?: BN;
}
interface FeeOnAmountResult {
    amount: BN;
    protocolFee: BN;
    tradingFee: BN;
    referralFee: BN;
}
interface PrepareSwapParams {
    inputMint: PublicKey;
    outputMint: PublicKey;
    inputTokenProgram: PublicKey;
    outputTokenProgram: PublicKey;
}
interface SwapAmount {
    outputAmount: BN;
    nextSqrtPrice: BN;
    amountLeft: BN;
}

declare class StateService extends DynamicBondingCurveProgram {
    constructor(connection: Connection, commitment: Commitment);
    /**
     * Fetch virtual pools across both the standard and transfer-hook account variants.
     */
    private fetchVirtualPools;
    /**
     * Fetch pool configs across both the standard and transfer-hook account variants.
     */
    private fetchPoolConfigs;
    /**
     * Fetch a pool config account.
     */
    getPoolConfig(configAddress: PublicKey | string): Promise<PoolConfig | null>;
    /**
     * Fetch all pool config accounts.
     */
    getPoolConfigs(): Promise<ProgramAccount<PoolConfig>[]>;
    /**
     * Fetch all pool configs owned by a wallet.
     */
    getPoolConfigsByOwner(owner: PublicKey | string): Promise<ProgramAccount<PoolConfig>[]>;
    /**
     * Fetch a virtual pool account.
     */
    getPool(poolAddress: PublicKey | string): Promise<VirtualPool | null>;
    /**
     * Fetch all virtual pool accounts.
     */
    getPools(): Promise<ProgramAccount<VirtualPool>[]>;
    /**
     * Fetch all virtual pools that use a config.
     */
    getPoolsByConfig(configAddress: PublicKey | string): Promise<ProgramAccount<VirtualPool>[]>;
    /**
     * Fetch all virtual pools created by a wallet.
     */
    getPoolsByCreator(creatorAddress: PublicKey | string): Promise<ProgramAccount<VirtualPool>[]>;
    /**
     * Fetch the first virtual pool that uses a base mint.
     */
    getPoolByBaseMint(baseMint: PublicKey | string): Promise<ProgramAccount<VirtualPool> | null>;
    /**
     * Fetch the migration quote threshold for a pool.
     */
    getPoolMigrationQuoteThreshold(poolAddress: PublicKey | string): Promise<BN$1>;
    /**
     * Return quote-token curve progress as a ratio between 0 and 1.
     */
    getPoolQuoteTokenCurveProgress(poolAddress: PublicKey | string): Promise<number>;
    /**
     * Return base-token curve progress as a ratio between 0 and 1.
     */
    getPoolBaseTokenCurveProgress(poolAddress: PublicKey | string): Promise<number>;
    /**
     * Fetch metadata accounts for a virtual pool.
     */
    getPoolMetadata(poolAddress: PublicKey | string): Promise<VirtualPoolMetadata[]>;
    /**
     * Fetch metadata accounts for a partner.
     */
    getPartnerMetadata(partnerAddress: PublicKey | string): Promise<PartnerMetadata[]>;
    /**
     * Fetch current unclaimed fees and lifetime trading fee metrics for a pool.
     */
    getPoolFeeMetrics(poolAddress: PublicKey | string): Promise<{
        current: {
            partnerBaseFee: BN$1;
            partnerQuoteFee: BN$1;
            creatorBaseFee: BN$1;
            creatorQuoteFee: BN$1;
        };
        total: {
            totalTradingBaseFee: BN$1;
            totalTradingQuoteFee: BN$1;
        };
    }>;
    /**
     * Calculate claimed, unclaimed, and total trading fees split by creator and partner.
     */
    getPoolFeeBreakdown(poolAddress: PublicKey | string): Promise<{
        creator: {
            unclaimedBaseFee: BN$1;
            unclaimedQuoteFee: BN$1;
            claimedBaseFee: BN$1;
            claimedQuoteFee: BN$1;
            totalBaseFee: BN$1;
            totalQuoteFee: BN$1;
        };
        partner: {
            unclaimedBaseFee: BN$1;
            unclaimedQuoteFee: BN$1;
            claimedBaseFee: BN$1;
            claimedQuoteFee: BN$1;
            totalBaseFee: BN$1;
            totalQuoteFee: BN$1;
        };
    }>;
    /**
     * Fetch fee metrics for every pool linked to a config.
     */
    getPoolsFeesByConfig(configAddress: PublicKey | string): Promise<Array<{
        poolAddress: PublicKey;
        partnerBaseFee: BN$1;
        partnerQuoteFee: BN$1;
        creatorBaseFee: BN$1;
        creatorQuoteFee: BN$1;
        totalTradingBaseFee: BN$1;
        totalTradingQuoteFee: BN$1;
    }>>;
    /**
     * Fetch fee metrics for every pool linked to a creator.
     */
    getPoolsFeesByCreator(creatorAddress: PublicKey | string): Promise<Array<{
        poolAddress: PublicKey;
        partnerBaseFee: BN$1;
        partnerQuoteFee: BN$1;
        creatorBaseFee: BN$1;
        creatorQuoteFee: BN$1;
        totalTradingBaseFee: BN$1;
        totalTradingQuoteFee: BN$1;
    }>>;
    /**
     * Fetch DAMM V1 migration metadata for a pool.
     */
    getDammV1MigrationMetadata(poolAddress: PublicKey): Promise<MeteoraDammMigrationMetadata>;
}

type ClaimTradingFeeAccountParams = {
    payer: PublicKey;
    feeReceiver: PublicKey;
    pool: PublicKey;
    virtualPool: VirtualPool;
    poolConfigState: PoolConfig;
    tokenBaseProgram: PublicKey;
    tokenQuoteProgram: PublicKey;
};
type ClaimTradingFeeSolAccountParams = ClaimTradingFeeAccountParams & {
    tempWSolAcc: PublicKey;
};
type AccountsTypeValue = (typeof AccountsType)[keyof typeof AccountsType];
declare class DynamicBondingCurveProgram {
    program: Program<DynamicBondingCurve>;
    protected connection: Connection;
    protected poolAuthority: PublicKey;
    protected commitment: Commitment;
    protected state: StateService;
    constructor(connection: Connection, commitment: Commitment, state?: StateService);
    protected getPoolWithConfig(pool: PublicKey | string): Promise<{
        virtualPool: VirtualPool;
        poolConfigState: PoolConfig;
    }>;
    protected prepareSwapParams(swapBaseForQuote: boolean, virtualPoolState: {
        baseMint: PublicKey;
        poolType: TokenType;
    }, poolConfigState: {
        quoteMint: PublicKey;
        quoteTokenFlag: TokenType;
    }): PrepareSwapParams;
    protected buildCreateConfigTx(configParam: ConfigParameters, config: PublicKey, feeClaimer: PublicKey, leftoverReceiver: PublicKey, quoteMint: PublicKey, payer: PublicKey): Promise<Transaction>;
    protected buildCreateConfigWithTransferHookTx(configParam: ConfigParameters, config: PublicKey, feeClaimer: PublicKey, leftoverReceiver: PublicKey, quoteMint: PublicKey, transferHookProgram: PublicKey, payer: PublicKey): Promise<Transaction>;
    protected initializeSplPool(params: InitializePoolBaseParams): Promise<Transaction>;
    protected initializeToken2022Pool(params: InitializePoolBaseParams): Promise<Transaction>;
    protected initializeToken2022PoolWithTransferHook(params: InitializePoolBaseParams & {
        transferHookProgram: PublicKey;
        tokenQuoteProgram: PublicKey;
    }): Promise<Transaction>;
    protected buildCreatePoolTx(createPoolParam: CreatePoolParams, tokenType: TokenType, quoteMint: PublicKey): Promise<Transaction>;
    protected buildCreatePoolWithTransferHookTx(createPoolParam: CreatePoolWithTransferHookParams, quoteMint: PublicKey, tokenQuoteProgram: PublicKey): Promise<Transaction>;
    protected buildSwapBuyTx(firstBuyParam: FirstBuyParams, baseMint: PublicKey, config: PublicKey, baseFee: BaseFee, swapBaseForQuote: boolean, activationType: ActivationType, tokenType: TokenType, quoteMint: PublicKey, enableFirstSwapWithMinFee: boolean): Promise<Transaction>;
    protected buildSwap2WithTransferHookBuyTx(firstBuyParam: FirstBuyWithTransferHookParams, baseMint: PublicKey, config: PublicKey, baseFee: BaseFee, activationType: ActivationType, quoteMint: PublicKey, enableFirstSwapWithMinFee: boolean): Promise<Transaction>;
    protected buildClaimTradingFeeAccountsForSol(params: ClaimTradingFeeSolAccountParams): Promise<{
        accounts: {
            poolAuthority: PublicKey;
            pool: PublicKey;
            tokenAAccount: PublicKey;
            tokenBAccount: PublicKey;
            baseVault: PublicKey;
            quoteVault: PublicKey;
            baseMint: PublicKey;
            quoteMint: PublicKey;
            tokenBaseProgram: PublicKey;
            tokenQuoteProgram: PublicKey;
        };
        preInstructions: TransactionInstruction[];
        postInstructions: TransactionInstruction[];
    }>;
    protected buildClaimTradingFeeAccountsForNonSol(params: ClaimTradingFeeAccountParams): Promise<{
        accounts: {
            poolAuthority: PublicKey;
            pool: PublicKey;
            tokenAAccount: PublicKey;
            tokenBAccount: PublicKey;
            baseVault: PublicKey;
            quoteVault: PublicKey;
            baseMint: PublicKey;
            quoteMint: PublicKey;
            tokenBaseProgram: PublicKey;
            tokenQuoteProgram: PublicKey;
        };
        preInstructions: TransactionInstruction[];
    }>;
    protected getRemainingAccountsForTransferHook(mint: PublicKey, accountTypes?: AccountsTypeValue[]): Promise<{
        info: TransferHookAccountsInfo;
        accounts: AccountMeta[];
    }>;
    protected buildWithdrawMigrationFeeTx(role: 'partner' | 'creator', pool: PublicKey, sender: PublicKey): Promise<Transaction>;
    protected prepareTokenAccounts(owner: PublicKey, payer: PublicKey, tokenAMint: PublicKey, tokenBMint: PublicKey, tokenAProgram: PublicKey, tokenBProgram: PublicKey): Promise<{
        ataTokenA: PublicKey;
        ataTokenB: PublicKey;
        instructions: TransactionInstruction[];
    }>;
    /**
     * Return the underlying Anchor program client.
     */
    getProgram(): Program<DynamicBondingCurve>;
}

declare class MigrationService extends DynamicBondingCurveProgram {
    constructor(connection: Connection, commitment: Commitment, state?: StateService);
    /**
     * Create a Dynamic Vault program client.
     */
    private getDynamicVaultProgram;
    /**
     * Create a DAMM V1 program client.
     */
    private getDammV1Program;
    /**
     * Build a transaction that creates the locker for locked vesting tokens.
     */
    createLocker(params: CreateLockerParams): Promise<Transaction>;
    /**
     * Build a transaction that withdraws leftover base tokens after migration.
     */
    withdrawLeftover(params: WithdrawLeftoverParams): Promise<Transaction>;
    /**
     * Build a transaction that creates DAMM V1 migration metadata.
     */
    createDammV1MigrationMetadata(params: CreateDammV1MigrationMetadataParams): Promise<Transaction>;
    /**
     * Build a transaction that migrates a completed virtual pool to DAMM V1.
     */
    migrateToDammV1(params: MigrateToDammV1Params): Promise<Transaction>;
    /**
     * Build a transaction that locks DAMM V1 LP tokens for the creator or partner.
     */
    lockDammV1LpToken(params: DammLpTokenParams): Promise<Transaction>;
    /**
     * Build a transaction that claims DAMM V1 LP tokens for the creator or partner.
     */
    claimDammV1LpToken(params: DammLpTokenParams): Promise<Transaction>;
    /**
     * Build transactions and derived addresses for migrating a completed virtual pool to DAMM V2.
     */
    migrateToDammV2(params: MigrateToDammV2Params): Promise<MigrateToDammV2Response>;
}

declare class PartnerService extends DynamicBondingCurveProgram {
    constructor(connection: Connection, commitment: Commitment, state?: StateService);
    /**
     * Build a transaction that creates a partner-owned pool config.
     */
    createConfig(params: CreateConfigParams): Promise<Transaction>;
    /**
     * Build a transaction that creates a partner-owned transfer-hook pool config.
     */
    createConfigWithTransferHook(params: CreateConfigWithTransferHookParams): Promise<Transaction>;
    /**
     * Build one transaction that creates a config and initializes its pool.
     */
    createConfigAndPool(params: CreateConfigAndPoolParams): Promise<Transaction>;
    /**
     * Build one transaction that creates a transfer-hook config and initializes its pool.
     */
    createConfigAndPoolWithTransferHook(params: CreateConfigAndPoolWithTransferHookParams): Promise<Transaction>;
    /**
     * Build separate transactions for config creation and pool creation with an optional first buy.
     *
     * The transactions are returned separately so clients can send them independently or bundle them
     */
    createConfigAndPoolWithFirstBuy(params: CreateConfigAndPoolWithFirstBuyParams): Promise<{
        createConfigTx: Transaction;
        createPoolWithFirstBuyTx: Transaction;
    }>;
    /**
     * Build separate transactions for transfer-hook config creation and pool creation with an optional first buy.
     */
    createConfigAndPoolWithFirstBuyWithTransferHook(params: CreateConfigAndPoolWithFirstBuyWithTransferHookParams): Promise<{
        createConfigTx: Transaction;
        createPoolWithFirstBuyTx: Transaction;
    }>;
    /**
     * Build a transaction that creates partner metadata for a fee claimer.
     */
    createPartnerMetadata(params: CreatePartnerMetadataParams): Promise<Transaction>;
    /**
     * Build a transaction that claims partner trading fees.
     *
     * When the quote mint is SOL, the transaction may create and close a temporary wrapped SOL account.
     * If `receiver` differs from `feeClaimer`, provide `tempWSolAcc`.
     */
    claimPartnerTradingFee(params: ClaimPartnerTradingFeeParams): Promise<Transaction>;
    /**
     * Build a transaction that claims partner trading fees to an explicit receiver.
     */
    claimPartnerTradingFeeToReceiver(params: ClaimPartnerTradingFeeToReceiverParams): Promise<Transaction>;
    /**
     * Build a transaction that claims partner trading fees with transfer-hook support.
     */
    claimPartnerTradingFee2(params: ClaimPartnerTradingFeeToReceiverParams): Promise<Transaction>;
    /**
     * Build a transaction that withdraws partner surplus from a pool.
     */
    partnerWithdrawSurplus(params: PartnerWithdrawSurplusParams): Promise<Transaction>;
    /**
     * Build a transaction that withdraws the partner migration fee.
     */
    partnerWithdrawMigrationFee(params: WithdrawMigrationFeeParams): Promise<Transaction>;
    /**
     * Build a transaction that claims the partner pool creation fee.
     */
    claimPartnerPoolCreationFee(params: ClaimPartnerPoolCreationFeeParams): Promise<Transaction>;
}

declare class PoolService extends DynamicBondingCurveProgram {
    constructor(connection: Connection, commitment: Commitment, state?: StateService);
    /**
     * Build an exact-in swap transaction for an existing pool.
     *
     * The transaction prepares token accounts, wraps SOL when SOL is the input mint,
     * and unwraps SOL after the swap when either side of the trade is SOL.
     */
    swap(params: SwapParams): Promise<Transaction>;
    /**
     * Build a swap transaction using `SwapMode.ExactIn`, `SwapMode.PartialFill`, or `SwapMode.ExactOut`.
     *
     * Exact-out swaps use `amountOut` and `maximumAmountIn`;
     * Exact-in and Partial-fill swaps use `amountIn` and `minimumAmountOut`.
     */
    swap2(params: Swap2Params): Promise<Transaction>;
    /**
     * Build a virtual swap transaction (`virtualSwap2`).
     *
     * Virtual swaps record off-chain quote contributions: the pool's virtual quote
     * reserve increases and `owner` receives base tokens from the vault, but no quote
     * tokens are transferred from the payer. Always quote-to-base, no referral.
     * `payer` must be the virtual swap authority and defaults to `VIRTUAL_SWAP_AUTHORITY`.
     */
    virtualSwap2(params: VirtualSwap2Params): Promise<Transaction>;
    /**
     * Build a swap2 transaction for transfer-hook pools.
     */
    swap2WithTransferHook(params: Swap2Params): Promise<Transaction>;
    /**
     * Quote an exact-in swap for the original swap instruction.
     */
    swapQuote(params: SwapQuoteParams): SwapQuoteResult;
    /**
     * Quote a swap using `SwapMode.ExactIn`, `SwapMode.PartialFill`, or `SwapMode.ExactOut`.
     */
    swapQuote2(params: SwapQuote2Params): SwapQuote2Result;
    /**
     * Reconcile the only two fields that differ between an on-chain `PoolConfig`
     * and a `buildCurve` output (`ConfigParameters`) so the quote math can
     * consume either directly:
     * - `migrationSqrtPrice`: used when present, otherwise derived from the
     *   curve and migration quote threshold (it is the swap stop price).
     * - `dynamicFee`: a null/undefined object becomes a disabled one, and a
     *   present object is treated as enabled unless `initialized` says otherwise.
     *
     * Everything else is already in the right shape and passed through.
     */
    private normalizeQuoteConfig;
    /**
     * creates a virtual pool state at launch with zeroed reserves and volatility, start price set.
     */
    private buildSimulatedVirtualPool;
    /**
     * quotes a swap from an input amount before any pool exists.
     */
    getQuoteFromInputAmount(params: SimulatedQuoteFromInputAmountParams): SwapQuote2Result;
    /**
     * quotes a swap from an exact output amount (`SwapMode.ExactOut`)
     */
    getQuoteFromOutputAmount(params: SimulatedQuoteFromOutputAmountParams): SwapQuote2Result;
}

declare class CreatorService extends DynamicBondingCurveProgram {
    constructor(connection: Connection, commitment: Commitment, state?: StateService);
    /**
     * Build a transaction that creates metadata for a virtual pool.
     */
    createPoolMetadata(params: CreateVirtualPoolMetadataParams): Promise<Transaction>;
    /**
     * Build a transaction that initializes a pool from an existing config.
     */
    createPool(params: CreatePoolParams): Promise<Transaction>;
    /**
     * Build a transaction that initializes a Token-2022 transfer-hook pool from an existing config.
     */
    createPoolWithTransferHook(params: CreatePoolWithTransferHookParams): Promise<Transaction>;
    /**
     * Build one transaction that initializes a pool and optionally appends the first buy.
     *
     * The first-buy instruction is only included when `firstBuyParam.buyAmount` is greater than 0.
     */
    createPoolWithFirstBuy(params: CreatePoolWithFirstBuyParams): Promise<Transaction>;
    /**
     * Build one transaction that initializes a transfer-hook pool and optionally appends the first buy.
     */
    createPoolWithFirstBuyWithTransferHook(params: CreatePoolWithFirstBuyWithTransferHookParams): Promise<Transaction>;
    /**
     * Build one transaction that initializes a pool and optionally appends partner and creator first buys.
     */
    createPoolWithPartnerAndCreatorFirstBuy(params: CreatePoolWithPartnerAndCreatorFirstBuyParams): Promise<Transaction>;
    /**
     * Build one transaction that initializes a transfer-hook pool and optionally appends partner and creator first buys.
     */
    createPoolWithPartnerAndCreatorFirstBuyWithTransferHook(params: CreatePoolWithPartnerAndCreatorFirstBuyWithTransferHookParams): Promise<Transaction>;
    /**
     * Build a transaction that claims creator trading fees.
     *
     * When the quote mint is SOL, the transaction may create and close a temporary wrapped SOL account.
     * If `receiver` differs from `creator`, provide `tempWSolAcc`.
     */
    claimCreatorTradingFee(params: ClaimCreatorTradingFeeParams): Promise<Transaction>;
    /**
     * Build a transaction that claims creator trading fees to an explicit receiver.
     */
    claimCreatorTradingFeeToReceiver(params: ClaimCreatorTradingFeeToReceiverParams): Promise<Transaction>;
    /**
     * Build a transaction that claims creator trading fees with transfer-hook support.
     */
    claimCreatorTradingFee2(params: ClaimCreatorTradingFeeToReceiverParams): Promise<Transaction>;
    /**
     * Build a transaction that withdraws creator surplus from a pool.
     */
    creatorWithdrawSurplus(params: CreatorWithdrawSurplusParams): Promise<Transaction>;
    /**
     * Build a transaction that transfers pool creator ownership.
     */
    transferPoolCreator(params: TransferPoolCreatorParams): Promise<Transaction>;
    /**
     * Build a transaction that withdraws the creator migration fee.
     */
    creatorWithdrawMigrationFee(params: WithdrawMigrationFeeParams): Promise<Transaction>;
}

declare class DynamicBondingCurveClient {
    pool: PoolService;
    partner: PartnerService;
    creator: CreatorService;
    migration: MigrationService;
    state: StateService;
    commitment: Commitment;
    connection: Connection;
    constructor(connection: Connection, commitment: Commitment);
    /**
     * Create a client with shared service state.
     */
    static create(connection: Connection, commitment?: Commitment): DynamicBondingCurveClient;
}

declare const MAX_CURVE_POINT = 16;
declare const OFFSET = 64;
declare const RESOLUTION = 64;
declare const ONE_Q64: BN$1;
declare const FEE_DENOMINATOR = 1000000000;
declare const MAX_BASIS_POINT = 10000;
declare const U16_MAX = 65535;
declare const U24_MAX = 16777215;
declare const U64_MAX: BN$1;
declare const U128_MAX: BN$1;
declare const MIN_SQRT_PRICE: BN$1;
declare const MAX_SQRT_PRICE: BN$1;
declare const MIN_FEE_BPS = 25;
declare const MAX_FEE_BPS = 9900;
declare const MIN_FEE_NUMERATOR = 2500000;
declare const MAX_FEE_NUMERATOR = 990000000;
declare const MAX_RATE_LIMITER_DURATION_IN_SECONDS = 43200;
declare const MAX_RATE_LIMITER_DURATION_IN_SLOTS = 108000;
declare const DYNAMIC_FEE_FILTER_PERIOD_DEFAULT = 10;
declare const DYNAMIC_FEE_DECAY_PERIOD_DEFAULT = 120;
declare const DYNAMIC_FEE_REDUCTION_FACTOR_DEFAULT = 5000;
declare const DYNAMIC_FEE_SCALING_FACTOR: BN$1;
declare const DYNAMIC_FEE_ROUNDING_OFFSET: BN$1;
declare const BIN_STEP_BPS_DEFAULT = 1;
declare const BIN_STEP_BPS_U128_DEFAULT: BN$1;
declare const MAX_PRICE_CHANGE_BPS_DEFAULT = 1500;
declare const PROTOCOL_FEE_PERCENT = 20;
declare const HOST_FEE_PERCENT = 20;
declare const SWAP_BUFFER_PERCENTAGE = 25;
declare const MAX_MIGRATION_FEE_PERCENTAGE = 99;
declare const MAX_CREATOR_MIGRATION_FEE_PERCENTAGE = 100;
declare const MIN_LOCKED_LIQUIDITY_BPS = 1000;
declare const SECONDS_PER_DAY = 86400;
declare const MAX_LOCK_DURATION_IN_SECONDS = 63072000;
declare const PROTOCOL_POOL_CREATION_FEE_PERCENT = 10;
declare const MIN_POOL_CREATION_FEE = 1000000;
declare const MAX_POOL_CREATION_FEE = 100000000000;
declare const MIN_MIGRATED_POOL_FEE_BPS = 10;
declare const MAX_MIGRATED_POOL_FEE_BPS = 1000;
declare const DYNAMIC_BONDING_CURVE_PROGRAM_ID: PublicKey;
declare const VIRTUAL_SWAP_AUTHORITY: PublicKey;
declare const METAPLEX_PROGRAM_ID: PublicKey;
declare const DAMM_V1_PROGRAM_ID: PublicKey;
declare const DAMM_V2_PROGRAM_ID: PublicKey;
declare const VAULT_PROGRAM_ID: PublicKey;
declare const LOCKER_PROGRAM_ID: PublicKey;
declare const BASE_ADDRESS: PublicKey;
declare const DAMM_V1_MIGRATION_FEE_ADDRESS: PublicKey[];
declare const DAMM_V2_MIGRATION_FEE_ADDRESS: PublicKey[];
declare const DEFAULT_MIGRATED_POOL_FEE_PARAMS: {
    readonly collectFeeMode: 0;
    readonly dynamicFee: 0;
    readonly poolFeeBps: 0;
};
declare const DEFAULT_LIQUIDITY_VESTING_INFO_PARAMS: LiquidityVestingInfoParams;
declare const DEFAULT_MIGRATED_POOL_MARKET_CAP_FEE_SCHEDULER_PARAMS: MigratedPoolMarketCapFeeSchedulerParameters;

/**
 * Get the first key
 * @param key1 - The first key
 * @param key2 - The second key
 * @returns The first key
 */
declare function getFirstKey(key1: PublicKey, key2: PublicKey): Buffer<ArrayBufferLike>;
/**
 * Get the second key
 * @param key1 - The first key
 * @param key2 - The second key
 * @returns The second key
 */
declare function getSecondKey(key1: PublicKey, key2: PublicKey): Buffer<ArrayBufferLike>;
/**
 * Generic account fetch helper
 * @param accountAddress - The address of the account to fetch
 * @param accountType - The type of account to fetch from program.account
 * @param program - The program instance
 * @param commitment - The commitment level
 * @returns The fetched account data
 */
declare function getAccountData<T>(accountAddress: PublicKey | string, accountType: keyof Program<DynamicBondingCurve>['account'], program: Program<DynamicBondingCurve>, commitment: Commitment): Promise<T>;
/**
 * Get creation timestamp for an account
 * @param accountAddress - The address of the account
 * @param connection - The Solana connection instance
 * @returns The creation timestamp as a Date object, or undefined if not found
 */
declare function getAccountCreationTimestamp(accountAddress: PublicKey | string, connection: Connection): Promise<Date | undefined>;
/**
 * Get creation timestamps for multiple accounts
 * @param accountAddresses - Array of account addresses
 * @param connection - The Solana connection instance
 * @returns Array of creation timestamps corresponding to the input addresses
 */
declare function getAccountCreationTimestamps(accountAddresses: (PublicKey | string)[], connection: Connection): Promise<(Date | undefined)[]>;
/**
 * Get the total token supply
 * @param swapBaseAmount - The swap base amount
 * @param migrationBaseThreshold - The migration base threshold
 * @param lockedVestingParams - The locked vesting parameters
 * @returns The total token supply
 */
declare function getTotalTokenSupply(swapBaseAmount: BN$1, migrationBaseThreshold: BN$1, lockedVestingParams: {
    amountPerPeriod: BN$1;
    numberOfPeriod: BN$1;
    cliffUnlockAmount: BN$1;
}): BN$1;
/**
 * Get the price from the sqrt start price
 * @param sqrtStartPrice - The sqrt start price
 * @param tokenBaseDecimal - The base token decimal
 * @param tokenQuoteDecimal - The quote token decimal
 * @returns The initial price
 */
declare function getPriceFromSqrtPrice(sqrtPrice: BN$1, tokenBaseDecimal: TokenDecimal, tokenQuoteDecimal: TokenDecimal): Decimal;
/**
 * Get the sqrt price from the price
 * @param price - The price
 * @param tokenADecimal - The decimal of token A
 * @param tokenBDecimal - The decimal of token B
 * @returns The sqrt price
 * price = (sqrtPrice >> 64)^2 * 10^(tokenADecimal - tokenBDecimal)
 */
declare const getSqrtPriceFromPrice: (price: string, tokenADecimal: number, tokenBDecimal: number) => BN$1;
/**
 * Create the sqrt prices from the prices
 * @param prices - The prices
 * @returns The sqrt prices
 */
declare const createSqrtPrices: (prices: number[], tokenBaseDecimal: TokenDecimal, tokenQuoteDecimal: TokenDecimal) => BN$1[];
/**
 * Get the sqrt price from the market cap
 * @param marketCap - The market cap
 * @param totalSupply - The total supply
 * @param tokenBaseDecimal - The decimal of the base token
 * @param tokenQuoteDecimal - The decimal of the quote token
 * @returns The sqrt price
 */
declare const getSqrtPriceFromMarketCap: (marketCap: number, totalSupply: number, tokenBaseDecimal: number, tokenQuoteDecimal: number) => BN$1;
/**
 * Get the base token for swap
 * @param sqrtStartPrice - The start sqrt price
 * @param sqrtMigrationPrice - The migration sqrt price
 * @param curve - The curve
 * @returns The base token
 */
declare function getBaseTokenForSwap(sqrtStartPrice: BN$1, sqrtMigrationPrice: BN$1, curve: Array<LiquidityDistributionParameters>): BN$1;
/**
 * Get migrationQuoteAmount from migrationQuoteThreshold and migrationFeePercent
 * @param migrationQuoteThreshold - The migration quote threshold
 * @param migrationFeePercent - The migration fee percent
 * @returns migration quote amount to deposit to pool
 */
declare const getMigrationQuoteAmountFromMigrationQuoteThreshold: (migrationQuoteThreshold: Decimal, migrationFeePercent: number) => Decimal;
/**
 * Get migrationQuoteThreshold from migrationQuoteAmount and migrationFeePercent
 * @param migrationQuoteAmount - The migration quote amount
 * @param migrationFeePercent - The migration fee percent
 * @returns migration quote threshold on bonding curve
 */
declare const getMigrationQuoteThresholdFromMigrationQuoteAmount: (migrationQuoteAmount: Decimal, migrationFeePercent: Decimal) => Decimal;
/**
 * Calculates the protocol migration fee for both base and quote tokens.
 *
 * @param depositBaseAmount - Amount of base token to deposit in pool (BN)
 * @param depositQuoteAmount - Amount of quote token to deposit in pool (BN)
 * @param migrationSqrtPrice - Migration sqrt price (BN)
 * @param migrationFeeBps - Migration fee in basis points (number)
 * @param migrationOption - Migration option (MigrationOption, enum)
 * @returns [baseFeeAmount: BN, quoteFeeAmount: BN]
 */
declare function getProtocolMigrationFee(depositBaseAmount: BN$1, depositQuoteAmount: BN$1, migrationSqrtPrice: BN$1, migrationFeeBps: number, migrationOption: MigrationOption): [BN$1, BN$1];
/**
 * Get the base token for migration
 * @param migrationQuoteAmount - The migration quote amount to deposit to pool
 * @param sqrtMigrationPrice - The migration sqrt price
 * @param migrationOption - The migration option
 * @returns The base token
 */
declare const getMigrationBaseToken: (migrationQuoteAmount: BN$1, sqrtMigrationPrice: BN$1, migrationOption: MigrationOption) => BN$1;
/**
 * Get the total vesting amount
 * @param lockedVesting - The locked vesting
 * @returns The total vesting amount
 */
declare const getTotalVestingAmount: (lockedVesting: LockedVestingParameters) => BN$1;
/**
 * Get the liquidity
 * @param baseAmount - The base amount
 * @param quoteAmount - The quote amount
 * @param minSqrtPrice - The min sqrt price
 * @param maxSqrtPrice - The max sqrt price
 * @returns The liquidity
 */
declare const getLiquidity: (baseAmount: BN$1, quoteAmount: BN$1, minSqrtPrice: BN$1, maxSqrtPrice: BN$1) => BN$1;
/**
 * Get the first curve
 * @param migrationSqrPrice - The migration sqrt price
 * @param migrationAmount - The migration amount
 * @param swapAmount - The swap amount
 * @param migrationQuoteThreshold - The migration quote threshold
 * @param migrationFeePercent - The migration fee percent
 * @returns The first curve
 */
declare const getFirstCurve: (migrationSqrtPrice: BN$1, migrationBaseAmount: BN$1, swapAmount: BN$1, migrationQuoteThreshold: BN$1, migrationFeePercent: number) => {
    sqrtStartPrice: BN$1;
    curve: {
        sqrtPrice: BN$1;
        liquidity: BN$1;
    }[];
};
/**
 * Get the total supply from curve
 * @param migrationQuoteThreshold - The migration quote threshold
 * @param sqrtStartPrice - The start sqrt price
 * @param curve - The curve
 * @param lockedVesting - The locked vesting
 * @param migrationOption - The migration option
 * @param leftover - The leftover
 * @param migrationFeePercent - The migration fee percent
 * @returns The total supply
 */
declare const getTotalSupplyFromCurve: (migrationQuoteThreshold: BN$1, sqrtStartPrice: BN$1, curve: Array<LiquidityDistributionParameters>, lockedVesting: LockedVestingParameters, migrationOption: MigrationOption, leftover: BN$1, migrationFeePercent: number) => BN$1;
/**
 * Get the migration threshold price
 * @param migrationThreshold - The migration threshold
 * @param sqrtStartPrice - The start sqrt price
 * @param curve - The curve
 * @returns The migration threshold price
 */
declare const getMigrationThresholdPrice: (migrationThreshold: BN$1, sqrtStartPrice: BN$1, curve: Array<LiquidityDistributionParameters>) => BN$1;
/**
 * Calculate the quote amount allocated to each curve segment
 * Formula: Δb = L * (√P_upper - √P_lower) for each segment
 * @param migrationQuoteThreshold - The total migration quote threshold
 * @param sqrtStartPrice - The start sqrt price
 * @param curve - The curve segments with sqrtPrice and liquidity
 * @returns Array of quote amounts for each segment and the final sqrt price reached
 */
declare const getCurveBreakdown: (migrationQuoteThreshold: BN$1, sqrtStartPrice: BN$1, curve: Array<LiquidityDistributionParameters>) => {
    segmentAmounts: BN$1[];
    finalSqrtPrice: BN$1;
    totalAmount: BN$1;
};
/**
 * Get the swap amount with buffer
 * @param swapBaseAmount - The swap base amount
 * @param sqrtStartPrice - The start sqrt price
 * @param curve - The curve
 * @returns The swap amount with buffer
 */
declare const getSwapAmountWithBuffer: (swapBaseAmount: BN$1, sqrtStartPrice: BN$1, curve: Array<LiquidityDistributionParameters>) => BN$1;
/**
 * Get the percentage of supply that should be allocated to initial liquidity
 * @param initialMarketCap - The initial market cap
 * @param migrationMarketCap - The migration market cap
 * @param lockedVesting - The locked vesting
 * @param totalLeftover - The leftover
 * @param totalTokenSupply - The total token supply
 * @returns The percentage of supply for initial liquidity
 */
declare const getPercentageSupplyOnMigration: (initialMarketCap: Decimal, migrationMarketCap: Decimal, lockedVesting: LockedVestingParameters, totalLeftover: BN$1, totalTokenSupply: BN$1) => number;
/**
 * Calculate the adjusted percentageSupplyOnMigration that accounts for migrationFee
 *
 * Formula:
 * - D = desiredMarketCap
 * - M = migrationMarketCap
 * - f = migrationFee
 * - V = vesting percentage
 * - L = leftover percentage
 *
 * requiredRatio = sqrt(D / M)
 * percentageSupplyOnMigration = (requiredRatio * (1 - f) * (100 - V - L)) / (1 + requiredRatio * (1 - f))
 */
declare function calculateAdjustedPercentageSupplyOnMigration(initialMarketCap: number, migrationMarketCap: number, migrationFee: {
    feePercentage: number;
}, lockedVesting: LockedVestingParameters, totalLeftover: BN$1, totalTokenSupply: BN$1): number;
/**
 * Get the migration quote amount
 * @param migrationMarketCap - The migration market cap
 * @param percentageSupplyOnMigration - The percentage of supply on migration
 * @returns The migration quote amount
 */
declare const getMigrationQuoteAmount: (migrationMarketCap: Decimal, percentageSupplyOnMigration: Decimal) => Decimal;
/**
 * Get the fee scheduler parameters
 * @param {number} startingBaseFeeBps - Starting fee in basis points
 * @param {number} endingBaseFeeBps - Ending fee in basis points
 * @param {BaseFeeMode} baseFeeMode - Mode for fee reduction (Linear or Exponential)
 * @param {number} numberOfPeriod - Number of periods over which to schedule fee reduction
 * @param {BN} totalDuration - Total duration of the fee scheduler
 *
 * @returns {BaseFee}
 */
declare function getFeeSchedulerParams(startingBaseFeeBps: number, endingBaseFeeBps: number, baseFeeMode: BaseFeeMode, numberOfPeriod: number, totalDuration: number): BaseFee;
/**
 * Calculate the ending base fee of fee scheduler in basis points
 * @param cliffFeeNumerator - The cliff fee numerator
 * @param numberOfPeriod - The number of period
 * @param reductionFactor - The reduction factor
 * @param feeSchedulerMode - The fee scheduler mode
 * @returns The minimum base fee in basis points
 */
declare function calculateFeeSchedulerEndingBaseFeeBps(cliffFeeNumerator: number, numberOfPeriod: number, periodFrequency: number, reductionFactor: number, baseFeeMode: BaseFeeMode): number;
/**
 * Get the rate limiter parameters
 * @param baseFeeBps - The base fee in basis points
 * @param feeIncrementBps - The fee increment in basis points
 * @param referenceAmount - The reference amount
 * @param maxLimiterDuration - The max rate limiter duration
 * @param tokenQuoteDecimal - The token quote decimal
 * @param activationType - The activation type
 * @returns The rate limiter parameters
 */
declare function getRateLimiterParams(baseFeeBps: number, feeIncrementBps: number, referenceAmount: number, maxLimiterDuration: number, tokenQuoteDecimal: TokenDecimal, activationType: ActivationType): BaseFee;
/**
 * Get the dynamic fee parameters (20% of base fee)
 * @param baseFeeBps - The base fee in basis points
 * @param maxPriceChangeBps - The max price change in basis points
 * @returns The dynamic fee parameters
 */
declare function getDynamicFeeParams(baseFeeBps: number, maxPriceChangeBps?: number): DynamicFeeParameters;
/**
 * Derive the starting base fee BPS from baseFeeParams
 * For FeeSchedulerLinear/FeeSchedulerExponential: uses endingFeeBps (the fee at end of pre-migration curve)
 * For RateLimiter: uses baseFeeBps (the cliff fee)
 * @param baseFeeParams - The base fee parameters from the pre-migration pool
 * @returns The starting base fee in basis points for the migrated pool
 */
declare function getStartingBaseFeeBpsFromBaseFeeParams(baseFeeParams: BaseFeeParams): number;
/**
 * Computes the sqrtPriceStepBps needed so that the fee schedule is fully
 * exhausted when spot price reaches a given multiple of the initial price.
 * @param priceMultiple - Target spot-price multiple (e.g. 1000 for 1000x)
 * @param numberOfPeriod - Number of fee reduction periods
 * @returns The sqrtPriceStepBps value to use on-chain
 */
declare function computeSqrtPriceStepBps(priceMultiple: number, numberOfPeriod: number): number;
/**
 * Get the migrated pool market cap fee scheduler parameters
 * @param startingBaseFeeBps - Starting (max) fee in basis points
 * @param endingBaseFeeBps - Ending (min) fee in basis points
 * @param baseFeeMode - Linear or exponential decay
 * @param numberOfPeriod - Number of fee reduction periods
 * @param priceMultiple - Target spot-price multiple from the initial price (e.g. 1000 for 1000x). Must be > 1.
 * @param schedulerExpirationDuration - Seconds after which the schedule expires to the ending fee regardless of price
 * @returns The migrated pool market cap fee scheduler parameters
 */
declare function getMigratedPoolMarketCapFeeSchedulerParams(startingBaseFeeBps: number, endingBaseFeeBps: number, dammV2BaseFeeMode: DammV2BaseFeeMode, numberOfPeriod: number, priceMultiple: number, schedulerExpirationDuration: number): MigratedPoolMarketCapFeeSchedulerParameters;
/**
 * Calculate the locked vesting parameters
 * @param totalLockedVestingAmount - The total vesting amount
 * @param numberOfVestingPeriod - The number of periods
 * @param cliffUnlockAmount - The amount to unlock at cliff
 * @param totalVestingDuration - The total duration of vesting
 * @param cliffDurationFromMigrationTime - The cliff duration from migration time
 * @param tokenBaseDecimal - The decimal of the base token
 * @returns The locked vesting parameters
 * total_locked_vesting_amount = cliff_unlock_amount + (amount_per_period * number_of_period)
 */
declare function getLockedVestingParams(totalLockedVestingAmount: number, numberOfVestingPeriod: number, cliffUnlockAmount: number, totalVestingDuration: number, cliffDurationFromMigrationTime: number, tokenBaseDecimal: TokenDecimal): LockedVestingParameters;
declare const getLiquidityVestingInfoParams: (vestingPercentage: number, bpsPerPeriod: number, numberOfPeriods: number, cliffDurationFromMigrationTime: number, totalDuration: number) => LiquidityVestingInfoParameters;
/**
 * Get the two curve
 * @param migrationSqrPrice - The migration sqrt price
 * @param initialSqrtPrice - The initial sqrt price
 * @param swapAmount - The swap amount
 * @param migrationQuoteThreshold - The migration quote threshold
 * @returns The two curve
 */
declare const getTwoCurve: (migrationSqrtPrice: BN$1, midSqrtPrice: BN$1, initialSqrtPrice: BN$1, swapAmount: BN$1, migrationQuoteThreshold: BN$1) => {
    isOk: boolean;
    sqrtStartPrice: BN$1;
    curve: {
        sqrtPrice: BN$1;
        liquidity: BN$1;
    }[];
};
/**
 * Check if rate limiter should be applied based on pool configuration and state
 * @param baseFeeMode - The base fee mode
 * @param swapBaseForQuote - Whether the swap is from base to quote
 * @param currentPoint - The current point
 * @param activationPoint - The activation point
 * @param maxLimiterDuration - The maximum limiter duration
 * @returns Whether rate limiter should be applied
 */
declare function checkRateLimiterApplied(baseFeeMode: BaseFeeMode, swapBaseForQuote: boolean, currentPoint: BN$1, activationPoint: BN$1, maxLimiterDuration: BN$1): boolean;
/**
 * Get base fee parameters based on the base fee mode
 * @param baseFeeParams - The base fee parameters
 * @param tokenQuoteDecimal - The token quote decimal
 * @param activationType - The activation type
 * @returns The base fee parameters
 */
declare function getBaseFeeParams(baseFeeParams: BaseFeeParams, tokenQuoteDecimal: TokenDecimal, activationType: ActivationType): BaseFee;
/**
 * Get the quote token amount from sqrt price
 * @param nextSqrtPrice - The next sqrt price
 * @param config - The pool configuration
 * @returns The total quote token amount
 */
declare function getQuoteReserveFromNextSqrtPrice(nextSqrtPrice: BN$1, config: PoolConfig): BN$1;
/**
 * Get the tokenomics
 * @param initialMarketCap - The initial market cap
 * @param migrationMarketCap - The migration market cap
 * @param totalLockedVestingAmount - The total locked vesting amount
 * @param totalLeftover - The total leftover
 * @param totalTokenSupply - The total token supply
 * @returns The tokenomics
 */
declare const getTokenomics: (initialMarketCap: Decimal, migrationMarketCap: Decimal, totalLockedVestingAmount: BN$1, totalLeftover: BN$1, totalTokenSupply: BN$1) => {
    bondingCurveSupply: BN$1;
    migrationSupply: BN$1;
    leftoverSupply: BN$1;
    lockedVestingSupply: BN$1;
};
/**
 * Get migrated pool fee parameters based on migration options
 * @param migrationOption - The migration option (DAMM or DAMM_V2)
 * @param migrationFeeOption - The fee option (fixed rates 0-5 or customizable)
 * @param migratedPoolFee - Optional custom migrated pool fee parameters (only used with DAMM_V2 + Customizable)
 * @returns Migrated pool fee parameters with appropriate defaults
 */
declare function getMigratedPoolFeeParams(migrationOption: MigrationOption, migrationFeeOption: MigrationFeeOption, migratedPoolFee?: MigratedPoolFeeConfig, baseFeeParams?: BaseFeeParams): MigratedPoolFeeResult;
/**
 * Get the current point based on activation type
 * @param connection - The Solana connection instance
 * @param activationType - The activation type (Slot or Time)
 * @returns The current point as a BN
 */
declare function getCurrentPoint(connection: Connection, activationType: ActivationType): Promise<BN$1>;
/**
 * Prepare the swap amount param
 * @param amount - The amount to swap
 * @param mintAddress - The mint address
 * @param connection - The Solana connection instance
 * @returns The amount in lamports
 */
declare function prepareSwapAmountParam(amount: number, mintAddress: PublicKey, connection: Connection): Promise<BN$1>;
/**
 * Calculate the locked liquidity BPS for a single vesting info at a given time.
 * @param vestingInfo - The liquidity vesting info parameters
 * @param nSeconds - Number of seconds after migration
 * @returns The locked liquidity in BPS (basis points)
 */
declare function getVestingLockedLiquidityBpsAtNSeconds(vestingInfo: LiquidityVestingInfoParameters | undefined, nSeconds: number): number;
/**
 * Calculate the locked liquidity BPS at a given time (in seconds) after migration
 * @param partnerPermanentLockedLiquidityPercentage - Partner's permanently locked liquidity percentage
 * @param creatorPermanentLockedLiquidityPercentage - Creator's permanently locked liquidity percentage
 * @param partnerLiquidityVestingInfo - Partner's liquidity vesting info (optional)
 * @param creatorLiquidityVestingInfo - Creator's liquidity vesting info (optional)
 * @param elapsedSeconds - Number of seconds after migration
 * @returns The total locked liquidity in BPS (basis points)
 */
declare function calculateLockedLiquidityBpsAtTime(partnerPermanentLockedLiquidityPercentage: number, creatorPermanentLockedLiquidityPercentage: number, partnerLiquidityVestingInfo: LiquidityVestingInfoParameters | undefined, creatorLiquidityVestingInfo: LiquidityVestingInfoParameters | undefined, elapsedSeconds: number): number;

/**
 * Derive DBC event authority
 * @returns The event authority
 */
declare function deriveDbcEventAuthority(): PublicKey;
/**
 * Derive DAMM V1 event authority
 * @returns The event authority
 */
declare function deriveDammV1EventAuthority(): PublicKey;
/**
 * Derive DAMM V2 event authority
 * @returns The event authority
 */
declare function deriveDammV2EventAuthority(): PublicKey;
/**
 * Derive Locker event authority
 * @returns The event authority
 */
declare function deriveLockerEventAuthority(): PublicKey;
/**
 * Derive DBC pool authority
 * @returns The pool authority
 */
declare function deriveDbcPoolAuthority(): PublicKey;
/**
 * Derive DAMM V1 pool authority
 * @returns The pool authority
 */
declare function deriveDammV1PoolAuthority(): PublicKey;
/**
 * Derive DAMM V2 pool authority
 * @returns The pool authority
 */
declare function deriveDammV2PoolAuthority(): PublicKey;
/**
 * Derive DBC pool address
 * @param quoteMint - The quote mint
 * @param baseMint - The base mint
 * @param config - The config
 * @returns The pool
 */
declare function deriveDbcPoolAddress(quoteMint: PublicKey, baseMint: PublicKey, config: PublicKey): PublicKey;
/**
 * Derive DAMM V1 pool address
 * @param config - The config
 * @param tokenAMint - The token A mint
 * @param tokenBMint - The token B mint
 * @returns The DAMM V1 pool address
 */
declare function deriveDammV1PoolAddress(config: PublicKey, tokenAMint: PublicKey, tokenBMint: PublicKey): PublicKey;
/**
 * Derive DAMM V2 pool address
 * @param config - The config
 * @param tokenAMint - The token A mint
 * @param tokenBMint - The token B mint
 * @returns The DAMM V2 pool address
 */
declare function deriveDammV2PoolAddress(config: PublicKey, tokenAMint: PublicKey, tokenBMint: PublicKey): PublicKey;
/**
 * Derive mint metadata address
 * @param mint - The mint
 * @returns The mint metadata address
 */
declare function deriveMintMetadata(mint: PublicKey): PublicKey;
/**
 * Derive partner metadata
 * @param feeClaimer - The fee claimer
 * @returns The partner metadata
 */
declare function derivePartnerMetadata(feeClaimer: PublicKey): PublicKey;
/**
 * Derive DBC pool metadata
 * @param pool - The pool
 * @returns The DBC pool metadata
 */
declare function deriveDbcPoolMetadata(pool: PublicKey): PublicKey;
/**
 * Derive DAMM V1 migration metadata address
 * @param virtual_pool - The virtual pool
 * @returns The DAMM migration metadata address
 */
declare function deriveDammV1MigrationMetadataAddress(virtual_pool: PublicKey): PublicKey;
/**
 * Derive DAMM V2 migration metadata address
 * @param virtual_pool - The virtual pool
 * @returns The DAMM migration metadata address
 */
declare function deriveDammV2MigrationMetadataAddress(virtual_pool: PublicKey): PublicKey;
/**
 * Derive DBC token vault address
 * @param pool - The pool
 * @param mint - The mint
 * @returns The token vault
 */
declare function deriveDbcTokenVaultAddress(pool: PublicKey, mint: PublicKey): PublicKey;
/**
 * Derive DAMM V1 vault LP address
 * @param vault - The vault
 * @param pool - The pool
 * @returns The vault LP address
 */
declare function deriveDammV1VaultLPAddress(vault: PublicKey, pool: PublicKey): PublicKey;
/**
 * Derive DAMM V2 token vault address
 * @param pool - The pool
 * @param mint - The mint
 * @returns The token vault
 */
declare function deriveDammV2TokenVaultAddress(pool: PublicKey, mint: PublicKey): PublicKey;
/**
 * Derive vault address
 * @param mint - The mint
 * @param payer - The payer
 * @returns The vault address
 */
declare function deriveVaultAddress(mint: PublicKey, payer: PublicKey): PublicKey;
/**
 * Derive vault addresses
 * @param tokenMint - The token mint
 * @param seedBaseKey - The seed base key
 * @returns The vault PDAs
 */
declare const deriveVaultPdas: (tokenMint: PublicKey, seedBaseKey?: PublicKey) => {
    vaultPda: PublicKey;
    tokenVaultPda: PublicKey;
    lpMintPda: PublicKey;
};
/**
 * Derive token vault address
 * @param vaultKey - The vault address
 * @returns The token vault address
 */
declare function deriveTokenVaultKey(vaultKey: PublicKey): PublicKey;
/**
 * Derive Vault LP mint address
 * @param pool - The pool
 * @returns The Vault LP mint address
 */
declare function deriveVaultLpMintAddress(pool: PublicKey): PublicKey;
/**
 * Derive DAMM V1 LP mint address
 * @param pool - The pool
 * @returns The LP mint address
 */
declare function deriveDammV1LpMintAddress(pool: PublicKey): PublicKey;
/**
 * Derive DAMM V2 position address
 * @param positionNft - The position NFT
 * @returns The DAMM V2 position address
 */
declare function derivePositionAddress(positionNft: PublicKey): PublicKey;
/**
 * Derive DAMM V2 position NFT account
 * @param positionNftMint - The position NFT mint
 * @returns The DAMM V2 position NFT account
 */
declare function derivePositionNftAccount(positionNftMint: PublicKey): PublicKey;
/**
 * Derive DAMM V1 lock escrow address
 * @param dammPool - The DAMM pool
 * @param creator - The creator of the virtual pool
 * @returns The lock escrow address
 */
declare function deriveDammV1LockEscrowAddress(dammPool: PublicKey, creator: PublicKey): PublicKey;
/**
 * Derive DAMM V2 lock escrow address
 * @param dammPool - The DAMM pool
 * @param creator - The creator of the virtual pool
 * @returns The lock escrow address
 */
declare function deriveDammV2LockEscrowAddress(dammPool: PublicKey, creator: PublicKey): PublicKey;
/**
 * Derive escrow address
 * @param base - The base mint
 * @returns The escrow address
 */
declare function deriveEscrow(base: PublicKey): PublicKey;
/**
 * Derive DAMM V1 protocol fee address
 * @param mint - The mint
 * @param pool - The pool
 * @returns The protocol fee address
 */
declare function deriveDammV1ProtocolFeeAddress(mint: PublicKey, pool: PublicKey): PublicKey;
/**
 * Derive base key for the locker
 * @param virtualPool - The virtual pool
 * @returns The base key for the locker
 */
declare function deriveBaseKeyForLocker(virtualPool: PublicKey): PublicKey;

/**
 * Convert a number or string to a BN value in lamports
 * @param amount - The amount to convert
 * @param tokenDecimal - The decimal precision of the token
 * @returns The amount in BN
 */
declare function convertToLamports(amount: number | string, tokenDecimal: number): BN$1;
/**
 * Get BN value from decimal value after roundown
 * @param value - The decimal value
 * @returns value in BN after roundown
 */
declare function fromDecimalToBN(value: Decimal): BN$1;
/**
 * Create a memcmp filter for owner-based filtering
 * @param owner - The owner public key or string
 * @param offset - The offset where the owner field is located in the account data
 * @returns A GetProgramAccountsFilter array with the owner filter
 */
declare function createProgramAccountFilter(owner: PublicKey | string, offset: number): GetProgramAccountsFilter[];
/**
 * Check if a mint is the native SOL mint
 * @param mint - The mint to check
 * @returns Whether the mint is the native SOL mint
 */
declare function isNativeSol(mint: PublicKey): boolean;
/**
 * Check if the locked vesting is the default
 * @param lockedVesting - The locked vesting parameters
 * @returns true if the locked vesting is the default, false otherwise
 */
declare function isDefaultLockedVesting(lockedVesting: {
    amountPerPeriod: BN$1;
    cliffDurationFromMigrationTime: BN$1;
    frequency: BN$1;
    numberOfPeriod: BN$1;
    cliffUnlockAmount: BN$1;
}): boolean;
/**
 * Convert decimal to a BN
 * @param value - The value
 * @returns The BN
 */
declare function convertDecimalToBN(value: Decimal): BN$1;
/**
 * Converts basis points (bps) to fee numerator
 * 1 bps = 0.01% = 0.0001 in decimal
 *
 * @param bps - The value in basis points [1-10_000]
 * @returns The equivalent fee numerator
 */
declare function bpsToFeeNumerator(bps: number): BN$1;
/**
 * Converts fee numerator back to basis points (bps)
 *
 * @param feeNumerator - The fee numerator to convert
 * @returns The equivalent value in basis points [1-10_000]
 */
declare function feeNumeratorToBps(feeNumerator: BN$1): number;

/**
 * Validate base fee, scheduler, rate-limiter, and dynamic fee settings for a pool config.
 */
declare function validatePoolFees(poolFees: PoolFeeParameters, collectFeeMode: CollectFeeMode, activationType: ActivationType): boolean;
/**
 * Validate fee scheduler parameters and resulting fee bounds.
 */
declare function validateFeeScheduler(numberOfPeriod: number, periodFrequency: BN$1, reductionFactor: BN$1, cliffFeeNumerator: BN$1, baseFeeMode: BaseFeeMode): boolean;
/**
 * Validate rate-limiter parameters and activation duration bounds.
 */
declare function validateFeeRateLimiter(cliffFeeNumerator: BN$1, feeIncrementBps: BN$1, maxLimiterDuration: BN$1, referenceAmount: BN$1, collectFeeMode: CollectFeeMode, activationType: ActivationType): boolean;
declare function validateDynamicFee(dynamicFee: DynamicFeeParameters | undefined): boolean;
/**
 * Return whether the DBC collect fee mode is supported.
 */
declare function validateCollectFeeMode(collectFeeMode: CollectFeeMode): boolean;
/**
 * Return whether the selected migration path supports the base token type.
 */
declare function validateMigrationAndTokenType(migrationOption: MigrationOption, tokenType: TokenType): boolean;
/**
 * Return whether the activation type is supported.
 */
declare function validateActivationType(activationType: ActivationType): boolean;
/**
 * Return whether the migration fee option is supported for the migration path.
 */
declare function validateMigrationFeeOption(migrationFeeOption: MigrationFeeOption, migrationOption?: MigrationOption): boolean;
/**
 * Return whether the token decimal is within the supported range.
 */
declare function validateTokenDecimals(tokenDecimal: TokenDecimal): boolean;
/**
 * Return whether all liquidity distribution percentages sum to 100.
 */
declare function validateLPPercentages(partnerLiquidityPercentage: number, partnerPermanentLockedLiquidityPercentage: number, creatorLiquidityPercentage: number, creatorPermanentLockedLiquidityPercentage: number, partnerVestingPercentage: number, creatorVestingPercentage: number): boolean;
/**
 * Validate curve point ordering, liquidity, and supported sqrt price bounds.
 */
declare function validateCurve(curve: Array<{
    sqrtPrice: BN$1;
    liquidity: BN$1;
}>, sqrtStartPrice: BN$1): boolean;
/**
 * Validate token supply can cover swap, migration, vesting, and leftover requirements.
 */
declare function validateTokenSupply(tokenSupply: {
    preMigrationTokenSupply: BN$1;
    postMigrationTokenSupply: BN$1;
}, leftoverReceiver: PublicKey, swapBaseAmount: BN$1, migrationBaseAmount: BN$1, lockedVesting: LockedVestingParameters, swapBaseAmountBuffer: BN$1): boolean;
/**
 * Return whether the token authority option is supported.
 */
declare function validateTokenAuthorityOptions(option: TokenAuthorityOption): boolean;
/**
 * Return whether the token authority option grants mint authority to the creator or partner.
 */
declare function hasMintAuthority(option: TokenAuthorityOption): boolean;
/**
 * Return whether a transfer-hook program is not DBC, SPL Token, SPL Token-2022, or the default pubkey.
 */
declare function validateTransferHookProgram(transferHookProgram: PublicKey | undefined): boolean;
/**
 * Return whether a transfer-hook program is valid and resolves to an executable account.
 */
declare function validateTransferHookProgramExecutable(connection: Connection, transferHookProgram: PublicKey): Promise<boolean>;
/**
 * Return whether a quote mint passes the sync portion of the supported quote mint check.
 */
declare function validateQuoteMintBasic(quoteMint: PublicKey): boolean;
/**
 * Return whether the pool creation fee is zero or within the supported lamport range.
 */
declare function validatePoolCreationFee(poolCreationFee: BN$1): boolean;
/**
 * Return whether liquidity vesting info is disabled or internally consistent.
 */
declare function validateLiquidityVestingInfo(vestingInfo: LiquidityVestingInfoParameters): boolean;
/**
 * Validate that at least `MIN_LOCKED_LIQUIDITY_BPS` is locked one day after migration.
 */
declare function validateMinimumLockedLiquidity(partnerPermanentLockedLiquidityPercentage: number, creatorPermanentLockedLiquidityPercentage: number, partnerLiquidityVestingInfo: LiquidityVestingInfoParameters | undefined, creatorLiquidityVestingInfo: LiquidityVestingInfoParameters | undefined): boolean;
declare function validateMigratedCollectFeeMode(collectFeeMode: number): boolean;
declare function validateCompoundingFeeBps(collectFeeMode: number, compoundingFeeBps: number): boolean;
declare function validateMigratedPoolFee(migratedPoolFee: MigratedPoolFee, migrationOption?: MigrationOption, migrationFeeOption?: MigrationFeeOption, migratedPoolMarketCapFeeSchedulerParams?: MigratedPoolMarketCapFeeSchedulerParameters, compoundingFeeBps?: number, migratedPoolBaseFeeMode?: DammV2BaseFeeMode): boolean;
/**
 * Validate config parameters and throw the first actionable error encountered.
 */
declare function validateConfigParameters(configParam: Omit<CreateConfigParams, 'config' | 'feeClaimer' | 'quoteMint' | 'payer'>, options?: boolean | {
    isTransferHook?: boolean;
    transferHookProgram?: PublicKey;
}): void;
/**
 * Return whether a pool creation token type matches its config.
 */
declare function validateBaseTokenType(baseTokenType: TokenType, poolConfig: PoolConfig): boolean;
/**
 * Validate that an owner has enough SOL or token balance for a swap.
 */
declare function validateBalance(connection: Connection, owner: PublicKey, inputMint: PublicKey, amountIn: BN$1, inputTokenAccount: PublicKey): Promise<boolean>;
/**
 * Validate that a swap amount is greater than zero.
 */
declare function validateSwapAmount(amountIn: BN$1): boolean;
/**
 * Validate a pool deadline timestamp: 0 disables the deadline, otherwise it must be in the future.
 */
declare function validateDeadlineTimestamp(deadlineTimestamp: BN$1): boolean;
/**
 * Validate DAMM v2 migrated-pool base fee modes and market-cap scheduler requirements.
 */
declare function validateMigratedPoolBaseFeeMode(migratedPoolBaseFeeMode: DammV2BaseFeeMode, migratedPoolMarketCapFeeSchedulerParams: MigratedPoolMarketCapFeeSchedulerParameters, migrationOption?: MigrationOption, poolFeeBps?: number): boolean;
/**
 * Validate that market-cap fee scheduling has a starting migrated pool fee.
 */
declare function validateMarketCapFeeSchedulerRequiresPoolFeeBps(migratedPoolMarketCapFeeSchedulerParams: MigratedPoolMarketCapFeeSchedulerParameters, migratedPoolFee: MigratedPoolFee | undefined): boolean;
declare function validateMigrationFee(migrationFee: {
    feePercentage: number;
    creatorFeePercentage: number;
}): boolean;

/**
 * Build config parameters for a single curve segment constant product curve.
 */
declare function buildCurve(params: BuildCurveParams): ConfigParameters;
/**
 * Build config parameters from initial and migration market caps for a single curve segment constant product curve.
 */
declare function buildCurveWithMarketCap(params: BuildCurveWithMarketCapParams): ConfigParameters;
/**
 * Build config parameters for a two-segment curve.
 */
declare function buildCurveWithTwoSegments(params: BuildCurveWithTwoSegmentsParams): ConfigParameters;
/**
 * Build config parameters for a two-segment constant product curve that passes through a mid price.
 */
declare function buildCurveWithMidPrice(params: BuildCurveWithMidPriceParams): ConfigParameters;
/**
 * Build config parameters for a sixteen-segment constant product curve whose segment shape is controlled by liquidity weights.
 */
declare function buildCurveWithLiquidityWeights(params: BuildCurveWithLiquidityWeightsParams): ConfigParameters;
/**
 * Build config parameters for an up to sixteen-segment constant product curve with custom sqrt prices instead of liquidity weights.
 * This allows you to specify exactly what price points you want in your curve.
 *
 * @remarks
 * The sqrtPrices array must:
 * - Be in ascending order
 * - Have at least 2 elements (start and end price)
 * - The first price will be the starting price (pMin)
 * - The last price will be the migration price (pMax)
 *
 * The liquidityWeights array (if provided):
 * - Must have length = sqrtPrices.length - 1
 * - Each weight determines how much liquidity is allocated to that price segment
 * - If not provided, liquidity is distributed evenly across all segments
 *
 * Example:
 * sqrtPrices = [p0, p1, p2, p3] creates 3 segments:
 * - Segment 0: p0 to p1 with weight[0]
 * - Segment 1: p1 to p2 with weight[1]
 * - Segment 2: p2 to p3 with weight[2]
 */
declare function buildCurveWithCustomSqrtPrices(params: BuildCurveWithCustomSqrtPricesParams): ConfigParameters;

/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/vault.json`.
 */
type Vault = {
    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
    metadata: {
        name: 'vault';
        version: '0.9.4';
        spec: '0.1.0';
        description: 'Created with Anchor';
    };
    docs: ['Program for vault'];
    instructions: [
        {
            name: 'addStrategy';
            docs: ['add a strategy'];
            discriminator: [64, 123, 127, 227, 192, 234, 198, 20];
            accounts: [
                {
                    name: 'vault';
                    docs: ['vault'];
                    writable: true;
                    relations: ['strategy'];
                },
                {
                    name: 'strategy';
                    docs: ['strategy'];
                },
                {
                    name: 'admin';
                    docs: ['admin'];
                    signer: true;
                    relations: ['vault'];
                }
            ];
            args: [];
        },
        {
            name: 'claimRewards';
            docs: ['claim rewards from a strategy'];
            discriminator: [4, 144, 132, 71, 116, 23, 151, 80];
            accounts: [
                {
                    name: 'vault';
                    docs: ['vault'];
                },
                {
                    name: 'strategy';
                    docs: ['strategy'];
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'tokenRewardAcc';
                    docs: ['tokenRewardAcc'];
                    writable: true;
                },
                {
                    name: 'operator';
                    docs: ['operator'];
                    signer: true;
                }
            ];
            args: [];
        },
        {
            name: 'deposit';
            docs: ['user deposit liquidity to vault'];
            discriminator: [242, 35, 198, 137, 82, 225, 242, 182];
            accounts: [
                {
                    name: 'vault';
                    docs: ['vault'];
                    writable: true;
                },
                {
                    name: 'tokenVault';
                    docs: ['tokenVault'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'lpMint';
                    docs: ['lpMint'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'userToken';
                    docs: ['userToken'];
                    writable: true;
                },
                {
                    name: 'userLp';
                    docs: ['userLp'];
                    writable: true;
                },
                {
                    name: 'user';
                    docs: ['user'];
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [
                {
                    name: 'tokenAmount';
                    type: 'u64';
                },
                {
                    name: 'minimumLpTokenAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'depositStrategy';
            docs: ['deposit liquidity to a strategy'];
            discriminator: [246, 82, 57, 226, 131, 222, 253, 249];
            accounts: [
                {
                    name: 'vault';
                    docs: ['vault'];
                    writable: true;
                },
                {
                    name: 'strategy';
                    docs: ['strategy'];
                    writable: true;
                },
                {
                    name: 'tokenVault';
                    docs: ['tokenVault'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'feeVault';
                    docs: ['feeVault'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'lpMint';
                    docs: ['lpMint'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'strategyProgram';
                },
                {
                    name: 'collateralVault';
                    docs: ['collateralVault'];
                    writable: true;
                },
                {
                    name: 'reserve';
                    writable: true;
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'operator';
                    docs: ['operator'];
                    signer: true;
                }
            ];
            args: [
                {
                    name: 'amount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'enableVault';
            docs: ['enable vault'];
            discriminator: [145, 82, 241, 156, 26, 154, 233, 211];
            accounts: [
                {
                    name: 'vault';
                    docs: ['Vault account'];
                    writable: true;
                },
                {
                    name: 'admin';
                    docs: ['Admin account'];
                    signer: true;
                    relations: ['vault'];
                }
            ];
            args: [
                {
                    name: 'enabled';
                    type: 'u8';
                }
            ];
        },
        {
            name: 'getUnlockedAmount';
            docs: ['get unlocked amount'];
            discriminator: [22, 184, 50, 213, 60, 168, 181, 227];
            accounts: [
                {
                    name: 'vault';
                    docs: ['Vault account'];
                }
            ];
            args: [];
        },
        {
            name: 'initialize';
            docs: ['initialize new vault'];
            discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
            accounts: [
                {
                    name: 'vault';
                    docs: [
                        'This is base account for all vault',
                        'No need base key now because we only allow 1 vault per token now',
                        'Vault account'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [118, 97, 117, 108, 116];
                            },
                            {
                                kind: 'account';
                                path: 'tokenMint';
                            },
                            {
                                kind: 'const';
                                value: [
                                    245,
                                    105,
                                    223,
                                    222,
                                    32,
                                    35,
                                    51,
                                    89,
                                    141,
                                    199,
                                    215,
                                    75,
                                    29,
                                    148,
                                    184,
                                    98,
                                    71,
                                    121,
                                    193,
                                    248,
                                    47,
                                    30,
                                    37,
                                    166,
                                    91,
                                    110,
                                    78,
                                    248,
                                    163,
                                    190,
                                    155,
                                    155
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: ['Payer can be anyone'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'tokenVault';
                    docs: ['Token vault account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'vault';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenMint';
                    docs: ['Token mint account'];
                },
                {
                    name: 'lpMint';
                    docs: ['LP mint account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [108, 112, 95, 109, 105, 110, 116];
                            },
                            {
                                kind: 'account';
                                path: 'vault';
                            }
                        ];
                    };
                },
                {
                    name: 'rent';
                    docs: ['rent'];
                    address: 'SysvarRent111111111111111111111111111111111';
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'systemProgram';
                    docs: ['systemProgram'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [];
        },
        {
            name: 'initializeIdleVault';
            docs: ['initialize idle vault the vault that cannot be rebalanced'];
            discriminator: [100, 187, 43, 147, 149, 180, 117, 223];
            accounts: [
                {
                    name: 'vault';
                    docs: ['Vault account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [118, 97, 117, 108, 116];
                            },
                            {
                                kind: 'account';
                                path: 'tokenMint';
                            },
                            {
                                kind: 'const';
                                value: [
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: ['Payer can be anyone'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'tokenVault';
                    docs: ['Token vault account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'vault';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenMint';
                    docs: ['Token mint account'];
                },
                {
                    name: 'lpMint';
                    docs: ['LP mint'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [108, 112, 95, 109, 105, 110, 116];
                            },
                            {
                                kind: 'account';
                                path: 'vault';
                            }
                        ];
                    };
                },
                {
                    name: 'rent';
                    docs: ['rent'];
                    address: 'SysvarRent111111111111111111111111111111111';
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'systemProgram';
                    docs: ['systemProgram'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [];
        },
        {
            name: 'initializeStrategy';
            docs: [
                'Initialize a strategy and add strategy to vault.strategies index'
            ];
            discriminator: [208, 119, 144, 145, 178, 57, 105, 252];
            accounts: [
                {
                    name: 'vault';
                    docs: ['Vault account'];
                    writable: true;
                },
                {
                    name: 'strategyProgram';
                },
                {
                    name: 'strategy';
                    docs: ['Strategy account'];
                    writable: true;
                },
                {
                    name: 'reserve';
                    writable: true;
                },
                {
                    name: 'collateralVault';
                    docs: ['Collateral vault account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    99,
                                    111,
                                    108,
                                    108,
                                    97,
                                    116,
                                    101,
                                    114,
                                    97,
                                    108,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'strategy';
                            }
                        ];
                    };
                },
                {
                    name: 'collateralMint';
                    docs: ['Collateral mint account'];
                },
                {
                    name: 'admin';
                    docs: ['Admin account'];
                    writable: true;
                    signer: true;
                    relations: ['vault'];
                },
                {
                    name: 'systemProgram';
                    docs: ['System program account'];
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'rent';
                    docs: ['Rent account'];
                    address: 'SysvarRent111111111111111111111111111111111';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program account'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [
                {
                    name: 'bumps';
                    type: {
                        defined: {
                            name: 'strategyBumps';
                        };
                    };
                },
                {
                    name: 'strategyType';
                    type: {
                        defined: {
                            name: 'strategyType';
                        };
                    };
                }
            ];
        },
        {
            name: 'removeStrategy';
            docs: ['remove a strategy'];
            discriminator: [185, 238, 33, 91, 134, 210, 97, 26];
            accounts: [
                {
                    name: 'vault';
                    docs: ['Vault account'];
                    writable: true;
                },
                {
                    name: 'strategy';
                    docs: ['Strategy account'];
                    writable: true;
                },
                {
                    name: 'strategyProgram';
                },
                {
                    name: 'collateralVault';
                    docs: ['Collateral vault account'];
                    writable: true;
                },
                {
                    name: 'reserve';
                    writable: true;
                },
                {
                    name: 'tokenVault';
                    docs: ['tokenVault'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'feeVault';
                    docs: ['feeVault'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'lpMint';
                    docs: ['lpMint'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'admin';
                    docs: ['admin'];
                    signer: true;
                    relations: ['vault'];
                }
            ];
            args: [];
        },
        {
            name: 'removeStrategy2';
            docs: ['remove a strategy by advance payment'];
            discriminator: [138, 104, 208, 148, 126, 35, 195, 14];
            accounts: [
                {
                    name: 'vault';
                    docs: ['Vault account'];
                    writable: true;
                },
                {
                    name: 'strategy';
                    docs: ['Strategy account'];
                    writable: true;
                },
                {
                    name: 'strategyProgram';
                },
                {
                    name: 'collateralVault';
                    docs: ['Collateral vault account'];
                    writable: true;
                },
                {
                    name: 'reserve';
                    writable: true;
                },
                {
                    name: 'tokenVault';
                    docs: ['tokenVault'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'tokenAdminAdvancePayment';
                    docs: [
                        'token_advance_payment',
                        'the owner of token_advance_payment must be admin'
                    ];
                    writable: true;
                },
                {
                    name: 'tokenVaultAdvancePayment';
                    docs: [
                        'tokenVaultAdvancePayment',
                        "the account must be different from token_vault and strategy's related token account",
                        'the owner of token_advance_payment must be vault'
                    ];
                    writable: true;
                },
                {
                    name: 'feeVault';
                    docs: ['feeVault'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'lpMint';
                    docs: ['lpMint'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'admin';
                    docs: ['admin'];
                    signer: true;
                    relations: ['vault'];
                }
            ];
            args: [
                {
                    name: 'maxAdminPayAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'setOperator';
            docs: ['set new operator'];
            discriminator: [238, 153, 101, 169, 243, 131, 36, 1];
            accounts: [
                {
                    name: 'vault';
                    docs: ['Vault account'];
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'admin';
                    docs: ['admin'];
                    signer: true;
                    relations: ['vault'];
                }
            ];
            args: [];
        },
        {
            name: 'transferAdmin';
            docs: ['transfer admin'];
            discriminator: [42, 242, 66, 106, 228, 10, 111, 156];
            accounts: [
                {
                    name: 'vault';
                    docs: ['Vault account'];
                    writable: true;
                },
                {
                    name: 'admin';
                    docs: ['Admin account'];
                    signer: true;
                    relations: ['vault'];
                },
                {
                    name: 'newAdmin';
                    docs: ['New vault admin'];
                    signer: true;
                }
            ];
            args: [];
        },
        {
            name: 'transferFeeVault';
            docs: ['transfer fee account'];
            discriminator: [24, 18, 129, 149, 149, 32, 45, 105];
            accounts: [
                {
                    name: 'vault';
                    docs: ['Vault account'];
                    writable: true;
                },
                {
                    name: 'admin';
                    docs: ['Admin account'];
                    signer: true;
                    relations: ['vault'];
                },
                {
                    name: 'newFeeVault';
                    docs: ['New fee vault account'];
                }
            ];
            args: [];
        },
        {
            name: 'updateLockedProfitDegradation';
            docs: ['update locked profit degradation'];
            discriminator: [103, 192, 9, 190, 43, 209, 235, 115];
            accounts: [
                {
                    name: 'vault';
                    docs: ['Vault account'];
                    writable: true;
                },
                {
                    name: 'admin';
                    docs: ['Admin account'];
                    signer: true;
                    relations: ['vault'];
                }
            ];
            args: [
                {
                    name: 'lockedProfitDegradation';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'withdraw';
            docs: ['user withdraw liquidity from vault'];
            discriminator: [183, 18, 70, 156, 148, 109, 161, 34];
            accounts: [
                {
                    name: 'vault';
                    docs: ['vault'];
                    writable: true;
                },
                {
                    name: 'tokenVault';
                    docs: ['tokenVault'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'lpMint';
                    docs: ['lpMint'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'userToken';
                    docs: ['userToken'];
                    writable: true;
                },
                {
                    name: 'userLp';
                    docs: ['userLp'];
                    writable: true;
                },
                {
                    name: 'user';
                    docs: ['user'];
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [
                {
                    name: 'unmintAmount';
                    type: 'u64';
                },
                {
                    name: 'minOutAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'withdrawDirectlyFromStrategy';
            docs: [
                "user withdraw liquidity from vault, if vault reserve doesn't have enough liquidity, it will withdraw from the strategy firstly"
            ];
            discriminator: [201, 141, 146, 46, 173, 116, 198, 22];
            accounts: [
                {
                    name: 'vault';
                    docs: ['vault'];
                    writable: true;
                },
                {
                    name: 'strategy';
                    docs: ['strategy'];
                    writable: true;
                },
                {
                    name: 'reserve';
                    writable: true;
                },
                {
                    name: 'strategyProgram';
                },
                {
                    name: 'collateralVault';
                    docs: ['collateralVault'];
                    writable: true;
                },
                {
                    name: 'tokenVault';
                    docs: ['tokenVault'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'lpMint';
                    docs: ['lpMint'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'feeVault';
                    docs: ['feeVault'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'userToken';
                    docs: ['userToken'];
                    writable: true;
                },
                {
                    name: 'userLp';
                    docs: ['userLp'];
                    writable: true;
                },
                {
                    name: 'user';
                    docs: ['user'];
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [
                {
                    name: 'unmintAmount';
                    type: 'u64';
                },
                {
                    name: 'minOutAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'withdrawStrategy';
            docs: ['withdraw liquidity from a strategy'];
            discriminator: [31, 45, 162, 5, 193, 217, 134, 188];
            accounts: [
                {
                    name: 'vault';
                    docs: ['vault'];
                    writable: true;
                },
                {
                    name: 'strategy';
                    docs: ['strategy'];
                    writable: true;
                },
                {
                    name: 'tokenVault';
                    docs: ['tokenVault'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'feeVault';
                    docs: ['feeVault'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'lpMint';
                    docs: ['lpMint'];
                    writable: true;
                    relations: ['vault'];
                },
                {
                    name: 'strategyProgram';
                },
                {
                    name: 'collateralVault';
                    docs: ['collateralVault'];
                    writable: true;
                },
                {
                    name: 'reserve';
                    writable: true;
                },
                {
                    name: 'tokenProgram';
                    docs: ['tokenProgram'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'operator';
                    docs: ['operator'];
                    signer: true;
                }
            ];
            args: [
                {
                    name: 'amount';
                    type: 'u64';
                }
            ];
        }
    ];
    accounts: [
        {
            name: 'strategy';
            discriminator: [174, 110, 39, 119, 82, 106, 169, 102];
        },
        {
            name: 'vault';
            discriminator: [211, 8, 232, 43, 2, 152, 117, 119];
        }
    ];
    events: [
        {
            name: 'addLiquidity';
            discriminator: [31, 94, 125, 90, 227, 52, 61, 186];
        },
        {
            name: 'claimReward';
            discriminator: [148, 116, 134, 204, 22, 171, 85, 95];
        },
        {
            name: 'performanceFee';
            discriminator: [28, 70, 231, 223, 81, 109, 239, 167];
        },
        {
            name: 'removeLiquidity';
            discriminator: [116, 244, 97, 232, 103, 31, 152, 58];
        },
        {
            name: 'reportLoss';
            discriminator: [154, 36, 158, 196, 32, 163, 123, 126];
        },
        {
            name: 'strategyDeposit';
            discriminator: [205, 53, 91, 239, 34, 136, 73, 47];
        },
        {
            name: 'strategyWithdraw';
            discriminator: [120, 76, 208, 95, 221, 210, 229, 189];
        },
        {
            name: 'totalAmount';
            discriminator: [92, 200, 122, 145, 211, 203, 49, 205];
        }
    ];
    errors: [
        {
            code: 6000;
            name: 'vaultIsDisabled';
            msg: 'Vault is disabled';
        },
        {
            code: 6001;
            name: 'exceededSlippage';
            msg: 'Exceeded slippage tolerance';
        },
        {
            code: 6002;
            name: 'strategyIsNotExisted';
            msg: 'Strategy is not existed';
        },
        {
            code: 6003;
            name: 'unAuthorized';
            msg: 'unAuthorized';
        },
        {
            code: 6004;
            name: 'mathOverflow';
            msg: 'Math operation overflow';
        },
        {
            code: 6005;
            name: 'protocolIsNotSupported';
            msg: 'Protocol is not supported';
        },
        {
            code: 6006;
            name: 'unMatchReserve';
            msg: 'Reserve does not support token mint';
        },
        {
            code: 6007;
            name: 'invalidLockedProfitDegradation';
            msg: 'lockedProfitDegradation is invalid';
        },
        {
            code: 6008;
            name: 'maxStrategyReached';
            msg: 'Maximum number of strategies have been reached';
        },
        {
            code: 6009;
            name: 'strategyExisted';
            msg: 'Strategy existed';
        },
        {
            code: 6010;
            name: 'invalidUnmintAmount';
            msg: 'Invalid unmint amount';
        },
        {
            code: 6011;
            name: 'invalidAccountsForStrategy';
            msg: 'Invalid accounts for strategy';
        },
        {
            code: 6012;
            name: 'invalidBump';
            msg: 'Invalid bump';
        },
        {
            code: 6013;
            name: 'amountMustGreaterThanZero';
            msg: 'Amount must be greater than 0';
        },
        {
            code: 6014;
            name: 'mangoIsNotSupportedAnymore';
            msg: 'Mango is not supported anymore';
        },
        {
            code: 6015;
            name: 'strategyIsNotSupported';
            msg: 'Strategy is not supported';
        },
        {
            code: 6016;
            name: 'payAmountIsExceeded';
            msg: 'Pay amount is exceeded';
        },
        {
            code: 6017;
            name: 'feeVaultIsNotSet';
            msg: 'Fee vault is not set';
        },
        {
            code: 6018;
            name: 'lendingAssertionViolation';
            msg: 'deposit amount in lending is not matched';
        },
        {
            code: 6019;
            name: 'haveMoneyInLending';
            msg: 'Cannot remove strategy because we have some in lending';
        },
        {
            code: 6020;
            name: 'invalidPrecisionLoss';
            msg: 'Invalid precision loss';
        },
        {
            code: 6021;
            name: 'undeterminedError';
            msg: 'Undetermined error';
        }
    ];
    types: [
        {
            name: 'addLiquidity';
            docs: ['AddLiquidity event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lpMintAmount';
                        docs: ['lpMintAmount'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenAmount';
                        docs: ['tokenAmount'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'claimReward';
            docs: ['ClaimReward event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'strategyType';
                        docs: ['strategyType'];
                        type: {
                            defined: {
                                name: 'strategyType';
                            };
                        };
                    },
                    {
                        name: 'tokenAmount';
                        docs: ['tokenAmount'];
                        type: 'u64';
                    },
                    {
                        name: 'mintAccount';
                        docs: ['mintAccount'];
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'lockedProfitTracker';
            docs: ['LockedProfitTracker struct'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lastUpdatedLockedProfit';
                        docs: ['The total locked profit from the last report'];
                        type: 'u64';
                    },
                    {
                        name: 'lastReport';
                        docs: ['The last timestamp (in seconds) rebalancing'];
                        type: 'u64';
                    },
                    {
                        name: 'lockedProfitDegradation';
                        docs: ['Rate per second of degradation'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'performanceFee';
            docs: ['PerformanceFee event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lpMintMore';
                        docs: ['lpMintMore'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'removeLiquidity';
            docs: ['RemoveLiquidity event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lpUnmintAmount';
                        docs: ['lpUnmintAmount'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenAmount';
                        docs: ['tokenAmount'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'reportLoss';
            docs: ['ReportLoss event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'strategy';
                        docs: ['strategy'];
                        type: 'pubkey';
                    },
                    {
                        name: 'loss';
                        docs: ['loss'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'strategy';
            docs: ['Strategy struct'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'reserve';
                        docs: [
                            'Lending pool address, that the strategy will deposit/withdraw balance'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'collateralVault';
                        docs: [
                            'The token account, that holds the collateral token'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'strategyType';
                        docs: ['Specify type of strategy'];
                        type: {
                            defined: {
                                name: 'strategyType';
                            };
                        };
                    },
                    {
                        name: 'currentLiquidity';
                        docs: [
                            'The liquidity in strategy at the time vault deposit/withdraw from a lending protocol'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'bumps';
                        docs: [
                            'Hold some bumps, in case the strategy needs to use other seeds to sign a CPI call.'
                        ];
                        type: {
                            array: ['u8', 10];
                        };
                    },
                    {
                        name: 'vault';
                        docs: ['Vault address, that the strategy belongs'];
                        type: 'pubkey';
                    },
                    {
                        name: 'isDisable';
                        docs: [
                            'If we remove strategy by remove_strategy2 endpoint, this account will be never added again'
                        ];
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'strategyBumps';
            docs: ['Strategy bumps struct'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'strategyIndex';
                        docs: ['strategyIndex'];
                        type: 'u8';
                    },
                    {
                        name: 'otherBumps';
                        docs: ['Bumps of PDAs for the integrated protocol.'];
                        type: {
                            array: ['u8', 10];
                        };
                    }
                ];
            };
        },
        {
            name: 'strategyDeposit';
            docs: ['StrategyDeposit event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'strategyType';
                        docs: ['strategyType'];
                        type: {
                            defined: {
                                name: 'strategyType';
                            };
                        };
                    },
                    {
                        name: 'tokenAmount';
                        docs: ['tokenAmount'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'strategyType';
            docs: ['StrategyType struct'];
            type: {
                kind: 'enum';
                variants: [
                    {
                        name: 'portFinanceWithoutLm';
                    },
                    {
                        name: 'portFinanceWithLm';
                    },
                    {
                        name: 'solendWithoutLm';
                    },
                    {
                        name: 'mango';
                    },
                    {
                        name: 'solendWithLm';
                    },
                    {
                        name: 'apricotWithoutLm';
                    },
                    {
                        name: 'francium';
                    },
                    {
                        name: 'tulip';
                    },
                    {
                        name: 'vault';
                    },
                    {
                        name: 'drift';
                    },
                    {
                        name: 'frakt';
                    },
                    {
                        name: 'marginfi';
                    },
                    {
                        name: 'kamino';
                    },
                    {
                        name: 'jupLend';
                    }
                ];
            };
        },
        {
            name: 'strategyWithdraw';
            docs: ['StrategyWithdraw event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'strategyType';
                        docs: ['strategyType'];
                        type: {
                            defined: {
                                name: 'strategyType';
                            };
                        };
                    },
                    {
                        name: 'collateralAmount';
                        docs: ['collateralAmount'];
                        type: 'u64';
                    },
                    {
                        name: 'estimatedTokenAmount';
                        docs: ['estimatedTokenAmount'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'totalAmount';
            docs: ['TotalAmount event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'totalAmount';
                        docs: ['totalAmount'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'vault';
            docs: ['Vault struct'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'enabled';
                        docs: [
                            'The flag, if admin set enable = false, then the user can only withdraw and cannot deposit in the vault.'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'bumps';
                        docs: ['Vault nonce, to create vault seeds'];
                        type: {
                            defined: {
                                name: 'vaultBumps';
                            };
                        };
                    },
                    {
                        name: 'totalAmount';
                        docs: [
                            'The total liquidity of the vault, including remaining tokens in token_vault and the liquidity in all strategies.'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'tokenVault';
                        docs: ['Token account, hold liquidity in vault reserve'];
                        type: 'pubkey';
                    },
                    {
                        name: 'feeVault';
                        docs: [
                            'Hold lp token of vault, each time rebalance crank is called, vault calculate performance fee and mint corresponding lp token amount to fee_vault. fee_vault is owned by treasury address'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenMint';
                        docs: ['Token mint that vault supports'];
                        type: 'pubkey';
                    },
                    {
                        name: 'lpMint';
                        docs: ['Lp mint of vault'];
                        type: 'pubkey';
                    },
                    {
                        name: 'strategies';
                        docs: [
                            'The list of strategy addresses that vault supports, vault can support up to MAX_STRATEGY strategies at the same time.'
                        ];
                        type: {
                            array: ['pubkey', 30];
                        };
                    },
                    {
                        name: 'base';
                        docs: ['The base address to create vault seeds'];
                        type: 'pubkey';
                    },
                    {
                        name: 'admin';
                        docs: ['Admin of vault'];
                        type: 'pubkey';
                    },
                    {
                        name: 'operator';
                        docs: [
                            'Person who can send the crank. Operator can only send liquidity to strategies that admin defined, and claim reward to account of treasury address'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'lockedProfitTracker';
                        docs: ['Stores information for locked profit.'];
                        type: {
                            defined: {
                                name: 'lockedProfitTracker';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'vaultBumps';
            docs: ['Vault bumps struct'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'vaultBump';
                        docs: ['vaultBump'];
                        type: 'u8';
                    },
                    {
                        name: 'tokenVaultBump';
                        docs: ['tokenVaultBump'];
                        type: 'u8';
                    }
                ];
            };
        }
    ];
};

/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/amm.json`.
 */
type Amm = {
    address: 'Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB';
    metadata: {
        name: 'amm';
        version: '0.5.3';
        spec: '0.1.0';
        description: 'Mercurial Dynamic AMM';
    };
    docs: ['Program for AMM'];
    instructions: [
        {
            name: 'addBalanceLiquidity';
            docs: ['Deposit tokens to the pool in a balanced ratio.'];
            discriminator: [168, 227, 50, 62, 189, 171, 84, 176];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                    writable: true;
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'userPoolLp';
                    docs: [
                        'user pool lp token account. lp will be burned from this account upon success liquidity removal.'
                    ];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token a. token a of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token b. token b of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault a'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault b'];
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'userAToken';
                    docs: [
                        'User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account.'
                    ];
                    writable: true;
                },
                {
                    name: 'userBToken';
                    docs: [
                        'User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account.'
                    ];
                    writable: true;
                },
                {
                    name: 'user';
                    docs: [
                        'User account. Must be owner of user_a_token, and user_b_token.'
                    ];
                    signer: true;
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. the pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [
                {
                    name: 'poolTokenAmount';
                    type: 'u64';
                },
                {
                    name: 'maximumTokenAAmount';
                    type: 'u64';
                },
                {
                    name: 'maximumTokenBAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'addImbalanceLiquidity';
            docs: [
                'Deposit tokens to the pool in an imbalance ratio. Only supported by pool with stable swap curve.'
            ];
            discriminator: [79, 35, 122, 84, 173, 15, 93, 191];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                    writable: true;
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'userPoolLp';
                    docs: [
                        'user pool lp token account. lp will be burned from this account upon success liquidity removal.'
                    ];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token a. token a of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token b. token b of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault a'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault b'];
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'userAToken';
                    docs: [
                        'User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account.'
                    ];
                    writable: true;
                },
                {
                    name: 'userBToken';
                    docs: [
                        'User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account.'
                    ];
                    writable: true;
                },
                {
                    name: 'user';
                    docs: [
                        'User account. Must be owner of user_a_token, and user_b_token.'
                    ];
                    signer: true;
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. the pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [
                {
                    name: 'minimumPoolTokenAmount';
                    type: 'u64';
                },
                {
                    name: 'tokenAAmount';
                    type: 'u64';
                },
                {
                    name: 'tokenBAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'bootstrapLiquidity';
            docs: ['Bootstrap the pool when liquidity is depleted.'];
            discriminator: [4, 228, 215, 71, 225, 253, 119, 206];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                    writable: true;
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'userPoolLp';
                    docs: [
                        'user pool lp token account. lp will be burned from this account upon success liquidity removal.'
                    ];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token a. token a of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token b. token b of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault a'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault b'];
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'userAToken';
                    docs: [
                        'User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account.'
                    ];
                    writable: true;
                },
                {
                    name: 'userBToken';
                    docs: [
                        'User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account.'
                    ];
                    writable: true;
                },
                {
                    name: 'user';
                    docs: [
                        'User account. Must be owner of user_a_token, and user_b_token.'
                    ];
                    signer: true;
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. the pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [
                {
                    name: 'tokenAAmount';
                    type: 'u64';
                },
                {
                    name: 'tokenBAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'claimFee';
            docs: ['Claim fee'];
            discriminator: [169, 32, 79, 137, 136, 232, 70, 137];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account'];
                    writable: true;
                    relations: ['lockEscrow'];
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'lockEscrow';
                    docs: ['Lock account'];
                    writable: true;
                },
                {
                    name: 'owner';
                    docs: ['Owner of lock account'];
                    writable: true;
                    signer: true;
                    relations: ['lockEscrow'];
                },
                {
                    name: 'sourceTokens';
                    docs: ['owner lp token account'];
                    writable: true;
                },
                {
                    name: 'escrowVault';
                    docs: ['Escrow vault'];
                    writable: true;
                    relations: ['lockEscrow'];
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token a. token a of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token b. token b of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault a'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault b'];
                    writable: true;
                },
                {
                    name: 'userAToken';
                    docs: [
                        'User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account.'
                    ];
                    writable: true;
                },
                {
                    name: 'userBToken';
                    docs: [
                        'User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account.'
                    ];
                    writable: true;
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. the pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                }
            ];
            args: [
                {
                    name: 'maxAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'closeConfig';
            docs: ['Close config'];
            discriminator: [145, 9, 72, 157, 95, 125, 61, 85];
            accounts: [
                {
                    name: 'config';
                    writable: true;
                },
                {
                    name: 'admin';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'rentReceiver';
                    writable: true;
                }
            ];
            args: [];
        },
        {
            name: 'closeOperatorAccount';
            docs: ['Close operator account'];
            discriminator: [171, 9, 213, 74, 120, 23, 3, 29];
            accounts: [
                {
                    name: 'operator';
                    writable: true;
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'rentReceiver';
                    writable: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'createConfig';
            docs: ['Create config'];
            discriminator: [201, 207, 243, 114, 75, 111, 47, 189];
            accounts: [
                {
                    name: 'config';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [99, 111, 110, 102, 105, 103];
                            },
                            {
                                kind: 'arg';
                                path: 'config_parameters.index';
                            }
                        ];
                    };
                },
                {
                    name: 'admin';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [
                {
                    name: 'configParameters';
                    type: {
                        defined: {
                            name: 'configParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'createLockEscrow';
            docs: ['Create lock account'];
            discriminator: [54, 87, 165, 19, 69, 227, 218, 224];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account'];
                },
                {
                    name: 'lockEscrow';
                    docs: ['Lock account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    108,
                                    111,
                                    99,
                                    107,
                                    95,
                                    101,
                                    115,
                                    99,
                                    114,
                                    111,
                                    119
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            },
                            {
                                kind: 'account';
                                path: 'owner';
                            }
                        ];
                    };
                },
                {
                    name: 'owner';
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    relations: ['pool'];
                },
                {
                    name: 'payer';
                    docs: ['Payer account'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [];
        },
        {
            name: 'createMintMetadata';
            docs: ['Create mint metadata account for old pools'];
            discriminator: [13, 70, 168, 41, 250, 100, 148, 90];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account'];
                },
                {
                    name: 'lpMint';
                    docs: ['LP mint account of the pool'];
                    relations: ['pool'];
                },
                {
                    name: 'aVaultLp';
                    docs: ['Vault A LP account of the pool'];
                    relations: ['pool'];
                },
                {
                    name: 'mintMetadata';
                    writable: true;
                },
                {
                    name: 'metadataProgram';
                    address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'payer';
                    docs: ['Payer'];
                    writable: true;
                    signer: true;
                }
            ];
            args: [];
        },
        {
            name: 'createOperatorAccount';
            docs: ['Create operator account'];
            discriminator: [221, 64, 246, 149, 240, 153, 229, 163];
            accounts: [
                {
                    name: 'operator';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [111, 112, 101, 114, 97, 116, 111, 114];
                            },
                            {
                                kind: 'account';
                                path: 'whitelistedAddress';
                            }
                        ];
                    };
                },
                {
                    name: 'whitelistedAddress';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'permission';
                    type: 'u128';
                }
            ];
        },
        {
            name: 'enableOrDisablePool';
            docs: [
                'Enable or disable a pool. A disabled pool allow only remove balanced liquidity operation.'
            ];
            discriminator: [128, 6, 228, 131, 55, 161, 52, 169];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                    writable: true;
                },
                {
                    name: 'admin';
                    docs: ['Admin account. Must be owner of the pool.'];
                    signer: true;
                }
            ];
            args: [
                {
                    name: 'enable';
                    type: 'bool';
                }
            ];
        },
        {
            name: 'getPoolInfo';
            docs: ['Get the general information of the pool.'];
            discriminator: [9, 48, 220, 101, 22, 240, 78, 200];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    relations: ['pool'];
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    relations: ['pool'];
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    relations: ['pool'];
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token a. token a of the pool will be deposit / withdraw from this vault account.'
                    ];
                    relations: ['pool'];
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token b. token b of the pool will be deposit / withdraw from this vault account.'
                    ];
                    relations: ['pool'];
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault a'];
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault b'];
                }
            ];
            args: [];
        },
        {
            name: 'initializeCustomizablePermissionlessConstantProductPool';
            docs: ['Initialize permissionless pool with customizable params'];
            discriminator: [145, 24, 172, 194, 219, 125, 3, 190];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA address)'];
                    writable: true;
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [108, 112, 95, 109, 105, 110, 116];
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token A mint of the pool. Eg: USDT'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token B mint of the pool. Eg: USDC'];
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault A'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'aVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'bVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payerTokenA';
                    docs: [
                        'Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'payerTokenB';
                    docs: [
                        'Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'payerPoolLp';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'payer';
                            },
                            {
                                kind: 'const';
                                value: [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'lpMint';
                            }
                        ];
                        program: {
                            kind: 'const';
                            value: [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ];
                        };
                    };
                },
                {
                    name: 'protocolTokenAFee';
                    docs: [
                        'Protocol fee token account for token A. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'protocolTokenBFee';
                    docs: [
                        'Protocol fee token account for token B. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: [
                        'Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool.'
                    ];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'rent';
                    docs: ['Rent account.'];
                    address: 'SysvarRent111111111111111111111111111111111';
                },
                {
                    name: 'mintMetadata';
                    writable: true;
                },
                {
                    name: 'metadataProgram';
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. The pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'associatedTokenProgram';
                    docs: ['Associated token program.'];
                    address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [
                {
                    name: 'tokenAAmount';
                    type: 'u64';
                },
                {
                    name: 'tokenBAmount';
                    type: 'u64';
                },
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'customizableParams';
                        };
                    };
                }
            ];
        },
        {
            name: 'initializePermissionedPool';
            docs: ['Initialize a new permissioned pool.'];
            discriminator: [77, 85, 178, 157, 50, 48, 212, 126];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (arbitrary address)'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [108, 112, 95, 109, 105, 110, 116];
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token A mint of the pool. Eg: USDT'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token B mint of the pool. Eg: USDC'];
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault A'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'aVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'bVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'adminTokenA';
                    docs: [
                        'Admin token account for pool token A mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'adminTokenB';
                    docs: [
                        'Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'adminPoolLp';
                    docs: [
                        'Admin pool LP token account. Used to receive LP during first deposit (initialize pool)',
                        'Admin pool LP token account. Used to receive LP during first deposit (initialize pool)'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'admin';
                            },
                            {
                                kind: 'const';
                                value: [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'lpMint';
                            }
                        ];
                        program: {
                            kind: 'const';
                            value: [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ];
                        };
                    };
                },
                {
                    name: 'protocolTokenAFee';
                    docs: [
                        'Protocol fee token account for token A. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'protocolTokenBFee';
                    docs: [
                        'Protocol fee token account for token B. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'admin';
                    docs: [
                        'Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool.'
                    ];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'feeOwner';
                },
                {
                    name: 'rent';
                    docs: ['Rent account.'];
                    address: 'SysvarRent111111111111111111111111111111111';
                },
                {
                    name: 'mintMetadata';
                    writable: true;
                },
                {
                    name: 'metadataProgram';
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. The pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'associatedTokenProgram';
                    docs: ['Associated token program.'];
                    address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [
                {
                    name: 'curveType';
                    type: {
                        defined: {
                            name: 'curveType';
                        };
                    };
                }
            ];
        },
        {
            name: 'initializePermissionlessConstantProductPoolWithConfig';
            docs: ['Initialize permissionless pool with config'];
            discriminator: [7, 166, 138, 171, 206, 171, 236, 244];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA address)'];
                    writable: true;
                },
                {
                    name: 'config';
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [108, 112, 95, 109, 105, 110, 116];
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token A mint of the pool. Eg: USDT'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token B mint of the pool. Eg: USDC'];
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault A'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'aVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'bVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payerTokenA';
                    docs: [
                        'Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'payerTokenB';
                    docs: [
                        'Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'payerPoolLp';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'payer';
                            },
                            {
                                kind: 'const';
                                value: [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'lpMint';
                            }
                        ];
                        program: {
                            kind: 'const';
                            value: [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ];
                        };
                    };
                },
                {
                    name: 'protocolTokenAFee';
                    docs: [
                        'Protocol fee token account for token A. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'protocolTokenBFee';
                    docs: [
                        'Protocol fee token account for token B. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: [
                        'Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool.'
                    ];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'rent';
                    docs: ['Rent account.'];
                    address: 'SysvarRent111111111111111111111111111111111';
                },
                {
                    name: 'mintMetadata';
                    writable: true;
                },
                {
                    name: 'metadataProgram';
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. The pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'associatedTokenProgram';
                    docs: ['Associated token program.'];
                    address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [
                {
                    name: 'tokenAAmount';
                    type: 'u64';
                },
                {
                    name: 'tokenBAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'initializePermissionlessConstantProductPoolWithConfig2';
            docs: ['Initialize permissionless pool with config 2'];
            discriminator: [48, 149, 220, 130, 61, 11, 9, 178];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA address)'];
                    writable: true;
                },
                {
                    name: 'config';
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [108, 112, 95, 109, 105, 110, 116];
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token A mint of the pool. Eg: USDT'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token B mint of the pool. Eg: USDC'];
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault A'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'aVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'bVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payerTokenA';
                    docs: [
                        'Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'payerTokenB';
                    docs: [
                        'Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'payerPoolLp';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'payer';
                            },
                            {
                                kind: 'const';
                                value: [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'lpMint';
                            }
                        ];
                        program: {
                            kind: 'const';
                            value: [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ];
                        };
                    };
                },
                {
                    name: 'protocolTokenAFee';
                    docs: [
                        'Protocol fee token account for token A. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'protocolTokenBFee';
                    docs: [
                        'Protocol fee token account for token B. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: [
                        'Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool.'
                    ];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'rent';
                    docs: ['Rent account.'];
                    address: 'SysvarRent111111111111111111111111111111111';
                },
                {
                    name: 'mintMetadata';
                    writable: true;
                },
                {
                    name: 'metadataProgram';
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. The pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'associatedTokenProgram';
                    docs: ['Associated token program.'];
                    address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [
                {
                    name: 'tokenAAmount';
                    type: 'u64';
                },
                {
                    name: 'tokenBAmount';
                    type: 'u64';
                },
                {
                    name: 'activationPoint';
                    type: {
                        option: 'u64';
                    };
                }
            ];
        },
        {
            name: 'initializePermissionlessPool';
            docs: ['Initialize a new permissionless pool.'];
            discriminator: [118, 173, 41, 157, 173, 72, 97, 103];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA address)'];
                    writable: true;
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [108, 112, 95, 109, 105, 110, 116];
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token A mint of the pool. Eg: USDT'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token B mint of the pool. Eg: USDC'];
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault A'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'aVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'bVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payerTokenA';
                    docs: [
                        'Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'payerTokenB';
                    docs: [
                        'Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'payerPoolLp';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'payer';
                            },
                            {
                                kind: 'const';
                                value: [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'lpMint';
                            }
                        ];
                        program: {
                            kind: 'const';
                            value: [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ];
                        };
                    };
                },
                {
                    name: 'protocolTokenAFee';
                    docs: [
                        'Protocol fee token account for token A. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'protocolTokenBFee';
                    docs: [
                        'Protocol fee token account for token B. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: [
                        'Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool.'
                    ];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'feeOwner';
                },
                {
                    name: 'rent';
                    docs: ['Rent account.'];
                    address: 'SysvarRent111111111111111111111111111111111';
                },
                {
                    name: 'mintMetadata';
                    writable: true;
                },
                {
                    name: 'metadataProgram';
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. The pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'associatedTokenProgram';
                    docs: ['Associated token program.'];
                    address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [
                {
                    name: 'curveType';
                    type: {
                        defined: {
                            name: 'curveType';
                        };
                    };
                },
                {
                    name: 'tokenAAmount';
                    type: 'u64';
                },
                {
                    name: 'tokenBAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'initializePermissionlessPoolWithFeeTier';
            docs: [
                'Initialize a new permissionless pool with customized fee tier'
            ];
            discriminator: [6, 135, 68, 147, 229, 82, 169, 113];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA address)'];
                    writable: true;
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [108, 112, 95, 109, 105, 110, 116];
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token A mint of the pool. Eg: USDT'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token B mint of the pool. Eg: USDC'];
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault A'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'aVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'bVault';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payerTokenA';
                    docs: [
                        'Payer token account for pool token A mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'payerTokenB';
                    docs: [
                        'Admin token account for pool token B mint. Used to bootstrap the pool with initial liquidity.'
                    ];
                    writable: true;
                },
                {
                    name: 'payerPoolLp';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'account';
                                path: 'payer';
                            },
                            {
                                kind: 'const';
                                value: [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'lpMint';
                            }
                        ];
                        program: {
                            kind: 'const';
                            value: [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ];
                        };
                    };
                },
                {
                    name: 'protocolTokenAFee';
                    docs: [
                        'Protocol fee token account for token A. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'protocolTokenBFee';
                    docs: [
                        'Protocol fee token account for token B. Used to receive trading fee.'
                    ];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [102, 101, 101];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: [
                        'Admin account. This account will be the admin of the pool, and the payer for PDA during initialize pool.'
                    ];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'feeOwner';
                },
                {
                    name: 'rent';
                    docs: ['Rent account.'];
                    address: 'SysvarRent111111111111111111111111111111111';
                },
                {
                    name: 'mintMetadata';
                    writable: true;
                },
                {
                    name: 'metadataProgram';
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. The pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'associatedTokenProgram';
                    docs: ['Associated token program.'];
                    address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
                },
                {
                    name: 'systemProgram';
                    docs: ['System program.'];
                    address: '11111111111111111111111111111111';
                }
            ];
            args: [
                {
                    name: 'curveType';
                    type: {
                        defined: {
                            name: 'curveType';
                        };
                    };
                },
                {
                    name: 'tradeFeeBps';
                    type: 'u64';
                },
                {
                    name: 'tokenAAmount';
                    type: 'u64';
                },
                {
                    name: 'tokenBAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'lock';
            docs: ['Lock Lp token'];
            discriminator: [21, 19, 208, 43, 237, 62, 255, 87];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account'];
                    writable: true;
                    relations: ['lockEscrow'];
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    relations: ['pool'];
                },
                {
                    name: 'lockEscrow';
                    docs: ['Lock account'];
                    writable: true;
                },
                {
                    name: 'owner';
                    docs: ['Can be anyone'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'sourceTokens';
                    docs: ['owner lp token account'];
                    writable: true;
                },
                {
                    name: 'escrowVault';
                    docs: ['Escrow vault'];
                    writable: true;
                    relations: ['lockEscrow'];
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token a. token a of the pool will be deposit / withdraw from this vault account.'
                    ];
                    relations: ['pool'];
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token b. token b of the pool will be deposit / withdraw from this vault account.'
                    ];
                    relations: ['pool'];
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    relations: ['pool'];
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    relations: ['pool'];
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault a'];
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault b'];
                }
            ];
            args: [
                {
                    name: 'maxAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'overrideCurveParam';
            docs: [
                'Update swap curve parameters. This function do not allow update of curve type. For example: stable swap curve to constant product curve. Only supported by pool with stable swap curve.',
                'Only amp is allowed to be override. The other attributes of stable swap curve will be ignored.'
            ];
            discriminator: [98, 86, 204, 51, 94, 71, 69, 187];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                    writable: true;
                },
                {
                    name: 'admin';
                    docs: ['Admin account.'];
                    signer: true;
                }
            ];
            args: [
                {
                    name: 'curveType';
                    type: {
                        defined: {
                            name: 'curveType';
                        };
                    };
                }
            ];
        },
        {
            name: 'partnerClaimFee';
            docs: ['Partner claim fee'];
            discriminator: [57, 53, 176, 30, 123, 70, 52, 64];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    relations: ['pool'];
                },
                {
                    name: 'protocolTokenAFee';
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'protocolTokenBFee';
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'partnerTokenA';
                    writable: true;
                },
                {
                    name: 'partnerTokenB';
                    writable: true;
                },
                {
                    name: 'tokenProgram';
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'partnerAuthority';
                    signer: true;
                }
            ];
            args: [
                {
                    name: 'maxAmountA';
                    type: 'u64';
                },
                {
                    name: 'maxAmountB';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'removeBalanceLiquidity';
            docs: [
                "Withdraw tokens from the pool in a balanced ratio. User will still able to withdraw from pool even the pool is disabled. This allow user to exit their liquidity when there's some unforeseen event happen."
            ];
            discriminator: [133, 109, 44, 179, 56, 238, 114, 33];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                    writable: true;
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'userPoolLp';
                    docs: [
                        'user pool lp token account. lp will be burned from this account upon success liquidity removal.'
                    ];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token a. token a of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token b. token b of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault a'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault b'];
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'userAToken';
                    docs: [
                        'User token A account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account.'
                    ];
                    writable: true;
                },
                {
                    name: 'userBToken';
                    docs: [
                        'User token B account. Token will be transfer from this account if it is add liquidity operation. Else, token will be transfer into this account.'
                    ];
                    writable: true;
                },
                {
                    name: 'user';
                    docs: [
                        'User account. Must be owner of user_a_token, and user_b_token.'
                    ];
                    signer: true;
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. the pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [
                {
                    name: 'poolTokenAmount';
                    type: 'u64';
                },
                {
                    name: 'minimumATokenOut';
                    type: 'u64';
                },
                {
                    name: 'minimumBTokenOut';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'removeLiquiditySingleSide';
            docs: [
                'Withdraw only single token from the pool. Only supported by pool with stable swap curve.'
            ];
            discriminator: [84, 84, 177, 66, 254, 185, 10, 251];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                    writable: true;
                },
                {
                    name: 'lpMint';
                    docs: ['LP token mint of the pool'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'userPoolLp';
                    docs: [
                        'User pool lp token account. LP will be burned from this account upon success liquidity removal.'
                    ];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['LP token mint of vault A'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['LP token mint of vault B'];
                    writable: true;
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'userDestinationToken';
                    docs: [
                        'User token account to receive token upon success liquidity removal.'
                    ];
                    writable: true;
                },
                {
                    name: 'user';
                    docs: [
                        'User account. Must be owner of the user_pool_lp account.'
                    ];
                    signer: true;
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. The pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [
                {
                    name: 'poolTokenAmount';
                    type: 'u64';
                },
                {
                    name: 'minimumOutAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'setPoolFees';
            docs: [
                'Update trading fee charged for liquidity provider, and admin.'
            ];
            discriminator: [102, 44, 158, 54, 205, 37, 126, 78];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                    writable: true;
                },
                {
                    name: 'feeOperator';
                    docs: ['Fee operator account'];
                    signer: true;
                }
            ];
            args: [
                {
                    name: 'fees';
                    type: {
                        defined: {
                            name: 'poolFees';
                        };
                    };
                },
                {
                    name: 'newPartnerFeeNumerator';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'setWhitelistedVault';
            docs: ['Set whitelisted vault'];
            discriminator: [12, 148, 94, 42, 55, 57, 83, 247];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'admin';
                    signer: true;
                }
            ];
            args: [
                {
                    name: 'whitelistedVault';
                    type: 'pubkey';
                }
            ];
        },
        {
            name: 'swap';
            docs: [
                'Swap token A to B, or vice versa. An amount of trading fee will be charged for liquidity provider, and the admin of the pool.'
            ];
            discriminator: [248, 198, 158, 145, 225, 117, 135, 200];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                    writable: true;
                },
                {
                    name: 'userSourceToken';
                    docs: [
                        'User token account. Token from this account will be transfer into the vault by the pool in exchange for another token of the pool.'
                    ];
                    writable: true;
                },
                {
                    name: 'userDestinationToken';
                    docs: [
                        'User token account. The exchanged token will be transfer into this account from the pool.'
                    ];
                    writable: true;
                },
                {
                    name: 'aVault';
                    docs: [
                        'Vault account for token a. token a of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVault';
                    docs: [
                        'Vault account for token b. token b of the pool will be deposit / withdraw from this vault account.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'aTokenVault';
                    docs: ['Token vault account of vault A'];
                    writable: true;
                },
                {
                    name: 'bTokenVault';
                    docs: ['Token vault account of vault B'];
                    writable: true;
                },
                {
                    name: 'aVaultLpMint';
                    docs: ['Lp token mint of vault a'];
                    writable: true;
                },
                {
                    name: 'bVaultLpMint';
                    docs: ['Lp token mint of vault b'];
                    writable: true;
                },
                {
                    name: 'aVaultLp';
                    docs: [
                        'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'bVaultLp';
                    docs: [
                        'LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                    ];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'protocolTokenFee';
                    docs: [
                        "Protocol fee token account. Used to receive trading fee. It's mint field must matched with user_source_token mint field."
                    ];
                    writable: true;
                },
                {
                    name: 'user';
                    docs: ['User account. Must be owner of user_source_token.'];
                    signer: true;
                },
                {
                    name: 'vaultProgram';
                    docs: [
                        'Vault program. the pool will deposit/withdraw liquidity from the vault.'
                    ];
                    address: '24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi';
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program.'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [
                {
                    name: 'inAmount';
                    type: 'u64';
                },
                {
                    name: 'minimumOutAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'updateActivationPoint';
            docs: ['Update activation slot'];
            discriminator: [150, 62, 125, 219, 171, 220, 26, 237];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                    writable: true;
                },
                {
                    name: 'admin';
                    docs: ['Admin account.'];
                    signer: true;
                }
            ];
            args: [
                {
                    name: 'newActivationPoint';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'withdrawProtocolFees';
            docs: ['Withdraw protocol fee'];
            discriminator: [11, 68, 165, 98, 18, 208, 134, 73];
            accounts: [
                {
                    name: 'pool';
                    docs: ['Pool account (PDA)'];
                },
                {
                    name: 'aVaultLp';
                    relations: ['pool'];
                },
                {
                    name: 'protocolTokenAFee';
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'protocolTokenBFee';
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    relations: ['pool'];
                },
                {
                    name: 'tokenBMint';
                    relations: ['pool'];
                },
                {
                    name: 'treasuryTokenA';
                    writable: true;
                },
                {
                    name: 'treasuryTokenB';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                }
            ];
            args: [
                {
                    name: 'maxAmountA';
                    type: 'u64';
                },
                {
                    name: 'maxAmountB';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'zapProtocolFee';
            discriminator: [213, 155, 187, 34, 56, 182, 91, 240];
            accounts: [
                {
                    name: 'pool';
                },
                {
                    name: 'aVaultLp';
                    relations: ['pool'];
                },
                {
                    name: 'protocolTokenFee';
                    writable: true;
                },
                {
                    name: 'tokenMint';
                },
                {
                    name: 'receiverToken';
                    writable: true;
                },
                {
                    name: 'operator';
                    docs: ['zap claim fee operator'];
                },
                {
                    name: 'signer';
                    docs: ['operator'];
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program'];
                    address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
                },
                {
                    name: 'sysvarInstructions';
                    address: 'Sysvar1nstructions1111111111111111111111111';
                }
            ];
            args: [
                {
                    name: 'maxAmount';
                    type: 'u64';
                }
            ];
        }
    ];
    accounts: [
        {
            name: 'config';
            discriminator: [155, 12, 170, 224, 30, 250, 204, 130];
        },
        {
            name: 'lockEscrow';
            discriminator: [190, 106, 121, 6, 200, 182, 21, 75];
        },
        {
            name: 'operator';
            discriminator: [219, 31, 188, 145, 69, 139, 204, 117];
        },
        {
            name: 'pool';
            discriminator: [241, 154, 109, 4, 17, 177, 109, 188];
        },
        {
            name: 'vault';
            discriminator: [211, 8, 232, 43, 2, 152, 117, 119];
        }
    ];
    events: [
        {
            name: 'addLiquidity';
            discriminator: [31, 94, 125, 90, 227, 52, 61, 186];
        },
        {
            name: 'bootstrapLiquidity';
            discriminator: [121, 127, 38, 136, 92, 55, 14, 247];
        },
        {
            name: 'claimFee';
            discriminator: [75, 122, 154, 48, 140, 74, 123, 163];
        },
        {
            name: 'closeConfig';
            discriminator: [249, 181, 108, 89, 4, 150, 90, 174];
        },
        {
            name: 'createConfig';
            discriminator: [199, 152, 10, 19, 39, 39, 157, 104];
        },
        {
            name: 'createLockEscrow';
            discriminator: [74, 94, 106, 141, 49, 17, 98, 109];
        },
        {
            name: 'lock';
            discriminator: [220, 183, 67, 215, 153, 207, 56, 234];
        },
        {
            name: 'migrateFeeAccount';
            discriminator: [223, 234, 232, 26, 252, 105, 180, 125];
        },
        {
            name: 'overrideCurveParam';
            discriminator: [247, 20, 165, 248, 75, 5, 54, 246];
        },
        {
            name: 'partnerClaimFees';
            discriminator: [135, 131, 10, 94, 119, 209, 202, 48];
        },
        {
            name: 'poolCreated';
            discriminator: [202, 44, 41, 88, 104, 220, 157, 82];
        },
        {
            name: 'poolEnabled';
            discriminator: [2, 151, 18, 83, 204, 134, 92, 191];
        },
        {
            name: 'poolInfo';
            discriminator: [207, 20, 87, 97, 251, 212, 234, 45];
        },
        {
            name: 'removeLiquidity';
            discriminator: [116, 244, 97, 232, 103, 31, 152, 58];
        },
        {
            name: 'setPoolFees';
            discriminator: [245, 26, 198, 164, 88, 18, 75, 9];
        },
        {
            name: 'swap';
            discriminator: [81, 108, 227, 190, 205, 208, 10, 196];
        },
        {
            name: 'transferAdmin';
            discriminator: [228, 169, 131, 244, 61, 56, 65, 254];
        },
        {
            name: 'withdrawProtocolFees';
            discriminator: [30, 240, 207, 196, 139, 239, 79, 28];
        }
    ];
    errors: [
        {
            code: 6000;
            name: 'mathOverflow';
            msg: 'Math operation overflow';
        },
        {
            code: 6001;
            name: 'invalidFee';
            msg: 'Invalid fee setup';
        },
        {
            code: 6002;
            name: 'invalidInvariant';
            msg: 'Invalid invariant d';
        },
        {
            code: 6003;
            name: 'feeCalculationFailure';
            msg: 'Fee calculation failure';
        },
        {
            code: 6004;
            name: 'exceededSlippage';
            msg: 'Exceeded slippage tolerance';
        },
        {
            code: 6005;
            name: 'invalidCalculation';
            msg: 'Invalid curve calculation';
        },
        {
            code: 6006;
            name: 'zeroTradingTokens';
            msg: 'Given pool token amount results in zero trading tokens';
        },
        {
            code: 6007;
            name: 'conversionError';
            msg: 'Math conversion overflow';
        },
        {
            code: 6008;
            name: 'faultyLpMint';
            msg: "LP mint authority must be 'A' vault lp, without freeze authority, and 0 supply";
        },
        {
            code: 6009;
            name: 'mismatchedTokenMint';
            msg: 'Token mint mismatched';
        },
        {
            code: 6010;
            name: 'mismatchedLpMint';
            msg: 'LP mint mismatched';
        },
        {
            code: 6011;
            name: 'mismatchedOwner';
            msg: 'Invalid lp token owner';
        },
        {
            code: 6012;
            name: 'invalidVaultAccount';
            msg: 'Invalid vault account';
        },
        {
            code: 6013;
            name: 'invalidVaultLpAccount';
            msg: 'Invalid vault lp account';
        },
        {
            code: 6014;
            name: 'invalidPoolLpMintAccount';
            msg: 'Invalid pool lp mint account';
        },
        {
            code: 6015;
            name: 'poolDisabled';
            msg: 'Pool disabled';
        },
        {
            code: 6016;
            name: 'invalidAdminAccount';
            msg: 'Invalid admin account';
        },
        {
            code: 6017;
            name: 'invalidProtocolFeeAccount';
            msg: 'Invalid protocol fee account';
        },
        {
            code: 6018;
            name: 'sameAdminAccount';
            msg: 'Same admin account';
        },
        {
            code: 6019;
            name: 'identicalSourceDestination';
            msg: 'Identical user source and destination token account';
        },
        {
            code: 6020;
            name: 'apyCalculationError';
            msg: 'Apy calculation error';
        },
        {
            code: 6021;
            name: 'insufficientSnapshot';
            msg: 'Insufficient virtual price snapshot';
        },
        {
            code: 6022;
            name: 'nonUpdatableCurve';
            msg: 'Current curve is non-updatable';
        },
        {
            code: 6023;
            name: 'misMatchedCurve';
            msg: 'New curve is mismatched with old curve';
        },
        {
            code: 6024;
            name: 'invalidAmplification';
            msg: 'Amplification is invalid';
        },
        {
            code: 6025;
            name: 'unsupportedOperation';
            msg: 'Operation is not supported';
        },
        {
            code: 6026;
            name: 'exceedMaxAChanges';
            msg: 'Exceed max amplification changes';
        },
        {
            code: 6027;
            name: 'invalidRemainingAccountsLen';
            msg: 'Invalid remaining accounts length';
        },
        {
            code: 6028;
            name: 'invalidRemainingAccounts';
            msg: 'Invalid remaining account';
        },
        {
            code: 6029;
            name: 'mismatchedDepegMint';
            msg: "Token mint B doesn't matches depeg type token mint";
        },
        {
            code: 6030;
            name: 'invalidApyAccount';
            msg: 'Invalid APY account';
        },
        {
            code: 6031;
            name: 'invalidTokenMultiplier';
            msg: 'Invalid token multiplier';
        },
        {
            code: 6032;
            name: 'invalidDepegInformation';
            msg: 'Invalid depeg information';
        },
        {
            code: 6033;
            name: 'updateTimeConstraint';
            msg: 'Update time constraint violated';
        },
        {
            code: 6034;
            name: 'exceedMaxFeeBps';
            msg: 'Exceeded max fee bps';
        },
        {
            code: 6035;
            name: 'invalidAdmin';
            msg: 'Invalid admin';
        },
        {
            code: 6036;
            name: 'poolIsNotPermissioned';
            msg: 'Pool is not permissioned';
        },
        {
            code: 6037;
            name: 'invalidDepositAmount';
            msg: 'Invalid deposit amount';
        },
        {
            code: 6038;
            name: 'invalidFeeOwner';
            msg: 'Invalid fee owner';
        },
        {
            code: 6039;
            name: 'nonDepletedPool';
            msg: 'Pool is not depleted';
        },
        {
            code: 6040;
            name: 'amountNotPeg';
            msg: 'Token amount is not 1:1';
        },
        {
            code: 6041;
            name: 'amountIsZero';
            msg: 'Amount is zero';
        },
        {
            code: 6042;
            name: 'typeCastFailed';
            msg: 'Type cast error';
        },
        {
            code: 6043;
            name: 'amountIsNotEnough';
            msg: 'Amount is not enough';
        },
        {
            code: 6044;
            name: 'invalidActivationDuration';
            msg: 'Invalid activation duration';
        },
        {
            code: 6045;
            name: 'poolIsNotLaunchPool';
            msg: 'Pool is not launch pool';
        },
        {
            code: 6046;
            name: 'unableToModifyActivationPoint';
            msg: 'Unable to modify activation point';
        },
        {
            code: 6047;
            name: 'invalidAuthorityToCreateThePool';
            msg: 'Invalid authority to create the pool';
        },
        {
            code: 6048;
            name: 'invalidActivationType';
            msg: 'Invalid activation type';
        },
        {
            code: 6049;
            name: 'invalidActivationPoint';
            msg: 'Invalid activation point';
        },
        {
            code: 6050;
            name: 'preActivationSwapStarted';
            msg: 'Pre activation swap window started';
        },
        {
            code: 6051;
            name: 'invalidPoolType';
            msg: 'Invalid pool type';
        },
        {
            code: 6052;
            name: 'invalidQuoteMint';
            msg: 'Quote token must be SOL,USDC';
        },
        {
            code: 6053;
            name: 'invalidTokenMetadataProgram';
            msg: 'Invalid token metadata program';
        },
        {
            code: 6054;
            name: 'invalidPermission';
            msg: 'Invalid permission';
        },
        {
            code: 6055;
            name: 'invalidZapOutParameters';
            msg: 'Invalid zap out parameters';
        },
        {
            code: 6056;
            name: 'incorrectAta';
            msg: 'Incorrect ATA';
        },
        {
            code: 6057;
            name: 'invalidWithdrawProtocolFeeZapAccounts';
            msg: 'Invalid withdraw protocol fee zap accounts';
        },
        {
            code: 6058;
            name: 'mintRestrictedFromZap';
            msg: 'SOL,USDC protocol fee cannot be withdrawn via zap';
        },
        {
            code: 6059;
            name: 'cpiDisabled';
            msg: 'CPI disabled';
        },
        {
            code: 6060;
            name: 'missingZapOutInstruction';
            msg: 'Missing zap out instruction';
        },
        {
            code: 6061;
            name: 'invalidZapAccounts';
            msg: 'Invalid zap accounts';
        }
    ];
    types: [
        {
            name: 'addLiquidity';
            docs: ['Add liquidity event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lpMintAmount';
                        docs: ['LP amount user received upon add liquidity.'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenAAmount';
                        docs: ['Amount of token A user deposited.'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmount';
                        docs: ['Amount of token B user deposited.'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'bootstrapLiquidity';
            docs: ['Bootstrap liquidity event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lpMintAmount';
                        docs: ['LP amount user received upon add liquidity.'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenAAmount';
                        docs: ['Amount of token A user deposited.'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmount';
                        docs: ['Amount of token B user deposited.'];
                        type: 'u64';
                    },
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'bootstrapping';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'activationPoint';
                        docs: ['Activation point, can be slot or timestamp'];
                        type: 'u64';
                    },
                    {
                        name: 'whitelistedVault';
                        docs: [
                            'Whitelisted vault to be able to buy pool before activation_point'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreator';
                        docs: [
                            'Need to store pool creator in lauch pool, so they can modify liquidity before activation_point'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'activationType';
                        docs: [
                            'Activation type, 0 means by slot, 1 means by timestamp'
                        ];
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'claimFee';
            docs: ['Claim fee'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        docs: ['Owner of lock escrow'];
                        type: 'pubkey';
                    },
                    {
                        name: 'amount';
                        docs: ['Lp amount'];
                        type: 'u64';
                    },
                    {
                        name: 'aFee';
                        docs: ['A fee'];
                        type: 'u64';
                    },
                    {
                        name: 'bFee';
                        docs: ['B fee'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'closeConfig';
            docs: ['Close config'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'config';
                        docs: ['Config pubkey'];
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'config';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolFees';
                        type: {
                            defined: {
                                name: 'poolFees';
                            };
                        };
                    },
                    {
                        name: 'activationDuration';
                        type: 'u64';
                    },
                    {
                        name: 'vaultConfigKey';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreatorAuthority';
                        docs: [
                            "Only pool_creator_authority can use the current config to initialize new pool. When it's Pubkey::default, it's a public config."
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'activationType';
                        docs: ['Activation type'];
                        type: 'u8';
                    },
                    {
                        name: 'partnerFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 219];
                        };
                    }
                ];
            };
        },
        {
            name: 'configParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tradeFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'protocolTradeFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'activationDuration';
                        type: 'u64';
                    },
                    {
                        name: 'vaultConfigKey';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreatorAuthority';
                        type: 'pubkey';
                    },
                    {
                        name: 'activationType';
                        type: 'u8';
                    },
                    {
                        name: 'index';
                        type: 'u64';
                    },
                    {
                        name: 'partnerFeeNumerator';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'createConfig';
            docs: ['Create config'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tradeFeeNumerator';
                        docs: ['New trade fee numerator'];
                        type: 'u64';
                    },
                    {
                        name: 'protocolTradeFeeNumerator';
                        docs: ['New protocol fee numerator'];
                        type: 'u64';
                    },
                    {
                        name: 'config';
                        docs: ['Config pubkey'];
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'createLockEscrow';
            docs: ['Create lock escrow'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        docs: ['Owner of lock escrow'];
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'curveType';
            docs: ['Type of the swap curve'];
            type: {
                kind: 'enum';
                variants: [
                    {
                        name: 'constantProduct';
                    },
                    {
                        name: 'stable';
                        fields: [
                            {
                                name: 'amp';
                                docs: ['Amplification coefficient'];
                                type: 'u64';
                            },
                            {
                                name: 'tokenMultiplier';
                                docs: [
                                    'Multiplier for the pool token. Used to normalized token with different decimal into the same precision.'
                                ];
                                type: {
                                    defined: {
                                        name: 'tokenMultiplier';
                                    };
                                };
                            },
                            {
                                name: 'depeg';
                                docs: [
                                    'Depeg pool information. Contains functions to allow token amount to be repeg using stake / interest bearing token virtual price'
                                ];
                                type: {
                                    defined: {
                                        name: 'depeg';
                                    };
                                };
                            },
                            {
                                name: 'lastAmpUpdatedTimestamp';
                                docs: [
                                    'The last amp updated timestamp. Used to prevent update_curve_info called infinitely many times within a short period'
                                ];
                                type: 'u64';
                            }
                        ];
                    }
                ];
            };
        },
        {
            name: 'customizableParams';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tradeFeeNumerator';
                        docs: ['Trading fee.'];
                        type: 'u32';
                    },
                    {
                        name: 'activationPoint';
                        docs: ['The pool start trading.'];
                        type: {
                            option: 'u64';
                        };
                    },
                    {
                        name: 'hasAlphaVault';
                        docs: ['Whether the pool support alpha vault'];
                        type: 'bool';
                    },
                    {
                        name: 'activationType';
                        docs: ['Activation type'];
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        docs: ['padding'];
                        type: {
                            array: ['u8', 90];
                        };
                    }
                ];
            };
        },
        {
            name: 'depeg';
            docs: ['Contains information for depeg pool'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'baseVirtualPrice';
                        docs: [
                            'The virtual price of staking / interest bearing token'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'baseCacheUpdated';
                        docs: ['The last time base_virtual_price is updated'];
                        type: 'u64';
                    },
                    {
                        name: 'depegType';
                        docs: ['Type of the depeg pool'];
                        type: {
                            defined: {
                                name: 'depegType';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'depegType';
            docs: ['Type of depeg pool'];
            type: {
                kind: 'enum';
                variants: [
                    {
                        name: 'none';
                    },
                    {
                        name: 'marinade';
                    },
                    {
                        name: 'lido';
                    },
                    {
                        name: 'splStake';
                    }
                ];
            };
        },
        {
            name: 'lock';
            docs: ['lock'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        docs: ['Owner of lock escrow'];
                        type: 'pubkey';
                    },
                    {
                        name: 'amount';
                        docs: ['Locked amount'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'lockEscrow';
            docs: ['State of lock escrow account'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        docs: ['Owner address'];
                        type: 'pubkey';
                    },
                    {
                        name: 'escrowVault';
                        docs: ['Vault address, store the lock user lock'];
                        type: 'pubkey';
                    },
                    {
                        name: 'bump';
                        docs: ['bump, used to sign'];
                        type: 'u8';
                    },
                    {
                        name: 'totalLockedAmount';
                        docs: ['Total locked amount'];
                        type: 'u64';
                    },
                    {
                        name: 'lpPerToken';
                        docs: ['Lp per token, virtual price of lp token'];
                        type: 'u128';
                    },
                    {
                        name: 'unclaimedFeePending';
                        docs: ['Unclaimed fee pending'];
                        type: 'u64';
                    },
                    {
                        name: 'aFee';
                        docs: ['Total a fee claimed so far'];
                        type: 'u64';
                    },
                    {
                        name: 'bFee';
                        docs: ['Total b fee claimed so far'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'lockedProfitTracker';
            docs: ['LockedProfitTracker struct'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lastUpdatedLockedProfit';
                        docs: ['The total locked profit from the last report'];
                        type: 'u64';
                    },
                    {
                        name: 'lastReport';
                        docs: ['The last timestamp (in seconds) rebalancing'];
                        type: 'u64';
                    },
                    {
                        name: 'lockedProfitDegradation';
                        docs: ['Rate per second of degradation'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'migrateFeeAccount';
            docs: ['Migrate fee account event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    },
                    {
                        name: 'newAdminTokenAFee';
                        docs: ['New admin token a fee'];
                        type: 'pubkey';
                    },
                    {
                        name: 'newAdminTokenBFee';
                        docs: ['New admin token b fee'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAAmount';
                        docs: ['Transfer token a fee amount'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmount';
                        docs: ['Transfer token b fee amount'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'operator';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'whitelistedAddress';
                        type: 'pubkey';
                    },
                    {
                        name: 'permission';
                        type: 'u128';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u64', 2];
                        };
                    }
                ];
            };
        },
        {
            name: 'overrideCurveParam';
            docs: ['Override curve param event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'newAmp';
                        docs: ['The new amplification for stable curve'];
                        type: 'u64';
                    },
                    {
                        name: 'updatedTimestamp';
                        docs: ['Updated timestamp'];
                        type: 'u64';
                    },
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'padding';
            docs: ['Padding for future pool fields'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'padding0';
                        docs: ['Padding 0'];
                        type: {
                            array: ['u8', 6];
                        };
                    },
                    {
                        name: 'padding1';
                        docs: ['Padding 1'];
                        type: {
                            array: ['u64', 21];
                        };
                    },
                    {
                        name: 'padding2';
                        docs: ['Padding 2'];
                        type: {
                            array: ['u64', 21];
                        };
                    }
                ];
            };
        },
        {
            name: 'partnerClaimFees';
            docs: ['Partner claim fees'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    },
                    {
                        name: 'feeA';
                        docs: ['Fee B'];
                        type: 'u64';
                    },
                    {
                        name: 'feeB';
                        docs: ['Fee B'];
                        type: 'u64';
                    },
                    {
                        name: 'partner';
                        docs: ['Partner'];
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'partnerInfo';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'feeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'partnerAuthority';
                        type: 'pubkey';
                    },
                    {
                        name: 'pendingFeeA';
                        type: 'u64';
                    },
                    {
                        name: 'pendingFeeB';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'pool';
            docs: ['State of pool account'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lpMint';
                        docs: ['LP token mint of the pool'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAMint';
                        docs: ['Token A mint of the pool. Eg: USDT'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenBMint';
                        docs: ['Token B mint of the pool. Eg: USDC'];
                        type: 'pubkey';
                    },
                    {
                        name: 'aVault';
                        docs: [
                            'Vault account for token A. Token A of the pool will be deposit / withdraw from this vault account.'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'bVault';
                        docs: [
                            'Vault account for token B. Token B of the pool will be deposit / withdraw from this vault account.'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'aVaultLp';
                        docs: [
                            'LP token account of vault A. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'bVaultLp';
                        docs: [
                            'LP token account of vault B. Used to receive/burn the vault LP upon deposit/withdraw from the vault.'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'aVaultLpBump';
                        docs: [
                            '"A" vault lp bump. Used to create signer seeds.'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'enabled';
                        docs: [
                            'Flag to determine whether the pool is enabled, or disabled.'
                        ];
                        type: 'bool';
                    },
                    {
                        name: 'protocolTokenAFee';
                        docs: [
                            'Protocol fee token account for token A. Used to receive trading fee.'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'protocolTokenBFee';
                        docs: [
                            'Protocol fee token account for token B. Used to receive trading fee.'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'feeLastUpdatedAt';
                        docs: ['Fee last updated timestamp'];
                        type: 'u64';
                    },
                    {
                        name: 'padding0';
                        type: {
                            array: ['u8', 24];
                        };
                    },
                    {
                        name: 'fees';
                        docs: ['Store the fee charges setting.'];
                        type: {
                            defined: {
                                name: 'poolFees';
                            };
                        };
                    },
                    {
                        name: 'poolType';
                        docs: ['Pool type'];
                        type: {
                            defined: {
                                name: 'poolType';
                            };
                        };
                    },
                    {
                        name: 'stake';
                        docs: ['Stake pubkey of SPL stake pool'];
                        type: 'pubkey';
                    },
                    {
                        name: 'totalLockedLp';
                        docs: ['Total locked lp token'];
                        type: 'u64';
                    },
                    {
                        name: 'bootstrapping';
                        docs: ['bootstrapping config'];
                        type: {
                            defined: {
                                name: 'bootstrapping';
                            };
                        };
                    },
                    {
                        name: 'partnerInfo';
                        type: {
                            defined: {
                                name: 'partnerInfo';
                            };
                        };
                    },
                    {
                        name: 'padding';
                        docs: ['Padding for future pool field'];
                        type: {
                            defined: {
                                name: 'padding';
                            };
                        };
                    },
                    {
                        name: 'curveType';
                        docs: [
                            'The type of the swap curve supported by the pool.'
                        ];
                        type: {
                            defined: {
                                name: 'curveType';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'poolCreated';
            docs: ['New pool created event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lpMint';
                        docs: ['LP token mint of the pool'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAMint';
                        docs: ['Token A mint of the pool. Eg: USDT'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenBMint';
                        docs: ['Token B mint of the pool. Eg: USDC'];
                        type: 'pubkey';
                    },
                    {
                        name: 'poolType';
                        docs: ['Pool type'];
                        type: {
                            defined: {
                                name: 'poolType';
                            };
                        };
                    },
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'poolEnabled';
            docs: ['Pool enabled state change event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    },
                    {
                        name: 'enabled';
                        docs: ['Pool enabled state'];
                        type: 'bool';
                    }
                ];
            };
        },
        {
            name: 'poolFees';
            docs: ['Information regarding fee charges'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tradeFeeNumerator';
                        docs: [
                            'Trade fees are extra token amounts that are held inside the token',
                            'accounts during a trade, making the value of liquidity tokens rise.',
                            'Trade fee numerator'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'tradeFeeDenominator';
                        docs: ['Trade fee denominator'];
                        type: 'u64';
                    },
                    {
                        name: 'protocolTradeFeeNumerator';
                        docs: [
                            'Protocol trading fees are extra token amounts that are held inside the token',
                            'accounts during a trade, with the equivalent in pool tokens minted to',
                            'the protocol of the program.',
                            'Protocol trade fee numerator'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'protocolTradeFeeDenominator';
                        docs: ['Protocol trade fee denominator'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'poolInfo';
            docs: ['Pool info event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tokenAAmount';
                        docs: ['Total token A amount in the pool'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmount';
                        docs: ['Total token B amount in the pool'];
                        type: 'u64';
                    },
                    {
                        name: 'virtualPrice';
                        docs: ['Current virtual price'];
                        type: 'f64';
                    },
                    {
                        name: 'currentTimestamp';
                        docs: ['Current unix timestamp'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'poolType';
            docs: ['Pool type'];
            type: {
                kind: 'enum';
                variants: [
                    {
                        name: 'permissioned';
                    },
                    {
                        name: 'permissionless';
                    }
                ];
            };
        },
        {
            name: 'removeLiquidity';
            docs: ['Remove liquidity event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'lpUnmintAmount';
                        docs: [
                            'LP amount burned from user upon add remove liquidity.'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'tokenAOutAmount';
                        docs: ['Amount of token A user received.'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenBOutAmount';
                        docs: ['Amount of token B user received.'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'setPoolFees';
            docs: ['Set pool fees event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tradeFeeNumerator';
                        docs: ['New trade fee numerator'];
                        type: 'u64';
                    },
                    {
                        name: 'tradeFeeDenominator';
                        docs: ['New trade fee denominator'];
                        type: 'u64';
                    },
                    {
                        name: 'protocolTradeFeeNumerator';
                        docs: ['New protocol fee numerator'];
                        type: 'u64';
                    },
                    {
                        name: 'protocolTradeFeeDenominator';
                        docs: ['New protocol fee denominator'];
                        type: 'u64';
                    },
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'swap';
            docs: ['Swap event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'inAmount';
                        docs: [
                            'Token amount user deposited to the pool for token exchange.'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'outAmount';
                        docs: ['Token amount user received from the pool.'];
                        type: 'u64';
                    },
                    {
                        name: 'tradeFee';
                        docs: ['Trading fee charged for liquidity provider.'];
                        type: 'u64';
                    },
                    {
                        name: 'protocolFee';
                        docs: ['Trading fee charged for the protocol.'];
                        type: 'u64';
                    },
                    {
                        name: 'hostFee';
                        docs: ['Host fee charged'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'tokenMultiplier';
            docs: [
                'Multiplier for the pool token. Used to normalized token with different decimal into the same precision.'
            ];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tokenAMultiplier';
                        docs: ['Multiplier for token A of the pool.'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenBMultiplier';
                        docs: ['Multiplier for token B of the pool.'];
                        type: 'u64';
                    },
                    {
                        name: 'precisionFactor';
                        docs: [
                            'Record the highest token decimal in the pool. For example, Token A is 6 decimal, token B is 9 decimal. This will save value of 9.'
                        ];
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'transferAdmin';
            docs: ['Transfer admin event'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'admin';
                        docs: ['Old admin of the pool'];
                        type: 'pubkey';
                    },
                    {
                        name: 'newAdmin';
                        docs: ['New admin of the pool'];
                        type: 'pubkey';
                    },
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'vault';
            docs: ['Vault struct'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'enabled';
                        docs: [
                            'The flag, if admin set enable = false, then the user can only withdraw and cannot deposit in the vault.'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'bumps';
                        docs: ['Vault nonce, to create vault seeds'];
                        type: {
                            defined: {
                                name: 'vaultBumps';
                            };
                        };
                    },
                    {
                        name: 'totalAmount';
                        docs: [
                            'The total liquidity of the vault, including remaining tokens in token_vault and the liquidity in all strategies.'
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'tokenVault';
                        docs: ['Token account, hold liquidity in vault reserve'];
                        type: 'pubkey';
                    },
                    {
                        name: 'feeVault';
                        docs: [
                            'Hold lp token of vault, each time rebalance crank is called, vault calculate performance fee and mint corresponding lp token amount to fee_vault. fee_vault is owned by treasury address'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenMint';
                        docs: ['Token mint that vault supports'];
                        type: 'pubkey';
                    },
                    {
                        name: 'lpMint';
                        docs: ['Lp mint of vault'];
                        type: 'pubkey';
                    },
                    {
                        name: 'strategies';
                        docs: [
                            'The list of strategy addresses that vault supports, vault can support up to MAX_STRATEGY strategies at the same time.'
                        ];
                        type: {
                            array: ['pubkey', 30];
                        };
                    },
                    {
                        name: 'base';
                        docs: ['The base address to create vault seeds'];
                        type: 'pubkey';
                    },
                    {
                        name: 'admin';
                        docs: ['Admin of vault'];
                        type: 'pubkey';
                    },
                    {
                        name: 'operator';
                        docs: [
                            'Person who can send the crank. Operator can only send liquidity to strategies that admin defined, and claim reward to account of treasury address'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'lockedProfitTracker';
                        docs: ['Stores information for locked profit.'];
                        type: {
                            defined: {
                                name: 'lockedProfitTracker';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'vaultBumps';
            docs: ['Vault bumps struct'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'vaultBump';
                        docs: ['vaultBump'];
                        type: 'u8';
                    },
                    {
                        name: 'tokenVaultBump';
                        docs: ['tokenVaultBump'];
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'withdrawProtocolFees';
            docs: ['Withdraw protocol fees'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        docs: ['Pool address'];
                        type: 'pubkey';
                    },
                    {
                        name: 'protocolAFee';
                        docs: ['Protocol A fee being withdrawn'];
                        type: 'u64';
                    },
                    {
                        name: 'protocolBFee';
                        docs: ['Protocol B fee being withdrawn'];
                        type: 'u64';
                    },
                    {
                        name: 'protocolAFeeOwner';
                        docs: ['Protocol A fee owner'];
                        type: 'pubkey';
                    },
                    {
                        name: 'protocolBFeeOwner';
                        docs: ['Protocol B fee owner'];
                        type: 'pubkey';
                    }
                ];
            };
        }
    ];
};

/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/cp_amm.json`.
 */
type CpAmm = {
    address: 'cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG';
    metadata: {
        name: 'cpAmm';
        version: '0.2.0';
        spec: '0.1.0';
        description: 'Created with Anchor';
    };
    instructions: [
        {
            name: 'addLiquidity';
            discriminator: [181, 157, 89, 67, 143, 182, 52, 72];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The user token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The user token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                    relations: ['pool'];
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'addLiquidityParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'claimPositionFee';
            discriminator: [180, 38, 154, 17, 133, 33, 162, 211];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The user token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The user token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                    relations: ['pool'];
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'claimProtocolFee';
            discriminator: [165, 228, 133, 48, 99, 249, 255, 33];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenAAccount';
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    writable: true;
                },
                {
                    name: 'operator';
                    docs: ['Claim fee operator'];
                },
                {
                    name: 'signer';
                    docs: ['operator'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'maxAmountA';
                    type: 'u64';
                },
                {
                    name: 'maxAmountB';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'claimReward';
            discriminator: [149, 95, 181, 242, 94, 90, 158, 162];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'rewardVault';
                    docs: ['The vault token account for reward token'];
                    writable: true;
                },
                {
                    name: 'rewardMint';
                },
                {
                    name: 'userTokenAccount';
                    writable: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'rewardIndex';
                    type: 'u8';
                },
                {
                    name: 'skipReward';
                    type: 'u8';
                }
            ];
        },
        {
            name: 'closeConfig';
            discriminator: [145, 9, 72, 157, 95, 125, 61, 85];
            accounts: [
                {
                    name: 'config';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'rentReceiver';
                    writable: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'closeOperatorAccount';
            discriminator: [171, 9, 213, 74, 120, 23, 3, 29];
            accounts: [
                {
                    name: 'operator';
                    writable: true;
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'rentReceiver';
                    writable: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'closePosition';
            discriminator: [123, 134, 81, 0, 49, 68, 98, 98];
            accounts: [
                {
                    name: 'positionNftMint';
                    docs: ['positionNftMint'];
                    writable: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                    writable: true;
                },
                {
                    name: 'pool';
                    writable: true;
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'rentReceiver';
                    writable: true;
                },
                {
                    name: 'owner';
                    docs: ['Owner of position'];
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    docs: [
                        'Program to create NFT mint/token account and transfer for token22 account'
                    ];
                    address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'closeTokenBadge';
            discriminator: [108, 146, 86, 110, 179, 254, 10, 104];
            accounts: [
                {
                    name: 'tokenBadge';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'rentReceiver';
                    writable: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'createConfig';
            docs: ['OPERATOR FUNCTIONS /////'];
            discriminator: [201, 207, 243, 114, 75, 111, 47, 189];
            accounts: [
                {
                    name: 'config';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [99, 111, 110, 102, 105, 103];
                            },
                            {
                                kind: 'arg';
                                path: 'index';
                            }
                        ];
                    };
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'index';
                    type: 'u64';
                },
                {
                    name: 'configParameters';
                    type: {
                        defined: {
                            name: 'staticConfigParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'createDynamicConfig';
            discriminator: [81, 251, 122, 78, 66, 57, 208, 82];
            accounts: [
                {
                    name: 'config';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [99, 111, 110, 102, 105, 103];
                            },
                            {
                                kind: 'arg';
                                path: 'index';
                            }
                        ];
                    };
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'index';
                    type: 'u64';
                },
                {
                    name: 'configParameters';
                    type: {
                        defined: {
                            name: 'dynamicConfigParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'createOperatorAccount';
            docs: ['ADMIN FUNCTIONS /////'];
            discriminator: [221, 64, 246, 149, 240, 153, 229, 163];
            accounts: [
                {
                    name: 'operator';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [111, 112, 101, 114, 97, 116, 111, 114];
                            },
                            {
                                kind: 'account';
                                path: 'whitelistedAddress';
                            }
                        ];
                    };
                },
                {
                    name: 'whitelistedAddress';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'permission';
                    type: 'u128';
                }
            ];
        },
        {
            name: 'createPosition';
            discriminator: [48, 215, 197, 153, 96, 203, 180, 133];
            accounts: [
                {
                    name: 'owner';
                },
                {
                    name: 'positionNftMint';
                    docs: ['positionNftMint'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['position nft account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    112,
                                    111,
                                    115,
                                    105,
                                    116,
                                    105,
                                    111,
                                    110,
                                    95,
                                    110,
                                    102,
                                    116,
                                    95,
                                    97,
                                    99,
                                    99,
                                    111,
                                    117,
                                    110,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'position';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [112, 111, 115, 105, 116, 105, 111, 110];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'payer';
                    docs: [
                        'Address paying to create the position. Can be anyone'
                    ];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    docs: [
                        'Program to create NFT mint/token account and transfer for token22 account'
                    ];
                    address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'createTokenBadge';
            discriminator: [88, 206, 0, 91, 60, 175, 151, 118];
            accounts: [
                {
                    name: 'tokenBadge';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    98,
                                    97,
                                    100,
                                    103,
                                    101
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenMint';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenMint';
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [];
        },
        {
            name: 'dummyIx';
            discriminator: [234, 95, 176, 185, 7, 42, 35, 159];
            accounts: [
                {
                    name: 'podAlignedFeeTimeScheduler';
                },
                {
                    name: 'podAlignedFeeRateLimiter';
                },
                {
                    name: 'podAlignedFeeMarketCapScheduler';
                }
            ];
            args: [
                {
                    name: 'ixs';
                    type: {
                        defined: {
                            name: 'dummyParams';
                        };
                    };
                }
            ];
        },
        {
            name: 'fixConfigFeeParams';
            discriminator: [38, 30, 216, 81, 250, 177, 243, 254];
            accounts: [
                {
                    name: 'config';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'baseFeeParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'fixPoolFeeParams';
            discriminator: [132, 98, 81, 196, 44, 58, 120, 193];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'baseFeeParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'fixPoolLayoutVersion';
            discriminator: [166, 158, 69, 35, 81, 167, 200, 215];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                }
            ];
            args: [];
        },
        {
            name: 'fundReward';
            discriminator: [188, 50, 249, 165, 93, 151, 38, 63];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'rewardVault';
                    writable: true;
                },
                {
                    name: 'rewardMint';
                },
                {
                    name: 'funderTokenAccount';
                    writable: true;
                },
                {
                    name: 'funder';
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'rewardIndex';
                    type: 'u8';
                },
                {
                    name: 'amount';
                    type: 'u64';
                },
                {
                    name: 'carryForward';
                    type: 'bool';
                }
            ];
        },
        {
            name: 'initializeCustomizablePool';
            discriminator: [20, 161, 241, 24, 189, 221, 180, 2];
            accounts: [
                {
                    name: 'creator';
                },
                {
                    name: 'positionNftMint';
                    docs: ['positionNftMint'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['position nft account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    112,
                                    111,
                                    115,
                                    105,
                                    116,
                                    105,
                                    111,
                                    110,
                                    95,
                                    110,
                                    102,
                                    116,
                                    95,
                                    97,
                                    99,
                                    99,
                                    111,
                                    117,
                                    110,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: ['Address paying to create the pool. Can be anyone'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    docs: ['Initialize an account to store the pool state'];
                    writable: true;
                },
                {
                    name: 'position';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [112, 111, 115, 105, 116, 105, 111, 110];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token a mint'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token b mint'];
                },
                {
                    name: 'tokenAVault';
                    docs: ['Token a vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenBVault';
                    docs: ['Token b vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payerTokenA';
                    docs: ['payer token a account'];
                    writable: true;
                },
                {
                    name: 'payerTokenB';
                    docs: ['creator token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'token2022Program';
                    docs: [
                        'Program to create NFT mint/token account and transfer for token22 account'
                    ];
                    address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'initializeCustomizablePoolParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'initializePool';
            docs: ['USER FUNCTIONS ////'];
            discriminator: [95, 180, 10, 172, 84, 174, 232, 40];
            accounts: [
                {
                    name: 'creator';
                },
                {
                    name: 'positionNftMint';
                    docs: ['positionNftMint'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['position nft account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    112,
                                    111,
                                    115,
                                    105,
                                    116,
                                    105,
                                    111,
                                    110,
                                    95,
                                    110,
                                    102,
                                    116,
                                    95,
                                    97,
                                    99,
                                    99,
                                    111,
                                    117,
                                    110,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: ['Address paying to create the pool. Can be anyone'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'config';
                    docs: ['Which config the pool belongs to.'];
                },
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    docs: ['Initialize an account to store the pool state'];
                    writable: true;
                },
                {
                    name: 'position';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [112, 111, 115, 105, 116, 105, 111, 110];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token a mint'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token b mint'];
                },
                {
                    name: 'tokenAVault';
                    docs: ['Token a vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenBVault';
                    docs: ['Token b vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payerTokenA';
                    docs: ['payer token a account'];
                    writable: true;
                },
                {
                    name: 'payerTokenB';
                    docs: ['creator token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'token2022Program';
                    docs: [
                        'Program to create NFT mint/token account and transfer for token22 account'
                    ];
                    address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'initializePoolParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'initializePoolWithDynamicConfig';
            discriminator: [149, 82, 72, 197, 253, 252, 68, 15];
            accounts: [
                {
                    name: 'creator';
                },
                {
                    name: 'positionNftMint';
                    docs: ['positionNftMint'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['position nft account'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    112,
                                    111,
                                    115,
                                    105,
                                    116,
                                    105,
                                    111,
                                    110,
                                    95,
                                    110,
                                    102,
                                    116,
                                    95,
                                    97,
                                    99,
                                    99,
                                    111,
                                    117,
                                    110,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'payer';
                    docs: ['Address paying to create the pool. Can be anyone'];
                    writable: true;
                    signer: true;
                },
                {
                    name: 'poolCreatorAuthority';
                    signer: true;
                    relations: ['config'];
                },
                {
                    name: 'config';
                    docs: ['Which config the pool belongs to.'];
                },
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    docs: ['Initialize an account to store the pool state'];
                    writable: true;
                },
                {
                    name: 'position';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [112, 111, 115, 105, 116, 105, 111, 110];
                            },
                            {
                                kind: 'account';
                                path: 'positionNftMint';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenAMint';
                    docs: ['Token a mint'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['Token b mint'];
                },
                {
                    name: 'tokenAVault';
                    docs: ['Token a vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenAMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'tokenBVault';
                    docs: ['Token b vault for the pool'];
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    116,
                                    111,
                                    107,
                                    101,
                                    110,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'tokenBMint';
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            }
                        ];
                    };
                },
                {
                    name: 'payerTokenA';
                    docs: ['payer token a account'];
                    writable: true;
                },
                {
                    name: 'payerTokenB';
                    docs: ['creator token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Program to create mint account and mint tokens'];
                },
                {
                    name: 'token2022Program';
                    docs: [
                        'Program to create NFT mint/token account and transfer for token22 account'
                    ];
                    address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'initializeCustomizablePoolParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'initializeReward';
            discriminator: [95, 135, 192, 196, 242, 129, 230, 68];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'rewardVault';
                    writable: true;
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    114,
                                    101,
                                    119,
                                    97,
                                    114,
                                    100,
                                    95,
                                    118,
                                    97,
                                    117,
                                    108,
                                    116
                                ];
                            },
                            {
                                kind: 'account';
                                path: 'pool';
                            },
                            {
                                kind: 'arg';
                                path: 'rewardIndex';
                            }
                        ];
                    };
                },
                {
                    name: 'rewardMint';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'rewardIndex';
                    type: 'u8';
                },
                {
                    name: 'rewardDuration';
                    type: 'u64';
                },
                {
                    name: 'funder';
                    type: 'pubkey';
                }
            ];
        },
        {
            name: 'lockInnerPosition';
            discriminator: [72, 19, 49, 204, 18, 122, 23, 90];
            accounts: [
                {
                    name: 'pool';
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'vestingParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'lockPosition';
            discriminator: [227, 62, 2, 252, 247, 10, 171, 185];
            accounts: [
                {
                    name: 'pool';
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'vesting';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'payer';
                    writable: true;
                    signer: true;
                },
                {
                    name: 'systemProgram';
                    address: '11111111111111111111111111111111';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'vestingParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'permanentLockPosition';
            discriminator: [165, 176, 125, 6, 231, 171, 186, 213];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'permanentLockLiquidity';
                    type: 'u128';
                }
            ];
        },
        {
            name: 'refreshVesting';
            discriminator: [9, 94, 216, 14, 116, 204, 247, 0];
            accounts: [
                {
                    name: 'pool';
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                }
            ];
            args: [];
        },
        {
            name: 'removeAllLiquidity';
            discriminator: [10, 51, 61, 35, 112, 105, 24, 85];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The user token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The user token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                    relations: ['pool'];
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'tokenAAmountThreshold';
                    type: 'u64';
                },
                {
                    name: 'tokenBAmountThreshold';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'removeLiquidity';
            discriminator: [80, 85, 209, 72, 24, 206, 177, 108];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                    relations: ['position'];
                },
                {
                    name: 'position';
                    writable: true;
                },
                {
                    name: 'tokenAAccount';
                    docs: ['The user token a account'];
                    writable: true;
                },
                {
                    name: 'tokenBAccount';
                    docs: ['The user token b account'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                    relations: ['pool'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                    relations: ['pool'];
                },
                {
                    name: 'positionNftAccount';
                    docs: ['The token account for nft'];
                },
                {
                    name: 'owner';
                    docs: ['owner of position'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'removeLiquidityParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'setPoolStatus';
            discriminator: [112, 87, 135, 223, 83, 204, 132, 53];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'status';
                    type: 'u8';
                }
            ];
        },
        {
            name: 'splitPosition';
            discriminator: [172, 241, 221, 138, 161, 29, 253, 42];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                    relations: ['firstPosition', 'secondPosition'];
                },
                {
                    name: 'firstPosition';
                    docs: ['The first position'];
                    writable: true;
                },
                {
                    name: 'firstPositionNftAccount';
                    docs: ['The token account for position nft'];
                },
                {
                    name: 'secondPosition';
                    docs: ['The second position'];
                    writable: true;
                },
                {
                    name: 'secondPositionNftAccount';
                    docs: ['The token account for position nft'];
                },
                {
                    name: 'firstOwner';
                    docs: ['Owner of first position'];
                    signer: true;
                },
                {
                    name: 'secondOwner';
                    docs: ['Owner of second position'];
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'splitPositionParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'splitPosition2';
            discriminator: [221, 147, 228, 207, 140, 212, 17, 119];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                    relations: ['firstPosition', 'secondPosition'];
                },
                {
                    name: 'firstPosition';
                    docs: ['The first position'];
                    writable: true;
                },
                {
                    name: 'firstPositionNftAccount';
                    docs: ['The token account for position nft'];
                },
                {
                    name: 'secondPosition';
                    docs: ['The second position'];
                    writable: true;
                },
                {
                    name: 'secondPositionNftAccount';
                    docs: ['The token account for position nft'];
                },
                {
                    name: 'firstOwner';
                    docs: ['Owner of first position'];
                    signer: true;
                },
                {
                    name: 'secondOwner';
                    docs: ['Owner of second position'];
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'numerator';
                    type: 'u32';
                }
            ];
        },
        {
            name: 'swap';
            discriminator: [248, 198, 158, 145, 225, 117, 135, 200];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    docs: ['Pool account'];
                    writable: true;
                },
                {
                    name: 'inputTokenAccount';
                    docs: ['The user token account for input token'];
                    writable: true;
                },
                {
                    name: 'outputTokenAccount';
                    docs: ['The user token account for output token'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                },
                {
                    name: 'payer';
                    docs: ['The user performing the swap'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'referralTokenAccount';
                    docs: ['referral token account'];
                    writable: true;
                    optional: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'swapParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'swap2';
            discriminator: [65, 75, 63, 76, 235, 91, 91, 136];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    docs: ['Pool account'];
                    writable: true;
                },
                {
                    name: 'inputTokenAccount';
                    docs: ['The user token account for input token'];
                    writable: true;
                },
                {
                    name: 'outputTokenAccount';
                    docs: ['The user token account for output token'];
                    writable: true;
                },
                {
                    name: 'tokenAVault';
                    docs: ['The vault token account for input token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenBVault';
                    docs: ['The vault token account for output token'];
                    writable: true;
                    relations: ['pool'];
                },
                {
                    name: 'tokenAMint';
                    docs: ['The mint of token a'];
                },
                {
                    name: 'tokenBMint';
                    docs: ['The mint of token b'];
                },
                {
                    name: 'payer';
                    docs: ['The user performing the swap'];
                    signer: true;
                },
                {
                    name: 'tokenAProgram';
                    docs: ['Token a program'];
                },
                {
                    name: 'tokenBProgram';
                    docs: ['Token b program'];
                },
                {
                    name: 'referralTokenAccount';
                    docs: ['referral token account'];
                    writable: true;
                    optional: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'swapParameters2';
                        };
                    };
                }
            ];
        },
        {
            name: 'updatePoolFees';
            discriminator: [118, 217, 203, 179, 60, 8, 70, 89];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'operator';
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'params';
                    type: {
                        defined: {
                            name: 'updatePoolFeesParameters';
                        };
                    };
                }
            ];
        },
        {
            name: 'updateRewardDuration';
            discriminator: [138, 174, 196, 169, 213, 235, 254, 107];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'rewardIndex';
                    type: 'u8';
                },
                {
                    name: 'newDuration';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'updateRewardFunder';
            discriminator: [211, 28, 48, 32, 215, 160, 35, 23];
            accounts: [
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'signer';
                    signer: true;
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'rewardIndex';
                    type: 'u8';
                },
                {
                    name: 'newFunder';
                    type: 'pubkey';
                }
            ];
        },
        {
            name: 'withdrawIneligibleReward';
            discriminator: [148, 206, 42, 195, 247, 49, 103, 8];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'rewardVault';
                    writable: true;
                },
                {
                    name: 'rewardMint';
                },
                {
                    name: 'funderTokenAccount';
                    writable: true;
                },
                {
                    name: 'funder';
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                },
                {
                    name: 'eventAuthority';
                    pda: {
                        seeds: [
                            {
                                kind: 'const';
                                value: [
                                    95,
                                    95,
                                    101,
                                    118,
                                    101,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ];
                            }
                        ];
                    };
                },
                {
                    name: 'program';
                }
            ];
            args: [
                {
                    name: 'rewardIndex';
                    type: 'u8';
                }
            ];
        },
        {
            name: 'zapProtocolFee';
            discriminator: [213, 155, 187, 34, 56, 182, 91, 240];
            accounts: [
                {
                    name: 'poolAuthority';
                    address: 'HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC';
                },
                {
                    name: 'pool';
                    writable: true;
                },
                {
                    name: 'tokenVault';
                    writable: true;
                },
                {
                    name: 'tokenMint';
                },
                {
                    name: 'receiverToken';
                    writable: true;
                },
                {
                    name: 'operator';
                    docs: ['zap claim fee operator'];
                },
                {
                    name: 'signer';
                    docs: ['operator'];
                    signer: true;
                },
                {
                    name: 'tokenProgram';
                    docs: ['Token program'];
                },
                {
                    name: 'sysvarInstructions';
                    address: 'Sysvar1nstructions1111111111111111111111111';
                }
            ];
            args: [
                {
                    name: 'maxAmount';
                    type: 'u64';
                }
            ];
        }
    ];
    accounts: [
        {
            name: 'config';
            discriminator: [155, 12, 170, 224, 30, 250, 204, 130];
        },
        {
            name: 'operator';
            discriminator: [219, 31, 188, 145, 69, 139, 204, 117];
        },
        {
            name: 'podAlignedFeeMarketCapScheduler';
            discriminator: [251, 130, 208, 253, 245, 27, 145, 203];
        },
        {
            name: 'podAlignedFeeRateLimiter';
            discriminator: [160, 219, 8, 251, 179, 7, 16, 117];
        },
        {
            name: 'podAlignedFeeTimeScheduler';
            discriminator: [239, 132, 138, 213, 67, 154, 130, 70];
        },
        {
            name: 'pool';
            discriminator: [241, 154, 109, 4, 17, 177, 109, 188];
        },
        {
            name: 'position';
            discriminator: [170, 188, 143, 228, 122, 64, 247, 208];
        },
        {
            name: 'tokenBadge';
            discriminator: [116, 219, 204, 229, 249, 116, 255, 150];
        },
        {
            name: 'vesting';
            discriminator: [100, 149, 66, 138, 95, 200, 128, 241];
        }
    ];
    events: [
        {
            name: 'evtClaimPositionFee';
            discriminator: [198, 182, 183, 52, 97, 12, 49, 56];
        },
        {
            name: 'evtClaimProtocolFee';
            discriminator: [186, 244, 75, 251, 188, 13, 25, 33];
        },
        {
            name: 'evtClaimReward';
            discriminator: [218, 86, 147, 200, 235, 188, 215, 231];
        },
        {
            name: 'evtCloseConfig';
            discriminator: [36, 30, 239, 45, 58, 132, 14, 5];
        },
        {
            name: 'evtClosePosition';
            discriminator: [20, 145, 144, 68, 143, 142, 214, 178];
        },
        {
            name: 'evtCreateConfig';
            discriminator: [131, 207, 180, 174, 180, 73, 165, 54];
        },
        {
            name: 'evtCreateDynamicConfig';
            discriminator: [231, 197, 13, 164, 248, 213, 133, 152];
        },
        {
            name: 'evtCreatePosition';
            discriminator: [156, 15, 119, 198, 29, 181, 221, 55];
        },
        {
            name: 'evtCreateTokenBadge';
            discriminator: [141, 120, 134, 116, 34, 28, 114, 160];
        },
        {
            name: 'evtFundReward';
            discriminator: [104, 233, 237, 122, 199, 191, 121, 85];
        },
        {
            name: 'evtInitializePool';
            discriminator: [228, 50, 246, 85, 203, 66, 134, 37];
        },
        {
            name: 'evtInitializeReward';
            discriminator: [129, 91, 188, 3, 246, 52, 185, 249];
        },
        {
            name: 'evtLiquidityChange';
            discriminator: [197, 171, 78, 127, 224, 211, 87, 13];
        },
        {
            name: 'evtLockPosition';
            discriminator: [168, 63, 108, 83, 219, 82, 2, 200];
        },
        {
            name: 'evtPermanentLockPosition';
            discriminator: [145, 143, 162, 218, 218, 80, 67, 11];
        },
        {
            name: 'evtSetPoolStatus';
            discriminator: [100, 213, 74, 3, 95, 91, 228, 146];
        },
        {
            name: 'evtSplitPosition2';
            discriminator: [165, 32, 203, 174, 72, 100, 233, 103];
        },
        {
            name: 'evtSplitPosition3';
            discriminator: [232, 117, 190, 218, 85, 162, 207, 78];
        },
        {
            name: 'evtSwap2';
            discriminator: [189, 66, 51, 168, 38, 80, 117, 153];
        },
        {
            name: 'evtUpdatePoolFees';
            discriminator: [76, 165, 246, 102, 102, 217, 156, 44];
        },
        {
            name: 'evtUpdateRewardDuration';
            discriminator: [149, 135, 65, 231, 129, 153, 65, 57];
        },
        {
            name: 'evtUpdateRewardFunder';
            discriminator: [76, 154, 208, 13, 40, 115, 246, 146];
        },
        {
            name: 'evtWithdrawIneligibleReward';
            discriminator: [248, 215, 184, 78, 31, 180, 179, 168];
        }
    ];
    errors: [
        {
            code: 6000;
            name: 'mathOverflow';
            msg: 'Math operation overflow';
        },
        {
            code: 6001;
            name: 'invalidFee';
            msg: 'Invalid fee setup';
        },
        {
            code: 6002;
            name: 'exceededSlippage';
            msg: 'Exceeded slippage tolerance';
        },
        {
            code: 6003;
            name: 'poolDisabled';
            msg: 'Pool disabled';
        },
        {
            code: 6004;
            name: 'exceedMaxFeeBps';
            msg: 'Exceeded max fee bps';
        },
        {
            code: 6005;
            name: 'invalidAdmin';
            msg: 'Invalid admin';
        },
        {
            code: 6006;
            name: 'amountIsZero';
            msg: 'Amount is zero';
        },
        {
            code: 6007;
            name: 'typeCastFailed';
            msg: 'Type cast error';
        },
        {
            code: 6008;
            name: 'unableToModifyActivationPoint';
            msg: 'Unable to modify activation point';
        },
        {
            code: 6009;
            name: 'invalidAuthorityToCreateThePool';
            msg: 'Invalid authority to create the pool';
        },
        {
            code: 6010;
            name: 'invalidActivationType';
            msg: 'Invalid activation type';
        },
        {
            code: 6011;
            name: 'invalidActivationPoint';
            msg: 'Invalid activation point';
        },
        {
            code: 6012;
            name: 'invalidQuoteMint';
            msg: 'Quote token must be SOL,USDC';
        },
        {
            code: 6013;
            name: 'invalidFeeCurve';
            msg: 'Invalid fee curve';
        },
        {
            code: 6014;
            name: 'invalidPriceRange';
            msg: 'Invalid Price Range';
        },
        {
            code: 6015;
            name: 'priceRangeViolation';
            msg: 'Trade is over price range';
        },
        {
            code: 6016;
            name: 'invalidParameters';
            msg: 'Invalid parameters';
        },
        {
            code: 6017;
            name: 'invalidCollectFeeMode';
            msg: 'Invalid collect fee mode';
        },
        {
            code: 6018;
            name: 'invalidInput';
            msg: 'Invalid input';
        },
        {
            code: 6019;
            name: 'cannotCreateTokenBadgeOnSupportedMint';
            msg: 'Cannot create token badge on supported mint';
        },
        {
            code: 6020;
            name: 'invalidTokenBadge';
            msg: 'Invalid token badge';
        },
        {
            code: 6021;
            name: 'invalidMinimumLiquidity';
            msg: 'Invalid minimum liquidity';
        },
        {
            code: 6022;
            name: 'invalidVestingInfo';
            msg: 'Invalid vesting information';
        },
        {
            code: 6023;
            name: 'insufficientLiquidity';
            msg: 'Insufficient liquidity';
        },
        {
            code: 6024;
            name: 'invalidVestingAccount';
            msg: 'Invalid vesting account';
        },
        {
            code: 6025;
            name: 'invalidPoolStatus';
            msg: 'Invalid pool status';
        },
        {
            code: 6026;
            name: 'unsupportNativeMintToken2022';
            msg: 'Unsupported native mint token2022';
        },
        {
            code: 6027;
            name: 'invalidRewardIndex';
            msg: 'Invalid reward index';
        },
        {
            code: 6028;
            name: 'invalidRewardDuration';
            msg: 'Invalid reward duration';
        },
        {
            code: 6029;
            name: 'rewardInitialized';
            msg: 'Reward already initialized';
        },
        {
            code: 6030;
            name: 'rewardUninitialized';
            msg: 'Reward not initialized';
        },
        {
            code: 6031;
            name: 'invalidRewardVault';
            msg: 'Invalid reward vault';
        },
        {
            code: 6032;
            name: 'mustWithdrawnIneligibleReward';
            msg: 'Must withdraw ineligible reward';
        },
        {
            code: 6033;
            name: 'identicalRewardDuration';
            msg: 'Reward duration is the same';
        },
        {
            code: 6034;
            name: 'rewardCampaignInProgress';
            msg: 'Reward campaign in progress';
        },
        {
            code: 6035;
            name: 'identicalFunder';
            msg: 'Identical funder';
        },
        {
            code: 6036;
            name: 'invalidFunder';
            msg: 'Invalid funder';
        },
        {
            code: 6037;
            name: 'rewardNotEnded';
            msg: 'Reward not ended';
        },
        {
            code: 6038;
            name: 'feeInverseIsIncorrect';
            msg: 'Fee inverse is incorrect';
        },
        {
            code: 6039;
            name: 'positionIsNotEmpty';
            msg: 'Position is not empty';
        },
        {
            code: 6040;
            name: 'invalidPoolCreatorAuthority';
            msg: 'Invalid pool creator authority';
        },
        {
            code: 6041;
            name: 'invalidConfigType';
            msg: 'Invalid config type';
        },
        {
            code: 6042;
            name: 'invalidPoolCreator';
            msg: 'Invalid pool creator';
        },
        {
            code: 6043;
            name: 'rewardVaultFrozenSkipRequired';
            msg: 'Reward vault is frozen, must skip reward to proceed';
        },
        {
            code: 6044;
            name: 'invalidSplitPositionParameters';
            msg: 'Invalid parameters for split position';
        },
        {
            code: 6045;
            name: 'unsupportPositionHasVestingLock';
            msg: 'Unsupported split position has vesting lock';
        },
        {
            code: 6046;
            name: 'samePosition';
            msg: 'Same position';
        },
        {
            code: 6047;
            name: 'invalidBaseFeeMode';
            msg: 'Invalid base fee mode';
        },
        {
            code: 6048;
            name: 'invalidFeeRateLimiter';
            msg: 'Invalid fee rate limiter';
        },
        {
            code: 6049;
            name: 'failToValidateSingleSwapInstruction';
            msg: 'Fail to validate single swap instruction in rate limiter';
        },
        {
            code: 6050;
            name: 'invalidFeeTimeScheduler';
            msg: 'Invalid fee scheduler';
        },
        {
            code: 6051;
            name: 'undeterminedError';
            msg: 'Undetermined error';
        },
        {
            code: 6052;
            name: 'invalidPoolVersion';
            msg: 'Invalid pool version';
        },
        {
            code: 6053;
            name: 'invalidAuthority';
            msg: 'Invalid authority to do that action';
        },
        {
            code: 6054;
            name: 'invalidPermission';
            msg: 'Invalid permission';
        },
        {
            code: 6055;
            name: 'invalidFeeMarketCapScheduler';
            msg: 'Invalid fee market cap scheduler';
        },
        {
            code: 6056;
            name: 'cannotUpdateBaseFee';
            msg: 'Cannot update base fee';
        },
        {
            code: 6057;
            name: 'invalidDynamicFeeParameters';
            msg: 'Invalid dynamic fee parameters';
        },
        {
            code: 6058;
            name: 'invalidUpdatePoolFeesParameters';
            msg: 'Invalid update pool fees parameters';
        },
        {
            code: 6059;
            name: 'missingOperatorAccount';
            msg: 'Missing operator account';
        },
        {
            code: 6060;
            name: 'incorrectAta';
            msg: 'Incorrect ATA';
        },
        {
            code: 6061;
            name: 'invalidZapOutParameters';
            msg: 'Invalid zap out parameters';
        },
        {
            code: 6062;
            name: 'invalidWithdrawProtocolFeeZapAccounts';
            msg: 'Invalid withdraw protocol fee zap accounts';
        },
        {
            code: 6063;
            name: 'mintRestrictedFromZap';
            msg: 'SOL,USDC protocol fee cannot be withdrawn via zap';
        },
        {
            code: 6064;
            name: 'cpiDisabled';
            msg: 'CPI disabled';
        },
        {
            code: 6065;
            name: 'missingZapOutInstruction';
            msg: 'Missing zap out instruction';
        },
        {
            code: 6066;
            name: 'invalidZapAccounts';
            msg: 'Invalid zap accounts';
        },
        {
            code: 6067;
            name: 'invalidCompoundingFeeBps';
            msg: 'Invalid compounding fee bps';
        }
    ];
    types: [
        {
            name: 'addLiquidityParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'liquidityDelta';
                        docs: ['delta liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'tokenAAmountThreshold';
                        docs: ['maximum token a amount'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmountThreshold';
                        docs: ['maximum token b amount'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'baseFeeInfo';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'data';
                        type: {
                            array: ['u8', 32];
                        };
                    }
                ];
            };
        },
        {
            name: 'baseFeeParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'data';
                        type: {
                            array: ['u8', 27];
                        };
                    }
                ];
            };
        },
        {
            name: 'baseFeeStruct';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'baseFeeInfo';
                        type: {
                            defined: {
                                name: 'baseFeeInfo';
                            };
                        };
                    },
                    {
                        name: 'padding1';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'borshFeeMarketCapScheduler';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'sqrtPriceStepBps';
                        type: 'u32';
                    },
                    {
                        name: 'schedulerExpirationDuration';
                        type: 'u32';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'borshFeeRateLimiter';
            docs: [
                'we denote reference_amount = x0, cliff_fee_numerator = c, fee_increment = i',
                'if input_amount <= x0, then fee = input_amount * c',
                '',
                'if input_amount > x0, then input_amount = x0 + (a * x0 + b)',
                'if a < max_index',
                'then fee = x0 * c + x0 * (c + i) + .... + x0 * (c + i*a) + b * (c + i * (a+1))',
                'then fee = x0 * (c + c*a + i*a*(a+1)/2) + b * (c + i * (a+1))',
                '',
                'if a >= max_index',
                'if a = max_index + d, input_amount = x0 + max_index * x0 + (d * x0 + b)',
                'then fee = x0 * (c + c*max_index + i*max_index*(max_index+1)/2) + (d * x0 + b) * MAX_FEE'
            ];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'feeIncrementBps';
                        type: 'u16';
                    },
                    {
                        name: 'maxLimiterDuration';
                        type: 'u32';
                    },
                    {
                        name: 'maxFeeBps';
                        type: 'u32';
                    },
                    {
                        name: 'referenceAmount';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'borshFeeTimeScheduler';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'periodFrequency';
                        type: 'u64';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'config';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'vaultConfigKey';
                        docs: ['Vault config key'];
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreatorAuthority';
                        docs: [
                            "Only pool_creator_authority can use the current config to initialize new pool. When it's Pubkey::default, it's a public config."
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'poolFees';
                        docs: ['Pool fee'];
                        type: {
                            defined: {
                                name: 'poolFeesConfig';
                            };
                        };
                    },
                    {
                        name: 'activationType';
                        docs: ['Activation type'];
                        type: 'u8';
                    },
                    {
                        name: 'collectFeeMode';
                        docs: ['Collect fee mode'];
                        type: 'u8';
                    },
                    {
                        name: 'configType';
                        docs: ['Config type mode, 0 for static, 1 for dynamic'];
                        type: 'u8';
                    },
                    {
                        name: 'padding0';
                        docs: ['padding 0'];
                        type: {
                            array: ['u8', 5];
                        };
                    },
                    {
                        name: 'index';
                        docs: ['config index'];
                        type: 'u64';
                    },
                    {
                        name: 'sqrtMinPrice';
                        docs: ['sqrt min price'];
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMaxPrice';
                        docs: ['sqrt max price'];
                        type: 'u128';
                    },
                    {
                        name: 'padding1';
                        docs: ['Fee curve point', 'Padding for further use'];
                        type: {
                            array: ['u64', 10];
                        };
                    }
                ];
            };
        },
        {
            name: 'dummyParams';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'borshFeeTimeSchedulerParams';
                        type: {
                            defined: {
                                name: 'borshFeeTimeScheduler';
                            };
                        };
                    },
                    {
                        name: 'borshFeeRateLimiterParams';
                        type: {
                            defined: {
                                name: 'borshFeeRateLimiter';
                            };
                        };
                    },
                    {
                        name: 'borshFeeMarketCapSchedulerParams';
                        type: {
                            defined: {
                                name: 'borshFeeMarketCapScheduler';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'dynamicConfigParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolCreatorAuthority';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'dynamicFeeConfig';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'initialized';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 7];
                        };
                    },
                    {
                        name: 'maxVolatilityAccumulator';
                        type: 'u32';
                    },
                    {
                        name: 'variableFeeControl';
                        type: 'u32';
                    },
                    {
                        name: 'binStep';
                        type: 'u16';
                    },
                    {
                        name: 'filterPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'decayPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u16';
                    },
                    {
                        name: 'padding1';
                        type: {
                            array: ['u8', 8];
                        };
                    },
                    {
                        name: 'binStepU128';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'dynamicFeeParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'binStep';
                        type: 'u16';
                    },
                    {
                        name: 'binStepU128';
                        type: 'u128';
                    },
                    {
                        name: 'filterPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'decayPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u16';
                    },
                    {
                        name: 'maxVolatilityAccumulator';
                        type: 'u32';
                    },
                    {
                        name: 'variableFeeControl';
                        type: 'u32';
                    }
                ];
            };
        },
        {
            name: 'dynamicFeeStruct';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'initialized';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 7];
                        };
                    },
                    {
                        name: 'maxVolatilityAccumulator';
                        type: 'u32';
                    },
                    {
                        name: 'variableFeeControl';
                        type: 'u32';
                    },
                    {
                        name: 'binStep';
                        type: 'u16';
                    },
                    {
                        name: 'filterPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'decayPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u16';
                    },
                    {
                        name: 'lastUpdateTimestamp';
                        type: 'u64';
                    },
                    {
                        name: 'binStepU128';
                        type: 'u128';
                    },
                    {
                        name: 'sqrtPriceReference';
                        type: 'u128';
                    },
                    {
                        name: 'volatilityAccumulator';
                        type: 'u128';
                    },
                    {
                        name: 'volatilityReference';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'evtClaimPositionFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'feeAClaimed';
                        type: 'u64';
                    },
                    {
                        name: 'feeBClaimed';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtClaimProtocolFee';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtClaimReward';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'mintReward';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardIndex';
                        type: 'u8';
                    },
                    {
                        name: 'totalReward';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtCloseConfig';
            docs: ['Close config'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'config';
                        docs: ['Config pubkey'];
                        type: 'pubkey';
                    },
                    {
                        name: 'admin';
                        docs: ['admin pk'];
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtClosePosition';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'positionNftMint';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtCreateConfig';
            docs: ['Create static config'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolFees';
                        type: {
                            defined: {
                                name: 'poolFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'vaultConfigKey';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreatorAuthority';
                        type: 'pubkey';
                    },
                    {
                        name: 'activationType';
                        type: 'u8';
                    },
                    {
                        name: 'sqrtMinPrice';
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMaxPrice';
                        type: 'u128';
                    },
                    {
                        name: 'collectFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'index';
                        type: 'u64';
                    },
                    {
                        name: 'config';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtCreateDynamicConfig';
            docs: ['Create dynamic config'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'config';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreatorAuthority';
                        type: 'pubkey';
                    },
                    {
                        name: 'index';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtCreatePosition';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'positionNftMint';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtCreateTokenBadge';
            docs: ['Create token badge'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tokenMint';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtFundReward';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'funder';
                        type: 'pubkey';
                    },
                    {
                        name: 'mintReward';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardIndex';
                        type: 'u8';
                    },
                    {
                        name: 'amount';
                        type: 'u64';
                    },
                    {
                        name: 'transferFeeExcludedAmountIn';
                        type: 'u64';
                    },
                    {
                        name: 'rewardDurationEnd';
                        type: 'u64';
                    },
                    {
                        name: 'preRewardRate';
                        type: 'u128';
                    },
                    {
                        name: 'postRewardRate';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'evtInitializePool';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenBMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'creator';
                        type: 'pubkey';
                    },
                    {
                        name: 'payer';
                        type: 'pubkey';
                    },
                    {
                        name: 'alphaVault';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolFees';
                        type: {
                            defined: {
                                name: 'poolFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'sqrtMinPrice';
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMaxPrice';
                        type: 'u128';
                    },
                    {
                        name: 'activationType';
                        type: 'u8';
                    },
                    {
                        name: 'collectFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'liquidity';
                        type: 'u128';
                    },
                    {
                        name: 'sqrtPrice';
                        type: 'u128';
                    },
                    {
                        name: 'activationPoint';
                        type: 'u64';
                    },
                    {
                        name: 'tokenAFlag';
                        type: 'u8';
                    },
                    {
                        name: 'tokenBFlag';
                        type: 'u8';
                    },
                    {
                        name: 'tokenAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmount';
                        type: 'u64';
                    },
                    {
                        name: 'totalAmountA';
                        type: 'u64';
                    },
                    {
                        name: 'totalAmountB';
                        type: 'u64';
                    },
                    {
                        name: 'poolType';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'evtInitializeReward';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'funder';
                        type: 'pubkey';
                    },
                    {
                        name: 'creator';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardIndex';
                        type: 'u8';
                    },
                    {
                        name: 'rewardDuration';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtLiquidityChange';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmount';
                        type: 'u64';
                    },
                    {
                        name: 'transferFeeIncludedTokenAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'transferFeeIncludedTokenBAmount';
                        type: 'u64';
                    },
                    {
                        name: 'reserveAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'reserveBAmount';
                        type: 'u64';
                    },
                    {
                        name: 'liquidityDelta';
                        type: 'u128';
                    },
                    {
                        name: 'tokenAAmountThreshold';
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmountThreshold';
                        type: 'u64';
                    },
                    {
                        name: 'changeType';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'evtLockPosition';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'owner';
                        type: 'pubkey';
                    },
                    {
                        name: 'vesting';
                        type: 'pubkey';
                    },
                    {
                        name: 'cliffPoint';
                        type: 'u64';
                    },
                    {
                        name: 'periodFrequency';
                        type: 'u64';
                    },
                    {
                        name: 'cliffUnlockLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'liquidityPerPeriod';
                        type: 'u128';
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    }
                ];
            };
        },
        {
            name: 'evtPermanentLockPosition';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'lockLiquidityAmount';
                        type: 'u128';
                    },
                    {
                        name: 'totalPermanentLockedLiquidity';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'evtSetPoolStatus';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'status';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'evtSplitPosition2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'firstOwner';
                        type: 'pubkey';
                    },
                    {
                        name: 'secondOwner';
                        type: 'pubkey';
                    },
                    {
                        name: 'firstPosition';
                        type: 'pubkey';
                    },
                    {
                        name: 'secondPosition';
                        type: 'pubkey';
                    },
                    {
                        name: 'currentSqrtPrice';
                        type: 'u128';
                    },
                    {
                        name: 'amountSplits';
                        type: {
                            defined: {
                                name: 'splitAmountInfo';
                            };
                        };
                    },
                    {
                        name: 'firstPositionInfo';
                        type: {
                            defined: {
                                name: 'splitPositionInfo';
                            };
                        };
                    },
                    {
                        name: 'secondPositionInfo';
                        type: {
                            defined: {
                                name: 'splitPositionInfo';
                            };
                        };
                    },
                    {
                        name: 'splitPositionParameters';
                        type: {
                            defined: {
                                name: 'splitPositionParameters2';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'evtSplitPosition3';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'firstOwner';
                        type: 'pubkey';
                    },
                    {
                        name: 'secondOwner';
                        type: 'pubkey';
                    },
                    {
                        name: 'firstPosition';
                        type: 'pubkey';
                    },
                    {
                        name: 'secondPosition';
                        type: 'pubkey';
                    },
                    {
                        name: 'currentSqrtPrice';
                        type: 'u128';
                    },
                    {
                        name: 'amountSplits';
                        type: {
                            defined: {
                                name: 'splitAmountInfo2';
                            };
                        };
                    },
                    {
                        name: 'firstPositionInfo';
                        type: {
                            defined: {
                                name: 'splitPositionInfo2';
                            };
                        };
                    },
                    {
                        name: 'secondPositionInfo';
                        type: {
                            defined: {
                                name: 'splitPositionInfo2';
                            };
                        };
                    },
                    {
                        name: 'splitPositionParameters';
                        type: {
                            defined: {
                                name: 'splitPositionParameters3';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'evtSwap2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'tradeDirection';
                        type: 'u8';
                    },
                    {
                        name: 'collectFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'hasReferral';
                        type: 'bool';
                    },
                    {
                        name: 'params';
                        type: {
                            defined: {
                                name: 'swapParameters2';
                            };
                        };
                    },
                    {
                        name: 'swapResult';
                        type: {
                            defined: {
                                name: 'swapResult2';
                            };
                        };
                    },
                    {
                        name: 'includedTransferFeeAmountIn';
                        type: 'u64';
                    },
                    {
                        name: 'includedTransferFeeAmountOut';
                        type: 'u64';
                    },
                    {
                        name: 'excludedTransferFeeAmountOut';
                        type: 'u64';
                    },
                    {
                        name: 'currentTimestamp';
                        type: 'u64';
                    },
                    {
                        name: 'reserveAAmount';
                        type: 'u64';
                    },
                    {
                        name: 'reserveBAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtUpdatePoolFees';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'operator';
                        type: 'pubkey';
                    },
                    {
                        name: 'params';
                        type: {
                            defined: {
                                name: 'updatePoolFeesParameters';
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'evtUpdateRewardDuration';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardIndex';
                        type: 'u8';
                    },
                    {
                        name: 'oldRewardDuration';
                        type: 'u64';
                    },
                    {
                        name: 'newRewardDuration';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'evtUpdateRewardFunder';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardIndex';
                        type: 'u8';
                    },
                    {
                        name: 'oldFunder';
                        type: 'pubkey';
                    },
                    {
                        name: 'newFunder';
                        type: 'pubkey';
                    }
                ];
            };
        },
        {
            name: 'evtWithdrawIneligibleReward';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardMint';
                        type: 'pubkey';
                    },
                    {
                        name: 'amount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'initializeCustomizablePoolParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolFees';
                        docs: ['pool fees'];
                        type: {
                            defined: {
                                name: 'poolFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'sqrtMinPrice';
                        docs: ['sqrt min price'];
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMaxPrice';
                        docs: ['sqrt max price'];
                        type: 'u128';
                    },
                    {
                        name: 'hasAlphaVault';
                        docs: ['has alpha vault'];
                        type: 'bool';
                    },
                    {
                        name: 'liquidity';
                        docs: ['initialize liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'sqrtPrice';
                        docs: [
                            'The init price of the pool as a sqrt(token_b/token_a) Q64.64 value. Market cap fee scheduler minimum price will be derived from this value'
                        ];
                        type: 'u128';
                    },
                    {
                        name: 'activationType';
                        docs: ['activation type'];
                        type: 'u8';
                    },
                    {
                        name: 'collectFeeMode';
                        docs: ['collect fee mode'];
                        type: 'u8';
                    },
                    {
                        name: 'activationPoint';
                        docs: ['activation point'];
                        type: {
                            option: 'u64';
                        };
                    }
                ];
            };
        },
        {
            name: 'initializePoolParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'liquidity';
                        docs: ['initialize liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'sqrtPrice';
                        docs: [
                            'The init price of the pool as a sqrt(token_b/token_a) Q64.64 value'
                        ];
                        type: 'u128';
                    },
                    {
                        name: 'activationPoint';
                        docs: ['activation point'];
                        type: {
                            option: 'u64';
                        };
                    }
                ];
            };
        },
        {
            name: 'innerVesting';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffPoint';
                        type: 'u64';
                    },
                    {
                        name: 'periodFrequency';
                        type: 'u64';
                    },
                    {
                        name: 'cliffUnlockLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'liquidityPerPeriod';
                        type: 'u128';
                    },
                    {
                        name: 'totalReleasedLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 14];
                        };
                    }
                ];
            };
        },
        {
            name: 'operator';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'whitelistedAddress';
                        type: 'pubkey';
                    },
                    {
                        name: 'permission';
                        type: 'u128';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u64', 2];
                        };
                    }
                ];
            };
        },
        {
            name: 'podAlignedFeeMarketCapScheduler';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 5];
                        };
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'sqrtPriceStepBps';
                        type: 'u32';
                    },
                    {
                        name: 'schedulerExpirationDuration';
                        type: 'u32';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'podAlignedFeeRateLimiter';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 5];
                        };
                    },
                    {
                        name: 'feeIncrementBps';
                        type: 'u16';
                    },
                    {
                        name: 'maxLimiterDuration';
                        type: 'u32';
                    },
                    {
                        name: 'maxFeeBps';
                        type: 'u32';
                    },
                    {
                        name: 'referenceAmount';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'podAlignedFeeTimeScheduler';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        type: 'u64';
                    },
                    {
                        name: 'baseFeeMode';
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        type: {
                            array: ['u8', 5];
                        };
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    },
                    {
                        name: 'periodFrequency';
                        type: 'u64';
                    },
                    {
                        name: 'reductionFactor';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'pool';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolFees';
                        docs: ['Pool fee'];
                        type: {
                            defined: {
                                name: 'poolFeesStruct';
                            };
                        };
                    },
                    {
                        name: 'tokenAMint';
                        docs: ['token a mint'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenBMint';
                        docs: ['token b mint'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAVault';
                        docs: ['token a vault'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenBVault';
                        docs: ['token b vault'];
                        type: 'pubkey';
                    },
                    {
                        name: 'whitelistedVault';
                        docs: [
                            'Whitelisted vault to be able to buy pool before activation_point'
                        ];
                        type: 'pubkey';
                    },
                    {
                        name: 'padding0';
                        docs: [
                            'padding, previously partner pubkey, be careful when using this field'
                        ];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'liquidity';
                        docs: ['liquidity share'];
                        type: 'u128';
                    },
                    {
                        name: 'padding1';
                        docs: [
                            'padding, previous reserve amount, be careful to use that field'
                        ];
                        type: 'u128';
                    },
                    {
                        name: 'protocolAFee';
                        docs: ['protocol a fee'];
                        type: 'u64';
                    },
                    {
                        name: 'protocolBFee';
                        docs: ['protocol b fee'];
                        type: 'u64';
                    },
                    {
                        name: 'padding2';
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMinPrice';
                        docs: ['min price'];
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMaxPrice';
                        docs: ['max price'];
                        type: 'u128';
                    },
                    {
                        name: 'sqrtPrice';
                        docs: ['current price'];
                        type: 'u128';
                    },
                    {
                        name: 'activationPoint';
                        docs: ['Activation point, can be slot or timestamp'];
                        type: 'u64';
                    },
                    {
                        name: 'activationType';
                        docs: [
                            'Activation type, 0 means by slot, 1 means by timestamp'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'poolStatus';
                        docs: ['pool status, 0: enable, 1 disable'];
                        type: 'u8';
                    },
                    {
                        name: 'tokenAFlag';
                        docs: ['token a flag'];
                        type: 'u8';
                    },
                    {
                        name: 'tokenBFlag';
                        docs: ['token b flag'];
                        type: 'u8';
                    },
                    {
                        name: 'collectFeeMode';
                        docs: [
                            '0 is collect fee in both token, 1 only collect fee only in token b'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'poolType';
                        docs: ['pool type'];
                        type: 'u8';
                    },
                    {
                        name: 'feeVersion';
                        docs: [
                            'pool fee version, 0: max_fee is still capped at 50%, 1: max_fee is capped at 99%'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'padding3';
                        docs: ['padding'];
                        type: 'u8';
                    },
                    {
                        name: 'feeAPerLiquidity';
                        docs: ['cumulative'];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'feeBPerLiquidity';
                        docs: ['cumulative'];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'permanentLockLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'metrics';
                        docs: ['metrics'];
                        type: {
                            defined: {
                                name: 'poolMetrics';
                            };
                        };
                    },
                    {
                        name: 'creator';
                        docs: ['pool creator'];
                        type: 'pubkey';
                    },
                    {
                        name: 'tokenAAmount';
                        docs: ['token a amount'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmount';
                        docs: ['token b amount'];
                        type: 'u64';
                    },
                    {
                        name: 'layoutVersion';
                        docs: [
                            "layout version: version 0: haven't track token_a_amount and token_b_amount, version 1: track token_a_amount and token_b_amount"
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'padding4';
                        docs: ['Padding for further use'];
                        type: {
                            array: ['u8', 7];
                        };
                    },
                    {
                        name: 'padding5';
                        docs: ['Padding for further use'];
                        type: {
                            array: ['u64', 3];
                        };
                    },
                    {
                        name: 'rewardInfos';
                        docs: ['Farming reward information'];
                        type: {
                            array: [
                                {
                                    defined: {
                                        name: 'rewardInfo';
                                    };
                                },
                                2
                            ];
                        };
                    }
                ];
            };
        },
        {
            name: 'poolFeeParameters';
            docs: ['Information regarding fee charges'];
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'baseFee';
                        docs: ['Base fee'];
                        type: {
                            defined: {
                                name: 'baseFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'compoundingFeeBps';
                        docs: [
                            'compounding fee bps, only have value if CollectFeeMode::Compounding'
                        ];
                        type: 'u16';
                    },
                    {
                        name: 'padding';
                        docs: ['padding for future use'];
                        type: 'u8';
                    },
                    {
                        name: 'dynamicFee';
                        docs: ['dynamic fee'];
                        type: {
                            option: {
                                defined: {
                                    name: 'dynamicFeeParameters';
                                };
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'poolFeesConfig';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'baseFee';
                        type: {
                            defined: {
                                name: 'baseFeeInfo';
                            };
                        };
                    },
                    {
                        name: 'dynamicFee';
                        type: {
                            defined: {
                                name: 'dynamicFeeConfig';
                            };
                        };
                    },
                    {
                        name: 'protocolFeePercent';
                        type: 'u8';
                    },
                    {
                        name: 'padding0';
                        type: 'u8';
                    },
                    {
                        name: 'referralFeePercent';
                        type: 'u8';
                    },
                    {
                        name: 'padding1';
                        type: {
                            array: ['u8', 3];
                        };
                    },
                    {
                        name: 'compoundingFeeBps';
                        docs: [
                            'Compounding fee bps, only non-zero if collect_fee_mode is compounding'
                        ];
                        type: 'u16';
                    },
                    {
                        name: 'padding2';
                        type: {
                            array: ['u64', 5];
                        };
                    }
                ];
            };
        },
        {
            name: 'poolFeesStruct';
            docs: [
                'Information regarding fee charges',
                'trading_fee = amount * trade_fee_numerator / denominator',
                'protocol_fee = trading_fee * protocol_fee_percentage / 100',
                'referral_fee = protocol_fee * referral_percentage / 100'
            ];
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'baseFee';
                        docs: [
                            'Trade fees are extra token amounts that are held inside the token',
                            'accounts during a trade, making the value of liquidity tokens rise.',
                            'Trade fee numerator'
                        ];
                        type: {
                            defined: {
                                name: 'baseFeeStruct';
                            };
                        };
                    },
                    {
                        name: 'protocolFeePercent';
                        docs: [
                            'Protocol trading fees are extra token amounts that are held inside the token',
                            'accounts during a trade, with the equivalent in pool tokens minted to',
                            'the protocol of the program.',
                            'Protocol trade fee numerator'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'padding0';
                        docs: ['padding for future use'];
                        type: 'u8';
                    },
                    {
                        name: 'referralFeePercent';
                        docs: ['referral fee'];
                        type: 'u8';
                    },
                    {
                        name: 'padding1';
                        docs: ['padding'];
                        type: {
                            array: ['u8', 3];
                        };
                    },
                    {
                        name: 'compoundingFeeBps';
                        docs: [
                            'compounding fee bps, only non-zero in CollectFeeMode::Compounding'
                        ];
                        type: 'u16';
                    },
                    {
                        name: 'dynamicFee';
                        docs: ['dynamic fee'];
                        type: {
                            defined: {
                                name: 'dynamicFeeStruct';
                            };
                        };
                    },
                    {
                        name: 'initSqrtPrice';
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'poolMetrics';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'totalLpAFee';
                        type: 'u128';
                    },
                    {
                        name: 'totalLpBFee';
                        type: 'u128';
                    },
                    {
                        name: 'totalProtocolAFee';
                        type: 'u64';
                    },
                    {
                        name: 'totalProtocolBFee';
                        type: 'u64';
                    },
                    {
                        name: 'padding0';
                        type: {
                            array: ['u64', 2];
                        };
                    },
                    {
                        name: 'totalPosition';
                        type: 'u64';
                    },
                    {
                        name: 'padding';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'position';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'pool';
                        type: 'pubkey';
                    },
                    {
                        name: 'nftMint';
                        docs: ['nft mint'];
                        type: 'pubkey';
                    },
                    {
                        name: 'feeAPerTokenCheckpoint';
                        docs: ['fee a checkpoint'];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'feeBPerTokenCheckpoint';
                        docs: ['fee b checkpoint'];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'feeAPending';
                        docs: ['fee a pending'];
                        type: 'u64';
                    },
                    {
                        name: 'feeBPending';
                        docs: ['fee b pending'];
                        type: 'u64';
                    },
                    {
                        name: 'unlockedLiquidity';
                        docs: ['unlock liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'vestedLiquidity';
                        docs: ['vesting liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'permanentLockedLiquidity';
                        docs: ['permanent locked liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'metrics';
                        docs: ['metrics'];
                        type: {
                            defined: {
                                name: 'positionMetrics';
                            };
                        };
                    },
                    {
                        name: 'rewardInfos';
                        docs: ['Farming reward information'];
                        type: {
                            array: [
                                {
                                    defined: {
                                        name: 'userRewardInfo';
                                    };
                                },
                                2
                            ];
                        };
                    },
                    {
                        name: 'innerVesting';
                        docs: ['inner vesting info'];
                        type: {
                            defined: {
                                name: 'innerVesting';
                            };
                        };
                    },
                    {
                        name: 'padding';
                        docs: ['padding for future usage'];
                        type: 'u128';
                    }
                ];
            };
        },
        {
            name: 'positionMetrics';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'totalClaimedAFee';
                        type: 'u64';
                    },
                    {
                        name: 'totalClaimedBFee';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'removeLiquidityParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'liquidityDelta';
                        docs: ['delta liquidity'];
                        type: 'u128';
                    },
                    {
                        name: 'tokenAAmountThreshold';
                        docs: ['minimum token a amount'];
                        type: 'u64';
                    },
                    {
                        name: 'tokenBAmountThreshold';
                        docs: ['minimum token b amount'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'rewardInfo';
            docs: [
                'Stores the state relevant for tracking liquidity mining rewards'
            ];
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'initialized';
                        docs: ['Indicates if the reward has been initialized'];
                        type: 'u8';
                    },
                    {
                        name: 'rewardTokenFlag';
                        docs: ['reward token flag'];
                        type: 'u8';
                    },
                    {
                        name: 'padding0';
                        docs: ['padding'];
                        type: {
                            array: ['u8', 6];
                        };
                    },
                    {
                        name: 'padding1';
                        docs: [
                            'Padding to ensure `reward_rate: u128` is 16-byte aligned'
                        ];
                        type: {
                            array: ['u8', 8];
                        };
                    },
                    {
                        name: 'mint';
                        docs: ['Reward token mint.'];
                        type: 'pubkey';
                    },
                    {
                        name: 'vault';
                        docs: ['Reward vault token account.'];
                        type: 'pubkey';
                    },
                    {
                        name: 'funder';
                        docs: ['Authority account that allows to fund rewards'];
                        type: 'pubkey';
                    },
                    {
                        name: 'rewardDuration';
                        docs: ['reward duration'];
                        type: 'u64';
                    },
                    {
                        name: 'rewardDurationEnd';
                        docs: ['reward duration end'];
                        type: 'u64';
                    },
                    {
                        name: 'rewardRate';
                        docs: ['reward rate'];
                        type: 'u128';
                    },
                    {
                        name: 'rewardPerTokenStored';
                        docs: ['Reward per token stored'];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'lastUpdateTime';
                        docs: ['The last time reward states were updated.'];
                        type: 'u64';
                    },
                    {
                        name: 'cumulativeSecondsWithEmptyLiquidityReward';
                        docs: [
                            'Accumulated seconds when the farm distributed rewards but the bin was empty.',
                            'These rewards will be carried over to the next reward time window.'
                        ];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'splitAmountInfo';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'permanentLockedLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'unlockedLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'feeA';
                        type: 'u64';
                    },
                    {
                        name: 'feeB';
                        type: 'u64';
                    },
                    {
                        name: 'reward0';
                        type: 'u64';
                    },
                    {
                        name: 'reward1';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'splitAmountInfo2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'permanentLockedLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'unlockedLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'vestedLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'feeA';
                        type: 'u64';
                    },
                    {
                        name: 'feeB';
                        type: 'u64';
                    },
                    {
                        name: 'reward0';
                        type: 'u64';
                    },
                    {
                        name: 'reward1';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'splitPositionInfo';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'liquidity';
                        type: 'u128';
                    },
                    {
                        name: 'feeA';
                        type: 'u64';
                    },
                    {
                        name: 'feeB';
                        type: 'u64';
                    },
                    {
                        name: 'reward0';
                        type: 'u64';
                    },
                    {
                        name: 'reward1';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'splitPositionInfo2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'unlockedLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'permanentLockedLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'vestedLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'feeA';
                        type: 'u64';
                    },
                    {
                        name: 'feeB';
                        type: 'u64';
                    },
                    {
                        name: 'reward0';
                        type: 'u64';
                    },
                    {
                        name: 'reward1';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'splitPositionParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'unlockedLiquidityPercentage';
                        docs: [
                            'Percentage of unlocked liquidity to split to the second position'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'permanentLockedLiquidityPercentage';
                        docs: [
                            'Percentage of permanent locked liquidity to split to the second position'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'feeAPercentage';
                        docs: [
                            'Percentage of fee A pending to split to the second position'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'feeBPercentage';
                        docs: [
                            'Percentage of fee B pending to split to the second position'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'reward0Percentage';
                        docs: [
                            'Percentage of reward 0 pending to split to the second position'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'reward1Percentage';
                        docs: [
                            'Percentage of reward 1 pending to split to the second position'
                        ];
                        type: 'u8';
                    },
                    {
                        name: 'innerVestingLiquidityPercentage';
                        docs: ['Percentage of inner vesting liquidity'];
                        type: 'u8';
                    },
                    {
                        name: 'padding';
                        docs: ['padding for future'];
                        type: {
                            array: ['u8', 15];
                        };
                    }
                ];
            };
        },
        {
            name: 'splitPositionParameters2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'unlockedLiquidityNumerator';
                        type: 'u32';
                    },
                    {
                        name: 'permanentLockedLiquidityNumerator';
                        type: 'u32';
                    },
                    {
                        name: 'feeANumerator';
                        type: 'u32';
                    },
                    {
                        name: 'feeBNumerator';
                        type: 'u32';
                    },
                    {
                        name: 'reward0Numerator';
                        type: 'u32';
                    },
                    {
                        name: 'reward1Numerator';
                        type: 'u32';
                    }
                ];
            };
        },
        {
            name: 'splitPositionParameters3';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'unlockedLiquidityNumerator';
                        type: 'u32';
                    },
                    {
                        name: 'permanentLockedLiquidityNumerator';
                        type: 'u32';
                    },
                    {
                        name: 'feeANumerator';
                        type: 'u32';
                    },
                    {
                        name: 'feeBNumerator';
                        type: 'u32';
                    },
                    {
                        name: 'reward0Numerator';
                        type: 'u32';
                    },
                    {
                        name: 'reward1Numerator';
                        type: 'u32';
                    },
                    {
                        name: 'innerVestingLiquidityNumerator';
                        type: 'u32';
                    }
                ];
            };
        },
        {
            name: 'staticConfigParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'poolFees';
                        type: {
                            defined: {
                                name: 'poolFeeParameters';
                            };
                        };
                    },
                    {
                        name: 'sqrtMinPrice';
                        type: 'u128';
                    },
                    {
                        name: 'sqrtMaxPrice';
                        type: 'u128';
                    },
                    {
                        name: 'vaultConfigKey';
                        type: 'pubkey';
                    },
                    {
                        name: 'poolCreatorAuthority';
                        type: 'pubkey';
                    },
                    {
                        name: 'activationType';
                        type: 'u8';
                    },
                    {
                        name: 'collectFeeMode';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'swapParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'amountIn';
                        type: 'u64';
                    },
                    {
                        name: 'minimumAmountOut';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'swapParameters2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'amount0';
                        docs: [
                            "When it's exact in, partial fill, this will be amount_in. When it's exact out, this will be amount_out"
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'amount1';
                        docs: [
                            "When it's exact in, partial fill, this will be minimum_amount_out. When it's exact out, this will be maximum_amount_in"
                        ];
                        type: 'u64';
                    },
                    {
                        name: 'swapMode';
                        docs: ['Swap mode, refer [SwapMode]'];
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'swapResult2';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'includedFeeInputAmount';
                        type: 'u64';
                    },
                    {
                        name: 'excludedFeeInputAmount';
                        type: 'u64';
                    },
                    {
                        name: 'amountLeft';
                        type: 'u64';
                    },
                    {
                        name: 'outputAmount';
                        type: 'u64';
                    },
                    {
                        name: 'nextSqrtPrice';
                        type: 'u128';
                    },
                    {
                        name: 'claimingFee';
                        type: 'u64';
                    },
                    {
                        name: 'protocolFee';
                        type: 'u64';
                    },
                    {
                        name: 'compoundingFee';
                        type: 'u64';
                    },
                    {
                        name: 'referralFee';
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'tokenBadge';
            docs: ['Parameter that set by the protocol'];
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'tokenMint';
                        docs: ['token mint'];
                        type: 'pubkey';
                    },
                    {
                        name: 'padding';
                        docs: ['Reserve'];
                        type: {
                            array: ['u8', 128];
                        };
                    }
                ];
            };
        },
        {
            name: 'updatePoolFeesParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffFeeNumerator';
                        docs: [
                            'Base fee update mode:',
                            '- None: skip base fee update',
                            '- Some: update new cliff_fee_numerator if base fee is static'
                        ];
                        type: {
                            option: 'u64';
                        };
                    },
                    {
                        name: 'dynamicFee';
                        docs: [
                            'Dynamic fee update mode:',
                            '- None: skip dynamic fee update',
                            '- Some(with default value): disable dynamic fee',
                            '- Some(with non default value): enable dynamic fee if disabled or update dynamic fee if enabled'
                        ];
                        type: {
                            option: {
                                defined: {
                                    name: 'dynamicFeeParameters';
                                };
                            };
                        };
                    }
                ];
            };
        },
        {
            name: 'userRewardInfo';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'rewardPerTokenCheckpoint';
                        docs: ['The latest update reward checkpoint'];
                        type: {
                            array: ['u8', 32];
                        };
                    },
                    {
                        name: 'rewardPendings';
                        docs: ['Current pending rewards'];
                        type: 'u64';
                    },
                    {
                        name: 'totalClaimedRewards';
                        docs: ['Total claimed rewards'];
                        type: 'u64';
                    }
                ];
            };
        },
        {
            name: 'vesting';
            serialization: 'bytemuck';
            repr: {
                kind: 'c';
            };
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'position';
                        type: 'pubkey';
                    },
                    {
                        name: 'innerVesting';
                        type: {
                            defined: {
                                name: 'innerVesting';
                            };
                        };
                    },
                    {
                        name: 'padding2';
                        type: {
                            array: ['u128', 4];
                        };
                    }
                ];
            };
        },
        {
            name: 'vestingParameters';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'cliffPoint';
                        type: {
                            option: 'u64';
                        };
                    },
                    {
                        name: 'periodFrequency';
                        type: 'u64';
                    },
                    {
                        name: 'cliffUnlockLiquidity';
                        type: 'u128';
                    },
                    {
                        name: 'liquidityPerPeriod';
                        type: 'u128';
                    },
                    {
                        name: 'numberOfPeriod';
                        type: 'u16';
                    }
                ];
            };
        }
    ];
    constants: [
        {
            name: 'binStepBpsDefault';
            type: 'u16';
            value: '1';
        },
        {
            name: 'binStepU128DefaultLeBytes';
            type: {
                array: ['u8', 16];
            };
            value: '[203, 16, 199, 186, 184, 141, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0]';
        },
        {
            name: 'currentPoolVersion';
            type: 'u8';
            value: '1';
        },
        {
            name: 'customizablePoolPrefix';
            type: 'bytes';
            value: '[99, 112, 111, 111, 108]';
        },
        {
            name: 'feeDenominator';
            docs: [
                'Default fee denominator. DO NOT simply update it as it will break logic that depends on it as default value.'
            ];
            type: 'u64';
            value: '1000000000';
        },
        {
            name: 'maxBasisPoint';
            docs: ['Max basis point. 100% in pct'];
            type: 'u16';
            value: '10000';
        },
        {
            name: 'maxFeeNumeratorV0';
            type: 'u64';
            value: '500000000';
        },
        {
            name: 'maxFeeNumeratorV1';
            type: 'u64';
            value: '990000000';
        },
        {
            name: 'maxSqrtPriceLeBytes';
            type: {
                array: ['u8', 16];
            };
            value: '[155, 87, 105, 78, 169, 26, 92, 132, 177, 196, 254, 255, 0, 0, 0, 0]';
        },
        {
            name: 'minFeeNumerator';
            type: 'u64';
            value: '100000';
        },
        {
            name: 'minSqrtPriceLeBytes';
            type: {
                array: ['u8', 16];
            };
            value: '[80, 59, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]';
        },
        {
            name: 'poolAuthorityPrefix';
            type: 'bytes';
            value: '[112, 111, 111, 108, 95, 97, 117, 116, 104, 111, 114, 105, 116, 121]';
        },
        {
            name: 'poolPrefix';
            type: 'bytes';
            value: '[112, 111, 111, 108]';
        },
        {
            name: 'positionNftAccountPrefix';
            type: 'bytes';
            value: '[112, 111, 115, 105, 116, 105, 111, 110, 95, 110, 102, 116, 95, 97, 99, 99, 111, 117, 110, 116]';
        },
        {
            name: 'positionPrefix';
            type: 'bytes';
            value: '[112, 111, 115, 105, 116, 105, 111, 110]';
        },
        {
            name: 'splitPositionDenominator';
            type: 'u32';
            value: '1000000000';
        },
        {
            name: 'tokenVaultPrefix';
            type: 'bytes';
            value: '[116, 111, 107, 101, 110, 95, 118, 97, 117, 108, 116]';
        }
    ];
};

/**
 * Create an Anchor client for the DBC program.
 */
declare function createDbcProgram(connection: Connection, commitment?: Commitment): {
    program: Program<DynamicBondingCurve>;
};
/**
 * Create an Anchor client for the Dynamic Vault program.
 */
declare function createDynamicVaultProgram(connection: Connection, commitment?: Commitment): Program<Vault>;
/**
 * Create an Anchor client for the DAMM V1 program.
 */
declare function createDammV1Program(connection: Connection, commitment?: Commitment): Program<Amm>;
/**
 * Create an Anchor client for the DAMM V2 program.
 */
declare function createDammV2Program(connection: Connection, commitment?: Commitment): Program<CpAmm>;

/**
 * Return an ATA address and an idempotent create instruction when the account is missing.
 */
declare const getOrCreateATAInstruction: (connection: Connection, tokenMint: PublicKey, owner: PublicKey, payer: PublicKey, allowOwnerOffCurve: boolean, tokenProgram: PublicKey) => Promise<{
    ataPubkey: PublicKey;
    ix?: TransactionInstruction;
}>;
/**
 * Build an instruction that closes the owner's wrapped SOL ATA into a receiver.
 */
declare function unwrapSOLInstruction(owner: PublicKey, receiver: PublicKey, allowOwnerOffCurve?: boolean): TransactionInstruction | null;
/**
 * Build transfer and sync instructions that wrap SOL into an existing wrapped SOL account.
 */
declare function wrapSOLInstruction(from: PublicKey, to: PublicKey, amount: bigint): TransactionInstruction[];
/**
 * Derive the associated token address for a wallet, mint, and token program.
 */
declare function findAssociatedTokenAddress(walletAddress: PublicKey, tokenMintAddress: PublicKey, tokenProgramId: PublicKey): PublicKey;
/**
 * Fetch a mint account and return its token decimals.
 */
declare function getTokenDecimals(connection: Connection, mintAddress: PublicKey | string): Promise<number>;
/**
 * Return the SPL Token program ID for a token type.
 */
declare function getTokenProgram(tokenType: TokenType): PublicKey;
/**
 * Return the token type from the mint account owner, or `null` if the mint is missing.
 */
declare function getTokenType(connection: Connection, tokenMint: PublicKey): Promise<TokenType | null>;
/**
 * Build a setup transaction for a token account, including SOL wrapping when needed.
 */
declare function prepareTokenAccountTx(connection: Connection, owner: PublicKey, payer: PublicKey, tokenMint: PublicKey, amount: bigint, tokenProgram: PublicKey): Promise<{
    tokenAccount: PublicKey;
    transaction: Transaction;
}>;
/**
 * Build a cleanup transaction for wrapped SOL accounts.
 */
declare function cleanUpTokenAccountTx(owner: PublicKey, receiver: PublicKey, tokenMint: PublicKey): Promise<{
    transaction: Transaction;
}>;

/**
 * Build the instruction and derived addresses for a permissionless dynamic vault.
 */
declare function createInitializePermissionlessDynamicVaultIx(mint: PublicKey, payer: PublicKey, vaultProgram: Program<Vault>): Promise<{
    vaultKey: PublicKey;
    tokenVaultKey: PublicKey;
    lpMintKey: PublicKey;
    instruction: TransactionInstruction;
}>;
/**
 * Build the DAMM V1 lock escrow instruction.
 */
declare function createLockEscrowIx(payer: PublicKey, pool: PublicKey, lpMint: PublicKey, escrowOwner: PublicKey, lockEscrowKey: PublicKey, dammV1Program: Program<Amm>): Promise<TransactionInstruction>;

/**
 * Gets the initial liquidity from delta quote
 * Formula: Δb = L (√P_upper - √P_lower) => L = Δb / (√P_upper - √P_lower)
 * @param quoteAmount Quote amount
 * @param sqrtMinPrice Minimum sqrt price
 * @param sqrtPrice Current sqrt price
 * @returns Initial liquidity
 */
declare function getInitialLiquidityFromDeltaQuote(quoteAmount: BN$1, sqrtMinPrice: BN$1, sqrtPrice: BN$1): BN$1;
/**
 * Gets the initial liquidity from delta base
 * Formula: Δa = L * (1 / √P_lower - 1 / √P_upper) => L = Δa / (1 / √P_lower - 1 / √P_upper)
 * @param baseAmount Base amount
 * @param sqrtMaxPrice Maximum sqrt price (√P_upper)
 * @param sqrtPrice Current sqrt price (√P_lower)
 * @returns Initial liquidity
 */
declare function getInitialLiquidityFromDeltaBase(baseAmount: BN$1, sqrtMaxPrice: BN$1, sqrtPrice: BN$1): BN$1;
/**
 * Gets the delta amount_a for given liquidity and price range
 *
 * Formula:
 * - Δa = L * (1 / √P_lower - 1 / √P_upper)
 * - i.e. L * (√P_upper - √P_lower) / (√P_upper * √P_lower)
 *
 * @param lowerSqrtPrice Lower sqrt price
 * @param upperSqrtPrice Upper sqrt price
 * @param liquidity Liquidity
 * @param round Rounding direction
 * @returns Delta amount base
 */
declare function getDeltaAmountBaseUnsigned(lowerSqrtPrice: BN$1, upperSqrtPrice: BN$1, liquidity: BN$1, round: Rounding): BN$1;
declare function getDeltaAmountBaseUnsigned256(lowerSqrtPrice: BN$1, upperSqrtPrice: BN$1, liquidity: BN$1, round: Rounding): BN$1;
/**
 * i.e. L * (√P_upper - √P_lower) / (√P_upper * √P_lower)
 */
declare function getDeltaAmountBaseUnsignedUnchecked(lowerSqrtPrice: BN$1, upperSqrtPrice: BN$1, liquidity: BN$1, round: Rounding): BN$1;
/**
 * Gets the delta amount_quote for given liquidity and price range
 * Formula: Δb = L (√P_upper - √P_lower)
 * @param lowerSqrtPrice Lower sqrt price
 * @param upperSqrtPrice Upper sqrt price
 * @param liquidity Liquidity
 * @param round Rounding direction
 * @returns Delta amount quote
 */
declare function getDeltaAmountQuoteUnsigned(lowerSqrtPrice: BN$1, upperSqrtPrice: BN$1, liquidity: BN$1, round: Rounding): BN$1;
declare function getDeltaAmountQuoteUnsigned256(lowerSqrtPrice: BN$1, upperSqrtPrice: BN$1, liquidity: BN$1, round: Rounding): BN$1;
/**
 * Δb = L (√P_upper - √P_lower)
 */
declare function getDeltaAmountQuoteUnsignedUnchecked(lowerSqrtPrice: BN$1, upperSqrtPrice: BN$1, liquidity: BN$1, round: Rounding): BN$1;
/**
 * Gets the next sqrt price given an input amount of token_a or token_b
 * Throws if price or liquidity are 0, or if the next price is out of bounds
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity
 * @param amountIn Input amount
 * @param baseForQuote Whether the input is base token for quote token
 * @returns Next sqrt price
 */
declare function getNextSqrtPriceFromInput(sqrtPrice: BN$1, liquidity: BN$1, amountIn: BN$1, baseForQuote: boolean): BN$1;
/**
 * Gets the next sqrt price from output amount
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity
 * @param amountOut Output amount
 * @param baseForQuote Whether we're trading base for quote (true) or quote for base (false)
 * @returns Next sqrt price
 */
declare function getNextSqrtPriceFromOutput(sqrtPrice: BN$1, liquidity: BN$1, amountOut: BN$1, baseForQuote: boolean): BN$1;
/**
 * Gets the next sqrt price from amount quote output rounding down
 * Formula: √P' = √P - Δy / L
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity
 * @param amount Output amount
 * @returns Next sqrt price
 */
declare function getNextSqrtPriceFromQuoteAmountOutRoundingDown(sqrtPrice: BN$1, liquidity: BN$1, amount: BN$1): BN$1;
/**
 * Gets the next sqrt price from amount base output rounding up
 * Formula: √P' = √P * L / (L - Δx * √P)
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity
 * @param amount Output amount
 * @returns Next sqrt price
 */
declare function getNextSqrtPriceFromBaseAmountOutRoundingUp(sqrtPrice: BN$1, liquidity: BN$1, amount: BN$1): BN$1;
/**
 * Gets the next sqrt price from amount base input rounding up
 * Always round up because:
 * 1. In the exact output case, token 0 supply decreases leading to price increase.
 *    Move price up so that exact output is met.
 * 2. In the exact input case, token 0 supply increases leading to price decrease.
 *    Do not round down to minimize price impact. We only need to meet input
 *    change and not guarantee exact output.
 *
 * Formula: √P' = √P * L / (L + Δx * √P)
 * If Δx * √P overflows, use alternate form √P' = L / (L/√P + Δx)
 *
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity
 * @param amount Input amount
 * @returns Next sqrt price
 */
declare function getNextSqrtPriceFromBaseAmountInRoundingUp(sqrtPrice: BN$1, liquidity: BN$1, amount: BN$1): BN$1;
/**
 * Gets the next sqrt price from amount quote input rounding down
 * Always round down because:
 * 1. In the exact output case, token 1 supply decreases leading to price decrease.
 *    Move price down by rounding down so that exact output of token 0 is met.
 * 2. In the exact input case, token 1 supply increases leading to price increase.
 *    Do not round down to minimize price impact. We only need to meet input
 *    change and not guarantee exact output for token 0.
 *
 * Formula: √P' = √P + Δy / L
 *
 * @param sqrtPrice Current sqrt price
 * @param liquidity Liquidity
 * @param amount Input amount
 * @returns Next sqrt price
 */
declare function getNextSqrtPriceFromQuoteAmountInRoundingDown(sqrtPrice: BN$1, liquidity: BN$1, amount: BN$1): BN$1;

/**
 * Convert basis points to fee numerator
 * @param bps - Basis points
 * @param feeDenominator - Fee denominator
 * @returns Fee numerator
 * @throws Error if calculation fails due to overflow or type conversion
 */
declare function toNumerator(bps: BN$1, feeDenominator: BN$1): BN$1;
/**
 * Get fee mode
 * @param collectFeeMode Collect fee mode
 * @param tradeDirection Trade direction
 * @param hasReferral Whether referral is used
 * @returns Fee mode
 */
declare function getFeeMode(collectFeeMode: CollectFeeMode, tradeDirection: TradeDirection, hasReferral: boolean): FeeMode;
/**
 * Get total fee numerator from included fee amount
 * @param poolFees Pool fees
 * @param volatilityTracker Volatility tracker
 * @param currentPoint Current point
 * @param activationPoint Activation point
 * @param includedFeeAmount Included fee amount
 * @param tradeDirection Trade direction
 * @returns Total fee numerator
 */
declare function getTotalFeeNumeratorFromIncludedFeeAmount(poolFees: PoolFeesConfig, volatilityTracker: VolatilityTracker, currentPoint: BN$1, activationPoint: BN$1, includedFeeAmount: BN$1, tradeDirection: TradeDirection): BN$1;
/**
 * Get total fee numerator from excluded fee amount
 * @param poolFees Pool fees
 * @param volatilityTracker Volatility tracker
 * @param currentPoint Current point
 * @param activationPoint Activation point
 * @param excludedFeeAmount Excluded fee amount
 * @param tradeDirection Trade direction
 * @returns Total fee numerator
 */
declare function getTotalFeeNumeratorFromExcludedFeeAmount(poolFees: PoolFeesConfig, volatilityTracker: VolatilityTracker, currentPoint: BN$1, activationPoint: BN$1, excludedFeeAmount: BN$1, tradeDirection: TradeDirection): BN$1;
/**
 * Get total fee numerator from base fee numerator and volatility tracker
 * @param baseFeeNumerator Base fee numerator
 * @param dynamicFee Dynamic fee configuration
 * @param volatilityTracker Volatility tracker
 * @returns Total fee numerator
 */
declare function getTotalFeeNumerator(baseFeeNumerator: BN$1, dynamicFee: DynamicFeeConfig, volatilityTracker: VolatilityTracker): BN$1;
/**
 * Get fee on amount with trade fee numerator
 * @param tradeFeeNumerator Trade fee numerator
 * @param amount Amount
 * @param poolFees Pool fees
 * @param hasReferral Whether referral is used
 * @returns Fee on amount result
 */
declare function getFeeOnAmount(tradeFeeNumerator: BN$1, amount: BN$1, poolFees: PoolFeesConfig, hasReferral: boolean): FeeOnAmountResult;
/**
 * Get excluded fee amount from included fee amount
 * @param tradeFeeNumerator Trade fee numerator
 * @param includedFeeAmount Included fee amount
 * @returns [excluded fee amount, trading fee]
 */
declare function getExcludedFeeAmount(tradeFeeNumerator: BN$1, includedFeeAmount: BN$1): [BN$1, BN$1];
/**
 * Get included fee amount from excluded fee amount
 * @param tradeFeeNumerator Trade fee numerator
 * @param excludedFeeAmount Excluded fee amount
 * @returns [included fee amount, fee amount]
 */
declare function getIncludedFeeAmount(tradeFeeNumerator: BN$1, excludedFeeAmount: BN$1): [BN$1, BN$1];
/**
 * Split fees into trading, protocol, and referral fees
 * @param poolFees Pool fees
 * @param feeAmount Total fee amount
 * @param hasReferral Whether referral is used
 * @returns [trading fee, protocol fee, referral fee]
 */
declare function splitFees(poolFees: PoolFeesConfig, feeAmount: BN$1, hasReferral: boolean): [BN$1, BN$1, BN$1];

/**
 * Safe math operations for BN
 */
declare class SafeMath {
    /**
     * Safe addition
     * @param a First number
     * @param b Second number
     * @returns Sum of a and b
     */
    static add(a: BN$1, b: BN$1): BN$1;
    /**
     * Safe subtraction
     * @param a First number
     * @param b Second number
     * @returns Difference of a and b
     * @throws Error if b > a
     */
    static sub(a: BN$1, b: BN$1): BN$1;
    /**
     * Safe multiplication
     * @param a First number
     * @param b Second number
     * @returns Product of a and b
     */
    static mul(a: BN$1, b: BN$1): BN$1;
    /**
     * Safe division
     * @param a First number
     * @param b Second number
     * @returns Quotient of a and b
     * @throws Error if b is zero
     */
    static div(a: BN$1, b: BN$1): BN$1;
    /**
     * Safe modulo
     * @param a First number
     * @param b Second number
     * @returns Remainder of a divided by b
     * @throws Error if b is zero
     */
    static mod(a: BN$1, b: BN$1): BN$1;
    /**
     * Safe left shift
     * @param a Number to shift
     * @param b Number of bits to shift
     * @returns a << b
     */
    static shl(a: BN$1, b: number): BN$1;
    /**
     * Safe right shift
     * @param a Number to shift
     * @param b Number of bits to shift
     * @returns a >> b
     */
    static shr(a: BN$1, b: number): BN$1;
}
/**
 * Safe power function for BN with scaling
 * @param base Base number (scaled by RESOLUTION)
 * @param exponent Exponent (can be negative)
 * @param scaling Whether to apply RESOLUTION scaling to the result
 * @returns base^exponent
 */
declare function pow(base: BN$1, exponent: BN$1, scaling?: boolean): BN$1;

/**
 * Whether the curve has reached the migration quote threshold, counting both real and
 * virtual quote reserves (mirrors the program's `is_curve_complete`).
 */
declare function isCurveComplete(virtualPool: VirtualPool, config: PoolConfig): boolean;
/**
 * Whether the sale is complete: the curve reached the threshold or the pool's deadline
 * has passed (mirrors the program's `is_sale_complete`). `currentTimestamp` is in unix
 * seconds regardless of the pool's activation type; when omitted, the deadline check
 * is skipped.
 */
declare function isSaleComplete(virtualPool: VirtualPool, config: PoolConfig, currentTimestamp?: BN$1): boolean;
/**
 * Get swap result
 * @param poolState Pool state
 * @param configState Config state
 * @param amountIn Input amount
 * @param feeMode Fee mode
 * @param tradeDirection Trade direction
 * @param currentPoint Current point
 * @returns Swap result
 */
declare function getSwapResult(virtualPool: VirtualPool, configState: PoolConfig, amountIn: BN$1, feeMode: FeeMode, tradeDirection: TradeDirection, currentPoint: BN$1, eligibleForFirstSwapWithMinFee: boolean): SwapResult;
/**
 * Calculate quote for a swap with exact input amount (for swapQuote v1)
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param swapBaseForQuote Whether to swap base for quote
 * @param amountIn Input amount
 * @param slippageBps Slippage tolerance in basis points (100 = 1%)
 * @param hasReferral Whether referral is used
 * @param currentPoint Current point
 * @returns Swap quote result
 */
declare function swapQuote(virtualPool: VirtualPool, config: PoolConfig, swapBaseForQuote: boolean, amountIn: BN$1, slippageBps: number, hasReferral: boolean, currentPoint: BN$1, eligibleForFirstSwapWithMinFee: boolean, currentTimestamp?: BN$1): SwapQuoteResult;
/**
 * Get swap result from exact input
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param amountIn Input amount
 * @param feeMode Fee mode
 * @param tradeDirection Trade direction
 * @param currentPoint Current point
 * @param eligibleForFirstSwapWithMinFee Whether eligible for first swap with min fee
 * @returns Swap result
 */
declare function getSwapResultFromExactInput(virtualPool: VirtualPool, config: PoolConfig, amountIn: BN$1, feeMode: FeeMode, tradeDirection: TradeDirection, currentPoint: BN$1, eligibleForFirstSwapWithMinFee: boolean): SwapResult2;
/**
 * Get swap result from partial input
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param amountIn Input amount
 * @param feeMode Fee mode
 * @param tradeDirection Trade direction
 * @param currentPoint Current point
 * @param eligibleForFirstSwapWithMinFee Whether eligible for first swap with min fee
 * @returns Swap result
 */
declare function getSwapResultFromPartialInput(virtualPool: VirtualPool, config: PoolConfig, amountIn: BN$1, feeMode: FeeMode, tradeDirection: TradeDirection, currentPoint: BN$1, eligibleForFirstSwapWithMinFee: boolean): SwapResult2;
/**
 * Calculate output amount from base to quote from amount in
 * @param configState Config state
 * @param currentSqrtPrice Current sqrt price
 * @param amountIn Input amount
 * @returns Swap amount
 */
declare function calculateBaseToQuoteFromAmountIn(configState: {
    curve: Array<{
        sqrtPrice: BN$1;
        liquidity: BN$1;
    }>;
    sqrtStartPrice: BN$1;
}, currentSqrtPrice: BN$1, amountIn: BN$1): SwapAmount;
/**
 * Calculate output amount from quote to base from amount in
 * @param configState Config state
 * @param currentSqrtPrice Current sqrt price
 * @param amountIn Input amount
 * @param stopSqrtPrice Stop sqrt price
 * @returns Swap amount
 */
declare function calculateQuoteToBaseFromAmountIn(configState: {
    curve: Array<{
        sqrtPrice: BN$1;
        liquidity: BN$1;
    }>;
}, currentSqrtPrice: BN$1, amountIn: BN$1, stopSqrtPrice: BN$1): SwapAmount;
/**
 * Get swap result from exact output
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param amountOut Output amount
 * @param feeMode Fee mode
 * @param tradeDirection Trade direction
 * @param currentPoint Current point
 * @param eligibleForFirstSwapWithMinFee Whether eligible for first swap with min fee
 * @returns Swap result
 */
declare function getSwapResultFromExactOutput(virtualPool: VirtualPool, config: PoolConfig, amountOut: BN$1, feeMode: FeeMode, tradeDirection: TradeDirection, currentPoint: BN$1, eligibleForFirstSwapWithMinFee: boolean): SwapResult2;
/**
 * Calculate input amount from base to quote from amount out
 * @param configState Config state
 * @param currentSqrtPrice Current sqrt price
 * @param outAmount Quote output amount
 * @returns Swap amount with input calculated
 */
declare function calculateBaseToQuoteFromAmountOut(configState: PoolConfig, currentSqrtPrice: BN$1, outAmount: BN$1): SwapAmount;
/**
 * Calculate input amount from quote to base from amount out
 * @param configState Config state
 * @param currentSqrtPrice Current sqrt price
 * @param outAmount Base output amount
 * @returns Swap amount with input calculated
 */
declare function calculateQuoteToBaseFromAmountOut(configState: PoolConfig, currentSqrtPrice: BN$1, outAmount: BN$1): SwapAmount;
/**
 * Calculate quote for a swap with exact input amount
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param swapBaseForQuote Whether to swap base for quote
 * @param amountIn Input amount
 * @param slippageBps Slippage tolerance in basis points (100 = 1%)
 * @param hasReferral Whether referral is used
 * @param currentPoint Current point
 * @param eligibleForFirstSwapWithMinFee Whether eligible for first swap with min fee
 * @returns Swap quote result
 */
declare function swapQuoteExactIn(virtualPool: VirtualPool, config: PoolConfig, swapBaseForQuote: boolean, amountIn: BN$1, slippageBps: number, hasReferral: boolean, currentPoint: BN$1, eligibleForFirstSwapWithMinFee: boolean, currentTimestamp?: BN$1): SwapQuote2Result;
/**
 * Calculate quote for a swap with partial fill
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param swapBaseForQuote Whether to swap base for quote
 * @param amountIn Input amount
 * @param hasReferral Whether referral is used
 * @param currentPoint Current point
 * @param eligibleForFirstSwapWithMinFee Whether eligible for first swap with min fee
 * @returns Swap quote result
 */
declare function swapQuotePartialFill(virtualPool: VirtualPool, config: PoolConfig, swapBaseForQuote: boolean, amountIn: BN$1, slippageBps: number, hasReferral: boolean, currentPoint: BN$1, eligibleForFirstSwapWithMinFee: boolean, currentTimestamp?: BN$1): SwapQuote2Result;
/**
 * Calculate quote for a swap with exact output amount
 * @param virtualPool Virtual pool state
 * @param config Pool config state
 * @param swapBaseForQuote Whether to swap base for quote
 * @param outAmount Output amount
 * @param slippageBps Slippage tolerance in basis points (100 = 1%)
 * @param hasReferral Whether referral is used
 * @param currentPoint Current point
 * @param eligibleForFirstSwapWithMinFee Whether eligible for first swap with min fee
 * @returns Swap quote result with input amount calculated
 */
declare function swapQuoteExactOut(virtualPool: VirtualPool, config: PoolConfig, swapBaseForQuote: boolean, outAmount: BN$1, slippageBps: number, hasReferral: boolean, currentPoint: BN$1, eligibleForFirstSwapWithMinFee: boolean, currentTimestamp?: BN$1): SwapQuote2Result;

/**
 * Multiply and divide with rounding using BN
 * @param x First number
 * @param y Second number
 * @param denominator Denominator
 * @param rounding Rounding direction
 * @returns (x * y) / denominator
 * @throws If division by zero or overflow occurs
 */
declare function mulDiv(x: BN$1, y: BN$1, denominator: BN$1, rounding: Rounding): BN$1;
/**
 * Multiply and shift right with BN
 * @param x First number
 * @param y Second number
 * @param offset Number of bits to shift
 * @returns (x * y) >> offset
 */
declare function mulShr(x: BN$1, y: BN$1, offset: number): BN$1;
/**
 * Calculate square root of a BN number using Newton's method
 * @param value - The value to calculate square root for
 * @returns Square root of the value
 */
declare function sqrt(value: BN$1): BN$1;

/**
 * Fee Rate Limiter implementation
 */
declare class FeeRateLimiter implements BaseFeeHandler {
    cliffFeeNumerator: BN$1;
    feeIncrementBps: number;
    maxLimiterDuration: BN$1;
    referenceAmount: BN$1;
    constructor(cliffFeeNumerator: BN$1, feeIncrementBps: number, maxLimiterDuration: BN$1, referenceAmount: BN$1);
    validate(collectFeeMode: CollectFeeMode, activationType: ActivationType): boolean;
    getMinBaseFeeNumerator(): BN$1;
    getBaseFeeNumeratorFromIncludedFeeAmount(currentPoint: BN$1, activationPoint: BN$1, tradeDirection: TradeDirection, includedFeeAmount: BN$1): BN$1;
    getBaseFeeNumeratorFromExcludedFeeAmount(currentPoint: BN$1, activationPoint: BN$1, tradeDirection: TradeDirection, excludedFeeAmount: BN$1): BN$1;
}
/**
 * Fee Scheduler implementation
 */
declare class FeeScheduler implements BaseFeeHandler {
    cliffFeeNumerator: BN$1;
    numberOfPeriod: number;
    periodFrequency: BN$1;
    reductionFactor: BN$1;
    feeSchedulerMode: BaseFeeMode;
    constructor(cliffFeeNumerator: BN$1, numberOfPeriod: number, periodFrequency: BN$1, reductionFactor: BN$1, feeSchedulerMode: BaseFeeMode);
    validate(): boolean;
    getMinBaseFeeNumerator(): BN$1;
    getBaseFeeNumeratorFromIncludedFeeAmount(currentPoint: BN$1, activationPoint: BN$1): BN$1;
    getBaseFeeNumeratorFromExcludedFeeAmount(currentPoint: BN$1, activationPoint: BN$1): BN$1;
}
/**
 * Get base fee handler based on base fee mode
 * @param cliffFeeNumerator Cliff fee numerator
 * @param firstFactor First factor (feeScheduler: numberOfPeriod, rateLimiter: feeIncrementBps)
 * @param secondFactor Second factor (feeScheduler: periodFrequency, rateLimiter: maxLimiterDuration)
 * @param thirdFactor Third factor (feeScheduler: reductionFactor, rateLimiter: referenceAmount)
 * @param baseFeeMode Base fee mode
 * @returns Base fee handler instance
 */
declare function getBaseFeeHandler(cliffFeeNumerator: BN$1, firstFactor: number, secondFactor: BN$1, thirdFactor: BN$1, baseFeeMode: BaseFeeMode): BaseFeeHandler;

/**
 * Check if dynamic fee is enabled
 * @param dynamicFee Dynamic fee parameters
 * @returns True if dynamic fee is enabled
 */
declare function isDynamicFeeEnabled(dynamicFee: DynamicFeeConfig): boolean;
/**
 * Get variable fee numerator from dynamic fee
 * @param dynamicFee Dynamic fee parameters
 * @param volatilityTracker Volatility tracker
 * formula: dynamic_fee_numerator = ((volatility_accumulator * bin_step)^2 * variable_fee_control + 99_999_999_999) / 100_000_000_000
 * @returns Variable fee numerator
 */
declare function getVariableFeeNumerator(dynamicFee: DynamicFeeConfig, volatilityTracker: VolatilityTracker): BN$1;

/**
 * Get max base fee numerator
 * @param cliffFeeNumerator Cliff fee numerator
 * @returns Max fee numerator
 */
declare function getFeeSchedulerMaxBaseFeeNumerator(cliffFeeNumerator: BN$1): BN$1;
/**
 * Get min base fee numerator
 * @param cliffFeeNumerator Cliff fee numerator
 * @param numberOfPeriod Number of periods
 * @param periodFrequency Period frequency
 * @param reductionFactor Reduction factor
 * @param feeSchedulerMode Fee scheduler mode
 * @returns Min fee numerator
 */
declare function getFeeSchedulerMinBaseFeeNumerator(cliffFeeNumerator: BN$1, numberOfPeriod: number, reductionFactor: BN$1, feeSchedulerMode: BaseFeeMode): BN$1;
/**
 * Get base fee numerator by period
 * @param cliffFeeNumerator Cliff fee numerator
 * @param numberOfPeriod Number of periods
 * @param period Period to calculate fee for
 * @param reductionFactor Reduction factor
 * @param feeSchedulerMode Fee scheduler mode
 * @returns Fee numerator
 */
declare function getBaseFeeNumeratorByPeriod(cliffFeeNumerator: BN$1, numberOfPeriod: number, period: BN$1, reductionFactor: BN$1, feeSchedulerMode: BaseFeeMode): BN$1;
/**
 * Get fee in period for linear fee scheduler
 * @param cliffFeeNumerator Cliff fee numerator
 * @param reductionFactor Reduction factor
 * @param period Period
 * @returns Fee numerator
 */
declare function getFeeNumeratorOnLinearFeeScheduler(cliffFeeNumerator: BN$1, reductionFactor: BN$1, period: number): BN$1;
/**
 * Get fee in period for exponential fee scheduler
 * @param cliffFeeNumerator Cliff fee numerator
 * @param reductionFactor Reduction factor
 * @param period Period
 * @returns Fee numerator
 */
declare function getFeeNumeratorOnExponentialFeeScheduler(cliffFeeNumerator: BN$1, reductionFactor: BN$1, period: number): BN$1;
/**
 * Get base fee numerator
 * @param cliffFeeNumerator Cliff fee numerator
 * @param numberOfPeriod Number of periods
 * @param periodFrequency Period frequency
 * @param reductionFactor Reduction factor
 * @param feeSchedulerMode Fee scheduler mode
 * @param currentPoint Current point (slot or timestamp)
 * @param activationPoint Activation point
 * @returns Fee numerator
 */
declare function getBaseFeeNumerator(cliffFeeNumerator: BN$1, numberOfPeriod: number, periodFrequency: BN$1, reductionFactor: BN$1, feeSchedulerMode: BaseFeeMode, currentPoint: BN$1, activationPoint: BN$1): BN$1;

/**
 * Check if rate limiter is applied based on current conditions
 * @param currentPoint - Current point (slot or timestamp)
 * @param activationPoint - Activation point
 * @param tradeDirection - Trade direction
 * @param maxLimiterDuration - Max limiter duration
 * @param referenceAmount - Reference amount for rate limiter
 * @param feeIncrementBps - Fee increment bps for rate limiter
 * @returns Whether rate limiter is applied
 */
declare function isRateLimiterApplied(currentPoint: BN$1, activationPoint: BN$1, tradeDirection: TradeDirection, maxLimiterDuration: BN$1, referenceAmount: BN$1, feeIncrementBps: BN$1): boolean;
/**
 * Check if rate limiter is zero (disabled)
 * @param referenceAmount - Reference amount
 * @param maxLimiterDuration - Max limiter duration
 * @param feeIncrementBps - Fee increment bps
 * @returns Whether rate limiter is zero
 */
declare function isZeroRateLimiter(referenceAmount: BN$1, maxLimiterDuration: BN$1, feeIncrementBps: BN$1): boolean;
/**
 * Check if rate limiter is non-zero (enabled)
 * @param referenceAmount - Reference amount
 * @param maxLimiterDuration - Max limiter duration
 * @param feeIncrementBps - Fee increment bps
 * @returns Whether rate limiter is non-zero
 */
declare function isNonZeroRateLimiter(referenceAmount: BN$1, maxLimiterDuration: BN$1, feeIncrementBps: BN$1): boolean;
/**
 * Calculate the max index for rate limiter
 * @param cliffFeeNumerator - The cliff fee numerator
 * @param feeIncrementBps - The fee increment bps
 * @returns The max index
 * @throws Error if calculation fails due to overflow or division by zero
 */
declare function getMaxIndex(cliffFeeNumerator: BN$1, feeIncrementBps: BN$1): BN$1;
/**
 * Get max out amount with min base fee
 * @param cliffFeeNumerator - Cliff fee numerator
 * @param referenceAmount - Reference amount
 * @param feeIncrementBps - Fee increment bps
 * @returns Max out amount
 */
declare function getMaxOutAmountWithMinBaseFee(cliffFeeNumerator: BN$1, referenceAmount: BN$1, feeIncrementBps: BN$1): BN$1;
/**
 * Get checked amounts for rate limiter
 * @param cliffFeeNumerator - Cliff fee numerator
 * @param referenceAmount - Reference amount
 * @param feeIncrementBps - Fee increment bps
 * @returns Tuple of (checkedExcludedFeeAmount, checkedIncludedFeeAmount, isOverflow)
 */
declare function getCheckedAmounts(cliffFeeNumerator: BN$1, referenceAmount: BN$1, feeIncrementBps: BN$1): [BN$1, BN$1, boolean];
/**
 * Calculate the fee numerator on rate limiter from excluded fee amount
 * @param cliffFeeNumerator - The cliff fee numerator
 * @param referenceAmount - The reference amount
 * @param feeIncrementBps - The fee increment bps
 * @param excludedFeeAmount - The excluded fee amount
 * @returns The fee numerator
 */
declare function getFeeNumeratorFromExcludedAmount(cliffFeeNumerator: BN$1, referenceAmount: BN$1, feeIncrementBps: BN$1, excludedFeeAmount: BN$1): BN$1;
/**
 * Get excluded fee amount from included fee amount using rate limiter
 * @param cliffFeeNumerator - The cliff fee numerator
 * @param referenceAmount - The reference amount
 * @param feeIncrementBps - The fee increment bps
 * @param includedFeeAmount - The included fee amount
 * @returns The excluded fee amount
 */
declare function getRateLimiterExcludedFeeAmount(cliffFeeNumerator: BN$1, referenceAmount: BN$1, feeIncrementBps: BN$1, includedFeeAmount: BN$1): BN$1;
/**
 * Calculate the fee numerator on rate limiter from included fee amount
 * @param cliffFeeNumerator - The cliff fee numerator
 * @param referenceAmount - The reference amount
 * @param feeIncrementBps - The fee increment bps
 * @param includedFeeAmount - The included fee amount
 * @returns The fee numerator
 */
declare function getFeeNumeratorFromIncludedAmount(cliffFeeNumerator: BN$1, referenceAmount: BN$1, feeIncrementBps: BN$1, includedFeeAmount: BN$1): BN$1;
/**
 * Get the min base fee numerator for rate limiter
 * @param cliffFeeNumerator - The cliff fee numerator
 * @returns The min base fee numerator
 */
declare function getRateLimiterMinBaseFeeNumerator(cliffFeeNumerator: BN$1): BN$1;

var address = "DBCMoopTYxovF6tWuNXzQjSG9oJs5Ap4UV3HMWU7mFh7";
var metadata = {
	name: "dynamic_bonding_curve",
	version: "0.2.0",
	spec: "0.1.0",
	description: "Created with Anchor"
};
var instructions = [
	{
		name: "claim_creator_trading_fee",
		docs: [
			"Accepts: VirtualPool only."
		],
		discriminator: [
			82,
			220,
			250,
			189,
			3,
			85,
			107,
			45
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "token_a_account",
				docs: [
					"The treasury token a account"
				],
				writable: true
			},
			{
				name: "token_b_account",
				docs: [
					"The treasury token b account"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for input token"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true
			},
			{
				name: "base_mint",
				docs: [
					"The mint of token a"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of token b"
				]
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token a program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "max_base_amount",
				type: "u64"
			},
			{
				name: "max_quote_amount",
				type: "u64"
			}
		]
	},
	{
		name: "claim_creator_trading_fee2",
		docs: [
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			238,
			247,
			213,
			94,
			110,
			145,
			88,
			142
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "token_a_account",
				docs: [
					"The treasury token a account"
				],
				writable: true
			},
			{
				name: "token_b_account",
				docs: [
					"The treasury token b account"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for input token"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true
			},
			{
				name: "base_mint",
				docs: [
					"The mint of token a"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of token b"
				]
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token a program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "max_base_amount",
				type: "u64"
			},
			{
				name: "max_quote_amount",
				type: "u64"
			},
			{
				name: "transfer_hook_accounts_info",
				type: {
					defined: {
						name: "TransferHookAccountsInfo"
					}
				}
			}
		]
	},
	{
		name: "claim_partner_pool_creation_fee",
		docs: [
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			250,
			238,
			26,
			4,
			139,
			10,
			101,
			248
		],
		accounts: [
			{
				name: "config"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "fee_claimer",
				signer: true
			},
			{
				name: "fee_receiver",
				writable: true
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "claim_protocol_fee",
		docs: [
			"Accepts: VirtualPool only."
		],
		discriminator: [
			165,
			228,
			133,
			48,
			99,
			249,
			255,
			33
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "config",
				relations: [
					"pool"
				]
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for input token"
				],
				writable: true,
				relations: [
					"pool"
				]
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true,
				relations: [
					"pool"
				]
			},
			{
				name: "base_mint",
				docs: [
					"The mint of token a"
				],
				relations: [
					"pool"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of token b"
				],
				relations: [
					"config"
				]
			},
			{
				name: "token_base_account",
				writable: true
			},
			{
				name: "token_quote_account",
				writable: true
			},
			{
				name: "operator"
			},
			{
				name: "signer",
				docs: [
					"Signer"
				],
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token a program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "max_base_amount",
				type: "u64"
			},
			{
				name: "max_quote_amount",
				type: "u64"
			}
		]
	},
	{
		name: "claim_protocol_fee2",
		docs: [
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			235,
			194,
			54,
			69,
			65,
			10,
			236,
			112
		],
		accounts: [
			{
				name: "receiver_token_account",
				docs: [
					"receiver token account for the claimed token. validated through the protocol_fee program"
				],
				writable: true
			},
			{
				name: "base_mint"
			},
			{
				name: "quote_mint"
			},
			{
				name: "token_base_program"
			},
			{
				name: "token_quote_program"
			},
			{
				name: "config"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "base_vault",
				writable: true
			},
			{
				name: "quote_vault",
				writable: true
			},
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "signer",
				signer: true,
				address: "FkU5rQCWQM131skHCpcEbK8P1JrQGsBgqXe55w525SSF"
			}
		],
		args: [
			{
				name: "max_amount",
				type: "u64"
			}
		]
	},
	{
		name: "claim_protocol_pool_creation_fee",
		docs: [
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			114,
			205,
			83,
			188,
			240,
			153,
			25,
			54
		],
		accounts: [
			{
				name: "config"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "operator"
			},
			{
				name: "signer",
				docs: [
					"Operator"
				],
				signer: true
			},
			{
				name: "treasury",
				writable: true,
				address: "Ff4kZLzK89T3tjMknyNHAyTU1sUzMtnbvbzuuaNvXFcZ"
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "claim_trading_fee",
		docs: [
			"Accepts: VirtualPool only."
		],
		discriminator: [
			8,
			236,
			89,
			49,
			152,
			125,
			177,
			81
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "config"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "token_a_account",
				docs: [
					"The treasury token a account"
				],
				writable: true
			},
			{
				name: "token_b_account",
				docs: [
					"The treasury token b account"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for input token"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true
			},
			{
				name: "base_mint",
				docs: [
					"The mint of token a"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of token b"
				]
			},
			{
				name: "fee_claimer",
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token a program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "max_amount_a",
				type: "u64"
			},
			{
				name: "max_amount_b",
				type: "u64"
			}
		]
	},
	{
		name: "claim_trading_fee2",
		docs: [
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			84,
			191,
			71,
			50,
			9,
			162,
			55,
			193
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "config"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "token_a_account",
				docs: [
					"The treasury token a account"
				],
				writable: true
			},
			{
				name: "token_b_account",
				docs: [
					"The treasury token b account"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for input token"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true
			},
			{
				name: "base_mint",
				docs: [
					"The mint of token a"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of token b"
				]
			},
			{
				name: "fee_claimer",
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token a program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "max_amount_a",
				type: "u64"
			},
			{
				name: "max_amount_b",
				type: "u64"
			},
			{
				name: "transfer_hook_accounts_info",
				type: {
					defined: {
						name: "TransferHookAccountsInfo"
					}
				}
			}
		]
	},
	{
		name: "close_claim_protocol_fee_operator",
		discriminator: [
			8,
			41,
			87,
			35,
			80,
			48,
			121,
			26
		],
		accounts: [
			{
				name: "claim_fee_operator",
				writable: true
			},
			{
				name: "rent_receiver",
				writable: true
			},
			{
				name: "signer",
				signer: true
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "close_operator_account",
		discriminator: [
			171,
			9,
			213,
			74,
			120,
			23,
			3,
			29
		],
		accounts: [
			{
				name: "operator",
				writable: true
			},
			{
				name: "signer",
				signer: true
			},
			{
				name: "rent_receiver",
				writable: true
			}
		],
		args: [
		]
	},
	{
		name: "create_config",
		discriminator: [
			201,
			207,
			243,
			114,
			75,
			111,
			47,
			189
		],
		accounts: [
			{
				name: "config",
				writable: true,
				signer: true
			},
			{
				name: "fee_claimer"
			},
			{
				name: "leftover_receiver"
			},
			{
				name: "quote_mint",
				docs: [
					"quote mint"
				]
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "config_parameters",
				type: {
					defined: {
						name: "ConfigParameters"
					}
				}
			}
		]
	},
	{
		name: "create_config_with_transfer_hook",
		discriminator: [
			216,
			37,
			1,
			57,
			88,
			226,
			25,
			41
		],
		accounts: [
			{
				name: "config",
				writable: true,
				signer: true
			},
			{
				name: "fee_claimer"
			},
			{
				name: "leftover_receiver"
			},
			{
				name: "quote_mint",
				docs: [
					"quote mint"
				]
			},
			{
				name: "transfer_hook_program"
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "config_parameters",
				type: {
					defined: {
						name: "ConfigParameters"
					}
				}
			}
		]
	},
	{
		name: "create_locker",
		docs: [
			"PERMISSIONLESS FUNCTIONS ///",
			"create locker",
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			167,
			90,
			137,
			154,
			75,
			47,
			17,
			84
		],
		accounts: [
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "config"
			},
			{
				name: "pool_authority",
				writable: true,
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "base_vault",
				writable: true
			},
			{
				name: "base_mint",
				writable: true
			},
			{
				name: "base",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								98,
								97,
								115,
								101,
								95,
								108,
								111,
								99,
								107,
								101,
								114
							]
						},
						{
							kind: "account",
							path: "virtual_pool"
						}
					]
				}
			},
			{
				name: "creator"
			},
			{
				name: "escrow",
				writable: true
			},
			{
				name: "escrow_token",
				writable: true
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "token_program"
			},
			{
				name: "locker_program",
				address: "LocpQgucEQHbqNABEYvBvwoxCPsSbG91A1QaQhQQqjn"
			},
			{
				name: "locker_event_authority"
			},
			{
				name: "system_program",
				docs: [
					"System program."
				],
				address: "11111111111111111111111111111111"
			}
		],
		args: [
		]
	},
	{
		name: "create_operator_account",
		discriminator: [
			221,
			64,
			246,
			149,
			240,
			153,
			229,
			163
		],
		accounts: [
			{
				name: "operator",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								111,
								112,
								101,
								114,
								97,
								116,
								111,
								114
							]
						},
						{
							kind: "account",
							path: "whitelisted_address"
						}
					]
				}
			},
			{
				name: "whitelisted_address"
			},
			{
				name: "signer",
				signer: true
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "permission",
				type: "u128"
			}
		]
	},
	{
		name: "create_partner_metadata",
		docs: [
			"PARTNER FUNCTIONS ///"
		],
		discriminator: [
			192,
			168,
			234,
			191,
			188,
			226,
			227,
			255
		],
		accounts: [
			{
				name: "partner_metadata",
				docs: [
					"Partner metadata"
				],
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								112,
								97,
								114,
								116,
								110,
								101,
								114,
								95,
								109,
								101,
								116,
								97,
								100,
								97,
								116,
								97
							]
						},
						{
							kind: "account",
							path: "fee_claimer"
						}
					]
				}
			},
			{
				name: "payer",
				docs: [
					"Payer of the partner metadata."
				],
				writable: true,
				signer: true
			},
			{
				name: "fee_claimer",
				docs: [
					"Fee claimer for partner"
				],
				signer: true
			},
			{
				name: "system_program",
				docs: [
					"System program."
				],
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "metadata",
				type: {
					defined: {
						name: "CreatePartnerMetadataParameters"
					}
				}
			}
		]
	},
	{
		name: "create_virtual_pool_metadata",
		docs: [
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			45,
			97,
			187,
			103,
			254,
			109,
			124,
			134
		],
		accounts: [
			{
				name: "virtual_pool"
			},
			{
				name: "virtual_pool_metadata",
				docs: [
					"Virtual pool metadata"
				],
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								118,
								105,
								114,
								116,
								117,
								97,
								108,
								95,
								112,
								111,
								111,
								108,
								95,
								109,
								101,
								116,
								97,
								100,
								97,
								116,
								97
							]
						},
						{
							kind: "account",
							path: "virtual_pool"
						}
					]
				}
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "payer",
				docs: [
					"Payer of the virtual pool metadata."
				],
				writable: true,
				signer: true
			},
			{
				name: "system_program",
				docs: [
					"System program."
				],
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "metadata",
				type: {
					defined: {
						name: "CreateVirtualPoolMetadataParameters"
					}
				}
			}
		]
	},
	{
		name: "creator_withdraw_surplus",
		docs: [
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			165,
			3,
			137,
			7,
			28,
			134,
			76,
			80
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "config"
			},
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "token_quote_account",
				docs: [
					"The receiver token account"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of quote token"
				]
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "initialize_virtual_pool_with_spl_token",
		docs: [
			"POOL CREATOR FUNCTIONS ////",
			"Accepts: VirtualPool only."
		],
		discriminator: [
			140,
			85,
			215,
			176,
			102,
			54,
			104,
			79
		],
		accounts: [
			{
				name: "config",
				docs: [
					"Which config the pool belongs to."
				]
			},
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "base_mint",
				writable: true,
				signer: true
			},
			{
				name: "quote_mint",
				relations: [
					"config"
				]
			},
			{
				name: "pool",
				docs: [
					"Initialize an account to store the pool state"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"Token a vault for the pool"
				],
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								116,
								111,
								107,
								101,
								110,
								95,
								118,
								97,
								117,
								108,
								116
							]
						},
						{
							kind: "account",
							path: "base_mint"
						},
						{
							kind: "account",
							path: "pool"
						}
					]
				}
			},
			{
				name: "quote_vault",
				docs: [
					"Token b vault for the pool"
				],
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								116,
								111,
								107,
								101,
								110,
								95,
								118,
								97,
								117,
								108,
								116
							]
						},
						{
							kind: "account",
							path: "quote_mint"
						},
						{
							kind: "account",
							path: "pool"
						}
					]
				}
			},
			{
				name: "mint_metadata",
				writable: true
			},
			{
				name: "metadata_program",
				address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
			},
			{
				name: "payer",
				docs: [
					"Address paying to create the pool. Can be anyone"
				],
				writable: true,
				signer: true
			},
			{
				name: "token_quote_program",
				docs: [
					"Program to create mint account and mint tokens"
				]
			},
			{
				name: "token_program",
				address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "params",
				type: {
					defined: {
						name: "InitializePoolParameters"
					}
				}
			}
		]
	},
	{
		name: "initialize_virtual_pool_with_token2022",
		docs: [
			"Accepts: VirtualPool only."
		],
		discriminator: [
			169,
			118,
			51,
			78,
			145,
			110,
			220,
			155
		],
		accounts: [
			{
				name: "config",
				docs: [
					"Which config the pool belongs to."
				]
			},
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "base_mint",
				docs: [
					"Unique token mint address, initialize in contract"
				],
				writable: true,
				signer: true
			},
			{
				name: "quote_mint",
				relations: [
					"config"
				]
			},
			{
				name: "pool",
				docs: [
					"Initialize an account to store the pool state"
				],
				writable: true
			},
			{
				name: "base_vault",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								116,
								111,
								107,
								101,
								110,
								95,
								118,
								97,
								117,
								108,
								116
							]
						},
						{
							kind: "account",
							path: "base_mint"
						},
						{
							kind: "account",
							path: "pool"
						}
					]
				}
			},
			{
				name: "quote_vault",
				docs: [
					"Token quote vault for the pool"
				],
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								116,
								111,
								107,
								101,
								110,
								95,
								118,
								97,
								117,
								108,
								116
							]
						},
						{
							kind: "account",
							path: "quote_mint"
						},
						{
							kind: "account",
							path: "pool"
						}
					]
				}
			},
			{
				name: "payer",
				docs: [
					"Address paying to create the pool. Can be anyone"
				],
				writable: true,
				signer: true
			},
			{
				name: "token_quote_program",
				docs: [
					"Program to create mint account and mint tokens"
				]
			},
			{
				name: "token_program",
				docs: [
					"token program for base mint"
				],
				address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "params",
				type: {
					defined: {
						name: "InitializePoolParameters"
					}
				}
			}
		]
	},
	{
		name: "initialize_virtual_pool_with_token2022_transfer_hook",
		docs: [
			"Accepts: TransferHookPool only."
		],
		discriminator: [
			182,
			13,
			233,
			177,
			42,
			145,
			135,
			2
		],
		accounts: [
			{
				name: "config",
				docs: [
					"Transfer hook config — contains the transfer hook program set by partner"
				]
			},
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "base_mint",
				docs: [
					"Unique token mint address, initialize in contract"
				],
				writable: true,
				signer: true
			},
			{
				name: "quote_mint",
				relations: [
					"config"
				]
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "base_vault",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								116,
								111,
								107,
								101,
								110,
								95,
								118,
								97,
								117,
								108,
								116
							]
						},
						{
							kind: "account",
							path: "base_mint"
						},
						{
							kind: "account",
							path: "pool"
						}
					]
				}
			},
			{
				name: "quote_vault",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								116,
								111,
								107,
								101,
								110,
								95,
								118,
								97,
								117,
								108,
								116
							]
						},
						{
							kind: "account",
							path: "quote_mint"
						},
						{
							kind: "account",
							path: "pool"
						}
					]
				}
			},
			{
				name: "transfer_hook_program"
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "token_quote_program"
			},
			{
				name: "token_program",
				address: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "params",
				type: {
					defined: {
						name: "InitializePoolParameters"
					}
				}
			}
		]
	},
	{
		name: "migrate_meteora_damm",
		docs: [
			"Accepts: VirtualPool only."
		],
		discriminator: [
			27,
			1,
			48,
			22,
			180,
			63,
			118,
			217
		],
		accounts: [
			{
				name: "virtual_pool",
				docs: [
					"virtual pool"
				],
				writable: true,
				relations: [
					"migration_metadata"
				]
			},
			{
				name: "migration_metadata",
				writable: true
			},
			{
				name: "config",
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "pool_authority",
				writable: true,
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "damm_config",
				docs: [
					"pool config"
				]
			},
			{
				name: "lp_mint",
				writable: true
			},
			{
				name: "token_a_mint",
				writable: true
			},
			{
				name: "token_b_mint"
			},
			{
				name: "a_vault",
				writable: true
			},
			{
				name: "b_vault",
				writable: true
			},
			{
				name: "a_token_vault",
				writable: true
			},
			{
				name: "b_token_vault",
				writable: true
			},
			{
				name: "a_vault_lp_mint",
				writable: true
			},
			{
				name: "b_vault_lp_mint",
				writable: true
			},
			{
				name: "a_vault_lp",
				writable: true
			},
			{
				name: "b_vault_lp",
				writable: true
			},
			{
				name: "base_vault",
				writable: true,
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "quote_vault",
				writable: true,
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "virtual_pool_lp",
				writable: true
			},
			{
				name: "protocol_token_a_fee",
				writable: true
			},
			{
				name: "protocol_token_b_fee",
				writable: true
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "rent"
			},
			{
				name: "mint_metadata",
				writable: true
			},
			{
				name: "metadata_program"
			},
			{
				name: "amm_program",
				address: "Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB"
			},
			{
				name: "vault_program"
			},
			{
				name: "token_program",
				docs: [
					"token_program"
				],
				address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
			},
			{
				name: "associated_token_program"
			},
			{
				name: "system_program",
				docs: [
					"System program."
				],
				address: "11111111111111111111111111111111"
			}
		],
		args: [
		]
	},
	{
		name: "migrate_meteora_damm_claim_lp_token",
		docs: [
			"Accepts: VirtualPool only."
		],
		discriminator: [
			139,
			133,
			2,
			30,
			91,
			145,
			127,
			154
		],
		accounts: [
			{
				name: "virtual_pool",
				relations: [
					"migration_metadata"
				]
			},
			{
				name: "migration_metadata",
				docs: [
					"migration metadata"
				],
				writable: true
			},
			{
				name: "pool_authority",
				writable: true,
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "lp_mint",
				relations: [
					"migration_metadata"
				]
			},
			{
				name: "source_token",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "account",
							path: "pool_authority"
						},
						{
							kind: "const",
							value: [
								6,
								221,
								246,
								225,
								215,
								101,
								161,
								147,
								217,
								203,
								225,
								70,
								206,
								235,
								121,
								172,
								28,
								180,
								133,
								237,
								95,
								91,
								55,
								145,
								58,
								140,
								245,
								133,
								126,
								255,
								0,
								169
							]
						},
						{
							kind: "account",
							path: "migration_metadata"
						}
					],
					program: {
						kind: "const",
						value: [
							140,
							151,
							37,
							143,
							78,
							36,
							137,
							241,
							187,
							61,
							16,
							41,
							20,
							142,
							13,
							131,
							11,
							90,
							19,
							153,
							218,
							255,
							16,
							132,
							4,
							142,
							123,
							216,
							219,
							233,
							248,
							89
						]
					}
				}
			},
			{
				name: "destination_token",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "account",
							path: "owner"
						},
						{
							kind: "const",
							value: [
								6,
								221,
								246,
								225,
								215,
								101,
								161,
								147,
								217,
								203,
								225,
								70,
								206,
								235,
								121,
								172,
								28,
								180,
								133,
								237,
								95,
								91,
								55,
								145,
								58,
								140,
								245,
								133,
								126,
								255,
								0,
								169
							]
						},
						{
							kind: "account",
							path: "migration_metadata"
						}
					],
					program: {
						kind: "const",
						value: [
							140,
							151,
							37,
							143,
							78,
							36,
							137,
							241,
							187,
							61,
							16,
							41,
							20,
							142,
							13,
							131,
							11,
							90,
							19,
							153,
							218,
							255,
							16,
							132,
							4,
							142,
							123,
							216,
							219,
							233,
							248,
							89
						]
					}
				}
			},
			{
				name: "owner"
			},
			{
				name: "sender",
				signer: true
			},
			{
				name: "token_program",
				docs: [
					"token_program"
				],
				address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
			}
		],
		args: [
		]
	},
	{
		name: "migrate_meteora_damm_lock_lp_token",
		docs: [
			"Accepts: VirtualPool only."
		],
		discriminator: [
			177,
			55,
			238,
			157,
			251,
			88,
			165,
			42
		],
		accounts: [
			{
				name: "virtual_pool",
				relations: [
					"migration_metadata"
				]
			},
			{
				name: "migration_metadata",
				docs: [
					"migration_metadata"
				],
				writable: true
			},
			{
				name: "pool_authority",
				writable: true,
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "pool",
				writable: true,
				relations: [
					"lock_escrow"
				]
			},
			{
				name: "lp_mint",
				relations: [
					"migration_metadata"
				]
			},
			{
				name: "lock_escrow",
				writable: true
			},
			{
				name: "owner",
				relations: [
					"lock_escrow"
				]
			},
			{
				name: "source_tokens",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "account",
							path: "pool_authority"
						},
						{
							kind: "const",
							value: [
								6,
								221,
								246,
								225,
								215,
								101,
								161,
								147,
								217,
								203,
								225,
								70,
								206,
								235,
								121,
								172,
								28,
								180,
								133,
								237,
								95,
								91,
								55,
								145,
								58,
								140,
								245,
								133,
								126,
								255,
								0,
								169
							]
						},
						{
							kind: "account",
							path: "migration_metadata"
						}
					],
					program: {
						kind: "const",
						value: [
							140,
							151,
							37,
							143,
							78,
							36,
							137,
							241,
							187,
							61,
							16,
							41,
							20,
							142,
							13,
							131,
							11,
							90,
							19,
							153,
							218,
							255,
							16,
							132,
							4,
							142,
							123,
							216,
							219,
							233,
							248,
							89
						]
					}
				}
			},
			{
				name: "escrow_vault",
				writable: true
			},
			{
				name: "amm_program",
				address: "Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB"
			},
			{
				name: "a_vault"
			},
			{
				name: "b_vault"
			},
			{
				name: "a_vault_lp"
			},
			{
				name: "b_vault_lp"
			},
			{
				name: "a_vault_lp_mint"
			},
			{
				name: "b_vault_lp_mint"
			},
			{
				name: "token_program",
				docs: [
					"token_program"
				],
				address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
			}
		],
		args: [
		]
	},
	{
		name: "migration_damm_v2",
		docs: [
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			156,
			169,
			230,
			103,
			53,
			228,
			80,
			64
		],
		accounts: [
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "migration_metadata"
			},
			{
				name: "config"
			},
			{
				name: "pool_authority",
				writable: true,
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "first_position_nft_mint",
				writable: true,
				signer: true
			},
			{
				name: "first_position_nft_account",
				writable: true
			},
			{
				name: "first_position",
				writable: true
			},
			{
				name: "second_position_nft_mint",
				writable: true,
				signer: true,
				optional: true
			},
			{
				name: "second_position_nft_account",
				writable: true,
				optional: true
			},
			{
				name: "second_position",
				writable: true,
				optional: true
			},
			{
				name: "damm_pool_authority"
			},
			{
				name: "amm_program",
				address: "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
			},
			{
				name: "base_mint",
				writable: true
			},
			{
				name: "quote_mint",
				writable: true
			},
			{
				name: "token_a_vault",
				writable: true
			},
			{
				name: "token_b_vault",
				writable: true
			},
			{
				name: "base_vault",
				writable: true
			},
			{
				name: "quote_vault",
				writable: true
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "token_base_program"
			},
			{
				name: "token_quote_program"
			},
			{
				name: "token_2022_program"
			},
			{
				name: "damm_event_authority"
			},
			{
				name: "system_program",
				docs: [
					"System program."
				],
				address: "11111111111111111111111111111111"
			}
		],
		args: [
		]
	},
	{
		name: "migration_damm_v2_create_metadata",
		docs: [
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			109,
			189,
			19,
			36,
			195,
			183,
			222,
			82
		],
		accounts: [
			{
				name: "virtual_pool"
			},
			{
				name: "config"
			},
			{
				name: "migration_metadata"
			},
			{
				name: "payer"
			},
			{
				name: "system_program"
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "migration_meteora_damm_create_metadata",
		docs: [
			"Accepts: VirtualPool only."
		],
		discriminator: [
			47,
			94,
			126,
			115,
			221,
			226,
			194,
			133
		],
		accounts: [
			{
				name: "virtual_pool"
			},
			{
				name: "config",
				relations: [
					"virtual_pool"
				]
			},
			{
				name: "migration_metadata",
				writable: true,
				pda: {
					seeds: [
						{
							kind: "const",
							value: [
								109,
								101,
								116,
								101,
								111,
								114,
								97
							]
						},
						{
							kind: "account",
							path: "virtual_pool"
						}
					]
				}
			},
			{
				name: "payer",
				writable: true,
				signer: true
			},
			{
				name: "system_program",
				address: "11111111111111111111111111111111"
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "partner_withdraw_surplus",
		docs: [
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			168,
			173,
			72,
			100,
			201,
			98,
			38,
			92
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "config"
			},
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "token_quote_account",
				docs: [
					"The receiver token account"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of quote token"
				]
			},
			{
				name: "fee_claimer",
				signer: true
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "swap",
		docs: [
			"TRADING BOTS FUNCTIONS ////",
			"Accepts: VirtualPool only."
		],
		discriminator: [
			248,
			198,
			158,
			145,
			225,
			117,
			135,
			200
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "config"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "input_token_account",
				docs: [
					"The user token account for input token"
				],
				writable: true
			},
			{
				name: "output_token_account",
				docs: [
					"The user token account for output token"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for base token"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for quote token"
				],
				writable: true
			},
			{
				name: "base_mint",
				docs: [
					"The mint of base token"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of quote token"
				]
			},
			{
				name: "payer",
				docs: [
					"The user performing the swap"
				],
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token base program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token quote program"
				]
			},
			{
				name: "referral_token_account",
				docs: [
					"referral token account"
				],
				writable: true,
				optional: true
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "params",
				type: {
					defined: {
						name: "SwapParameters"
					}
				}
			}
		]
	},
	{
		name: "swap2",
		docs: [
			"Accepts: VirtualPool only."
		],
		discriminator: [
			65,
			75,
			63,
			76,
			235,
			91,
			91,
			136
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "config"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "input_token_account",
				docs: [
					"The user token account for input token"
				],
				writable: true
			},
			{
				name: "output_token_account",
				docs: [
					"The user token account for output token"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for base token"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for quote token"
				],
				writable: true
			},
			{
				name: "base_mint",
				docs: [
					"The mint of base token"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of quote token"
				]
			},
			{
				name: "payer",
				docs: [
					"The user performing the swap"
				],
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token base program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token quote program"
				]
			},
			{
				name: "referral_token_account",
				docs: [
					"referral token account"
				],
				writable: true,
				optional: true
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "params",
				type: {
					defined: {
						name: "SwapParameters2"
					}
				}
			}
		]
	},
	{
		name: "swap2_with_transfer_hook",
		docs: [
			"Accepts: TransferHookPool only."
		],
		discriminator: [
			183,
			93,
			153,
			40,
			24,
			230,
			194,
			151
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "config"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "input_token_account",
				docs: [
					"The user token account for input token"
				],
				writable: true
			},
			{
				name: "output_token_account",
				docs: [
					"The user token account for output token"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for base token"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for quote token"
				],
				writable: true
			},
			{
				name: "base_mint",
				docs: [
					"The mint of base token",
					"must be mutable so we can revoke the transfer hook after the last swap is performed"
				],
				writable: true
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of quote token"
				]
			},
			{
				name: "payer",
				docs: [
					"The user performing the swap"
				],
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token base program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token quote program"
				]
			},
			{
				name: "referral_token_account",
				docs: [
					"referral token account"
				],
				writable: true,
				optional: true
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "params",
				type: {
					defined: {
						name: "SwapParameters2"
					}
				}
			},
			{
				name: "transfer_hook_accounts_info",
				type: {
					defined: {
						name: "TransferHookAccountsInfo"
					}
				}
			}
		]
	},
	{
		name: "transfer_pool_creator",
		docs: [
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			20,
			7,
			169,
			33,
			58,
			147,
			166,
			33
		],
		accounts: [
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "config"
			},
			{
				name: "creator",
				signer: true
			},
			{
				name: "new_creator"
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "virtual_swap2",
		docs: [
			"Accepts: VirtualPool only."
		],
		discriminator: [
			227,
			189,
			120,
			105,
			163,
			220,
			191,
			84
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "config"
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "input_token_account",
				docs: [
					"The user token account for input token"
				],
				writable: true
			},
			{
				name: "output_token_account",
				docs: [
					"The user token account for output token"
				],
				writable: true
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for base token"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for quote token"
				],
				writable: true
			},
			{
				name: "base_mint",
				docs: [
					"The mint of base token"
				]
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of quote token"
				]
			},
			{
				name: "payer",
				docs: [
					"The user performing the swap"
				],
				signer: true
			},
			{
				name: "token_base_program",
				docs: [
					"Token base program"
				]
			},
			{
				name: "token_quote_program",
				docs: [
					"Token quote program"
				]
			},
			{
				name: "referral_token_account",
				docs: [
					"referral token account"
				],
				writable: true,
				optional: true
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "params",
				type: {
					defined: {
						name: "SwapParameters2"
					}
				}
			}
		]
	},
	{
		name: "withdraw_leftover",
		docs: [
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			20,
			198,
			202,
			237,
			235,
			243,
			183,
			66
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "config"
			},
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "token_base_account",
				docs: [
					"The receiver token account, withdraw to ATA"
				],
				writable: true,
				pda: {
					seeds: [
						{
							kind: "account",
							path: "leftover_receiver"
						},
						{
							kind: "account",
							path: "token_base_program"
						},
						{
							kind: "account",
							path: "base_mint"
						}
					],
					program: {
						kind: "const",
						value: [
							140,
							151,
							37,
							143,
							78,
							36,
							137,
							241,
							187,
							61,
							16,
							41,
							20,
							142,
							13,
							131,
							11,
							90,
							19,
							153,
							218,
							255,
							16,
							132,
							4,
							142,
							123,
							216,
							219,
							233,
							248,
							89
						]
					}
				}
			},
			{
				name: "base_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true
			},
			{
				name: "base_mint",
				docs: [
					"The mint of quote token"
				]
			},
			{
				name: "leftover_receiver"
			},
			{
				name: "token_base_program",
				docs: [
					"Token base program"
				]
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
		]
	},
	{
		name: "withdraw_migration_fee",
		docs: [
			"BOTH partner and creator FUNCTIONS ///",
			"Accepts: VirtualPool or TransferHookPool."
		],
		discriminator: [
			237,
			142,
			45,
			23,
			129,
			6,
			222,
			162
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "config"
			},
			{
				name: "virtual_pool",
				writable: true
			},
			{
				name: "token_quote_account",
				docs: [
					"The receiver token account"
				],
				writable: true
			},
			{
				name: "quote_vault",
				docs: [
					"The vault token account for output token"
				],
				writable: true
			},
			{
				name: "quote_mint",
				docs: [
					"The mint of quote token"
				]
			},
			{
				name: "sender",
				signer: true
			},
			{
				name: "token_quote_program",
				docs: [
					"Token b program"
				]
			},
			{
				name: "event_authority"
			},
			{
				name: "program"
			}
		],
		args: [
			{
				name: "flag",
				type: "u8"
			}
		]
	},
	{
		name: "zap_protocol_fee",
		docs: [
			"Accepts: VirtualPool only."
		],
		discriminator: [
			213,
			155,
			187,
			34,
			56,
			182,
			91,
			240
		],
		accounts: [
			{
				name: "pool_authority",
				address: "GmJQraEgZ7rseK5kyNNKPJF7289NxZhknwsYyc6VUcio"
			},
			{
				name: "config",
				relations: [
					"pool"
				]
			},
			{
				name: "pool",
				writable: true
			},
			{
				name: "token_vault",
				writable: true
			},
			{
				name: "token_mint"
			},
			{
				name: "receiver_token",
				writable: true
			},
			{
				name: "operator",
				docs: [
					"zap claim fee operator"
				]
			},
			{
				name: "signer",
				docs: [
					"Operator"
				],
				signer: true
			},
			{
				name: "token_program",
				docs: [
					"Token program"
				]
			},
			{
				name: "sysvar_instructions",
				address: "Sysvar1nstructions1111111111111111111111111"
			}
		],
		args: [
			{
				name: "max_amount",
				type: "u64"
			}
		]
	}
];
var accounts = [
	{
		name: "ClaimFeeOperator",
		discriminator: [
			166,
			48,
			134,
			86,
			34,
			200,
			188,
			150
		]
	},
	{
		name: "ConfigWithTransferHook",
		discriminator: [
			40,
			220,
			194,
			251,
			41,
			199,
			123,
			253
		]
	},
	{
		name: "MeteoraDammMigrationMetadata",
		discriminator: [
			17,
			155,
			141,
			215,
			207,
			4,
			133,
			156
		]
	},
	{
		name: "Operator",
		discriminator: [
			219,
			31,
			188,
			145,
			69,
			139,
			204,
			117
		]
	},
	{
		name: "PartnerMetadata",
		discriminator: [
			68,
			68,
			130,
			19,
			16,
			209,
			98,
			156
		]
	},
	{
		name: "PoolConfig",
		discriminator: [
			26,
			108,
			14,
			123,
			116,
			230,
			129,
			43
		]
	},
	{
		name: "TransferHookPool",
		discriminator: [
			237,
			219,
			184,
			23,
			42,
			189,
			169,
			35
		]
	},
	{
		name: "VirtualPool",
		discriminator: [
			213,
			224,
			5,
			209,
			98,
			69,
			119,
			92
		]
	},
	{
		name: "VirtualPoolMetadata",
		discriminator: [
			217,
			37,
			82,
			250,
			43,
			47,
			228,
			254
		]
	}
];
var events = [
	{
		name: "EvtClaimCreatorTradingFee",
		discriminator: [
			154,
			228,
			215,
			202,
			133,
			155,
			214,
			138
		]
	},
	{
		name: "EvtClaimPoolCreationFee",
		discriminator: [
			149,
			111,
			149,
			44,
			136,
			64,
			175,
			62
		]
	},
	{
		name: "EvtClaimProtocolFee",
		discriminator: [
			186,
			244,
			75,
			251,
			188,
			13,
			25,
			33
		]
	},
	{
		name: "EvtClaimProtocolFee2",
		discriminator: [
			187,
			133,
			66,
			9,
			205,
			161,
			84,
			13
		]
	},
	{
		name: "EvtClaimTradingFee",
		discriminator: [
			26,
			83,
			117,
			240,
			92,
			202,
			112,
			254
		]
	},
	{
		name: "EvtCloseClaimFeeOperator",
		discriminator: [
			111,
			39,
			37,
			55,
			110,
			216,
			194,
			23
		]
	},
	{
		name: "EvtCreateClaimFeeOperator",
		discriminator: [
			21,
			6,
			153,
			120,
			68,
			116,
			28,
			177
		]
	},
	{
		name: "EvtCreateConfig",
		discriminator: [
			131,
			207,
			180,
			174,
			180,
			73,
			165,
			54
		]
	},
	{
		name: "EvtCreateConfigV2",
		discriminator: [
			163,
			74,
			66,
			187,
			119,
			195,
			26,
			144
		]
	},
	{
		name: "EvtCreateConfigV2WithTransferHook",
		discriminator: [
			182,
			81,
			135,
			4,
			39,
			46,
			132,
			253
		]
	},
	{
		name: "EvtCreateMeteoraMigrationMetadata",
		discriminator: [
			99,
			167,
			133,
			63,
			214,
			143,
			175,
			139
		]
	},
	{
		name: "EvtCreatorWithdrawSurplus",
		discriminator: [
			152,
			73,
			21,
			15,
			66,
			87,
			53,
			157
		]
	},
	{
		name: "EvtCurveComplete",
		discriminator: [
			229,
			231,
			86,
			84,
			156,
			134,
			75,
			24
		]
	},
	{
		name: "EvtCurveCompleteWithTransferHook",
		discriminator: [
			59,
			47,
			109,
			205,
			13,
			31,
			44,
			159
		]
	},
	{
		name: "EvtInitializePool",
		discriminator: [
			228,
			50,
			246,
			85,
			203,
			66,
			134,
			37
		]
	},
	{
		name: "EvtInitializePoolWithTransferHook",
		discriminator: [
			213,
			137,
			164,
			53,
			193,
			74,
			15,
			110
		]
	},
	{
		name: "EvtPartnerClaimPoolCreationFee",
		discriminator: [
			174,
			223,
			44,
			150,
			145,
			98,
			89,
			195
		]
	},
	{
		name: "EvtPartnerMetadata",
		discriminator: [
			200,
			127,
			6,
			55,
			13,
			32,
			8,
			150
		]
	},
	{
		name: "EvtPartnerWithdrawSurplus",
		discriminator: [
			195,
			56,
			152,
			9,
			232,
			72,
			35,
			22
		]
	},
	{
		name: "EvtSwap",
		discriminator: [
			27,
			60,
			21,
			213,
			138,
			170,
			187,
			147
		]
	},
	{
		name: "EvtSwap2",
		discriminator: [
			189,
			66,
			51,
			168,
			38,
			80,
			117,
			153
		]
	},
	{
		name: "EvtSwap2WithTransferHook",
		discriminator: [
			134,
			59,
			168,
			120,
			94,
			51,
			114,
			231
		]
	},
	{
		name: "EvtUpdatePoolCreator",
		discriminator: [
			107,
			225,
			165,
			237,
			91,
			158,
			213,
			220
		]
	},
	{
		name: "EvtVirtualPoolMetadata",
		discriminator: [
			188,
			18,
			72,
			76,
			195,
			91,
			38,
			74
		]
	},
	{
		name: "EvtWithdrawLeftover",
		discriminator: [
			191,
			189,
			104,
			143,
			111,
			156,
			94,
			229
		]
	},
	{
		name: "EvtWithdrawMigrationFee",
		discriminator: [
			26,
			203,
			84,
			85,
			161,
			23,
			100,
			214
		]
	}
];
var errors = [
	{
		code: 6000,
		name: "MathOverflow",
		msg: "Math operation overflow"
	},
	{
		code: 6001,
		name: "InvalidFee",
		msg: "Invalid fee setup"
	},
	{
		code: 6002,
		name: "ExceededSlippage",
		msg: "Exceeded slippage tolerance"
	},
	{
		code: 6003,
		name: "ExceedMaxFeeBps",
		msg: "Exceeded max fee bps"
	},
	{
		code: 6004,
		name: "InvalidAdmin",
		msg: "Invalid admin"
	},
	{
		code: 6005,
		name: "AmountIsZero",
		msg: "Amount is zero"
	},
	{
		code: 6006,
		name: "TypeCastFailed",
		msg: "Type cast error"
	},
	{
		code: 6007,
		name: "InvalidActivationType",
		msg: "Invalid activation type"
	},
	{
		code: 6008,
		name: "InvalidQuoteMint",
		msg: "Invalid quote mint"
	},
	{
		code: 6009,
		name: "InvalidCollectFeeMode",
		msg: "Invalid collect fee mode"
	},
	{
		code: 6010,
		name: "InvalidMigrationFeeOption",
		msg: "Invalid migration fee option"
	},
	{
		code: 6011,
		name: "InvalidInput",
		msg: "Invalid input"
	},
	{
		code: 6012,
		name: "NotEnoughLiquidity",
		msg: "Not enough liquidity"
	},
	{
		code: 6013,
		name: "PoolIsCompleted",
		msg: "Pool is completed"
	},
	{
		code: 6014,
		name: "PoolIsIncompleted",
		msg: "Pool is incompleted"
	},
	{
		code: 6015,
		name: "InvalidMigrationOption",
		msg: "Invalid migration option"
	},
	{
		code: 6016,
		name: "InvalidTokenDecimals",
		msg: "Invalid token decimals"
	},
	{
		code: 6017,
		name: "InvalidTokenType",
		msg: "Invalid token type"
	},
	{
		code: 6018,
		name: "InvalidFeePercentage",
		msg: "Invalid fee percentage"
	},
	{
		code: 6019,
		name: "InvalidQuoteThreshold",
		msg: "Invalid quote threshold"
	},
	{
		code: 6020,
		name: "InvalidTokenSupply",
		msg: "Invalid token supply"
	},
	{
		code: 6021,
		name: "InvalidCurve",
		msg: "Invalid curve"
	},
	{
		code: 6022,
		name: "NotPermitToDoThisAction",
		msg: "Not permit to do this action"
	},
	{
		code: 6023,
		name: "InvalidOwnerAccount",
		msg: "Invalid owner account"
	},
	{
		code: 6024,
		name: "InvalidConfigAccount",
		msg: "Invalid config account"
	},
	{
		code: 6025,
		name: "SurplusHasBeenWithdraw",
		msg: "Surplus has been withdraw"
	},
	{
		code: 6026,
		name: "LeftoverHasBeenWithdraw",
		msg: "Leftover has been withdraw"
	},
	{
		code: 6027,
		name: "TotalBaseTokenExceedMaxSupply",
		msg: "Total base token is exceeded max supply"
	},
	{
		code: 6028,
		name: "UnsupportNativeMintToken2022",
		msg: "Unsupport native mint token 2022"
	},
	{
		code: 6029,
		name: "InsufficientLiquidityForMigration",
		msg: "Insufficient liquidity for migration"
	},
	{
		code: 6030,
		name: "MissingPoolConfigInRemainingAccount",
		msg: "Missing pool config in remaining account"
	},
	{
		code: 6031,
		name: "InvalidVestingParameters",
		msg: "Invalid vesting parameters"
	},
	{
		code: 6032,
		name: "InvalidLeftoverAddress",
		msg: "Invalid leftover address"
	},
	{
		code: 6033,
		name: "InsufficientLiquidity",
		msg: "Liquidity in bonding curve is insufficient"
	},
	{
		code: 6034,
		name: "InvalidFeeScheduler",
		msg: "Invalid fee scheduler"
	},
	{
		code: 6035,
		name: "InvalidCreatorTradingFeePercentage",
		msg: "Invalid creator trading fee percentage"
	},
	{
		code: 6036,
		name: "InvalidNewCreator",
		msg: "Invalid new creator"
	},
	{
		code: 6037,
		name: "InvalidTokenAuthorityOption",
		msg: "Invalid token authority option"
	},
	{
		code: 6038,
		name: "InvalidAccount",
		msg: "Invalid account for the instruction"
	},
	{
		code: 6039,
		name: "InvalidMigratorFeePercentage",
		msg: "Invalid migrator fee percentage"
	},
	{
		code: 6040,
		name: "MigrationFeeHasBeenWithdraw",
		msg: "Migration fee has been withdraw"
	},
	{
		code: 6041,
		name: "InvalidBaseFeeMode",
		msg: "Invalid base fee mode"
	},
	{
		code: 6042,
		name: "InvalidFeeRateLimiter",
		msg: "Invalid fee rate limiter"
	},
	{
		code: 6043,
		name: "FailToValidateSingleSwapInstruction",
		msg: "Fail to validate single swap instruction in rate limiter"
	},
	{
		code: 6044,
		name: "InvalidMigratedPoolFee",
		msg: "Invalid migrated pool fee params"
	},
	{
		code: 6045,
		name: "UndeterminedError",
		msg: "Undertermined error"
	},
	{
		code: 6046,
		name: "RateLimiterNotSupported",
		msg: "Rate limiter not supported"
	},
	{
		code: 6047,
		name: "AmountLeftIsNotZero",
		msg: "Amount left is not zero"
	},
	{
		code: 6048,
		name: "NextSqrtPriceIsSmallerThanStartSqrtPrice",
		msg: "Next sqrt price is smaller than start sqrt price"
	},
	{
		code: 6049,
		name: "InvalidMinBaseFee",
		msg: "Invalid min base fee"
	},
	{
		code: 6050,
		name: "AccountInvariantViolation",
		msg: "Account invariant violation"
	},
	{
		code: 6051,
		name: "InvalidPoolCreationFee",
		msg: "Invalid pool creation fee"
	},
	{
		code: 6052,
		name: "PoolCreationFeeHasBeenClaimed",
		msg: "Pool creation fee has been claimed"
	},
	{
		code: 6053,
		name: "Unauthorized",
		msg: "Not permit to do this action"
	},
	{
		code: 6054,
		name: "ZeroPoolCreationFee",
		msg: "Pool creation fee is zero"
	},
	{
		code: 6055,
		name: "InvalidMigrationLockedLiquidity",
		msg: "Invalid migration locked liquidity"
	},
	{
		code: 6056,
		name: "InvalidFeeMarketCapScheduler",
		msg: "Invalid fee market cap scheduler"
	},
	{
		code: 6057,
		name: "FirstSwapValidationFailed",
		msg: "Fail to validate first swap with minimum fee"
	},
	{
		code: 6058,
		name: "IncorrectATA",
		msg: "Incorrect ATA"
	},
	{
		code: 6059,
		name: "InsufficientPoolLamports",
		msg: "Pool has insufficient lamports to perform the operation"
	},
	{
		code: 6060,
		name: "InvalidPermission",
		msg: "Invalid permission"
	},
	{
		code: 6061,
		name: "InvalidWithdrawProtocolFeeZapAccounts",
		msg: "Invalid withdraw protocol fee zap accounts"
	},
	{
		code: 6062,
		name: "MintRestrictedFromZap",
		msg: "SOL,USDC protocol fee cannot be withdrawn via zap"
	},
	{
		code: 6063,
		name: "InvalidZapOutParameters",
		msg: "Invalid zap out parameters"
	},
	{
		code: 6064,
		name: "CpiDisabled",
		msg: "CPI disabled"
	},
	{
		code: 6065,
		name: "MissingZapOutInstruction",
		msg: "Missing zap out instruction"
	},
	{
		code: 6066,
		name: "InvalidZapAccounts",
		msg: "Invalid zap accounts"
	},
	{
		code: 6067,
		name: "InvalidCompoundingParameters",
		msg: "Invalid compounding parameters"
	},
	{
		code: 6068,
		name: "InvalidClaimProtocolFeeAccounts",
		msg: "Invalid claim protocol fee accounts"
	},
	{
		code: 6069,
		name: "InvalidInstructionsSysvar",
		msg: "Invalid instructions sysvar account"
	},
	{
		code: 6070,
		name: "InvalidRemainingAccountsLength",
		msg: "Invalid remaining accounts length"
	},
	{
		code: 6071,
		name: "MissingRemainingAccountForTransferHook",
		msg: "Missing remaining account for transfer hook"
	},
	{
		code: 6072,
		name: "NoTransferHookProgram",
		msg: "No transfer hook program"
	},
	{
		code: 6073,
		name: "DuplicatedRemainingAccountTypes",
		msg: "Duplicated remaining account types"
	},
	{
		code: 6074,
		name: "InvalidTransferHookProgram",
		msg: "Invalid transfer hook program"
	},
	{
		code: 6075,
		name: "InvalidPoolAccount",
		msg: "Invalid pool account"
	},
	{
		code: 6076,
		name: "PoolTypeMismatch",
		msg: "Pool type does not match instruction"
	},
	{
		code: 6077,
		name: "InvalidRemainingAccountSliceType",
		msg: "Invalid remaining account slice type for this instruction"
	},
	{
		code: 6078,
		name: "SellDisabled",
		msg: "Sells are disabled on this curve"
	},
	{
		code: 6079,
		name: "InvalidDeadlineTimestamp",
		msg: "Invalid deadline timestamp"
	}
];
var types = [
	{
		name: "AccountsType",
		repr: {
			kind: "rust"
		},
		type: {
			kind: "enum",
			variants: [
				{
					name: "TransferHookBase"
				},
				{
					name: "TransferHookBaseReferral"
				}
			]
		}
	},
	{
		name: "BaseFeeConfig",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "cliff_fee_numerator",
					type: "u64"
				},
				{
					name: "second_factor",
					type: "u64"
				},
				{
					name: "third_factor",
					type: "u64"
				},
				{
					name: "first_factor",
					type: "u16"
				},
				{
					name: "base_fee_mode",
					type: "u8"
				},
				{
					name: "padding_0",
					type: {
						array: [
							"u8",
							5
						]
					}
				}
			]
		}
	},
	{
		name: "BaseFeeParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "cliff_fee_numerator",
					type: "u64"
				},
				{
					name: "first_factor",
					type: "u16"
				},
				{
					name: "second_factor",
					type: "u64"
				},
				{
					name: "third_factor",
					type: "u64"
				},
				{
					name: "base_fee_mode",
					type: "u8"
				}
			]
		}
	},
	{
		name: "ClaimFeeOperator",
		docs: [
			"Parameter that set by the protocol"
		],
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "operator",
					docs: [
						"operator"
					],
					type: "pubkey"
				},
				{
					name: "_padding",
					docs: [
						"Reserve"
					],
					type: {
						array: [
							"u8",
							128
						]
					}
				}
			]
		}
	},
	{
		name: "Config",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool_fees",
					type: {
						defined: {
							name: "PoolFees"
						}
					}
				},
				{
					name: "activation_duration",
					type: "u64"
				},
				{
					name: "vault_config_key",
					type: "pubkey"
				},
				{
					name: "pool_creator_authority",
					type: "pubkey"
				},
				{
					name: "activation_type",
					type: "u8"
				},
				{
					name: "partner_fee_numerator",
					type: "u64"
				},
				{
					name: "padding",
					type: {
						array: [
							"u8",
							219
						]
					}
				}
			]
		}
	},
	{
		name: "ConfigParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool_fees",
					type: {
						defined: {
							name: "PoolFeeParameters"
						}
					}
				},
				{
					name: "collect_fee_mode",
					type: "u8"
				},
				{
					name: "migration_option",
					type: "u8"
				},
				{
					name: "activation_type",
					type: "u8"
				},
				{
					name: "token_type",
					type: "u8"
				},
				{
					name: "token_decimal",
					type: "u8"
				},
				{
					name: "partner_liquidity_percentage",
					type: "u8"
				},
				{
					name: "partner_permanent_locked_liquidity_percentage",
					type: "u8"
				},
				{
					name: "creator_liquidity_percentage",
					type: "u8"
				},
				{
					name: "creator_permanent_locked_liquidity_percentage",
					type: "u8"
				},
				{
					name: "migration_quote_threshold",
					type: "u64"
				},
				{
					name: "migration_quote_amount_cap",
					type: "u64"
				},
				{
					name: "sqrt_start_price",
					type: "u128"
				},
				{
					name: "locked_vesting",
					type: {
						defined: {
							name: "LockedVestingParams"
						}
					}
				},
				{
					name: "migration_fee_option",
					type: "u8"
				},
				{
					name: "token_supply",
					type: {
						option: {
							defined: {
								name: "TokenSupplyParams"
							}
						}
					}
				},
				{
					name: "creator_trading_fee_percentage",
					type: "u8"
				},
				{
					name: "token_update_authority",
					type: "u8"
				},
				{
					name: "migration_fee",
					type: {
						defined: {
							name: "MigrationFee"
						}
					}
				},
				{
					name: "migrated_pool_fee",
					type: {
						defined: {
							name: "MigratedPoolFee"
						}
					}
				},
				{
					name: "pool_creation_fee",
					docs: [
						"pool creation fee in SOL lamports value"
					],
					type: "u64"
				},
				{
					name: "partner_liquidity_vesting_info",
					type: {
						defined: {
							name: "LiquidityVestingInfoParams"
						}
					}
				},
				{
					name: "creator_liquidity_vesting_info",
					type: {
						defined: {
							name: "LiquidityVestingInfoParams"
						}
					}
				},
				{
					name: "migrated_pool_base_fee_mode",
					type: "u8"
				},
				{
					name: "migrated_pool_market_cap_fee_scheduler_params",
					type: {
						defined: {
							name: "MigratedPoolMarketCapFeeSchedulerParams"
						}
					}
				},
				{
					name: "enable_first_swap_with_min_fee",
					type: "bool"
				},
				{
					name: "compounding_fee_bps",
					type: "u16"
				},
				{
					name: "padding",
					docs: [
						"padding for future use"
					],
					type: {
						array: [
							"u8",
							2
						]
					}
				},
				{
					name: "curve",
					type: {
						vec: {
							defined: {
								name: "LiquidityDistributionParameters"
							}
						}
					}
				}
			]
		}
	},
	{
		name: "ConfigWithTransferHook",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "config",
					type: {
						defined: {
							name: "PoolConfig"
						}
					}
				},
				{
					name: "transfer_hook_program",
					type: "pubkey"
				},
				{
					name: "padding_0",
					type: {
						array: [
							"u64",
							6
						]
					}
				}
			]
		}
	},
	{
		name: "CreatePartnerMetadataParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "padding",
					type: {
						array: [
							"u8",
							96
						]
					}
				},
				{
					name: "name",
					type: "string"
				},
				{
					name: "website",
					type: "string"
				},
				{
					name: "logo",
					type: "string"
				}
			]
		}
	},
	{
		name: "CreateVirtualPoolMetadataParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "padding",
					type: {
						array: [
							"u8",
							96
						]
					}
				},
				{
					name: "name",
					type: "string"
				},
				{
					name: "website",
					type: "string"
				},
				{
					name: "logo",
					type: "string"
				}
			]
		}
	},
	{
		name: "DynamicFeeConfig",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "initialized",
					type: "u8"
				},
				{
					name: "padding",
					type: {
						array: [
							"u8",
							7
						]
					}
				},
				{
					name: "max_volatility_accumulator",
					type: "u32"
				},
				{
					name: "variable_fee_control",
					type: "u32"
				},
				{
					name: "bin_step",
					type: "u16"
				},
				{
					name: "filter_period",
					type: "u16"
				},
				{
					name: "decay_period",
					type: "u16"
				},
				{
					name: "reduction_factor",
					type: "u16"
				},
				{
					name: "padding2",
					type: {
						array: [
							"u8",
							8
						]
					}
				},
				{
					name: "bin_step_u128",
					type: "u128"
				}
			]
		}
	},
	{
		name: "DynamicFeeParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "bin_step",
					type: "u16"
				},
				{
					name: "bin_step_u128",
					type: "u128"
				},
				{
					name: "filter_period",
					type: "u16"
				},
				{
					name: "decay_period",
					type: "u16"
				},
				{
					name: "reduction_factor",
					type: "u16"
				},
				{
					name: "max_volatility_accumulator",
					type: "u32"
				},
				{
					name: "variable_fee_control",
					type: "u32"
				}
			]
		}
	},
	{
		name: "EvtClaimCreatorTradingFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "token_base_amount",
					type: "u64"
				},
				{
					name: "token_quote_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtClaimPoolCreationFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "receiver",
					type: "pubkey"
				},
				{
					name: "creation_fee",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtClaimProtocolFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "token_base_amount",
					type: "u64"
				},
				{
					name: "token_quote_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtClaimProtocolFee2",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "receiver_token_account",
					type: "pubkey"
				},
				{
					name: "token_mint",
					type: "pubkey"
				},
				{
					name: "amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtClaimTradingFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "token_base_amount",
					type: "u64"
				},
				{
					name: "token_quote_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtCloseClaimFeeOperator",
		docs: [
			"Close claim fee operator"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "claim_fee_operator",
					type: "pubkey"
				},
				{
					name: "operator",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtCreateClaimFeeOperator",
		docs: [
			"Create claim fee operator"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "operator",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtCreateConfig",
		docs: [
			"Create config"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "quote_mint",
					type: "pubkey"
				},
				{
					name: "fee_claimer",
					type: "pubkey"
				},
				{
					name: "owner",
					type: "pubkey"
				},
				{
					name: "pool_fees",
					type: {
						defined: {
							name: "PoolFeeParameters"
						}
					}
				},
				{
					name: "collect_fee_mode",
					type: "u8"
				},
				{
					name: "migration_option",
					type: "u8"
				},
				{
					name: "activation_type",
					type: "u8"
				},
				{
					name: "token_decimal",
					type: "u8"
				},
				{
					name: "token_type",
					type: "u8"
				},
				{
					name: "partner_permanent_locked_liquidity_percentage",
					type: "u8"
				},
				{
					name: "partner_liquidity_percentage",
					type: "u8"
				},
				{
					name: "creator_permanent_locked_liquidity_percentage",
					type: "u8"
				},
				{
					name: "creator_liquidity_percentage",
					type: "u8"
				},
				{
					name: "swap_base_amount",
					type: "u64"
				},
				{
					name: "migration_quote_threshold",
					type: "u64"
				},
				{
					name: "migration_base_amount",
					type: "u64"
				},
				{
					name: "sqrt_start_price",
					type: "u128"
				},
				{
					name: "locked_vesting",
					type: {
						defined: {
							name: "LockedVestingParams"
						}
					}
				},
				{
					name: "migration_fee_option",
					type: "u8"
				},
				{
					name: "fixed_token_supply_flag",
					type: "u8"
				},
				{
					name: "pre_migration_token_supply",
					type: "u64"
				},
				{
					name: "post_migration_token_supply",
					type: "u64"
				},
				{
					name: "curve",
					type: {
						vec: {
							defined: {
								name: "LiquidityDistributionParameters"
							}
						}
					}
				}
			]
		}
	},
	{
		name: "EvtCreateConfigV2",
		type: {
			kind: "struct",
			fields: [
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "quote_mint",
					type: "pubkey"
				},
				{
					name: "fee_claimer",
					type: "pubkey"
				},
				{
					name: "leftover_receiver",
					type: "pubkey"
				},
				{
					name: "config_parameters",
					type: {
						defined: {
							name: "ConfigParameters"
						}
					}
				}
			]
		}
	},
	{
		name: "EvtCreateConfigV2WithTransferHook",
		type: {
			kind: "struct",
			fields: [
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "quote_mint",
					type: "pubkey"
				},
				{
					name: "fee_claimer",
					type: "pubkey"
				},
				{
					name: "leftover_receiver",
					type: "pubkey"
				},
				{
					name: "config_parameters",
					type: {
						defined: {
							name: "ConfigParameters"
						}
					}
				},
				{
					name: "transfer_hook_program",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtCreateMeteoraMigrationMetadata",
		type: {
			kind: "struct",
			fields: [
				{
					name: "virtual_pool",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtCreatorWithdrawSurplus",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "surplus_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtCurveComplete",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "base_reserve",
					type: "u64"
				},
				{
					name: "quote_reserve",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtCurveCompleteWithTransferHook",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "base_reserve",
					type: "u64"
				},
				{
					name: "quote_reserve",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtInitializePool",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "creator",
					type: "pubkey"
				},
				{
					name: "base_mint",
					type: "pubkey"
				},
				{
					name: "pool_type",
					type: "u8"
				},
				{
					name: "activation_point",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtInitializePoolWithTransferHook",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "creator",
					type: "pubkey"
				},
				{
					name: "base_mint",
					type: "pubkey"
				},
				{
					name: "pool_type",
					type: "u8"
				},
				{
					name: "activation_point",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtPartnerClaimPoolCreationFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "partner",
					type: "pubkey"
				},
				{
					name: "creation_fee",
					type: "u64"
				},
				{
					name: "fee_receiver",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtPartnerMetadata",
		docs: [
			"Create partner metadata"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "partner_metadata",
					type: "pubkey"
				},
				{
					name: "fee_claimer",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtPartnerWithdrawSurplus",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "surplus_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtSwap",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "trade_direction",
					type: "u8"
				},
				{
					name: "has_referral",
					type: "bool"
				},
				{
					name: "params",
					type: {
						defined: {
							name: "SwapParameters"
						}
					}
				},
				{
					name: "swap_result",
					type: {
						defined: {
							name: "SwapResult"
						}
					}
				},
				{
					name: "amount_in",
					type: "u64"
				},
				{
					name: "current_timestamp",
					type: "u64"
				},
				{
					name: "is_virtual",
					type: "bool"
				},
				{
					name: "payer",
					type: "pubkey"
				},
				{
					name: "recipient",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtSwap2",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "trade_direction",
					type: "u8"
				},
				{
					name: "has_referral",
					type: "bool"
				},
				{
					name: "swap_parameters",
					type: {
						defined: {
							name: "SwapParameters2"
						}
					}
				},
				{
					name: "swap_result",
					type: {
						defined: {
							name: "SwapResult2"
						}
					}
				},
				{
					name: "quote_reserve_amount",
					type: "u64"
				},
				{
					name: "migration_threshold",
					type: "u64"
				},
				{
					name: "current_timestamp",
					type: "u64"
				},
				{
					name: "is_virtual",
					type: "bool"
				},
				{
					name: "payer",
					type: "pubkey"
				},
				{
					name: "recipient",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtSwap2WithTransferHook",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "config",
					type: "pubkey"
				},
				{
					name: "trade_direction",
					type: "u8"
				},
				{
					name: "has_referral",
					type: "bool"
				},
				{
					name: "swap_parameters",
					type: {
						defined: {
							name: "SwapParameters2"
						}
					}
				},
				{
					name: "swap_result",
					type: {
						defined: {
							name: "SwapResult2"
						}
					}
				},
				{
					name: "quote_reserve_amount",
					type: "u64"
				},
				{
					name: "migration_threshold",
					type: "u64"
				},
				{
					name: "current_timestamp",
					type: "u64"
				},
				{
					name: "payer",
					type: "pubkey"
				},
				{
					name: "recipient",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtUpdatePoolCreator",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "creator",
					type: "pubkey"
				},
				{
					name: "new_creator",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtVirtualPoolMetadata",
		type: {
			kind: "struct",
			fields: [
				{
					name: "virtual_pool_metadata",
					type: "pubkey"
				},
				{
					name: "virtual_pool",
					type: "pubkey"
				}
			]
		}
	},
	{
		name: "EvtWithdrawLeftover",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "leftover_receiver",
					type: "pubkey"
				},
				{
					name: "leftover_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "EvtWithdrawMigrationFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "fee",
					type: "u64"
				},
				{
					name: "flag",
					type: "u8"
				}
			]
		}
	},
	{
		name: "InitializePoolParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "name",
					type: "string"
				},
				{
					name: "symbol",
					type: "string"
				},
				{
					name: "uri",
					type: "string"
				},
				{
					name: "deadline_timestamp",
					type: "u64"
				}
			]
		}
	},
	{
		name: "LiquidityDistributionConfig",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "sqrt_price",
					type: "u128"
				},
				{
					name: "liquidity",
					type: "u128"
				}
			]
		}
	},
	{
		name: "LiquidityDistributionParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "sqrt_price",
					type: "u128"
				},
				{
					name: "liquidity",
					type: "u128"
				}
			]
		}
	},
	{
		name: "LiquidityVestingInfo",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "is_initialized",
					type: "u8"
				},
				{
					name: "vesting_percentage",
					type: "u8"
				},
				{
					name: "_padding",
					type: {
						array: [
							"u8",
							2
						]
					}
				},
				{
					name: "bps_per_period",
					type: "u16"
				},
				{
					name: "number_of_periods",
					type: "u16"
				},
				{
					name: "frequency",
					type: "u32"
				},
				{
					name: "cliff_duration_from_migration_time",
					type: "u32"
				}
			]
		}
	},
	{
		name: "LiquidityVestingInfoParams",
		type: {
			kind: "struct",
			fields: [
				{
					name: "vesting_percentage",
					type: "u8"
				},
				{
					name: "bps_per_period",
					type: "u16"
				},
				{
					name: "number_of_periods",
					type: "u16"
				},
				{
					name: "cliff_duration_from_migration_time",
					type: "u32"
				},
				{
					name: "frequency",
					type: "u32"
				}
			]
		}
	},
	{
		name: "LockEscrow",
		docs: [
			"State of lock escrow account"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool",
					type: "pubkey"
				},
				{
					name: "owner",
					type: "pubkey"
				},
				{
					name: "escrow_vault",
					type: "pubkey"
				},
				{
					name: "bump",
					type: "u8"
				},
				{
					name: "total_locked_amount",
					type: "u64"
				},
				{
					name: "lp_per_token",
					type: "u128"
				},
				{
					name: "unclaimed_fee_pending",
					type: "u64"
				},
				{
					name: "a_fee",
					type: "u64"
				},
				{
					name: "b_fee",
					type: "u64"
				}
			]
		}
	},
	{
		name: "LockedVestingConfig",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "amount_per_period",
					type: "u64"
				},
				{
					name: "cliff_duration_from_migration_time",
					type: "u64"
				},
				{
					name: "frequency",
					type: "u64"
				},
				{
					name: "number_of_period",
					type: "u64"
				},
				{
					name: "cliff_unlock_amount",
					type: "u64"
				},
				{
					name: "_padding",
					type: "u64"
				}
			]
		}
	},
	{
		name: "LockedVestingParams",
		type: {
			kind: "struct",
			fields: [
				{
					name: "amount_per_period",
					type: "u64"
				},
				{
					name: "cliff_duration_from_migration_time",
					type: "u64"
				},
				{
					name: "frequency",
					type: "u64"
				},
				{
					name: "number_of_period",
					type: "u64"
				},
				{
					name: "cliff_unlock_amount",
					type: "u64"
				}
			]
		}
	},
	{
		name: "MeteoraDammMigrationMetadata",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "virtual_pool",
					docs: [
						"pool"
					],
					type: "pubkey"
				},
				{
					name: "padding_0",
					docs: [
						"!!! BE CAREFUL to use tombstone field, previous is pool creator"
					],
					type: {
						array: [
							"u8",
							32
						]
					}
				},
				{
					name: "partner",
					docs: [
						"partner"
					],
					type: "pubkey"
				},
				{
					name: "lp_mint",
					docs: [
						"lp mint"
					],
					type: "pubkey"
				},
				{
					name: "partner_locked_liquidity",
					docs: [
						"partner locked liquidity"
					],
					type: "u64"
				},
				{
					name: "partner_liquidity",
					docs: [
						"partner liquidity"
					],
					type: "u64"
				},
				{
					name: "creator_locked_liquidity",
					docs: [
						"creator locked liquidity"
					],
					type: "u64"
				},
				{
					name: "creator_liquidity",
					docs: [
						"creator liquidity"
					],
					type: "u64"
				},
				{
					name: "_padding_0",
					docs: [
						"padding"
					],
					type: "u8"
				},
				{
					name: "creator_locked_status",
					docs: [
						"flag to check whether liquidity token is locked for creator"
					],
					type: "u8"
				},
				{
					name: "partner_locked_status",
					docs: [
						"flag to check whether liquidity token is locked for partner"
					],
					type: "u8"
				},
				{
					name: "creator_claim_status",
					docs: [
						"flag to check whether creator has claimed liquidity token"
					],
					type: "u8"
				},
				{
					name: "partner_claim_status",
					docs: [
						"flag to check whether partner has claimed liquidity token"
					],
					type: "u8"
				},
				{
					name: "_padding",
					docs: [
						"Reserve"
					],
					type: {
						array: [
							"u8",
							107
						]
					}
				}
			]
		}
	},
	{
		name: "MigratedPoolFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "collect_fee_mode",
					type: "u8"
				},
				{
					name: "dynamic_fee",
					type: "u8"
				},
				{
					name: "pool_fee_bps",
					type: "u16"
				}
			]
		}
	},
	{
		name: "MigratedPoolMarketCapFeeSchedulerParams",
		type: {
			kind: "struct",
			fields: [
				{
					name: "number_of_period",
					type: "u16"
				},
				{
					name: "sqrt_price_step_bps",
					type: "u16"
				},
				{
					name: "scheduler_expiration_duration",
					type: "u32"
				},
				{
					name: "reduction_factor",
					type: "u64"
				}
			]
		}
	},
	{
		name: "MigrationFee",
		type: {
			kind: "struct",
			fields: [
				{
					name: "fee_percentage",
					type: "u8"
				},
				{
					name: "creator_fee_percentage",
					type: "u8"
				}
			]
		}
	},
	{
		name: "Operator",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "whitelisted_address",
					type: "pubkey"
				},
				{
					name: "permission",
					type: "u128"
				},
				{
					name: "padding",
					type: {
						array: [
							"u64",
							2
						]
					}
				}
			]
		}
	},
	{
		name: "PartnerMetadata",
		docs: [
			"Metadata for a partner."
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "fee_claimer",
					docs: [
						"fee claimer"
					],
					type: "pubkey"
				},
				{
					name: "padding",
					docs: [
						"padding for future use"
					],
					type: {
						array: [
							"u128",
							6
						]
					}
				},
				{
					name: "name",
					docs: [
						"Name of partner."
					],
					type: "string"
				},
				{
					name: "website",
					docs: [
						"Website of partner."
					],
					type: "string"
				},
				{
					name: "logo",
					docs: [
						"Logo of partner"
					],
					type: "string"
				}
			]
		}
	},
	{
		name: "PoolConfig",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "quote_mint",
					docs: [
						"quote mint"
					],
					type: "pubkey"
				},
				{
					name: "fee_claimer",
					docs: [
						"Address to get the fee"
					],
					type: "pubkey"
				},
				{
					name: "leftover_receiver",
					docs: [
						"Address to receive extra base token after migration, in case token is fixed supply"
					],
					type: "pubkey"
				},
				{
					name: "pool_fees",
					docs: [
						"Pool fee"
					],
					type: {
						defined: {
							name: "PoolFeesConfig"
						}
					}
				},
				{
					name: "partner_liquidity_vesting_info",
					type: {
						defined: {
							name: "LiquidityVestingInfo"
						}
					}
				},
				{
					name: "creator_liquidity_vesting_info",
					type: {
						defined: {
							name: "LiquidityVestingInfo"
						}
					}
				},
				{
					name: "migration_quote_amount_cap",
					docs: [
						"fixed quote token amount to seed migration liquidity; zero uses migration_quote_threshold"
					],
					type: "u64"
				},
				{
					name: "padding_0",
					docs: [
						"Padding for future use"
					],
					type: {
						array: [
							"u8",
							6
						]
					}
				},
				{
					name: "padding_1",
					docs: [
						"Previously was protocol and referral fee percent. Beware of tombstone."
					],
					type: "u16"
				},
				{
					name: "collect_fee_mode",
					docs: [
						"Collect fee mode"
					],
					type: "u8"
				},
				{
					name: "migration_option",
					docs: [
						"migration option"
					],
					type: "u8"
				},
				{
					name: "activation_type",
					docs: [
						"whether mode slot or timestamp"
					],
					type: "u8"
				},
				{
					name: "token_decimal",
					docs: [
						"token decimals"
					],
					type: "u8"
				},
				{
					name: "version",
					docs: [
						"version"
					],
					type: "u8"
				},
				{
					name: "token_type",
					docs: [
						"token type of base token"
					],
					type: "u8"
				},
				{
					name: "quote_token_flag",
					docs: [
						"quote token flag"
					],
					type: "u8"
				},
				{
					name: "partner_permanent_locked_liquidity_percentage",
					docs: [
						"partner locked liquidity percentage"
					],
					type: "u8"
				},
				{
					name: "partner_liquidity_percentage",
					docs: [
						"partner liquidity percentage"
					],
					type: "u8"
				},
				{
					name: "creator_permanent_locked_liquidity_percentage",
					docs: [
						"creator post migration fee percentage"
					],
					type: "u8"
				},
				{
					name: "creator_liquidity_percentage",
					docs: [
						"creator liquidity percentage"
					],
					type: "u8"
				},
				{
					name: "migration_fee_option",
					docs: [
						"migration fee option"
					],
					type: "u8"
				},
				{
					name: "fixed_token_supply_flag",
					docs: [
						"flag to indicate whether token is dynamic supply (0) or fixed supply (1)"
					],
					type: "u8"
				},
				{
					name: "creator_trading_fee_percentage",
					docs: [
						"creator trading fee percentage"
					],
					type: "u8"
				},
				{
					name: "token_update_authority",
					docs: [
						"token update authority"
					],
					type: "u8"
				},
				{
					name: "migration_fee_percentage",
					docs: [
						"migration fee percentage"
					],
					type: "u8"
				},
				{
					name: "creator_migration_fee_percentage",
					docs: [
						"creator migration fee percentage"
					],
					type: "u8"
				},
				{
					name: "padding_2",
					type: {
						array: [
							"u8",
							7
						]
					}
				},
				{
					name: "swap_base_amount",
					docs: [
						"swap base amount"
					],
					type: "u64"
				},
				{
					name: "migration_quote_threshold",
					docs: [
						"migration quote threshold (in quote token)"
					],
					type: "u64"
				},
				{
					name: "migration_base_threshold",
					docs: [
						"migration base threshold (in base token)"
					],
					type: "u64"
				},
				{
					name: "migration_sqrt_price",
					docs: [
						"migration sqrt price"
					],
					type: "u128"
				},
				{
					name: "locked_vesting_config",
					docs: [
						"locked vesting config"
					],
					type: {
						defined: {
							name: "LockedVestingConfig"
						}
					}
				},
				{
					name: "pre_migration_token_supply",
					docs: [
						"pre migration token supply"
					],
					type: "u64"
				},
				{
					name: "post_migration_token_supply",
					docs: [
						"post migration token supply"
					],
					type: "u64"
				},
				{
					name: "migrated_collect_fee_mode",
					docs: [
						"migrated pool collect fee mode"
					],
					type: "u8"
				},
				{
					name: "migrated_dynamic_fee",
					docs: [
						"migrated dynamic fee option."
					],
					type: "u8"
				},
				{
					name: "migrated_pool_fee_bps",
					docs: [
						"migrated pool fee in bps"
					],
					type: "u16"
				},
				{
					name: "migrated_pool_base_fee_mode",
					type: "u8"
				},
				{
					name: "enable_first_swap_with_min_fee",
					type: "u8"
				},
				{
					name: "migrated_compounding_fee_bps",
					docs: [
						"compounding fee bps for migrated DAMM v2 pool, should only be non-zero if migrated_collect_fee_mode is 2 (Compounding)"
					],
					type: "u16"
				},
				{
					name: "pool_creation_fee",
					docs: [
						"pool creation fee in lamports value"
					],
					type: "u64"
				},
				{
					name: "migrated_pool_base_fee_bytes",
					docs: [
						"serialized MigratedPoolMarketCapFeeSchedulerParams, only used when migrated_pool_base_fee_mode is market cap scheduler"
					],
					type: {
						array: [
							"u8",
							16
						]
					}
				},
				{
					name: "sqrt_start_price",
					docs: [
						"minimum price"
					],
					type: "u128"
				},
				{
					name: "curve",
					docs: [
						"curve, only use 20 point firstly, we can extend that latter"
					],
					type: {
						array: [
							{
								defined: {
									name: "LiquidityDistributionConfig"
								}
							},
							20
						]
					}
				}
			]
		}
	},
	{
		name: "PoolFeeParameters",
		docs: [
			"Information regarding fee charges"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "base_fee",
					docs: [
						"Base fee"
					],
					type: {
						defined: {
							name: "BaseFeeParameters"
						}
					}
				},
				{
					name: "dynamic_fee",
					docs: [
						"dynamic fee"
					],
					type: {
						option: {
							defined: {
								name: "DynamicFeeParameters"
							}
						}
					}
				}
			]
		}
	},
	{
		name: "PoolFees",
		docs: [
			"Information regarding fee charges"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "trade_fee_numerator",
					type: "u64"
				},
				{
					name: "trade_fee_denominator",
					type: "u64"
				},
				{
					name: "protocol_trade_fee_numerator",
					type: "u64"
				},
				{
					name: "protocol_trade_fee_denominator",
					type: "u64"
				}
			]
		}
	},
	{
		name: "PoolFeesConfig",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "base_fee",
					type: {
						defined: {
							name: "BaseFeeConfig"
						}
					}
				},
				{
					name: "dynamic_fee",
					type: {
						defined: {
							name: "DynamicFeeConfig"
						}
					}
				}
			]
		}
	},
	{
		name: "PoolMetrics",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "total_protocol_base_fee",
					type: "u64"
				},
				{
					name: "total_protocol_quote_fee",
					type: "u64"
				},
				{
					name: "total_trading_base_fee",
					type: "u64"
				},
				{
					name: "total_trading_quote_fee",
					type: "u64"
				}
			]
		}
	},
	{
		name: "PoolState",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "volatility_tracker",
					docs: [
						"volatility tracker"
					],
					type: {
						defined: {
							name: "VolatilityTracker"
						}
					}
				},
				{
					name: "config",
					docs: [
						"config key"
					],
					type: "pubkey"
				},
				{
					name: "creator",
					docs: [
						"creator"
					],
					type: "pubkey"
				},
				{
					name: "base_mint",
					docs: [
						"base mint"
					],
					type: "pubkey"
				},
				{
					name: "base_vault",
					docs: [
						"base vault"
					],
					type: "pubkey"
				},
				{
					name: "quote_vault",
					docs: [
						"quote vault"
					],
					type: "pubkey"
				},
				{
					name: "base_reserve",
					docs: [
						"base reserve"
					],
					type: "u64"
				},
				{
					name: "quote_reserve",
					docs: [
						"quote reserve"
					],
					type: "u64"
				},
				{
					name: "protocol_base_fee",
					docs: [
						"protocol base fee"
					],
					type: "u64"
				},
				{
					name: "protocol_quote_fee",
					docs: [
						"protocol quote fee"
					],
					type: "u64"
				},
				{
					name: "partner_base_fee",
					docs: [
						"partner base fee"
					],
					type: "u64"
				},
				{
					name: "partner_quote_fee",
					docs: [
						"trading quote fee"
					],
					type: "u64"
				},
				{
					name: "sqrt_price",
					docs: [
						"current price"
					],
					type: "u128"
				},
				{
					name: "activation_point",
					docs: [
						"Activation point"
					],
					type: "u64"
				},
				{
					name: "pool_type",
					docs: [
						"pool type, spl token or token2022"
					],
					type: "u8"
				},
				{
					name: "is_migrated",
					docs: [
						"is migrated"
					],
					type: "u8"
				},
				{
					name: "is_partner_withdraw_surplus",
					docs: [
						"is partner withdraw surplus"
					],
					type: "u8"
				},
				{
					name: "is_protocol_withdraw_surplus",
					docs: [
						"is protocol withdraw surplus"
					],
					type: "u8"
				},
				{
					name: "migration_progress",
					docs: [
						"migration progress"
					],
					type: "u8"
				},
				{
					name: "is_withdraw_leftover",
					docs: [
						"is withdraw leftover"
					],
					type: "u8"
				},
				{
					name: "is_creator_withdraw_surplus",
					docs: [
						"is creator withdraw surplus"
					],
					type: "u8"
				},
				{
					name: "migration_fee_withdraw_status",
					docs: [
						"migration fee withdraw status",
						"bit 1 (0b010) creator",
						"bit 2 (0b100) partner"
					],
					type: "u8"
				},
				{
					name: "metrics",
					docs: [
						"pool metrics"
					],
					type: {
						defined: {
							name: "PoolMetrics"
						}
					}
				},
				{
					name: "finish_curve_timestamp",
					docs: [
						"The time curve is finished"
					],
					type: "u64"
				},
				{
					name: "creator_base_fee",
					docs: [
						"creator base fee"
					],
					type: "u64"
				},
				{
					name: "creator_quote_fee",
					docs: [
						"creator quote fee"
					],
					type: "u64"
				},
				{
					name: "legacy_creation_fee_bits",
					docs: [
						"legacy creation fee bits, we dont use this now"
					],
					type: "u8"
				},
				{
					name: "creation_fee_bits",
					docs: [
						"pool creation fee claim status"
					],
					type: "u8"
				},
				{
					name: "has_swap",
					docs: [
						"Cached flag"
					],
					type: "u8"
				},
				{
					name: "_padding_0",
					docs: [
						"Padding for further use"
					],
					type: {
						array: [
							"u8",
							5
						]
					}
				},
				{
					name: "protocol_liquidity_migration_fee_bps",
					type: "u16"
				},
				{
					name: "_padding_1",
					type: {
						array: [
							"u8",
							6
						]
					}
				},
				{
					name: "protocol_migration_base_fee_amount",
					type: "u64"
				},
				{
					name: "protocol_migration_quote_fee_amount",
					type: "u64"
				},
				{
					name: "deadline_timestamp",
					docs: [
						"Timestamp at which the sale can complete before the quote threshold is reached. 0 means disabled."
					],
					type: "u64"
				},
				{
					name: "virtual_quote_reserve",
					docs: [
						"Virtual quote raised off-chain. Counts toward curve completion, but never funds migration."
					],
					type: "u64"
				},
				{
					name: "_padding_2",
					docs: [
						"Padding for further use"
					],
					type: {
						array: [
							"u64",
							1
						]
					}
				}
			]
		}
	},
	{
		name: "RemainingAccountsSlice",
		type: {
			kind: "struct",
			fields: [
				{
					name: "accounts_type",
					type: {
						defined: {
							name: "AccountsType"
						}
					}
				},
				{
					name: "length",
					type: "u8"
				}
			]
		}
	},
	{
		name: "SwapParameters",
		type: {
			kind: "struct",
			fields: [
				{
					name: "amount_in",
					type: "u64"
				},
				{
					name: "minimum_amount_out",
					type: "u64"
				}
			]
		}
	},
	{
		name: "SwapParameters2",
		type: {
			kind: "struct",
			fields: [
				{
					name: "amount_0",
					docs: [
						"When it's exact in, partial fill, this will be amount_in. When it's exact out, this will be amount_out"
					],
					type: "u64"
				},
				{
					name: "amount_1",
					docs: [
						"When it's exact in, partial fill, this will be minimum_amount_out. When it's exact out, this will be maximum_amount_in"
					],
					type: "u64"
				},
				{
					name: "swap_mode",
					docs: [
						"Swap mode, refer [SwapMode]"
					],
					type: "u8"
				}
			]
		}
	},
	{
		name: "SwapResult",
		docs: [
			"Encodes all results of swapping"
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "actual_input_amount",
					type: "u64"
				},
				{
					name: "output_amount",
					type: "u64"
				},
				{
					name: "next_sqrt_price",
					type: "u128"
				},
				{
					name: "trading_fee",
					type: "u64"
				},
				{
					name: "protocol_fee",
					type: "u64"
				},
				{
					name: "referral_fee",
					type: "u64"
				}
			]
		}
	},
	{
		name: "SwapResult2",
		type: {
			kind: "struct",
			fields: [
				{
					name: "included_fee_input_amount",
					type: "u64"
				},
				{
					name: "excluded_fee_input_amount",
					type: "u64"
				},
				{
					name: "amount_left",
					type: "u64"
				},
				{
					name: "output_amount",
					type: "u64"
				},
				{
					name: "next_sqrt_price",
					type: "u128"
				},
				{
					name: "trading_fee",
					type: "u64"
				},
				{
					name: "protocol_fee",
					type: "u64"
				},
				{
					name: "referral_fee",
					type: "u64"
				}
			]
		}
	},
	{
		name: "TokenSupplyParams",
		type: {
			kind: "struct",
			fields: [
				{
					name: "pre_migration_token_supply",
					docs: [
						"pre migration token supply"
					],
					type: "u64"
				},
				{
					name: "post_migration_token_supply",
					docs: [
						"post migration token supply",
						"because DBC allow user to swap over the migration quote threshold, so in extreme case user may swap more than allowed buffer on curve",
						"that result the total supply in post migration may be increased a bit (between pre_migration_token_supply and post_migration_token_supply)"
					],
					type: "u64"
				}
			]
		}
	},
	{
		name: "TransferHookAccountsInfo",
		type: {
			kind: "struct",
			fields: [
				{
					name: "slices",
					type: {
						vec: {
							defined: {
								name: "RemainingAccountsSlice"
							}
						}
					}
				}
			]
		}
	},
	{
		name: "TransferHookPool",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool_state",
					type: {
						defined: {
							name: "PoolState"
						}
					}
				}
			]
		}
	},
	{
		name: "VirtualPool",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "pool_state",
					type: {
						defined: {
							name: "PoolState"
						}
					}
				}
			]
		}
	},
	{
		name: "VirtualPoolMetadata",
		docs: [
			"Metadata for a virtual pool."
		],
		type: {
			kind: "struct",
			fields: [
				{
					name: "virtual_pool",
					docs: [
						"virtual pool"
					],
					type: "pubkey"
				},
				{
					name: "padding",
					docs: [
						"padding for future use"
					],
					type: {
						array: [
							"u128",
							6
						]
					}
				},
				{
					name: "name",
					docs: [
						"Name of project."
					],
					type: "string"
				},
				{
					name: "website",
					docs: [
						"Website of project."
					],
					type: "string"
				},
				{
					name: "logo",
					docs: [
						"Logo of project"
					],
					type: "string"
				}
			]
		}
	},
	{
		name: "VolatilityTracker",
		serialization: "bytemuck",
		repr: {
			kind: "c"
		},
		type: {
			kind: "struct",
			fields: [
				{
					name: "last_update_timestamp",
					type: "u64"
				},
				{
					name: "padding",
					type: {
						array: [
							"u8",
							8
						]
					}
				},
				{
					name: "sqrt_price_reference",
					type: "u128"
				},
				{
					name: "volatility_accumulator",
					type: "u128"
				},
				{
					name: "volatility_reference",
					type: "u128"
				}
			]
		}
	}
];
var idl = {
	address: address,
	metadata: metadata,
	instructions: instructions,
	accounts: accounts,
	events: events,
	errors: errors,
	types: types
};

export { AccountsType, ActivationType, BASE_ADDRESS, BIN_STEP_BPS_DEFAULT, BIN_STEP_BPS_U128_DEFAULT, type BaseFee, type BaseFeeConfig, type BaseFeeHandler, BaseFeeMode, type BaseFeeParams, type BuildCurveBaseParams, type BuildCurveParams, type BuildCurveWithCustomSqrtPricesParams, type BuildCurveWithLiquidityWeightsParams, type BuildCurveWithMarketCapParams, type BuildCurveWithMidPriceParams, type BuildCurveWithTwoSegmentsParams, type ClaimCreatorTradingFeeParams, type ClaimCreatorTradingFeeToReceiverParams, type ClaimCreatorTradingFeeWithQuoteMintNotSolParams, type ClaimCreatorTradingFeeWithQuoteMintSolParams, type ClaimPartnerPoolCreationFeeParams, type ClaimPartnerTradingFeeParams, type ClaimPartnerTradingFeeToReceiverParams, CollectFeeMode, type ConfigParameters, type ConfigWithTransferHook, type CreateConfigAccounts, type CreateConfigAndPoolParams, type CreateConfigAndPoolWithFirstBuyParams, type CreateConfigAndPoolWithFirstBuyWithTransferHookParams, type CreateConfigAndPoolWithTransferHookParams, type CreateConfigParams, type CreateConfigWithTransferHookParams, type CreateDammV1MigrationMetadataAccounts, type CreateDammV1MigrationMetadataParams, type CreateLockerParams, type CreatePartnerMetadataParameters, type CreatePartnerMetadataParams, type CreatePoolBaseParams, type CreatePoolParams, type CreatePoolWithFirstBuyParams, type CreatePoolWithFirstBuyWithTransferHookParams, type CreatePoolWithPartnerAndCreatorFirstBuyParams, type CreatePoolWithPartnerAndCreatorFirstBuyWithTransferHookParams, type CreatePoolWithTransferHookParams, type CreateVirtualPoolMetadataParameters, type CreateVirtualPoolMetadataParams, type CreatorFirstBuyParams, type CreatorFirstBuyWithTransferHookParams, CreatorService, type CreatorWithdrawSurplusParams, DAMM_V1_MIGRATION_FEE_ADDRESS, DAMM_V1_PROGRAM_ID, DAMM_V2_MIGRATION_FEE_ADDRESS, DAMM_V2_PROGRAM_ID, DEFAULT_LIQUIDITY_VESTING_INFO_PARAMS, DEFAULT_MIGRATED_POOL_FEE_PARAMS, DEFAULT_MIGRATED_POOL_MARKET_CAP_FEE_SCHEDULER_PARAMS, DYNAMIC_BONDING_CURVE_PROGRAM_ID, DYNAMIC_FEE_DECAY_PERIOD_DEFAULT, DYNAMIC_FEE_FILTER_PERIOD_DEFAULT, DYNAMIC_FEE_REDUCTION_FACTOR_DEFAULT, DYNAMIC_FEE_ROUNDING_OFFSET, DYNAMIC_FEE_SCALING_FACTOR, type DammLpTokenParams, DammV2BaseFeeMode, DammV2DynamicFeeMode, DynamicBondingCurveClient, idl as DynamicBondingCurveIdl, DynamicBondingCurveProgram, type DynamicBondingCurve as DynamicBondingCurveTypes, type DynamicCurveProgram, type DynamicFeeConfig, type DynamicFeeParameters, FEE_DENOMINATOR, type FeeConfig, type FeeMode, type FeeOnAmountResult, FeeRateLimiter, type FeeResult, FeeScheduler, type FeeSchedulerParams, type FirstBuyParams, type FirstBuyWithTransferHookParams, HOST_FEE_PERCENT, type InitializePoolBaseParams, type InitializePoolParameters, type InitializeSplPoolAccounts, type InitializeToken2022PoolAccounts, LOCKER_PROGRAM_ID, type LiquidityDistributionConfig, type LiquidityDistributionParameters, type LiquidityVestingInfoParameters, type LiquidityVestingInfoParams, type LockEscrow, type LockedVestingParameters, type LockedVestingParams, MAX_BASIS_POINT, MAX_CREATOR_MIGRATION_FEE_PERCENTAGE, MAX_CURVE_POINT, MAX_FEE_BPS, MAX_FEE_NUMERATOR, MAX_LOCK_DURATION_IN_SECONDS, MAX_MIGRATED_POOL_FEE_BPS, MAX_MIGRATION_FEE_PERCENTAGE, MAX_POOL_CREATION_FEE, MAX_PRICE_CHANGE_BPS_DEFAULT, MAX_RATE_LIMITER_DURATION_IN_SECONDS, MAX_RATE_LIMITER_DURATION_IN_SLOTS, MAX_SQRT_PRICE, METAPLEX_PROGRAM_ID, MIN_FEE_BPS, MIN_FEE_NUMERATOR, MIN_LOCKED_LIQUIDITY_BPS, MIN_MIGRATED_POOL_FEE_BPS, MIN_POOL_CREATION_FEE, MIN_SQRT_PRICE, type MeteoraDammMigrationMetadata, type MigrateToDammV1Params, type MigrateToDammV2Params, type MigrateToDammV2Response, MigratedCollectFeeMode, type MigratedPoolFee, type MigratedPoolFeeConfig, type MigratedPoolFeeResult, type MigratedPoolMarketCapFeeSchedulerParameters, type MigratedPoolMarketCapFeeSchedulerParams, type MigrationConfig, type MigrationFee, MigrationFeeOption, MigrationOption, MigrationService, OFFSET, ONE_Q64, PROTOCOL_FEE_PERCENT, PROTOCOL_POOL_CREATION_FEE_PERCENT, type PartnerFirstBuyParams, type PartnerFirstBuyWithTransferHookParams, type PartnerMetadata, PartnerService, type PartnerWithdrawSurplusParams, type PoolConfig, type PoolFeeParameters, type PoolFeesConfig, PoolService, type PrepareSwapParams, RESOLUTION, type RateLimiterParams, Rounding, SECONDS_PER_DAY, SWAP_BUFFER_PERCENTAGE, SafeMath, type SimulatedQuoteBaseParams, type SimulatedQuoteFromInputAmountParams, type SimulatedQuoteFromOutputAmountParams, StateService, type Swap2Params, type SwapAmount, SwapMode, type SwapParams, type SwapQuote2Params, type SwapQuote2Result, type SwapQuoteConfig, type SwapQuoteParams, type SwapQuoteResult, type SwapResult, type SwapResult2, TokenAuthorityOption, type TokenConfig, TokenDecimal, TokenType, TradeDirection, type TransferHookAccountsInfo, type TransferHookPool, type TransferHookRemainingAccounts, type TransferPoolCreatorParams, U128_MAX, U16_MAX, U24_MAX, U64_MAX, VAULT_PROGRAM_ID, VIRTUAL_SWAP_AUTHORITY, type VirtualPool, type VirtualPoolMetadata, type VirtualSwap2Params, type VolatilityTracker, type WithdrawLeftoverParams, type WithdrawMigrationFeeParams, bpsToFeeNumerator, buildCurve, buildCurveWithCustomSqrtPrices, buildCurveWithLiquidityWeights, buildCurveWithMarketCap, buildCurveWithMidPrice, buildCurveWithTwoSegments, calculateAdjustedPercentageSupplyOnMigration, calculateBaseToQuoteFromAmountIn, calculateBaseToQuoteFromAmountOut, calculateFeeSchedulerEndingBaseFeeBps, calculateLockedLiquidityBpsAtTime, calculateQuoteToBaseFromAmountIn, calculateQuoteToBaseFromAmountOut, checkRateLimiterApplied, cleanUpTokenAccountTx, computeSqrtPriceStepBps, convertDecimalToBN, convertToLamports, createDammV1Program, createDammV2Program, createDbcProgram, createDynamicVaultProgram, createInitializePermissionlessDynamicVaultIx, createLockEscrowIx, createProgramAccountFilter, createSqrtPrices, deriveBaseKeyForLocker, deriveDammV1EventAuthority, deriveDammV1LockEscrowAddress, deriveDammV1LpMintAddress, deriveDammV1MigrationMetadataAddress, deriveDammV1PoolAddress, deriveDammV1PoolAuthority, deriveDammV1ProtocolFeeAddress, deriveDammV1VaultLPAddress, deriveDammV2EventAuthority, deriveDammV2LockEscrowAddress, deriveDammV2MigrationMetadataAddress, deriveDammV2PoolAddress, deriveDammV2PoolAuthority, deriveDammV2TokenVaultAddress, deriveDbcEventAuthority, deriveDbcPoolAddress, deriveDbcPoolAuthority, deriveDbcPoolMetadata, deriveDbcTokenVaultAddress, deriveEscrow, deriveLockerEventAuthority, deriveMintMetadata, derivePartnerMetadata, derivePositionAddress, derivePositionNftAccount, deriveTokenVaultKey, deriveVaultAddress, deriveVaultLpMintAddress, deriveVaultPdas, feeNumeratorToBps, findAssociatedTokenAddress, fromDecimalToBN, getAccountCreationTimestamp, getAccountCreationTimestamps, getAccountData, getBaseFeeHandler, getBaseFeeNumerator, getBaseFeeNumeratorByPeriod, getBaseFeeParams, getBaseTokenForSwap, getCheckedAmounts, getCurrentPoint, getCurveBreakdown, getDeltaAmountBaseUnsigned, getDeltaAmountBaseUnsigned256, getDeltaAmountBaseUnsignedUnchecked, getDeltaAmountQuoteUnsigned, getDeltaAmountQuoteUnsigned256, getDeltaAmountQuoteUnsignedUnchecked, getDynamicFeeParams, getExcludedFeeAmount, getFeeMode, getFeeNumeratorFromExcludedAmount, getFeeNumeratorFromIncludedAmount, getFeeNumeratorOnExponentialFeeScheduler, getFeeNumeratorOnLinearFeeScheduler, getFeeOnAmount, getFeeSchedulerMaxBaseFeeNumerator, getFeeSchedulerMinBaseFeeNumerator, getFeeSchedulerParams, getFirstCurve, getFirstKey, getIncludedFeeAmount, getInitialLiquidityFromDeltaBase, getInitialLiquidityFromDeltaQuote, getLiquidity, getLiquidityVestingInfoParams, getLockedVestingParams, getMaxIndex, getMaxOutAmountWithMinBaseFee, getMigratedPoolFeeParams, getMigratedPoolMarketCapFeeSchedulerParams, getMigrationBaseToken, getMigrationQuoteAmount, getMigrationQuoteAmountFromMigrationQuoteThreshold, getMigrationQuoteThresholdFromMigrationQuoteAmount, getMigrationThresholdPrice, getNextSqrtPriceFromBaseAmountInRoundingUp, getNextSqrtPriceFromBaseAmountOutRoundingUp, getNextSqrtPriceFromInput, getNextSqrtPriceFromOutput, getNextSqrtPriceFromQuoteAmountInRoundingDown, getNextSqrtPriceFromQuoteAmountOutRoundingDown, getOrCreateATAInstruction, getPercentageSupplyOnMigration, getPriceFromSqrtPrice, getProtocolMigrationFee, getQuoteReserveFromNextSqrtPrice, getRateLimiterExcludedFeeAmount, getRateLimiterMinBaseFeeNumerator, getRateLimiterParams, getSecondKey, getSqrtPriceFromMarketCap, getSqrtPriceFromPrice, getStartingBaseFeeBpsFromBaseFeeParams, getSwapAmountWithBuffer, getSwapResult, getSwapResultFromExactInput, getSwapResultFromExactOutput, getSwapResultFromPartialInput, getTokenDecimals, getTokenProgram, getTokenType, getTokenomics, getTotalFeeNumerator, getTotalFeeNumeratorFromExcludedFeeAmount, getTotalFeeNumeratorFromIncludedFeeAmount, getTotalSupplyFromCurve, getTotalTokenSupply, getTotalVestingAmount, getTwoCurve, getVariableFeeNumerator, getVestingLockedLiquidityBpsAtNSeconds, hasMintAuthority, isCurveComplete, isDefaultLockedVesting, isDynamicFeeEnabled, isNativeSol, isNonZeroRateLimiter, isRateLimiterApplied, isSaleComplete, isZeroRateLimiter, mulDiv, mulShr, pow, prepareSwapAmountParam, prepareTokenAccountTx, splitFees, sqrt, swapQuote, swapQuoteExactIn, swapQuoteExactOut, swapQuotePartialFill, toNumerator, unwrapSOLInstruction, validateActivationType, validateBalance, validateBaseTokenType, validateCollectFeeMode, validateCompoundingFeeBps, validateConfigParameters, validateCurve, validateDeadlineTimestamp, validateDynamicFee, validateFeeRateLimiter, validateFeeScheduler, validateLPPercentages, validateLiquidityVestingInfo, validateMarketCapFeeSchedulerRequiresPoolFeeBps, validateMigratedCollectFeeMode, validateMigratedPoolBaseFeeMode, validateMigratedPoolFee, validateMigrationAndTokenType, validateMigrationFee, validateMigrationFeeOption, validateMinimumLockedLiquidity, validatePoolCreationFee, validatePoolFees, validateQuoteMintBasic, validateSwapAmount, validateTokenAuthorityOptions, validateTokenDecimals, validateTokenSupply, validateTransferHookProgram, validateTransferHookProgramExecutable, wrapSOLInstruction };
