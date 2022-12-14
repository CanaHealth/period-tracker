// import the client
import Bundlr from '@bundlr-network/client';

// type bundlrProps = {
//   address?: string;
// };

export async function bund() {
  // currencies with a keyfile: load + parse your keyfile as below:
  const key = process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY;
  // other currencies without one - set key as your private key string

  // initialise a bundlr client
  const bundlr = new Bundlr('https://node1.bundlr.network', 'matic', key);

  // get your account address (associated with your private key)
  const address = bundlr.address;

  const balance = await bundlr.getLoadedBalance();
  return { address, balance };

  // // convert it into decimal units
  // const decimalBalance = bundlr.utils.unitConverter(balance);

  // // you should have 0 balance (unless you've funded before), so lets add some funds:
  // // Reminder: this is in atomic units (see https://docs.bundlr.network/docs/faq#what-are-baseatomic-units)
  // const fundStatus = await bundlr.fund(100_000_000);
  // // this will take up to an hour to show up for arweave - other currencies are faster.

  // // get the data you want to upload
  // // from a file:
  // // const data = readFileSync('./data.txt');
  // // or for something more direct:
  // const data = 'Hello, Bundlr!';

  // // create a Bundlr Transaction
  // const tx = bundlr.createTransaction(data);

  // // want to know how much you'll need for an upload? simply:
  // // get the number of bytes you want to upload
  // const size = tx.size;
  // // query the bundlr node to see the price for that amount
  // const cost = await bundlr.getPrice(size);

  // // sign the transaction
  // await tx.sign();
  // // get the transaction's ID:
  // const id = tx.id;
  // // upload the transaction
  // const result = await tx.upload();

  // // once the upload succeeds, your data will be instantly accessible at `https://arweave.net/${id}`
}
bund();
