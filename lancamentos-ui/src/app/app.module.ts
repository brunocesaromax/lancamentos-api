import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ColoredFieldDirective} from './examples/colored-field.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LaunchsModule} from './launchs/launchs.module';
import {PersonsModule} from './persons/persons.module';
import {CoreModule} from './core/core.module';
import {ExamplesModule} from './examples/examples.module';

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
    ExamplesModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent] /*Componente que ira iniciar a aplicação*/
})
export class AppModule {
}
