import { LightningElement, wire} from 'lwc';
import {subscribe, MessageContext, APPLICATION_SCOPE} from 'lightning/messageService';
import COMPONENT_COMMUNICATION_CHANNEL from '@salesforce/messageChannel/ComponentCommunicationChannel__c';
export default class ComponentB extends LightningElement {
  @wire(MessageContext)
  messageContext;

  subscription = null;
  receivedMessage = 'No message';

  connectedCallback(){
    if(!this.subscription){
      this.subscription=subscribe(
        this.messageContext,
        COMPONENT_COMMUNICATION_CHANNEL,
        (payload)=>this.handleMessage(payload),
        { scope: APPLICATION_SCOPE }
      );
    }
  }
  handleMessage(payload){
    console.log('Received payload :' ,payload);
    this.receivedMessage = payload.message;
  }


}