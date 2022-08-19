import { encryptData } from './dataCryptoOperations'
import { createNFT } from './metaplex'

const saveDataOnChain = async (data: any, secretKey: Uint8Array) => {
  // Encrypt data with secretKey
  const encryptedData = encryptData(data, secretKey)
  // Mint the encrypted data on chain.
  const nftTokenID = await createNFT(encryptedData, secretKey)
  // store nft token id in local storage (temporarily).
  localStorage.setItem('nftTokenID', nftTokenID)

  return nftTokenID
}

export { saveDataOnChain }
