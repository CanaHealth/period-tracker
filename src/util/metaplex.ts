/**
 * `metaplex.ts` initializes and uses the MetaPlex JS SDK.
 */
import { keypairIdentity, Metaplex } from "@metaplex-foundation/js";
import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";
import { NFTStorageMetaplexor } from '@nftstorage/metaplex-auth'

function initializeMetaplex() {
  const connection = new Connection(clusterApiUrl("mainnet-beta"));
  
  const metaplex = Metaplex.make(connection);

  return metaplex;
}

async function createNFT(data: Object, secretKey: Uint8Array): Promise<string> {
  const wallet = Keypair.fromSecretKey(secretKey);

  const metaplex = initializeMetaplex();
  metaplex.use(keypairIdentity(wallet));
  
  const cid = await uploadNFT(data, secretKey);
  console.log("CID: ", cid);

  const { nft } = await metaplex
  .nfts()
  .create({
      uri: "ipfs://" + cid,
      name: "Cana",
      sellerFeeBasisPoints: 500, // Represents 5.00%.
  })
  .run();

  return nft.mint.address.toString()
}

async function uploadNFT(data: Object, key: Uint8Array) {
  const client = NFTStorageMetaplexor.withSecretKey(key, {
    solanaCluster: 'mainnet-beta',
    mintingAgent: 'canahealth/period_tracker'
  });

  const blob: Blob = new Blob([JSON.stringify(data)]);
  const cid = await client.storeBlob(blob);

  return cid;
}

export { createNFT,initializeMetaplex };