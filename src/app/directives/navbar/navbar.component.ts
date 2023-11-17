import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  )
  {}

  sair() {
    this.authenticationService.limparToken()
    this.router.navigate(["/login"])
  }

}
