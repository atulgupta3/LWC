import { LightningElement, track} from 'lwc';

export default class Hello1 extends LightningElement {
        @track dynamicGreeting = 'World';
        @track cityList = ['Bareilly','Noida','Mathura'];
    greetingChangeHandler(event){
        this.dynamicGreeting = event.target.value;
    }
}