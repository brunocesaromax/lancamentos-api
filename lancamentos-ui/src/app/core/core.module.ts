import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {ErrorHandlerService} from './error-handler.service';
import {ToastyModule} from 'ng2-toasty';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {LogService} from '../examples/log.service';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ToastyModule.forRoot(), // Usando forRoot por estar no app.module
    ConfirmDialogModule,
  ],
  exports: [
    NavbarComponent,
    ToastyModule, // exportar para o app module por usar
    ConfirmDialogModule // exportar para o app module por usar
  ],
  providers: [
    ErrorHandlerService,
    LogService,
    ConfirmationService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class CoreModule { } // Parte do app.module
