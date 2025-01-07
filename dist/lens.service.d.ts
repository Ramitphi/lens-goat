import { EVMWalletClient } from '@goat-sdk/wallet-evm';
import { GetPostOwnerParameterSchema, TipParameters, GetProfileIdParameterSchema, GetRecommendationParameterSchema, FormatUrlParameterSchema } from './parameters.js';
import '@goat-sdk/core';
import 'zod';

declare class LensService {
    getWalletAddressofGivenPost(parameters: GetPostOwnerParameterSchema): Promise<{
        publication: {
            by: {
                ownedBy: {
                    address: string;
                };
            };
        };
    }>;
    tipTheCreator(walletClient: EVMWalletClient, parameters: TipParameters): Promise<string>;
    getProfileId(parameters: GetProfileIdParameterSchema): Promise<{
        defaultProfile: {
            id: string;
        };
    }>;
    getRecommendations(parameters: GetRecommendationParameterSchema): Promise<{
        profileRecommendations: {
            items: {
                handle: {
                    fullHandle: string;
                };
                id: string;
            }[];
        };
    }>;
    formatTheHandle(parameters: FormatUrlParameterSchema): Promise<string>;
}

export { LensService };
