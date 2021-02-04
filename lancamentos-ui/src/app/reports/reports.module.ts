import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReportLaunchsComponent } from './report-launchs/report-launchs.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [ReportLaunchsComponent],
  imports: [
    CommonModule,
    FormsModule,

    ReportsRoutingModule,
    SharedModule,
    CalendarModule,
    CoreModule
  ]
})
export class ReportsModule {
}
