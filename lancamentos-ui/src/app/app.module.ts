import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PersonsSearchComponent} from './persons/persons-search/persons-search.component';
import {ColoredFieldDirective} from './colored-field.directive';
import {FormExampleComponent} from './form-example/form-example.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PersonFormComponent} from './persons/person-form/person-form.component';
import {MessageComponent} from './message/message.component';
import {PersonsGridComponent} from './persons/persons-grid/persons-grid.component';
import {LaunchsModule} from './launchs/launchs.module';
import {PersonsModule} from './persons/persons.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ColoredFieldDirective,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LaunchsModule,
    PersonsModule,
  ],
  providers: [],
  exports: [
    MessageComponent
  ],
  bootstrap: [AppComponent] /*Componente que ira iniciar a aplicação*/
})
export class AppModule {
}
