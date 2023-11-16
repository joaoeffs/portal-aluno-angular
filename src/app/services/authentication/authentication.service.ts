import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private Authentication: boolean = false;

  public defineToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  public obterToken() {
    return sessionStorage.getItem('token');
  }

  public limparToken() {
    sessionStorage.removeItem('token');
  }

  constructor() { }
}
