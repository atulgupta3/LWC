import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    handleChangeMessage() {
        this.template.querySelector('c-child-component')
        .changeMessage('New message from Parent Component!');
    }
}
