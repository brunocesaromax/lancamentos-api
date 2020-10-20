import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LaunchHttp} from '../security/lauch-http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesUrl = 'http://localhost:8080/categories';

  constructor(private httpClient: LaunchHttp) {
  }

  findAll(): Observable<any> {
    return this.httpClient.get(`${this.categoriesUrl}?pagination`);
  }
}
