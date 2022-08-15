import { Keypair } from '@solana/web3.js';
import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
} from 'crypto';

export type solanaWallet = {
  publicKey: string;
  // * Secret keys are cast to string because
  // * JSON.stringify() does not support Uint8Array.
  secretKey: string;
  authTag?: string;
};

const ivSize = 16; // Initialization vector size in bytes.
const keySize = 32;

/**
 * `createSolanaWallet` creates a human readable format of a solana wallet.
 * @returns {solanaWallet} A human readable format of a solana wallet.
 */
const createSolanaWallet = (): solanaWallet => {
  const { publicKey, secretKey } = Keypair.generate();
  return {
    publicKey: publicKey.toBase58(),
    secretKey: secretKey.toString(),
  };
};

/**
 * `saveWalletToLocalStorage` saves a human readable format of a solana wallet to local storage.
 * @param encryptedWallet The encrypted wallet to save.
 */
const storeWalletInLocalStorage = (encryptedWallet: solanaWallet) => {
  localStorage.setItem('solanaWallet', JSON.stringify(encryptedWallet));
};

/**
 * `getWalletFromLocalStorage` gets a human readable format of a solana wallet from local storage.
 * @returns {solanaWallet} A human readable format of a solana wallet from the local storage.
 */
const getWalletFromLocalStorage = (): solanaWallet => {
  const wallet = localStorage.getItem('solanaWallet');
  switch (wallet) {
    case null:
      return {
        publicKey: '',
        secretKey: '',
      };
    default:
      return JSON.parse(wallet);
  }
};

/**
 * `hashPasscode` hashes a passcode with the sha256 hashing algorithm.
 * @param passcode The passcode to hash.
 * @returns {string} The hashed passcode.
 */

const hashPasscode = (passcode: string): string => {
  return createHash('sha256').update(passcode).digest('hex');
};

/**
 * `encryptWallet` encrypts the secret key in human readable format of a solana wallet.
 * @param wallet The unencrypted human readable format of a solana wallet.
 * @param passcode The passcode to encrypt the secret key with.
 * @returns {solanaWallet} Solana wallet with encrypted secret key.
 */
const encryptWallet = (
  wallet: solanaWallet,
  passcode: string
): solanaWallet => {
  const hashedPasscode: string = hashPasscode(passcode).slice(0, keySize); // Get first 32 characters of the hashed passcode.
  const iv: string = randomBytes(ivSize).toString('hex').slice(0, ivSize); // iv is 16 bytes long
  // Encrypt secretKey with AES-256-GCM using hashedPasscode  as key and random bytes as iv.
  const cipher = createCipheriv(
    'aes-256-gcm', // algorithm
    hashedPasscode, // key
    iv // iv
  );
  const encryptedSecretKey =
    cipher.update(String(wallet.secretKey), 'utf-8', 'hex') +
    cipher.final('hex');

  const encryptedSecretKeyWithIV: string = encryptedSecretKey + iv;

  return {
    publicKey: wallet.publicKey,
    secretKey: encryptedSecretKeyWithIV,
    authTag: cipher.getAuthTag().toString('hex'),
  };
};

/**
// * privateKeys are cast to string because JSON.stringify() does not support Uint8Array.
*/
const decryptWallet = (
  { authTag, secretKey, publicKey }: solanaWallet,
  passcode: string
): solanaWallet => {
  if (authTag === undefined) {
    throw new Error('AuthTag is undefined or secretKey cannot be a decrypted.');
  } else {
    const hashedPasscode: string = hashPasscode(passcode).slice(0, keySize); // Get first 32 characters of the hashed passcode.
    const encryptedSecretKey = secretKey;
    const iv = encryptedSecretKey.slice(encryptedSecretKey.length - ivSize); // Get last 16 characters of the initialization vector appended to encrypted data.

    // encrypted secret key should be a
    const encryptedSecretKeyWithoutIV = encryptedSecretKey.slice(
      0,
      encryptedSecretKey.length - ivSize
    ); // Remove last 16 characters of the initialization vector appended to encrypted data.
    const decipher = createDecipheriv(
      'aes-256-gcm', // algorithm
      hashedPasscode, // key
      iv // iv
    );

    decipher.setAuthTag(Buffer.from(authTag, 'hex')); // Set the authentication tag.

    try {
      const decryptedSecretKey =
        decipher.update(encryptedSecretKeyWithoutIV, 'hex', 'utf-8') +
        decipher.final('utf-8');

      return {
        publicKey: publicKey,
        secretKey: decryptedSecretKey,
      };
    } catch (error) {
      throw new Error('Invalid passcode');
    }
  }
};

// * Solana Nodes require the secret keys be an instance of Uint8Array:
const usableSecretKey = (secretKey: string): Uint8Array => {
  return Uint8Array.from(secretKey.split(',').map((item) => parseInt(item)));
};

export {
  createSolanaWallet,
  decryptWallet,
  encryptWallet,
  getWalletFromLocalStorage,
  hashPasscode,
  storeWalletInLocalStorage,
  usableSecretKey,
};

// /**
//  * `checkForWalletInLocalStorage` checks if a wallet is stored in local storage.
//  * @returns {boolean} True if a wallet is stored in local storage. False otherwise.
//  */
//  const checkForWalletInLocalStorage = () => {
//   if (localStorage.getItem('solanaWallet') === null) {
//     return false;
//   } else {
//     return true;
//   }
// };

/**
 * `convertSKToArray` converts a secret key to an array.
 * @param {string} secretKey The secret key to convert.
 * @returns {Uint8Array} The secret key as a Uint8Array - as definded by the @solana/web3.js library.
 */
// const converSKToArray = (secretKey: string): Uint8Array => {
//   return Uint8Array.from(secretKey.split(',').map((item) => parseInt(item)));
// };
