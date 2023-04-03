import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, throwError } from 'rxjs';
import User from '../models/user.model';
import LoginData from '../models/login-data.model';
import LoginResponse from '../models/login-response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://msvc-loginregister-eanc.up.railway.app';
  private currentUserSubject!: BehaviorSubject<LoginResponse | null>;
  public currentUser: Observable<LoginResponse | null>;

  constructor(private http: HttpClient, private router:Router) { 
    this.currentUserSubject = new BehaviorSubject<LoginResponse | null>(JSON.parse(localStorage.getItem('accessToken') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  ngOnInit(){
    
    
  }

  public get currentUserValue(): LoginResponse | null{
    return this.currentUserSubject.value;
  }

  token!:string;

  login(user: LoginData): Observable<any> {
    const url = `${this.apiUrl}/auth/login`;
    
    console.log(this.currentUser)
    return this.validation(user);
  }

  validation(user: LoginData): Observable<LoginResponse | null> {
    const url = `${this.apiUrl}/auth/login`;
    return this.http.post<LoginResponse>(url, user).pipe(
      tap({
        next: res=>{
          const { accessToken } = res
          this.currentUserSubject.next({ accessToken }) 
          this.router.navigate(['/']);
          return res
        },
        error: (err)=>{
          console.log(err);
          return throwError(()=> new Error(err));
        }
      })
    );
  }

  logout() {
    // Remover el usuario almacenado en localStorage
    localStorage.removeItem('accessToken');
    // Actualizar el BehaviorSubject con un objeto vacío
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
    window.location.href = '/'
  }

  register(user: User): Observable<any> {
    const url = `${this.apiUrl}/users`;
    return this.http.post(url, user);
  }
}
