"use strict";Object.defineProperty(exports, "__esModule", {value: true}); var _class;

var _chunkEK4JF3E3js = require('./chunk-EK4JF3E3.js');


var _chunk7QVYU63Ejs = require('./chunk-7QVYU63E.js');

// src/lens.plugin.ts
var _core = require('@goat-sdk/core');
var LensPlugin = (_class = class extends _core.PluginBase {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "LensPlugin");
  }
  constructor() {
    super("lens", [
      new (0, _chunkEK4JF3E3js.LensService)()
    ]);_class.prototype.__init.call(this);;
  }
  __init() {this.supportsChain = /* @__PURE__ */ _chunk7QVYU63Ejs.__name.call(void 0, (chain) => chain.type === "evm", "supportsChain")}
}, _class);
var lens = /* @__PURE__ */ _chunk7QVYU63Ejs.__name.call(void 0, () => new LensPlugin(), "lens");




exports.LensPlugin = LensPlugin; exports.lens = lens;
//# sourceMappingURL=chunk-ULTAQO5H.js.map