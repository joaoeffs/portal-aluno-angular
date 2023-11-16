import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/interfaces/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'api/auth'

  constructor(private httpClient: HttpClient) { }

  login(login: LoginModel) {
    return this.httpClient.post<any>(this.API, login);
  }
}
