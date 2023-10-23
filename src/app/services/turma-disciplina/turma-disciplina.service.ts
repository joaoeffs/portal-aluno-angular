import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListagemTurmaDisciplina, TurmaDisciplina } from 'src/app/interfaces/turma-disciplina/turma-disciplina';

@Injectable({
  providedIn: 'root'
})
export class TurmaDisciplinaService {

  private readonly API = 'api/turmadisciplina'

  constructor(private httpClient: HttpClient) { }

  listById(id: string) {
    return this.httpClient.get<ListagemTurmaDisciplina[]>(`${this.API}/${id}`);
  }

  save(turmaDisciplina: Partial<TurmaDisciplina>) {
    return this.create(turmaDisciplina);
  }

  private create(turmaDisciplina: Partial<TurmaDisciplina>) {
    return this.httpClient.post<TurmaDisciplina>(this.API, turmaDisciplina);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
