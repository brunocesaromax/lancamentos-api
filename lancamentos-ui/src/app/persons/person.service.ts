import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Launch, Person} from '../core/model';

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

  constructor(private httpClient: HttpClient) {
  }

  search(filter: PersonFilter): Observable<any> {
    let headers = new HttpHeaders();
    let params = new HttpParams();

    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    params = params.set('page', filter.page.toString());
    params = params.set('size', filter.pageSize.toString());

    if (filter.name) {
      params = params.append('name', filter.name);
    }

    return this.httpClient.get(`${this.personsUrl}?pagination`, {headers, params});
  }

  findAll(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.get(`${this.personsUrl}`, {headers});
  }

  delete(id: number): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.delete(`${this.personsUrl}/${id}`, {headers});
  }

  changeStatus(id: number, currentStatus: boolean): Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers = headers.append('Content-Type', 'application/json');

    return this.httpClient.put(`${this.personsUrl}/${id}/active`, !currentStatus, {headers});
  }

  save(person: Person): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.post(this.personsUrl, person, {headers});
  }

  update(person: Person): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.put(`${this.personsUrl}/${person.id}`, person, {headers});
  }

  findById(id: number): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.get(`${this.personsUrl}/${id}`, {headers});
  }
}
