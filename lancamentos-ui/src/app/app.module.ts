import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LaunchsModule} from './launchs/launchs.module';
import {PersonsModule} from './persons/persons.module';
import {CoreModule} from './core/core.module';
import {ExamplesModule} from './examples/examples.module';
import {LogService} from './examples/log.service';
import {ToastyModule} from 'ng2-toasty';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LaunchsModule,
    PersonsModule,
    CoreModule,
    ExamplesModule,
    ToastyModule.forRoot(), // Usando forRoot por estar no app.module
    ConfirmDialogModule,
  ],
  providers: [
    LogService,
    ConfirmationService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  exports: [],
  bootstrap: [AppComponent] /*Componente que ira iniciar a aplicação*/
})
export class AppModule {
}
