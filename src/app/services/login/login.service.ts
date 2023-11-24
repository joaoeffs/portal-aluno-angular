import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/interfaces/login/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = environment.apiUrl + '/api/auth'

  constructor(private httpClient: HttpClient) { }

  login(login: LoginModel) {
    return this.httpClient.post<any>(this.API, login);
  }
}
