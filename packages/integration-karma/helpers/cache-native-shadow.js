/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

// Cache the original native shadow APIs (like `attachShadow`) so that we can still access them in our
// tests even when synthetic shadow DOM is loaded.

window.__nativeAttachShadow = Element.prototype.attachShadow;
window.__nativeShadowRoot = typeof ShadowRoot === 'undefined' && ShadowRoot;
