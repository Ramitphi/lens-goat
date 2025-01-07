import * as _goat_sdk_core from '@goat-sdk/core';
import { PluginBase, Chain } from '@goat-sdk/core';

declare class LensPlugin extends PluginBase {
    constructor();
    supportsChain: (chain: Chain) => chain is _goat_sdk_core.EvmChain;
}
declare const lens: () => LensPlugin;

export { LensPlugin, lens };
