import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: 'launchs', pathMatch: 'full'},
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
