import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormExampleComponent} from './form-example/form-example.component';
import {NavigationModule} from './navigation/navigation.module';
import {ColoredFieldDirective} from './colored-field.directive';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    FormExampleComponent,
    ColoredFieldDirective
  ],
  imports: [
    CommonModule,
    NavigationModule,
    ButtonModule,
    FormsModule,
    MessageModule,
    InputTextModule
  ]
})
export class ExamplesModule { }
