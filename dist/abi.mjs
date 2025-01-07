import "./chunk-PAWJFY3S.mjs";

// src/abi.ts
import { parseAbi } from "viem";
var ERC20_ABI = parseAbi([
  "function transfer(address to, uint256 amount) external returns (bool)",
  "function balanceOf(address account) external view returns (uint256)",
  "function totalSupply() external view returns (uint256)",
  "function allowance(address owner, address spender) external view returns (uint256)",
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) external returns (bool)"
]);
export {
  ERC20_ABI
};
//# sourceMappingURL=abi.mjs.map