import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { map, Observable, tap, throwError } from 'rxjs';
import { LoginRequestPayload } from '../pages/login/loginrequest.payload';
import { LoginResponse } from '../pages/login/loginresponsepayload';
import { SignupRequestPayload } from '../pages/signup/signup-request.payload';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();

  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUserName()
  }
 
  constructor(private httpClient: HttpClient,
    private localStorage: LocalStorageService) {
  }


  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post('https://typical-cat-production.up.railway.app/api/auth/signup', signupRequestPayload, { responseType: 'text' });
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
    return this.httpClient.post<LoginResponse>('https://typical-cat-production.up.railway.app/api/auth/login',
      loginRequestPayload).pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);

        this.loggedIn.emit(true);
        this.username.emit(data.username);
        return true;
      }));
  }


  getJwtToken(){
    return this.localStorage.retrieve('authenticationToken');
  }

  refreshToken() {
    return this.httpClient.post<LoginResponse>('https://typical-cat-production.up.railway.app/api/auth/refresh/token',
      this.refreshTokenPayload)
      .pipe(tap(response => {
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('expiresAt');

        this.localStorage.store('authenticationToken',
          response.authenticationToken);
        this.localStorage.store('expiresAt', response.expiresAt);
      }));
  }

  getUserName() {
    return this.localStorage.retrieve('username');
  }
  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }


  logout() {
    this.httpClient.post('https://typical-cat-production.up.railway.app/api/auth/logout', this.refreshTokenPayload,
      { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
      }, error => {
        throwError(error);
      })
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('username');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('expiresAt');
  }
}
