import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  private launchsUrl = 'http://localhost:8080/launchs';

  constructor(private httpClient: HttpClient) { }

  search(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
    return this.httpClient.get(`${this.launchsUrl}?summary`, {headers});
  }
}
