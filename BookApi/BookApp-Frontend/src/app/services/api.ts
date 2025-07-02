import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroments';
@Injectable({
  providedIn: 'root'
})
export class Api {

  private apiUrl = environment.apiUrl; // Use the environment variable for the API URL';

  constructor(private http: HttpClient) { }

  //Login
  login(credentials: { username: string, password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/auth/login`, credentials);
  }

  //register
  register(user: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }

  //get books
  getBooks(): Observable<any[]> {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    const headers = { 'Authorization': `Bearer ${token}` }; // Authorization header
    return this.http.get<any[]>(`${this.apiUrl}/books`, { headers });
  }

  //add book
  addBook(book: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.http.post(`${this.apiUrl}/books`, book, { headers });
  }

  //update book
  updateBook(id: number, book: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put(`${this.apiUrl}/books/${id}`, book, { headers });
  }

  //delete book
  deleteBook(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete(`${this.apiUrl}/books/${id}`, { headers });
  }

  //get book by id
  getBookById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<any>(`${this.apiUrl}/books/${id}`, { headers });
  }

}
