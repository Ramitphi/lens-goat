declare const fetchPost = "\n  query Publication($request: PublicationRequest!) {\n    publication(request: $request) {\n      ... on Post {\n        by {\n          ownedBy {\n            address\n          }\n        }\n      }\n    }\n  }\n";

export { fetchPost };
