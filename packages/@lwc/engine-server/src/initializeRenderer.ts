/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    setAssertInstanceOfHTMLElement,
    setAttachShadow,
    setCreateComment,
    setCreateElement,
    setCreateText,
    setDefineCustomElement,
    setDispatchEvent,
    setGetAttribute,
    setGetBoundingClientRect,
    setGetChildNodes,
    setGetChildren,
    setGetClassList,
    setGetCustomElement,
    setGetElementsByClassName,
    setGetElementsByTagName,
    setGetFirstChild,
    setGetFirstElementChild,
    setGetLastChild,
    setGetLastElementChild,
    setGetProperty,
    setHTMLElement,
    setInsert,
    setIsConnected,
    setIsNativeShadowDefined,
    setIsSyntheticShadowDefined,
    setNextSibling,
    setQuerySelector,
    setQuerySelectorAll,
    setRemove,
    setRemoveAttribute,
    setRemoveEventListener,
    setSetAttribute,
    setSetCSSStyleProperty,
    setSetProperty,
    setSetText,
    setSsr,
    setAddEventListener,
    setInsertStylesheet,
} from '@lwc/engine-core';

import {
    assertInstanceOfHTMLElement,
    attachShadow,
    createComment,
    createElement,
    createText,
    defineCustomElement,
    dispatchEvent,
    getAttribute,
    getBoundingClientRect,
    getChildNodes,
    getChildren,
    getClassList,
    getCustomElement,
    getElementsByClassName,
    getElementsByTagName,
    getFirstChild,
    getFirstElementChild,
    getLastChild,
    getLastElementChild,
    getProperty,
    HTMLElement,
    insert,
    isConnected,
    isNativeShadowDefined,
    isSyntheticShadowDefined,
    nextSibling,
    querySelector,
    querySelectorAll,
    remove,
    removeAttribute,
    removeEventListener,
    setAttribute,
    setCSSStyleProperty,
    setProperty,
    setText,
    ssr,
    addEventListener,
    insertStylesheet,
} from './renderer';

setAssertInstanceOfHTMLElement(assertInstanceOfHTMLElement);
setAttachShadow(attachShadow);
setCreateComment(createComment);
setCreateElement(createElement);
setCreateText(createText);
setDefineCustomElement(defineCustomElement);
setDispatchEvent(dispatchEvent);
setGetAttribute(getAttribute);
setGetBoundingClientRect(getBoundingClientRect);
setGetChildNodes(getChildNodes);
setGetChildren(getChildren);
setGetClassList(getClassList);
setGetCustomElement(getCustomElement);
setGetElementsByClassName(getElementsByClassName);
setGetElementsByTagName(getElementsByTagName);
setGetFirstChild(getFirstChild);
setGetFirstElementChild(getFirstElementChild);
setGetLastChild(getLastChild);
setGetLastElementChild(getLastElementChild);
setGetProperty(getProperty);
setHTMLElement(HTMLElement);
setInsert(insert);
setIsConnected(isConnected);
setIsNativeShadowDefined(isNativeShadowDefined);
setIsSyntheticShadowDefined(isSyntheticShadowDefined);
setNextSibling(nextSibling);
setQuerySelector(querySelector);
setQuerySelectorAll(querySelectorAll);
setRemove(remove);
setRemoveAttribute(removeAttribute);
setRemoveEventListener(removeEventListener);
setSetAttribute(setAttribute);
setSetCSSStyleProperty(setCSSStyleProperty);
setSetProperty(setProperty);
setSetText(setText);
setSsr(ssr);
setAddEventListener(addEventListener);
setInsertStylesheet(insertStylesheet);
