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
import {AppRoutingModule} from './app-routing.module';
import {SecurityModule} from './security/security.module';
import {JwtModule} from '@auth0/angular-jwt';

registerLocaleData(localePt);

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LaunchsModule,
    PersonsModule,
    SecurityModule,
    // Configuração para que o token seja automaticamente adicionado ao cabeçalho de cada requisição
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8080', 'launchs-api.herokuapp.com'],
        disallowedRoutes: [],
      },
    }),
    CoreModule,
    ExamplesModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent] /*Componente que ira iniciar a aplicação*/
})
export class AppModule {
}
