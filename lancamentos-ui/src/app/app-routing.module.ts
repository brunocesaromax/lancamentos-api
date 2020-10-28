import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found.component';
import {NgModule} from '@angular/core';
import {NotAuthorizedComponent} from './core/not-authorized/not-authorized.component';

const routes: Routes = [
  {path: '', redirectTo: 'launchs', pathMatch: 'full'},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: 'not-authorized', component: NotAuthorizedComponent},
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
