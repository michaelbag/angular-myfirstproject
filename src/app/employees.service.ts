import { Injectable } from '@angular/core';
import { employees } from './employees';
import { Employee } from './employee';

@Injectable()
export class EmployeesService {

  employees = employees;
  filterByName: string = "";
  filterByPhone: string = "";
  filterByEmail: string = "";
  filterForAll: string = "";
  data: Employee[];

  constructor() {
    this.reNew;
  }

  public getData(): Employee[] {
    return this.data;
  }

  public reNew() {
    this.data = []; // Clear data array
    let lineInFilter: boolean; // Строка попадает под фильтр
    let newEmployee: Employee;
    let filterByName = this.filterByName.toLowerCase();
    let filterByEmail = this.filterByEmail.toLowerCase();
    let filterByPhone = this.filterByPhone.toLowerCase();
    let filterForAll = this.filterForAll.toLowerCase();
    for (let i = 1; i < this.employees.length; i++) {
      let checkLine = this.employees[i - 1];

      // TODO: Поменять логику проверки на конструкция через "или" с отрицанием для ускорения работы
      lineInFilter = ((this.filterByEmail == "") && (this.filterByName == "") && (this.filterByPhone == "") && (this.filterForAll == ""));

      if (lineInFilter ||
        ((this.filterByEmail == "" || checkLine.email.toLowerCase().match(filterByEmail)) &&
          (this.filterByName == "" || checkLine.name.toLowerCase().match(filterByName)) &&
          (this.filterByPhone == "" || checkLine.phone.match(this.filterByPhone) || checkLine.extNumber.match(this.filterByPhone)) &&
          (this.filterForAll == "" || checkLine.email.toLowerCase().match(filterForAll) || checkLine.name.toLowerCase().match(filterForAll) || checkLine.phone.toLowerCase().match(filterForAll) || checkLine.extNumber.toLowerCase().match(filterForAll)))) {
        newEmployee = new Employee();

        // TODO: Перенести логику заполнения Employee в данный Сервис EmployeesService
        newEmployee.fillFromArray(this.employees[i - 1]);
        newEmployee.id = i;
        this.data.push(newEmployee);
      } else {
        /*
        newEmployee = new Employee();
        newEmployee.name = 'test';
        newEmployee.id = i;
        this.data.push(newEmployee);
        */
      }
    }
  }

  public getEmployeeById(id: number): Employee {
    return this.data[id];
  }
  public getLength(): number {
    return this.data.length;
  }

}