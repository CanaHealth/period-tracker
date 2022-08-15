/**
 * `dataCryptoOperations.ts` is a collection of functions that are used to encrypt and decrypt data using the AES-256 encryption algorithm.
 */
import {encode } from "@stablelib/base64";
import {
  createCipheriv,
  createDecipheriv,
  randomBytes
} from 'crypto';


const ivSize = 16; // Initialization vector size in bytes.
const keySize = 32;

/**
 * `AESGCMCipherText` is a type that represents the cipherText and authTag. Used for AES-256-GCM encryption.
 */
export type AESGCMCipherText = {
  cipherText: string;
  authTag: string;
}

/**
 * `encryptData` is used to encrypt data using the AES-256 encryption algorithm.
 * @param {string} data The data to encrypt.
 * @param {Uint8Array} secretKey Solana wallet secret key in Uint8Array format.
 * @returns {AESGCMCipherText} cipherText with authTag.
 */
const encryptData = (
  data: string,
  secretKey: Uint8Array
): AESGCMCipherText => {
  const iv: string = randomBytes(ivSize).toString('hex').slice(0, ivSize); // iv is 16 bytes long
  const encodedSecretKey: string = encode(secretKey).slice(0, keySize);
  // Encrypt secretKey with AES-256-GCM using hashedPasscode  as key and random bytes as iv.
  const cipher = createCipheriv(
    'aes-256-gcm', // algorithm
    encodedSecretKey, // key
    iv // iv
  );

  const encryptedSecretKey =
    cipher.update(data, 'utf-8', 'hex') +
    cipher.final('hex');

  const encryptedSecretKeyWithIV: string = encryptedSecretKey + iv;

  return {
    cipherText: encryptedSecretKeyWithIV,
    authTag: cipher.getAuthTag().toString('hex'),
  };
}

/**
 * `decryptData` is used to decrypt cipherText using the AES-256 encryption algorithm.
 * @param AESGCMCipherText cipherText with authTag. 
 * @param {Uint8Array} secretKey decrypted Solana wallet secret key in Uint8Array format.
 * @returns 
 */
const decryptData = (
  { cipherText, authTag }: AESGCMCipherText,
  secretKey: Uint8Array
): string => {
  if (authTag === undefined) {
    throw new Error('AuthTag is undefined or secretKey cannot be a decrypted.');
  } else {
    const encodedSecretKey: string = encode(secretKey).slice(0, keySize);
    const iv = cipherText.slice(cipherText.length - ivSize); // Get last 16 characters of the initialization vector appended to encrypted data.

    // encrypted secret key should be a
    const encryptedSecretKeyWithoutIV = cipherText.slice(
      0,
      cipherText.length - ivSize
    ); // Remove last 16 characters of the initialization vector appended to encrypted data.
    const decipher = createDecipheriv(
      'aes-256-gcm', // algorithm
      encodedSecretKey, // key
      iv // iv
    );

    decipher.setAuthTag(Buffer.from(authTag, 'hex')); // Set the authentication tag.

    try {
      const decreyptedData =
        decipher.update(encryptedSecretKeyWithoutIV, 'hex', 'utf-8') +
        decipher.final('utf-8');

      return decreyptedData;
    } catch (error) {
      throw new Error('Invalid key entered');
    }
  }
};

export { decryptData,encryptData};