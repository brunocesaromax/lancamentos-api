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

@NgModule({
  declarations: [
    AppComponent,
    LaunchsSearchComponent,
    NavbarComponent,
    PersonsSearchComponent,
    ColoredFieldDirective,
    FormExampleComponent,
    LaunchFormComponent
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
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
