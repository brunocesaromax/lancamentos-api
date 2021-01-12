import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LaunchsSearchComponent} from './launchs-search/launchs-search.component';
import {LaunchFormComponent} from './launch-form/launch-form.component';
import {AuthGuard} from '../security/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LaunchsSearchComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_LAUNCH'] }
  },
  {
    path: 'new',
    component: LaunchFormComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CREATE_LAUNCH'] }
  },
  {
    path: ':id',
    component: LaunchFormComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SEARCH_LAUNCH'] }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LaunchsRoutingModule {
}
