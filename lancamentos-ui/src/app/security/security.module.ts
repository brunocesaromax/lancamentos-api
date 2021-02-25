import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    // Configuração para que o token seja automaticamente adicionado ao cabeçalho de cada requisição
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: environment.tokenAllowedDomains,
        disallowedRoutes: environment.tokenDisallowedRoutes
      },
    }),
    ButtonModule,
    InputTextModule
  ],
  providers: [
    AuthGuard,
    LogoutService
  ]
})
export class SecurityModule {
}
