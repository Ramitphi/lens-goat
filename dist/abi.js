"use strict";Object.defineProperty(exports, "__esModule", {value: true});require('./chunk-7QVYU63E.js');

// src/abi.ts
var _viem = require('viem');
var ERC20_ABI = _viem.parseAbi.call(void 0, [
  "function transfer(address to, uint256 amount) external returns (bool)",
  "function balanceOf(address account) external view returns (uint256)",
  "function totalSupply() external view returns (uint256)",
  "function allowance(address owner, address spender) external view returns (uint256)",
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) external returns (bool)"
]);


exports.ERC20_ABI = ERC20_ABI;
//# sourceMappingURL=abi.js.map