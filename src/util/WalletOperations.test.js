import { describe, expect, it } from '@jest/globals'

import {
  createSolanaWallet,
  decryptWallet,
  encryptWallet,
  getWalletFromLocalStorage,
  hashPasscode,
  storeWalletInLocalStorage,
} from '@/util/WalletOperations'

// describe('usableSecretKey', () => {
//   it('should return a secret key of type Uint8Array', () => {
//     const wallet = createSolanaWallet();
//     const result = usableSecretKey(wallet.secretKey);
//     expect(result).toBeInstanceOf(Uint8Array);
//   });
// });

describe('createSolanaWallet', () => {
  it('should create a human readable format of a solana wallet', () => {
    const wallet = createSolanaWallet()
    expect(wallet).toHaveProperty('publicKey')
    expect(wallet).toHaveProperty('secretKey')
  })
})

describe('storeWalletInLocalStorage', () => {
  it('should store a human readable format of a solana wallet in local storage', () => {
    const wallet = createSolanaWallet()
    storeWalletInLocalStorage(wallet)
    expect(getWalletFromLocalStorage()).toEqual(wallet)
  })
})

describe('getWalletFromLocalStorage', () => {
  it('should get a human readable format of a solana wallet from local storage', () => {
    const wallet = createSolanaWallet()
    storeWalletInLocalStorage(wallet)
    expect(getWalletFromLocalStorage()).toEqual(wallet)
  })
})

describe('decryptWallet', () => {
  it('should decrypt a human readable format of a solana wallet', () => {
    const wallet = createSolanaWallet()
    const encryptedWallet = encryptWallet(wallet, '123456')
    const decryptedWallet = decryptWallet(encryptedWallet, '123456')
    expect(wallet.secretKey).toBe(decryptedWallet.secretKey)
  })
})

describe('encryptWallet', () => {
  it('should encrypt a human readable format of a solana wallet', () => {
    const wallet = createSolanaWallet()
    const encryptedWallet = encryptWallet(wallet, '123456')
    expect(encryptedWallet.secretKey).not.toBe(wallet.secretKey)
  })
})

describe('hashPasscode', () => {
  it('should hash a pin', () => {
    const passcode = '123456'
    const hashedPassCode = hashPasscode(passcode)
    expect(hashedPassCode).toHaveLength(64)
  })
})

describe('HumanReadableSolanaWallet', () => {
  it('should create a human readable format of a solana wallet', () => {
    const wallet = createSolanaWallet()
    expect(wallet).toHaveProperty('publicKey')
    expect(wallet).toHaveProperty('secretKey')
  })
})
