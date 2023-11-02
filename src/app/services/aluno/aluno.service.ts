import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { ListagemAlunos } from 'src/app/interfaces/aluno/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private readonly API = 'api/aluno'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<ListagemAlunos[]>(this.API)
    .pipe(
      first()
    )
  }
}
