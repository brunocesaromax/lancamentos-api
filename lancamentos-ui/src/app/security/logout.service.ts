import {Injectable} from '@angular/core';
import {LaunchHttp} from './lauch-http.service';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRevokeUrl = 'http://localhost:8080/tokens/revoke';

  constructor(private http: LaunchHttp,
              private auth: AuthService) {
  }

  // Remoção do cookie que guarda o refresh token e em seguida remoção do access token
  logout() {
    return this.http.delete(this.tokensRevokeUrl, {withCredentials: true})
      .toPromise()
      .then(() => {
        this.auth.clearAccessToken();
      });
  }
}
