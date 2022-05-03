import { LightningElement, api } from 'lwc';

export default class extends LightningElement {
    @api message = '';
    @api toggle = false;
    connectedCallback() {
        // eslint-disable-next-line no-console
        console.log('component B connected');
    }

    renderedCallback() {
        // eslint-disable-next-line no-console
        console.log('component B rendered ', this.message);
    }
}
