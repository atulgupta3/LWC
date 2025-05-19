import { LightningElement} from 'lwc';
import USER_ID_Field from '@salesforce/user/Id';
import USER_NAME_FIELD from '@salesforce/schema/User.Name';
export default class HelloWorld extends LightningElement {
    userId = USER_ID_Field;
    NAME_FIELD = USER_NAME_FIELD
    
    error ;
    name;

  currentName;

  nameUpdate(event){
    this.currentName=event.target.value;
  }

  _minutesWatched = (this.totalLessonWatched * 10);

  get minutesWatched(){
    return this._minutesWatched;
  }
  set minutesWatched(value){
    this._minutesWatched = value < 1000 ? value : 5000;
  }
  handleWatchChange(event){
    this.minutesWatched = parseInt(event.target.value, 10);
  }
  showMe= false;
  handleChange(event){
    this.showMe = event.target.checked;
  }
}