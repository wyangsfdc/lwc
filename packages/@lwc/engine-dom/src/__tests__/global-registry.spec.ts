/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { patchCustomElementRegistry } from '../patches/global-registry';

describe('global registry', () => {
    it('throws an error if the global registry is patched twice', () => {
        patchCustomElementRegistry();
        expect(() => {
            patchCustomElementRegistry();
        }).toThrowError(/Please ensure you are loading the LWC engine only once/);
    });
});
