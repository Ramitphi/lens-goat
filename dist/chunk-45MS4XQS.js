"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7QVYU63Ejs = require('./chunk-7QVYU63E.js');

// src/parameters.ts
var _core = require('@goat-sdk/core');
var _zod = require('zod');
var GetPostOwnerParameterSchema = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  postURL: _zod.z.string()
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "GetPostOwnerParameterSchema");
  }
};
var TipParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  to: _zod.z.string().describe("The address to transfer the token to"),
  amount: _zod.z.string().describe("The amount of tokens to transfer in base units")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "TipParameters");
  }
};
var GetProfileIdParameterSchema = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  address: _zod.z.string()
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "GetProfileIdParameterSchema");
  }
};
var GetRecommendationParameterSchema = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  profileId: _zod.z.string()
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "GetRecommendationParameterSchema");
  }
};
var FormatUrlParameterSchema = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  handle: _zod.z.string()
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "FormatUrlParameterSchema");
  }
};
var GetPostOwnerResponseSchema = _zod.z.object({
  publication: _zod.z.object({
    by: _zod.z.object({
      ownedBy: _zod.z.object({
        address: _zod.z.string()
      })
    })
  })
});
var GetProfileIdResponseSchema = _zod.z.object({
  defaultProfile: _zod.z.object({
    id: _zod.z.string()
  })
});
var GetProfileRecommendationsSchema = _zod.z.object({
  profileRecommendations: _zod.z.object({
    items: _zod.z.array(_zod.z.object({
      id: _zod.z.string(),
      handle: _zod.z.object({
        fullHandle: _zod.z.string()
      })
    }))
  })
});










exports.GetPostOwnerParameterSchema = GetPostOwnerParameterSchema; exports.TipParameters = TipParameters; exports.GetProfileIdParameterSchema = GetProfileIdParameterSchema; exports.GetRecommendationParameterSchema = GetRecommendationParameterSchema; exports.FormatUrlParameterSchema = FormatUrlParameterSchema; exports.GetPostOwnerResponseSchema = GetPostOwnerResponseSchema; exports.GetProfileIdResponseSchema = GetProfileIdResponseSchema; exports.GetProfileRecommendationsSchema = GetProfileRecommendationsSchema;
//# sourceMappingURL=chunk-45MS4XQS.js.map