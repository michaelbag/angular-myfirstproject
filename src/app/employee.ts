import { PhoneNumber } from './phone-number';

export class Employee {
  id: number;
  name: string;
  numbers: PhoneNumber[] = new Array();
  title: string;
  email: string;

  constructor() {

  }

  public fillFromArray(fromArray) {
    this.name = fromArray.name;
    this.title = fromArray.title;
    this.email = fromArray.email;

    let empPhone = new PhoneNumber();
    empPhone.phNumber = fromArray.phone;
    empPhone.phType = "Основной";
    
    this.numbers.push(empPhone);

    empPhone = new PhoneNumber();
    empPhone.phNumber = fromArray.extNumber;
    empPhone.phType = "Внутренний";

    this.numbers.push(empPhone);

  }
}