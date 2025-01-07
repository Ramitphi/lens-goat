import * as _goat_sdk_core from '@goat-sdk/core';
import { z } from 'zod';

declare const GetPostOwnerParameterSchema_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    postURL: z.ZodString;
}, "strip", z.ZodTypeAny, {
    postURL: string;
}, {
    postURL: string;
}>>;
declare class GetPostOwnerParameterSchema extends GetPostOwnerParameterSchema_base {
}
declare const TipParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    to: z.ZodString;
    amount: z.ZodString;
}, "strip", z.ZodTypeAny, {
    to: string;
    amount: string;
}, {
    to: string;
    amount: string;
}>>;
declare class TipParameters extends TipParameters_base {
}
declare const GetProfileIdParameterSchema_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
}, {
    address: string;
}>>;
declare class GetProfileIdParameterSchema extends GetProfileIdParameterSchema_base {
}
declare const GetRecommendationParameterSchema_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    profileId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    profileId: string;
}, {
    profileId: string;
}>>;
declare class GetRecommendationParameterSchema extends GetRecommendationParameterSchema_base {
}
declare const FormatUrlParameterSchema_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    handle: z.ZodString;
}, "strip", z.ZodTypeAny, {
    handle: string;
}, {
    handle: string;
}>>;
declare class FormatUrlParameterSchema extends FormatUrlParameterSchema_base {
}
declare const GetPostOwnerResponseSchema: z.ZodObject<{
    publication: z.ZodObject<{
        by: z.ZodObject<{
            ownedBy: z.ZodObject<{
                address: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                address: string;
            }, {
                address: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            ownedBy: {
                address: string;
            };
        }, {
            ownedBy: {
                address: string;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        by: {
            ownedBy: {
                address: string;
            };
        };
    }, {
        by: {
            ownedBy: {
                address: string;
            };
        };
    }>;
}, "strip", z.ZodTypeAny, {
    publication: {
        by: {
            ownedBy: {
                address: string;
            };
        };
    };
}, {
    publication: {
        by: {
            ownedBy: {
                address: string;
            };
        };
    };
}>;
declare const GetProfileIdResponseSchema: z.ZodObject<{
    defaultProfile: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
}, "strip", z.ZodTypeAny, {
    defaultProfile: {
        id: string;
    };
}, {
    defaultProfile: {
        id: string;
    };
}>;
declare const GetProfileRecommendationsSchema: z.ZodObject<{
    profileRecommendations: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            handle: z.ZodObject<{
                fullHandle: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                fullHandle: string;
            }, {
                fullHandle: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            handle: {
                fullHandle: string;
            };
            id: string;
        }, {
            handle: {
                fullHandle: string;
            };
            id: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        items: {
            handle: {
                fullHandle: string;
            };
            id: string;
        }[];
    }, {
        items: {
            handle: {
                fullHandle: string;
            };
            id: string;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    profileRecommendations: {
        items: {
            handle: {
                fullHandle: string;
            };
            id: string;
        }[];
    };
}, {
    profileRecommendations: {
        items: {
            handle: {
                fullHandle: string;
            };
            id: string;
        }[];
    };
}>;

export { FormatUrlParameterSchema, GetPostOwnerParameterSchema, GetPostOwnerResponseSchema, GetProfileIdParameterSchema, GetProfileIdResponseSchema, GetProfileRecommendationsSchema, GetRecommendationParameterSchema, TipParameters };
