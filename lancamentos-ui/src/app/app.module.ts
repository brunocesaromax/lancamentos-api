import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {NavbarComponent} from './navbar/navbar.component';
import {PersonsSearchComponent} from './persons-search/persons-search.component';
import {ColoredFieldDirective} from './colored-field.directive';
import {FormExampleComponent} from './form-example/form-example.component';
import {FormsModule} from '@angular/forms';
import {MessageModule} from 'primeng/message';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {PersonFormComponent} from './person-form/person-form.component';
import {InputMaskModule} from 'primeng/inputmask';
import {MessageComponent} from './message/message.component';
import {PersonsGridComponent} from './persons-grid/persons-grid.component';
import {NavigationModule} from './navigation/navigation.module';
import {LaunchsModule} from './launchs/launchs.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonsSearchComponent,
    ColoredFieldDirective,
    FormExampleComponent,
    PersonFormComponent,
    MessageComponent,
    PersonsGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    FormsModule,
    MessageModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    InputMaskModule,
    NavigationModule,
    LaunchsModule
  ],
  providers: [],
  exports: [
    MessageComponent
  ],
  bootstrap: [AppComponent] /*Componente que ira iniciar a aplicação*/
})
export class AppModule {
}
