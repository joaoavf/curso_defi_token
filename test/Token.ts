import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Token", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.
  async function deployToken() {
    // Contracts are deployed using the first signer/account by default
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();

    return { token };
  }

  describe("Deployment", function () {
    it("Check maximum supply", async function () {
      const { token } = await deployToken();
      const totalSupply = await token.totalSupply();
      expect(totalSupply).to.equal("200000000000000000000000000");
    });
  });

  // Write tests for approve // allowance
});
