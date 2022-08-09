import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Token } from '../interfaces/token';
import { Observable, of, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authLogin = 'api/login'
  logged: boolean = false;
  loginChange$ = new ReplaySubject<boolean>(1);

  constructor(private http: HttpClient, private router: Router) { }

  login(user: User) {
    localStorage.clear();
    this.http.post<any>(`${this.authLogin}`, { username: user.email, password: user.password }).subscribe({
      next: (resp) => {
        localStorage.setItem('token', resp['token'])
      },
      error: (error) => {
        alert('Either your password or your email arent correct.');
        location.reload();
      },
      complete: () => this.router.navigate(['']),
    });

    if (localStorage.getItem('token') != null) {
      this.logged = true;
      this.loginChange$.next(this.logged);
    }
  }

  logout() {
    localStorage.clear();
    this.logged = false;
    this.loginChange$.next(this.logged);
  }

  isLogged(): Observable<boolean> {
    if (this.logged === true && localStorage.getItem('token') != null || this.logged === false && localStorage.getItem('token')) {
      return of(true);
    } else {
        localStorage.clear();
        return of(false);
    }
  }
}
