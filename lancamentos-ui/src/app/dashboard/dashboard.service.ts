import { Injectable } from '@angular/core';
import { LaunchHttp } from '../security/lauch-http.service';
import { environment } from '../../environments/environment';
import * as moment from 'moment';

@Injectable()
export class DashboardService {

  launchsUrl: string;

  constructor(private httpClient: LaunchHttp) {
    this.launchsUrl = `${environment.apiUrl}/launchs`;
  }

  launchsByCategory(): Promise<Array<any>> {
    return this.httpClient.get(`${this.launchsUrl}/statistics/category`)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  launchsByDay(): Promise<Array<any>> {
    return this.httpClient.get(`${this.launchsUrl}/statistics/day`)
      .toPromise()
      .then((response: any) => {
        this.convertStringsToDates(response);
        return response;
      });
  }

  private convertStringsToDates(data: Array<any>) {
    for (const d of data) {
      d.day = moment(d.day, 'YYYY-MM-DD').toDate();
    }
  }
}