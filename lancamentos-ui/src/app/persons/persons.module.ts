import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonFormComponent} from './person-form/person-form.component';
import {PersonsSearchComponent} from './persons-search/persons-search.component';
import {FormsModule} from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {MessageModule} from 'primeng/message';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {InputMaskModule} from 'primeng/inputmask';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    PersonsSearchComponent,
    PersonFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
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
    SharedModule,
  ],
  exports: [
    PersonFormComponent,
    PersonsSearchComponent
  ]
})
export class PersonsModule { }
