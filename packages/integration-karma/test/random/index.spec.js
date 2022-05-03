import { createElement } from 'lwc';

import ComponentA from 'x/componentA';

it('random test', () => {
    const elm = createElement('x-component-A', { is: ComponentA });
    document.body.appendChild(elm);
});
