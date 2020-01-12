import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LaunchsModule} from './launchs/launchs.module';
import {PersonsModule} from './persons/persons.module';
import {CoreModule} from './core/core.module';
import {ExamplesModule} from './examples/examples.module';
import {EmployeeService, EmployeeServiceAbbreviated} from './examples/employee/employee.service';

const createEmployeeService = () => {
  return new EmployeeServiceAbbreviated(2);
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LaunchsModule,
    PersonsModule,
    CoreModule,
    ExamplesModule
  ],
  providers: [
    {provide: EmployeeService, useFactory: createEmployeeService}
  ],
  exports: [],
  bootstrap: [AppComponent] /*Componente que ira iniciar a aplicação*/
})
export class AppModule {
}
