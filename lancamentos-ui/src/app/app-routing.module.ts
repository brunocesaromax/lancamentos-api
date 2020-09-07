import {RouterModule, Routes} from '@angular/router';
import {LaunchsSearchComponent} from './launchs/launchs-search/launchs-search.component';
import {LaunchFormComponent} from './launchs/launch-form/launch-form.component';
import {PersonsSearchComponent} from './persons/persons-search/persons-search.component';
import {PageNotFoundComponent} from './core/page-not-found.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: 'launchs', pathMatch: 'full'},
  {path: 'persons', component: PersonsSearchComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  // ** = Qualquer rota não encontrada
  {path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule] // Exportação necessária caso alguma diretiva do RouterModule seja utilizada no AppComponent
})
export class AppRoutingModule {
}
