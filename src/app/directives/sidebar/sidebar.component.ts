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

  navigate(path: string) {
    const role = sessionStorage.getItem('role');

    if (path === 'disciplina' && (role === 'ADMIN' || role === 'PROFESSOR')) {
      this.router.navigate(['/disciplina']);
    } else if (path === 'disciplina' && role === 'ALUNO') {
      this.router.navigate(['/notas'])
    }
  }

  sair() {
    this.authenticationService.limparToken()
    this.router.navigate(["/login"])
  }

}
