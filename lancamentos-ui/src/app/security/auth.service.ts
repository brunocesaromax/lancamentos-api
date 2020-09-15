import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';

  constructor(private httpClient: HttpClient) {
  }

  login(username: string, password: string) {
    let headers = new HttpHeaders();
    const body = `username=${username}&password=${password}&grant_type=password`;

    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // client and secret
    headers = headers.append('Authorization', 'Basic YW5ndWxhcjoxMjM0NTY=');

    this.httpClient.post(this.oauthTokenUrl, body, {headers})
      .subscribe(response => {
        console.log(response);
      },
        error => console.log(error));
  }
}
