import { Injectable } from '@angular/core';
import { Disciplina, ListagemDisciplina } from 'src/app/interfaces/disciplina/disciplina';
import { HttpClient } from '@angular/common/http'
import { delay, first } from 'rxjs';
import { AlunoDisciplina } from 'src/app/interfaces/aluno-disciplina/aluno-disciplina';
import { ListagemAlunos } from 'src/app/interfaces/aluno/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoDisciplinaService {

  private readonly API = 'api/alunodisciplina'

  constructor(private httpClient: HttpClient) { }

  listById(id: string) {
    return this.httpClient.get<ListagemAlunos[]>(`${this.API}/${id}`);
  }

  save(alunodisciplina: Partial<AlunoDisciplina>) {
    return this.httpClient.post<AlunoDisciplina>(this.API, alunodisciplina);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
