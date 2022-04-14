/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import {
    upgradeElement,
    connectRootElement,
    LightningElement,
    registerTagName,
} from '@lwc/engine-core';
import { isString, isFunction, isObject, isNull } from '@lwc/shared';

import { createElement } from '../renderer';
import { serializeElement } from '../serializer';
import { HostElement, HostNodeType } from '../types';

const FakeRootElement: HostElement = {
    type: HostNodeType.Element,
    name: 'fake-root-element',
    parent: null,
    shadowRoot: null,
    children: [],
    attributes: [],
    eventListeners: {},
};

export function renderComponent(
    tagName: string,
    Ctor: typeof LightningElement,
    props: { [name: string]: any } = {}
): string {
    if (!isString(tagName)) {
        throw new TypeError(
            `"renderComponent" expects a string as the first parameter but instead received ${tagName}.`
        );
    }

    if (!isFunction(Ctor)) {
        throw new TypeError(
            `"renderComponent" expects a valid component constructor as the second parameter but instead received ${Ctor}.`
        );
    }

    if (!isObject(props) || isNull(props)) {
        throw new TypeError(
            `"renderComponent" expects an object as the third parameter but instead received ${props}.`
        );
    }

    registerTagName(tagName);
    const element = createElement(tagName, undefined, true);
    upgradeElement(element as any as HTMLElement, Ctor, 'open', props);

    element.parent = FakeRootElement;

    connectRootElement(element);

    return serializeElement(element);
}
