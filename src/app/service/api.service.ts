import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as productsList from '../productsList.json';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // constructor(private http: HttpClient) {
  //   this.getJSONData().subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // public getJSONData(): Observable<any> {
  //   return this.http.get(productsList);
  // }
}
