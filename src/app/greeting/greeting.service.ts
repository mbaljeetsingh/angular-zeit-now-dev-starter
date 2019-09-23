import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  constructor(private http: HttpClient) {}

  getMessage() {
    return this.http.get('/api/hello');
  }

  getTodos() {
    return this.http.get('/api/todos');
  }
}
