import {Component} from '@angular/core';
import {EmployeeService} from './employee.service';
import {LogService} from '../log.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  constructor(
    private employeeService: EmployeeService,
    private logService: LogService
  ) {
  }

  add(name: string) {
    this.logService.log(`Adicionando ${name}`);
    this.employeeService.add(name);
  }
}
