import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportLaunchsComponent } from './report-launchs/report-launchs.component';
import { AuthGuard } from '../security/auth.guard';

const routes: Routes = [
  {
    path: 'launchs',
    component: ReportLaunchsComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_SEARCH_LAUNCH']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {
}
