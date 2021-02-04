import { Injectable } from '@angular/core';
import { LaunchHttp } from '../security/lauch-http.service';
import { environment } from '../../environments/environment';
import { HttpParams } from '@angular/common/http';

import * as moment from 'moment';

@Injectable()
export class ReportsService {

  launchsUrl: string;

  constructor(private httpClient: LaunchHttp) {
    this.launchsUrl = `${environment.apiUrl}/launchs`;
  }

  reportLaunchsByPerson(start: Date, end: Date) {
    let params = new HttpParams();

    params = params.append('start', moment(start).format('YYYY-MM-DD'));
    params = params.append('end', moment(end).format('YYYY-MM-DD'));

    return this.httpClient.get(`${this.launchsUrl}/reports/person`,
      {params, responseType: 'blob'})
      .toPromise()
      .then((response: any) => response);
  }
}
