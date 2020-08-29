import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesUrl = 'http://localhost:8080/categories';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.get(`${this.categoriesUrl}?pagination`, {headers});
  }
}
