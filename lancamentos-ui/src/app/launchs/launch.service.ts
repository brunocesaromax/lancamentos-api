import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Launch } from '../core/model';
import { LaunchHttp } from '../security/lauch-http.service';
import { environment } from '../../environments/environment';

export class LaunchFilter {
  description: string;
  dueDayStart: Date;
  dueDayEnd: Date;
  page = 0;
  pageSize = 4;
}

@Injectable()
export class LaunchService {

  launchsUrl: string;

  constructor(private httpClient: LaunchHttp) {
    this.launchsUrl = `${environment.apiUrl}/launchs`;
  }

  search(filter: LaunchFilter): Observable<any> {
    let params = new HttpParams({
      fromObject: {
        page: filter.page.toString(),
        size: filter.pageSize.toString()
      }
    });

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

    return this.httpClient.get(`${this.launchsUrl}?summary`, {params});
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.launchsUrl}/${id}`);
  }

  save(launch: Launch): Observable<any> {
    return this.httpClient.post(this.launchsUrl, launch);
  }

  update(launch: Launch): Observable<any> {
    return this.httpClient.put(`${this.launchsUrl}/${launch.id}`, launch);
  }

  findById(id: number): Observable<any> {
    return this.httpClient.get(`${this.launchsUrl}/${id}`);
  }

  stringsToDates(launchs: any[]): void {
    launchs.forEach(launch => {
      if (launch.payday) {
        launch.payday = moment(launch.payday).toDate();
      }

      if (launch.dueDate) {
        launch.dueDate = moment(launch.dueDate).toDate();
      }
    });
  }

  urlUploadAttachment(): string {
    return `${this.launchsUrl}/attachment`;
  }
}
