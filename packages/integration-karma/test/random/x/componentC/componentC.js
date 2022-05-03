import { LightningElement } from 'lwc';

export default class extends LightningElement {
    connectedCallback() {
        // eslint-disable-next-line no-console
        console.log('component C connected');
    }

    renderedCallback() {
        // eslint-disable-next-line no-console
        console.log('component C rendered');
    }
}
