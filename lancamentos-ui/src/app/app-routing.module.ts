import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { NotAuthorizedComponent } from './core/not-authorized/not-authorized.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'launchs', loadChildren: () => import('./launchs/launchs.module').then(m => m.LaunchsModule)},
  {path: 'persons', loadChildren: () => import('./persons/persons.module').then(m => m.PersonsModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)},

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
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
