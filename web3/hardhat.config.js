require("@matterlabs/hardhat-zksync-solc");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'sepolia_testnet',
  networks: {
    hardhat:{},
    sepolia_testnet: {
      url: "https://sepolia.infura.io/v3/",
      chainId: 11155111,
      accounts:[`0x${process.env.PRIVATE_KEY}`]
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
