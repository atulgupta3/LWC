import { LightningElement , api} from 'lwc';

export default class ChildComp extends LightningElement {
  @api name = 'Harry Potter'
  @api rollNum = 'EC001'
  @api mobNum = 6599689
  @api address = {
   street : 1,
   area : 'NYC',
   enrolled : true
  }
}