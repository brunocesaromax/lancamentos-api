import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface LaunchFilter {
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  private launchsUrl = 'http://localhost:8080/launchs';

  constructor(private httpClient: HttpClient) { }

  search(filter: LaunchFilter): Observable<any> {
    let headers = new HttpHeaders();
    let params = new HttpParams();

    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    if (filter.description) {
      params = params.append('description', filter.description);
    }

    return this.httpClient.get(`${this.launchsUrl}?summary`, {headers, params});
  }
}
