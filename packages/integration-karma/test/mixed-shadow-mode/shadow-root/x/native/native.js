import { LightningElement } from 'lwc';

export default class extends LightningElement {
    static preferNativeShadow = true;

    get hasShadowRoot() {
        return this.shadowRoot !== null && this.shadowRoot === this.template;
    }
}
