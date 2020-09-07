import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonsSearchComponent} from './persons-search/persons-search.component';
import {PersonFormComponent} from './person-form/person-form.component';

const routes: Routes = [
  {path: 'persons', component: PersonsSearchComponent},
  {path: 'persons/new', component: PersonFormComponent},
  {path: 'persons/:id', component: PersonFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
