import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api childMessage = 'Hello from Child Component!';

    @api changeMessage(newMessage) {
        // eslint-disable-next-line @lwc/lwc/no-api-reassignments
        this.childMessage = newMessage;
    }
}
