
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://distinguished-weathered-cloud.ethereum-goerli.discover.quiknode.pro/5ad89b4bae8a3aa1887a0fa42b658091935c3937/",
      accounts: ["7524ab66faa9c911a09cf354cd6e8d34d4a5b94291dcd58d1cc89d5cfbf1b558"],
    },
  },
};