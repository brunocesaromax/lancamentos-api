import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LaunchsSearchComponent} from './launchs-search/launchs-search.component';
import {LaunchFormComponent} from './launch-form/launch-form.component';

const routes: Routes = [
  {path: 'launchs', component: LaunchsSearchComponent},
  {path: 'launchs/new', component: LaunchFormComponent},
  {path: 'launchs/:id', component: LaunchFormComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LaunchsRoutingModule { }
