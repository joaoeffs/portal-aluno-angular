import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/interfaces/login/login';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private authenticationService: AuthenticationService
  )
  {}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]]
      });
  }

  submitLogin() {
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    this.loginService.login(dadosLogin).subscribe(
      result => {
        this.authenticationService.defineToken(result.token, result.role);

        setTimeout(() => {
          this.router.navigate(['/home']);
        });
      },
      erro => {

      }
    );

  }

}
