import * as React from 'react';

import { decryptData, encryptData } from '@/util/dataCryptoOperations';
import { createNFT } from '@/util/metaplex';
import { createSolanaWallet, decryptWallet, encryptWallet, storeWalletInLocalStorage, usableSecretKey } from '@/util/WalletOperations';


type indexProps = {

  className?: string;
} & React.ComponentPropsWithoutRef<'div'>

const index: React.FC<indexProps> = ({
  className,
}) => {
  const [encryptBox, setEncryptBox] = React.useState("");
  const [decryptBox, setDecryptBox] = React.useState("");

  const getKeyFromLocalStorage = () => {
    const solanaWallet = localStorage.getItem("solanaWallet");

    if (!solanaWallet) {
      prompt("No wallet found in local storage");
      return null;
    }

    return solanaWallet;
  }

  const handleEncrypt = () => {
    const wallet = createSolanaWallet();
    const encryptedWallet = encryptWallet(wallet, "000000");
    storeWalletInLocalStorage(encryptedWallet);

    // Fetch wallet from local storage
    const walletFromLocalStorage = getKeyFromLocalStorage();
    const decryptedWalletFromLocalStorage = decryptWallet(JSON.parse(walletFromLocalStorage!), "000000");
    const encData = encryptData(encryptBox, usableSecretKey(decryptedWalletFromLocalStorage.secretKey));
    console.log(encData);

    mintNFT(usableSecretKey(decryptedWalletFromLocalStorage.secretKey));

    setDecryptBox(JSON.stringify(encData));
  }

  const mintNFT = async (key: Uint8Array) => {
    const nft = await createNFT(key);

    console.log(nft);
  }

  const handleDecrypt = () => {
    // Fetch wallet from local storage
    const walletFromLocalStorage = getKeyFromLocalStorage();
    const decryptedWalletFromLocalStorage = decryptWallet(JSON.parse(walletFromLocalStorage!), "000000");

    const { cipherText, authTag } = JSON.parse(decryptBox);
    const decryptedData = decryptData({ cipherText, authTag }, usableSecretKey(decryptedWalletFromLocalStorage.secretKey));
    console.log(decryptedData);

    setEncryptBox(decryptedData);
  }


  return (
    <div className="flex flex-row justify-around mt-8">
      <div className="flex flex-col">
        <textarea className="w-96 h-96" value={encryptBox} onChange={e => { setEncryptBox(e.target.value) }} />
        <button className="w-96 h-12 bg-blue-500 p-4 rounded-sm font-semibold" onClick={handleEncrypt} >Encrypt</button>
      </div>
      <div className="flex flex-col">
        <textarea className="w-96 h-96" value={decryptBox} onChange={e => { setDecryptBox(e.target.value) }} />
        <button className="w-96 h-12 bg-blue-500 p-4 rounded-sm font-semibold" onClick={handleDecrypt}>Decrypt</button>
      </div>

    </div>
  )
}

export default index;