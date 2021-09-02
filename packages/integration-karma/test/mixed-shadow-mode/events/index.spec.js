if (!process.env.COMPAT) {
    describe('mixed shadow mode events', () => {
        it('should have correct composedPath() for shadow roots created outside LWC', () => {
            const div = document.createElement('div');
            div.setAttribute('data-id', 'outer');
            document.body.appendChild(div);

            const shadowRoot = window.__nativeAttachShadow.call(div, { mode: 'open' });
            shadowRoot.innerHTML = '<div data-id="inner"></div>';

            return new Promise((resolve) => {
                div.addEventListener('foo', (e) => {
                    const path = e.composedPath();
                    const names = path.map((elm) => {
                        const dataId = elm.getAttribute && elm.getAttribute('data-id');
                        return dataId || elm.tagName || elm.constructor.name;
                    });
                    expect(names).toEqual([
                        'inner',
                        'ShadowRoot',
                        'outer',
                        'BODY',
                        'HTML',
                        'HTMLDocument',
                        'Window',
                    ]);
                    resolve();
                });

                shadowRoot
                    .querySelector('div')
                    .dispatchEvent(new CustomEvent('foo', { bubbles: true, composed: true }));
            });
        });
    });
}
