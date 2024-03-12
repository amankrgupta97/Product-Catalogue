import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  products: any;
  constructor(private http: HttpClient) {}
  search(keyword: string) {
    return this.http.get<any>('http://localhost:8081/api/v1/search/' + keyword);
  }
  getDaystoReach(pin: number) {
    return this.http.get<any>('http://localhost:8081/api/v1/check/' + pin);
  }
}
