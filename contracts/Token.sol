// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor () ERC20("Test", "TE") {
        _mint(msg.sender, 200000000 * (10 ** uint256(decimals())));
    }
}
