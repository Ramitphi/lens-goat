import "../chunk-PAWJFY3S.mjs";

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
export {
  fetchPost
};
//# sourceMappingURL=lens.query.mjs.map