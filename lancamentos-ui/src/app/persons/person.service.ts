import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from '../core/model';
import {LaunchHttp} from '../security/lauch-http.service';

export class PersonFilter {
  name = null;
  page = 0;
  pageSize = 2;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personsUrl = 'http://localhost:8080/persons';

  constructor(private httpClient: LaunchHttp) {
  }

  search(filter: PersonFilter): Observable<any> {
    let params = new HttpParams();

    params = params.set('page', filter.page.toString());
    params = params.set('size', filter.pageSize.toString());

    if (filter.name) {
      params = params.append('name', filter.name);
    }

    return this.httpClient.get(`${this.personsUrl}?pagination`, {params});
  }

  findAll(): Observable<any> {
    return this.httpClient.get(`${this.personsUrl}`);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.personsUrl}/${id}`);
  }

  changeStatus(id: number, currentStatus: boolean): Observable<any> {
    return this.httpClient.put(`${this.personsUrl}/${id}/active`, !currentStatus);
  }

  save(person: Person): Observable<any> {
    return this.httpClient.post(this.personsUrl, person);
  }

  update(person: Person): Observable<any> {
    return this.httpClient.put(`${this.personsUrl}/${person.id}`, person);
  }

  findById(id: number): Observable<any> {
    return this.httpClient.get(`${this.personsUrl}/${id}`);
  }
}
