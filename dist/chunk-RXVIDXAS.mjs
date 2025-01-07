import {
  LensService
} from "./chunk-KXJ6YRFD.mjs";
import {
  __name
} from "./chunk-PAWJFY3S.mjs";

// src/lens.plugin.ts
import { PluginBase } from "@goat-sdk/core";
var LensPlugin = class extends PluginBase {
  static {
    __name(this, "LensPlugin");
  }
  constructor() {
    super("lens", [
      new LensService()
    ]);
  }
  supportsChain = /* @__PURE__ */ __name((chain) => chain.type === "evm", "supportsChain");
};
var lens = /* @__PURE__ */ __name(() => new LensPlugin(), "lens");

export {
  LensPlugin,
  lens
};
//# sourceMappingURL=chunk-RXVIDXAS.mjs.map