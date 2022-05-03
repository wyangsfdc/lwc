import { LightningElement } from 'lwc';

export default class extends LightningElement {
    connectedCallback() {
        // eslint-disable-next-line no-console
        console.log('component A connected');
    }

    renderedCallback() {
        // eslint-disable-next-line no-console
        console.log('component A rendered');
    }
}
