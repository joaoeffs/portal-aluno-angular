import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AlunoDisciplina } from 'src/app/interfaces/aluno-disciplina/aluno-disciplina';
import { ListagemAlunos } from 'src/app/interfaces/aluno/aluno';
import { ListagemNotas } from 'src/app/interfaces/notas/notas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoDisciplinaService {

  private readonly API = environment.apiUrl + '/api/alunodisciplina'

  constructor(private httpClient: HttpClient) { }

  listById(id: string) {
    return this.httpClient.get<ListagemAlunos[]>(`${this.API}/${id}`);
  }

  listByDisciplinaId(id: string) {
    return this.httpClient.get<ListagemNotas[]>(`${this.API}/${id}/listar-notas`);
  }

  getById(id: string) {
    return this.httpClient.get<any>(`${this.API}/${id}/aluno`)
  }

  save(alunodisciplina: Partial<AlunoDisciplina>) {
    return this.httpClient.post<AlunoDisciplina>(this.API, alunodisciplina);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
