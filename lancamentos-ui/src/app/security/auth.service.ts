import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(private httpClient: HttpClient,
              private jwtHelperService: JwtHelperService) {
    this.loadToken();
  }

  login(username: string, password: string) {
    let headers = new HttpHeaders();
    const body = `username=${username}&password=${password}&grant_type=password`;

    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // client and secret
    headers = headers.append('Authorization', 'Basic YW5ndWxhcjoxMjM0NTY=');

    this.httpClient.post(this.oauthTokenUrl, body, {headers})
      .subscribe((response: any) => {
          this.storeToken(response.access_token);
        },
        error => console.log(error));
  }

  private storeToken(token: string) {
    this.jwtPayload = this.jwtHelperService.decodeToken(token);

    // LocalStorage permite acessar um objeto de armazenamento que está guardado no navegador do usuário
    localStorage.setItem('token', token);
  }

  private loadToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.storeToken(token);
    }
  }
}
