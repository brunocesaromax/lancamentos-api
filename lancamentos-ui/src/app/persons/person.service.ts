import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  findAll() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.get(`${this.personsUrl}`, {headers});
  }
}
