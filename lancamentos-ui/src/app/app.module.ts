import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { LaunchsSearchComponent } from './launchs-search/launchs-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonsSearchComponent } from './persons-search/persons-search.component';
import { ColoredFieldDirective } from './colored-field.directive';
import { FormExampleComponent } from './form-example/form-example.component';
import {FormsModule} from '@angular/forms';
import {MessageModule} from 'primeng/message';
import { LaunchFormComponent } from './launch-form/launch-form.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {PersonFormComponent} from './person-form/person-form.component';
import {InputMaskModule} from 'primeng/inputmask';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchsSearchComponent,
    NavbarComponent,
    PersonsSearchComponent,
    ColoredFieldDirective,
    FormExampleComponent,
    LaunchFormComponent,
    PersonFormComponent,
    MessageComponent
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
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
