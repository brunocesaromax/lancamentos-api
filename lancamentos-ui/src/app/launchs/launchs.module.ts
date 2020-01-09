import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LaunchFormComponent} from './launch-form/launch-form.component';
import {LaunchsSearchComponent} from './launchs-search/launchs-search.component';
import {LaunchsGridComponent} from './launchs-grid/launchs-grid.component';
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

@NgModule({
  declarations: [
    LaunchFormComponent,
    LaunchsSearchComponent,
    LaunchsGridComponent
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
  ],
  exports: [
    LaunchFormComponent,
    LaunchsSearchComponent,
  ]
})
export class LaunchsModule { }
