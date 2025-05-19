import { LightningElement, track } from 'lwc';

export default class FormTemplate extends LightningElement {
    @track firstName = '';
    @track lastName = '';
    @track email = '';

    handleInputChange(event) {
        const field = event.target.dataset.id;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        } else if (field === 'email') {
            this.email = event.target.value;
        }
        else if(field==='mobNum'){
            this.mobNum=event.target.value;
        }
    }

    handleSubmit() {
        console.log('Form submitted with:', this.firstName, this.lastName, this.mobNum, this.email);
    }





    students = [
        {
          Id: '101',
          Name: 'Alice Smith',
          Class: '10A',
          Fee: '15000'
        },
        {
          Id: '102',
          Name: 'Bob Johnson',
          Class: '10B',
          Fee: '14500'
        },
        {
          Id: '103',
          Name: 'Charlie Bron',
          Class:'1A',
          Fee: '16000'
        },
        {
          Id: '104',
          Name: 'Diana Mille',
          Class:'11',
          Fee:'15500'
        },
        {
          Id: '105',
          Name: 'Ethan Davis',
          Class: '12A',
          Fee: '17000'
        },
        {
          Id: '106',
          Name: 'Fiona Wilso',
          Class:'12',
          Fee:' 16500'
        },
        {
          Id: '107',
          Name: 'George Whit',
          Class:'9A',
          Fee: '14000'
        },
        {
          Id: '108',
          Name: 'Hannah Blac',
          Class:'9B',
          Fee: '13500'
        },
        {
          Id: '109',
          Name: 'Isaac Green',
          Class: '8A',
          Fee: '13000' },
        {
          Id: '110',
          Name: 'Julia Blue',
          Class: '7B',     
          Fee: '12500'       }
      ];
}
