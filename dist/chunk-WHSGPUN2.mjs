import {
  __name
} from "./chunk-PAWJFY3S.mjs";

// src/parameters.ts
import { createToolParameters } from "@goat-sdk/core";
import { z } from "zod";
var GetPostOwnerParameterSchema = class extends createToolParameters(z.object({
  postURL: z.string()
})) {
  static {
    __name(this, "GetPostOwnerParameterSchema");
  }
};
var TipParameters = class extends createToolParameters(z.object({
  to: z.string().describe("The address to transfer the token to"),
  amount: z.string().describe("The amount of tokens to transfer in base units")
})) {
  static {
    __name(this, "TipParameters");
  }
};
var GetProfileIdParameterSchema = class extends createToolParameters(z.object({
  address: z.string()
})) {
  static {
    __name(this, "GetProfileIdParameterSchema");
  }
};
var GetRecommendationParameterSchema = class extends createToolParameters(z.object({
  profileId: z.string()
})) {
  static {
    __name(this, "GetRecommendationParameterSchema");
  }
};
var FormatUrlParameterSchema = class extends createToolParameters(z.object({
  handle: z.string()
})) {
  static {
    __name(this, "FormatUrlParameterSchema");
  }
};
var GetPostOwnerResponseSchema = z.object({
  publication: z.object({
    by: z.object({
      ownedBy: z.object({
        address: z.string()
      })
    })
  })
});
var GetProfileIdResponseSchema = z.object({
  defaultProfile: z.object({
    id: z.string()
  })
});
var GetProfileRecommendationsSchema = z.object({
  profileRecommendations: z.object({
    items: z.array(z.object({
      id: z.string(),
      handle: z.object({
        fullHandle: z.string()
      })
    }))
  })
});

export {
  GetPostOwnerParameterSchema,
  TipParameters,
  GetProfileIdParameterSchema,
  GetRecommendationParameterSchema,
  FormatUrlParameterSchema,
  GetPostOwnerResponseSchema,
  GetProfileIdResponseSchema,
  GetProfileRecommendationsSchema
};
//# sourceMappingURL=chunk-WHSGPUN2.mjs.map