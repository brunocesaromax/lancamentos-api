import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as moment from 'moment';

export class LaunchFilter {
  description: string;
  dueDayStart: Date;
  dueDayEnd: Date;
  page = 0;
  pageSize = 2;
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

    params = params.set('page', filter.page.toString());
    params = params.set('size', filter.pageSize.toString());

    if (filter.description) {
      params = params.append('description', filter.description);
    }

    if (filter.dueDayStart) {
      params = params.append('dueDayStart',
        moment(filter.dueDayStart).format('YYYY-MM-DD'));
    }

    if (filter.dueDayEnd) {
      params = params.append('dueDayEnd',
        moment(filter.dueDayEnd).format('YYYY-MM-DD'));
    }

    return this.httpClient.get(`${this.launchsUrl}?summary`, {headers, params});
  }
}
