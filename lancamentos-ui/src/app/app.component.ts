import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './examples/employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employees = [];

  constructor(
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit() {
    this.employees = this.employeeService.list();
  }

}
