/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { getOwnPropertyDescriptor, hasOwnProperty } from '@lwc/shared';

const DocumentPrototypeActiveElement: (this: Document) => Element | null = getOwnPropertyDescriptor(
    Document.prototype,
    'activeElement'
)!.get!;

const elementFromPoint: (x: number, y: number) => Element | null = hasOwnProperty.call(
    Document.prototype,
    'elementFromPoint'
)
    ? Document.prototype.elementFromPoint
    : (Document.prototype as any).msElementFromPoint; // IE11

const elementsFromPoint: (x: number, y: number) => Element[] = hasOwnProperty.call(
    Document.prototype,
    'elementsFromPoint'
)
    ? Document.prototype.elementsFromPoint
    : (Document.prototype as any).msElementsFromPoint; // IE11

// defaultView can be null when a document has no browsing context. For example, the owner document
// of a node in a template doesn't have a default view: https://jsfiddle.net/hv9z0q5a/
const defaultViewGetter: (this: Document) => Window | null = getOwnPropertyDescriptor(
    Document.prototype,
    'defaultView'
)!.get!;

const {
    createComment,
    createTreeWalker,
    querySelectorAll,
    getElementById,
    getElementsByClassName,
    getElementsByTagName,
    getElementsByTagNameNS,
} = Document.prototype;

// In Firefox v57 and lower, getElementsByName is defined on HTMLDocument.prototype
// In all other browsers have the method on Document.prototype
const { getElementsByName } = HTMLDocument.prototype;

export {
    elementFromPoint,
    elementsFromPoint,
    createComment,
    createTreeWalker,
    DocumentPrototypeActiveElement,
    querySelectorAll,
    getElementById,
    getElementsByClassName,
    getElementsByName,
    getElementsByTagName,
    getElementsByTagNameNS,
    defaultViewGetter,
};
