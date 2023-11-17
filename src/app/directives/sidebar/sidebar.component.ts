import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent {

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
