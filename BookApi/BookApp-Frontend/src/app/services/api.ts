import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {

  private apiUrl = 'http://localhost:5074';

  constructor(private http: HttpClient) { }

  //Login
  login(credentials: {username: string, password: string}): Observable<{token: string}> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/auth/login`, credentials);
  }

  //register
  register(user: {username: string, email: string, password: string}): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }

  //get books
  getBooks(): Observable<any[]> {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    const headers = { 'Authorization': `Bearer ${token}` }; // Authorization header
    return this.http.get<any[]>(`${this.apiUrl}/books`, { headers });
  }
}
