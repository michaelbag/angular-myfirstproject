import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

// import { employees } from '../employees';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
  providers: [EmployeesService]
})

export class EmpListComponent implements OnInit {

  // employees = employees;
  empList: Employee[];
  total: number;
  page: number;
  itemPerPage: number
  search: String;
  showDetails: string = '';
  filterName: string = '';
  pages: number[];
  test: string;

  filterForm;

  constructor(private dataService: EmployeesService, private formBuilder: FormBuilder) {
    // this.total = this.employees.length;

    this.itemPerPage = 19;
    this.dataService.reNew();

    this.filterForm = this.formBuilder.group({
      name: '',
      address: ''
    });

    this.setPage(1);
    this.reNewPages();
  }

  reNewPages() {

    this.pages = [];
    let totalpages = Math.ceil(this.dataService.data.length / this.itemPerPage);
    for (let i = 1; i <= totalpages; i++) {
      this.pages.push(i);
    }
  }

  onSubmit(customerData) {
    if (this.filterName != customerData.name) {
      this.filterName = customerData.name;
      this.dataService.filterForAll = customerData.name;
      this.dataService.reNew();
      this.reNewPages();
      this.setPage(1);
    }
  }

  onSubmitClear(customerData) {
    this.filterForm.name = '';
    this.onSubmit(customerData);
  }

  ngOnInit() {

  }

  public setPage(pageNumber: number) {
    this.page = pageNumber;
    let currentItem: number = (pageNumber - 1) * this.itemPerPage;

    this.empList = [];
    let data: Employee[] = this.dataService.getData();

    for (let i = 1; i <= this.itemPerPage; i++) {
      this.empList.push(this.dataService.data[currentItem]);
      currentItem++;
    }
    this.total = this.empList.length;
  }

  setDetail(employeeName) {
    this.showDetails = employeeName;
  }
}