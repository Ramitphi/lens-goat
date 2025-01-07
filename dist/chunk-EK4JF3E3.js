"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk45MS4XQSjs = require('./chunk-45MS4XQS.js');


var _chunk7QVYU63Ejs = require('./chunk-7QVYU63E.js');

// src/lens.service.ts
var _core = require('@goat-sdk/core');
var _walletevm = require('@goat-sdk/wallet-evm');
var _viem = require('viem');
function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
_chunk7QVYU63Ejs.__name.call(void 0, _ts_decorate, "_ts_decorate");
function _ts_metadata(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
_chunk7QVYU63Ejs.__name.call(void 0, _ts_metadata, "_ts_metadata");
var LensService = class {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "LensService");
  }
  async getWalletAddressofGivenPost(parameters) {
    const link = parameters.postURL;
    const regex = /https:\/\/hey\.xyz\/posts\/(.*)/;
    const match = link.match(regex);
    if (!match) {
      throw new Error(`Please submit a valid link. Submitted link: ${link}`);
    }
    let postOwner;
    try {
      const response = await fetch("https://api-v2.lens.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: `query Publication($request: PublicationRequest!) {
                        publication(request: $request) {
                          ... on Post {
                            by {
                              ownedBy {
                                address
                              }
                            }
                          }
                        }
                      }`,
          variables: {
            request: {
              forId: match[1]
            }
          }
        })
      });
      postOwner = await response.json();
    } catch (error) {
      throw new Error(`Failed to get NFT collection statistics: ${error}`);
    }
    return postOwner;
  }
  async tipTheCreator(walletClient, parameters) {
    try {
      const to = await walletClient.resolveAddress(parameters.to);
      const hash = await walletClient.sendTransaction({
        to,
        value: _viem.parseEther.call(void 0, parameters.amount)
      });
      return `https://block-explorer.testnet.lens.dev/tx/${hash.hash}`;
    } catch (error) {
      throw Error(`Failed to transfer: ${error}`);
    }
  }
  async getProfileId(parameters) {
    let profileId;
    try {
      const response = await fetch("https://api-v2.lens.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: `query DefaultProfile($request: DefaultProfileRequest!) {
                        defaultProfile(request: $request) {
                          id
                        }
                      }`,
          variables: {
            request: {
              for: parameters.address
            }
          }
        })
      });
      profileId = await response.json();
    } catch (error) {
      throw Error(`Failed to transfer: ${error}`);
    }
    return profileId;
  }
  async getRecommendations(parameters) {
    let recommendation;
    try {
      const response = await fetch("https://api-v2.lens.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: `query ProfileRecommendations($request: ProfileRecommendationsRequest!) {
                        profileRecommendations(request: $request) {
                          items {
                            id
                            handle {
                              fullHandle
                            }
                          }
                        }
                      }`,
          variables: {
            request: {
              for: parameters.profileId
            }
          }
        })
      });
      recommendation = await response.json();
    } catch (error) {
      throw Error(`Failed to transfer: ${error}`);
    }
    return recommendation;
  }
  async formatTheHandle(parameters) {
    try {
      const baseUrl = "https://hey.xyz/u/";
      const username = parameters.handle.split("/")[1];
      return `${baseUrl}${username}`;
    } catch (error) {
      throw Error(`Failed to transfer: ${error}`);
    }
  }
};
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Get wallet address for creator of the given post"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _chunk45MS4XQSjs.GetPostOwnerParameterSchema === "undefined" ? Object : _chunk45MS4XQSjs.GetPostOwnerParameterSchema
  ]),
  _ts_metadata("design:returntype", Promise)
], LensService.prototype, "getWalletAddressofGivenPost", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Tip this creator with an amount of grass token"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunk45MS4XQSjs.TipParameters === "undefined" ? Object : _chunk45MS4XQSjs.TipParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], LensService.prototype, "tipTheCreator", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Get the profileId of creator based on their address"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _chunk45MS4XQSjs.GetProfileIdParameterSchema === "undefined" ? Object : _chunk45MS4XQSjs.GetProfileIdParameterSchema
  ]),
  _ts_metadata("design:returntype", Promise)
], LensService.prototype, "getProfileId", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Get similar creators for given profileId"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _chunk45MS4XQSjs.GetRecommendationParameterSchema === "undefined" ? Object : _chunk45MS4XQSjs.GetRecommendationParameterSchema
  ]),
  _ts_metadata("design:returntype", Promise)
], LensService.prototype, "getRecommendations", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Format the lens handle with url"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _chunk45MS4XQSjs.FormatUrlParameterSchema === "undefined" ? Object : _chunk45MS4XQSjs.FormatUrlParameterSchema
  ]),
  _ts_metadata("design:returntype", Promise)
], LensService.prototype, "formatTheHandle", null);



exports.LensService = LensService;
//# sourceMappingURL=chunk-EK4JF3E3.js.map