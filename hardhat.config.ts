import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";

require('dotenv').config()

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const gwei = 1000000000;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: { enabled: true, runs: 200 },
        },
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      }
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: {
        mnemonic: process.env.POLYGON_TEST_MNEMONIC
      },
      gasPrice: 35*gwei
    }
  },
  etherscan: {
    apiKey: process.env.POLYGON_SCAN
  },
  mocha: { timeout: '1800000'},
  gasReporter: {
    currency: 'USD',
    gasPrice: 1,
    coinmarketcap: process.env.COINMARKETCAP_KEY
  }
};

