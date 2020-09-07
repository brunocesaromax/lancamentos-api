import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as moment from 'moment';
import {Launch} from '../core/model';

export class LaunchFilter {
  description: string;
  dueDayStart: Date;
  dueDayEnd: Date;
  page = 0;
  pageSize = 4;
}

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  private launchsUrl = 'http://localhost:8080/launchs';

  constructor(private httpClient: HttpClient) {
  }

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

  delete(id: number): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.delete(`${this.launchsUrl}/${id}`, {headers});
  }

  save(launch: Launch): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.post(this.launchsUrl, launch, {headers});
  }

  update(launch: Launch): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.put(`${this.launchsUrl}/${launch.id}`, launch, {headers});
  }

  findById(id: number): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.get(`${this.launchsUrl}/${id}`, {headers});
  }

  private stringsToDates(launchs: Launch[]): void {
    launchs.forEach(launch => {
      if (launch.payday !== null) {
        launch.payday = moment(launch.payday, 'DD/MM/YYYY').toDate();
      }

      if (launch.dueDate !== null) {
        launch.dueDate = moment(launch.dueDate, 'DD/MM/YYYY').toDate();
      }
    });
  }
}
