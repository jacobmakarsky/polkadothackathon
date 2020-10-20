const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main () {
  // Construct
  const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  const api = await ApiPromise.create({ provider: wsProvider });

  // Retrieve the latest header
  const lastHeader = await api.rpc.chain.getHeader();

  // Display latest block 
  console.log(`Latest block number: ${lastHeader.number}`);
}

main().catch(console.error).finally(() => process.exit());