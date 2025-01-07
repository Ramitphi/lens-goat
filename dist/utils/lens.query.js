"use strict";Object.defineProperty(exports, "__esModule", {value: true});require('../chunk-7QVYU63E.js');

// src/utils/lens.query.ts
var fetchPost = `
  query Publication($request: PublicationRequest!) {
    publication(request: $request) {
      ... on Post {
        by {
          ownedBy {
            address
          }
        }
      }
    }
  }
`;


exports.fetchPost = fetchPost;
//# sourceMappingURL=lens.query.js.map