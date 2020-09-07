import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LaunchsModule} from './launchs/launchs.module';
import {PersonsModule} from './persons/persons.module';
import {CoreModule} from './core/core.module';
import {ExamplesModule} from './examples/examples.module';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {RouterModule, Routes} from '@angular/router';
import {LaunchsSearchComponent} from './launchs/launchs-search/launchs-search.component';
import {LaunchFormComponent} from './launchs/launch-form/launch-form.component';
import {PersonsSearchComponent} from './persons/persons-search/persons-search.component';
import {PageNotFoundComponent} from './core/page-not-found.component';

registerLocaleData(localePt);

const routes: Routes = [
  {path: '', redirectTo: 'launchs', pathMatch: 'full'},
  {path: 'launchs', component: LaunchsSearchComponent},
  {path: 'launchs/new', component: LaunchFormComponent},
  {path: 'launchs/:id', component: LaunchFormComponent},
  {path: 'persons', component: PersonsSearchComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  // ** = Qualquer rota não encontrada
  {path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    LaunchsModule,
    PersonsModule,
    CoreModule,
    ExamplesModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent] /*Componente que ira iniciar a aplicação*/
})
export class AppModule {
}
