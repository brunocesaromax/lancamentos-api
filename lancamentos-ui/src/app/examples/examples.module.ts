import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormExampleComponent} from './form-example/form-example.component';
import {NavigationModule} from './navigation/navigation.module';
import {ColoredFieldDirective} from './colored-field.directive';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import { EmployeeFormComponent } from './employee/employee-form.component';
import {EmployeeService} from './employee/employee.service';

@NgModule({
  declarations: [
    FormExampleComponent,
    ColoredFieldDirective,
    EmployeeFormComponent
  ],
  exports: [
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    ButtonModule,
    FormsModule,
    MessageModule,
    InputTextModule
  ],
  providers: [
    EmployeeService
  ]
})
export class ExamplesModule { }
