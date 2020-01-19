import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  list(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/cities');
  }

  add(city: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/cities', city);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/cities/${id}`);
  }
}
