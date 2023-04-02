import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from '../models/user.model';
import LoginData from '../models/login-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://msvc-loginregister-eanc.up.railway.app/';

  constructor(private http: HttpClient) { }

  login(user: LoginData): Observable<any> {
    const url = `${this.apiUrl}/auth/login`;
    return this.http.post(url, user);
  }

  register(user: User): Observable<any> {
    const url = `${this.apiUrl}/users`;
    return this.http.post(url, user);
  }
}
