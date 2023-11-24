import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { ListagemAlunos } from 'src/app/interfaces/aluno/aluno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private readonly API = environment.apiUrl + '/api/usuario';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<ListagemAlunos[]>(this.API)
    .pipe(
      first()
    )
  }
}
