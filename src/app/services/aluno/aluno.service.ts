import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { ListagemAluno } from 'src/app/interfaces/aluno/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private readonly API = 'api/aluno'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<ListagemAluno[]>(this.API)
    .pipe(
      first()
    )
  }
}
