import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompendiumApiService {

  private apiUrl = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/';

  constructor(private http: HttpClient) { }

  getCategoryData(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${category}`);
  }
}
