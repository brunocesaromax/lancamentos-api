import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {ErrorHandlerService} from './error-handler.service';
import {ToastyModule} from 'ng2-toasty';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {LogService} from '../examples/log.service';
import {ConfirmationService} from 'primeng/api';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found.component';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../security/auth.service';
import {JWT_OPTIONS, JwtHelperService} from '@auth0/angular-jwt';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NotAuthorizedComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastyModule.forRoot(), // Usando forRoot por estar no app.module
    ConfirmDialogModule,
  ],
  exports: [
    NavbarComponent,
    ToastyModule, // exportar para o app module poder usar
    ConfirmDialogModule // exportar para o app module poder usar
  ],
  providers: [
    ErrorHandlerService,
    LogService,
    ConfirmationService,
    Title,
    AuthService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class CoreModule {
} // Parte do app.module
