import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LaunchFormComponent} from './launch-form/launch-form.component';
import {LaunchsSearchComponent} from './launchs-search/launchs-search.component';
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
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LaunchFormComponent,
    LaunchsSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
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
    LaunchFormComponent,
    LaunchsSearchComponent,
  ]
})
export class LaunchsModule { }
