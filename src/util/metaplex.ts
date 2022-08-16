/**
 * `metaplex.ts` initializes and uses the MetaPlex JS SDK.
 */
import { keypairIdentity, Metaplex } from "@metaplex-foundation/js";
import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";

function initializeMetaplex() {
  const connection = new Connection(clusterApiUrl("devnet"));
  
  const metaplex = Metaplex.make(connection);

  return metaplex;
}

async function createNFT(secretKey: Uint8Array) {
  const wallet = Keypair.fromSecretKey(secretKey);

  const metaplex = initializeMetaplex();
  metaplex.use(keypairIdentity(wallet));

  const { nft } = await metaplex
    .nfts()
    .create({
      uri: "https://arweave.net/123",
      name: "My NFT",
      sellerFeeBasisPoints: 500, // Represents 5.00%.
    })
    .run();

  return nft
}

export { createNFT,initializeMetaplex };