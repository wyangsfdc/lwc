/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { htmlEscape, isVoidElement } from '@lwc/shared';
import { ChildNode, Element, Literal } from '../shared/types';
import { isElement, isText, isComment } from '../shared/ast';

// Implementation based on the parse5 serializer: https://github.com/inikulin/parse5/blob/master/packages/parse5/lib/serializer/index.ts

// Text nodes child of these tags should not be escaped (https://html.spec.whatwg.org/#serialising-html-fragments).
const rawContentElements = new Set([
    'STYLE',
    'SCRIPT',
    'XMP',
    'IFRAME',
    'NOEMBED',
    'NOFRAMES',
    'PLAINTEXT',
]);

function serializeAttrs(element: Element): string {
    /**
     * 0: styleToken in existing class attr
     * 1: styleToken for added class attr
     * 2: styleToken as attr
     */
    const attrs: string[] = [];
    let hasClassAttr = false;

    const collector = ({ name, value }: { name: string; value: string | boolean }) => {
        let v = value;

        if (name === 'class') {
            hasClassAttr = true;
            v += '${0}';
        }
        if (typeof v === 'string') {
            attrs.push(`${name}="${htmlEscape(v, true)}"`);
        } else {
            attrs.push(name);
        }
    };

    element.attributes
        .map((attr) => {
            return {
                name: attr.name,
                value: (attr.value as Literal).value,
            };
        })
        .forEach(collector);
    // This is tightly coupled with the logic in the parser that decides when an attribute should be
    // a property: https://github.com/salesforce/lwc/blob/master/packages/%40lwc/template-compiler/src/parser/attribute.ts#L198-L218
    // Because a component can't be a static element, we only look in the property bag on value and checked attribute
    // from the input.
    element.properties
        .map((prop) => {
            return {
                name: prop.attributeName,
                value: (prop.value as Literal).value,
            };
        })
        .forEach(collector);

    return (attrs.length > 0 ? ' ' : '') + attrs.join(' ') + (hasClassAttr ? '${2}' : '${3}');
}

function serializeChildren(
    children: ChildNode[],
    parentTagName: string,
    preserveComments: boolean
): string {
    let html = '';

    children.forEach((child) => {
        if (isElement(child)) {
            html += serializeStaticElement(child, preserveComments);
        } else if (isText(child)) {
            if (rawContentElements.has(parentTagName.toUpperCase())) {
                html += child.raw;
            } else {
                html += htmlEscape((child.value as Literal<string>).value);
            }
        } else if (isComment(child)) {
            html += preserveComments ? `<!--${htmlEscape(child.value)}-->` : '';
        } else {
            throw new TypeError(
                'Unknown node found while serializing static content. Allowed nodes types are: Element, Text and Comment.'
            );
        }
    });

    return html;
}

export function serializeStaticElement(element: Element, preserveComments: boolean): string {
    const tagName = element.name;

    let html = '<' + tagName + serializeAttrs(element) + '>';

    html += serializeChildren(element.children, tagName, preserveComments);

    // element.children.length > 0 can happen in the SVG namespace.
    if (!isVoidElement(tagName) || element.children.length > 0) {
        html += `</${tagName}>`;
    }

    return html;
}
