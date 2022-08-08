import { Keypair } from '@solana/web3.js';
import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
} from 'crypto';

export type HumanReadableSolanaWallet = {
  publicKey: string;
  secretKey: string | Uint8Array;
  authTag?: string;
};

const ivSize = 16; // Initialization vector size in bytes.
const keySize = 32;

const createSolanaWallet: Keypair = Keypair.generate();

/**
 * `createSolanaWalletInHumanReadableFormat` creates a human readable format of a solana wallet.
 * @returns {HumanReadableSolanaWallet} A human readable format of a solana wallet.
 */
const createSolanaWalletInHumanReadableFormat = () => {
  const { publicKey, secretKey } = createSolanaWallet;
  return {
    publicKey: publicKey.toBase58(),
    secretKey: secretKey.toString(),
  };
};

/**
 * `saveWalletToLocalStorage` saves a human readable format of a solana wallet to local storage.
 * @param encryptedWallet The encrypted wallet to save.
 */
const storeWalletInLocalStorage = (
  encryptedWallet: HumanReadableSolanaWallet
) => {
  localStorage.setItem('solanaWallet', JSON.stringify(encryptedWallet));
};

/**
 * `checkForWalletInLocalStorage` checks if a wallet is stored in local storage.
 * @returns {boolean} True if a wallet is stored in local storage. False otherwise.
 */
const checkForWalletInLocalStorage = () => {
  if (localStorage.getItem('solanaWallet') === null) {
    return false;
  } else {
    return true;
  }
};

/**
 * `getWalletFromLocalStorage` gets a human readable format of a solana wallet from local storage.
 * @returns {HumanReadableSolanaWallet} A human readable format of a solana wallet from the local storage.
 */
const getWalletFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('solanaWallet')!);
};

/**
 * `hashPasscode` hashes a passcode with the sha256 hashing algorithm.
 * @param passcode The passcode to hash.
 * @returns {string} The hashed passcode.
 */
const hashPasscode = (passcode: string) => {
  return createHash('sha256').update(passcode).digest('hex');
};

/**
 * `encryptWallet` encrypts the secret key in human readable format of a solana wallet.
 * @param wallet The unencrypted human readable format of a solana wallet.
 * @param passcode The passcode to encrypt the secret key with.
 * @returns {HumanReadableSolanaWallet} Solana wallet with encrypted secret key.
 */
const encryptWallet = (wallet: HumanReadableSolanaWallet, passcode: string) => {
  const hashedPasscode: string = hashPasscode(passcode).slice(0, keySize); // Get first 32 characters of the hashed passcode.
  const iv: string = randomBytes(ivSize).toString('hex').slice(0, ivSize); // iv is 16 bytes long
  // Encrypt secretKey with AES-256-GCM using hashedpasscode as key and random bytes as iv.
  const cipher = createCipheriv(
    'aes-256-gcm', // algorithm
    hashedPasscode, // key
    iv // iv
  );
  const encryptedSecretKey =
    cipher.update(wallet.secretKey, 'utf-8', 'hex') + cipher.final('hex');

  const encryptedSecretKeyWithIV: string = encryptedSecretKey + iv;

  return {
    publicKey: wallet.publicKey,
    secretKey: encryptedSecretKeyWithIV,
    authTag: cipher.getAuthTag().toString('hex'),
  };
};

/**
 * `decryptWallet` decrypts the secret key in human readable format of a solana wallet.
 * @param wallet The human readable format of a solana wallet with an encrypted secret key.
 * @param passcode The passcode to decrypt the secret key with.
 * @returns {HumanReadableSolanaWallet} Solana wallet with decrypted secret key.
 */
const decryptWallet = (wallet: HumanReadableSolanaWallet, passcode: string) => {
  const hashedPasscode: string = hashPasscode(passcode).slice(0, keySize); // Get first 32 characters of the hashed passcode.
  const encryptedSecretKey = wallet.secretKey;
  const iv = encryptedSecretKey.slice(encryptedSecretKey.length - ivSize); // Get last 16 characters of the initialization vector appended to encrypted data.
  const encryptedSecretKeyWithoutIV = encryptedSecretKey.slice(
    0,
    encryptedSecretKey.length - ivSize
  ); // Remove last 16 characters of the initialization vector appended to encrypted data.
  const decipher = createDecipheriv(
    'aes-256-gcm', // algorithm
    hashedPasscode, // key
    iv // iv
  );

  decipher.setAuthTag(Buffer.from(wallet.authTag, 'hex')); // Set the authentication tag.

  try {
    const decryptedSecretKey =
      decipher.update(encryptedSecretKeyWithoutIV, 'hex', 'utf-8') +
      decipher.final('utf-8');

    return {
      publicKey: wallet.publicKey,
      secretKey: converSKToArray(decryptedSecretKey),
    };
  } catch (error) {
    console.log(error);
    return {
      publicKey: wallet.publicKey,
      secretKey: '',
    };
  }
};

/**
 * `convertSKToArray` converts a secret key to an array.
 * @param {string} secretKey The secret key to convert.
 * @returns {Uint8Array} The secret key as a Uint8Array - as definded by the @solana/web3.js library.
 */
const converSKToArray = (secretKey: string) => {
  return Uint8Array.from(secretKey.split(',').map((item) => parseInt(item)));
};

export {
  checkForWalletInLocalStorage,
  createSolanaWalletInHumanReadableFormat,
  decryptWallet,
  encryptWallet,
  getWalletFromLocalStorage,
  hashPasscode,
  storeWalletInLocalStorage,
};
