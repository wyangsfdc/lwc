/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { TransformOptions } from '../../options';
import { transform, transformSync } from '../transformer';

const TRANSFORMATION_OPTIONS: TransformOptions = {
    namespace: 'x',
    name: 'foo',
};

it('should throw when processing an invalid HTML file', async () => {
    await expect(transform(`<html`, 'foo.html', TRANSFORMATION_OPTIONS)).rejects.toMatchObject({
        filename: 'foo.html',
        message: expect.stringContaining('Invalid HTML syntax: eof-in-tag.'),
    });
});

it('should apply transformation for template file', async () => {
    const actual = `
        <template>
            <div>Hello</div>
        </template>
    `;
    const { code } = await transform(actual, 'foo.html', TRANSFORMATION_OPTIONS);

    expect(code).toContain(`tmpl.stylesheets = []`);
});

it('should escape CSS scope tokens', () => {
    const actual = `<template></template>`;
    const { code } = transformSync(actual, 'bar.html', {
        namespace: '@foo',
        name: 'bar',
    });

    // We don't want the generated code to contain invalid CSS selector strings, e.g.:
    //   tmpl.stylesheetTokens = {
    //     hostAttribute: \"@foo-bar_bar-host\",
    //     shadowAttribute: \"@foo-bar_bar\"
    //   };
    // In the above case, `@` is not safe as part of a CSS selector.
    expect(code).toContain('hostAttribute: "\\\\@foo-bar_bar-host"');
    expect(code).toContain('shadowAttribute: "\\\\@foo-bar_bar"');
});
