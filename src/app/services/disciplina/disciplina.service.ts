import { Injectable } from '@angular/core';
import { Disciplina, ListagemDisciplina } from 'src/app/interfaces/disciplina/disciplina';
import { HttpClient } from '@angular/common/http'
import { delay, first } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private readonly API = environment.apiUrl + '/api/disciplina'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<ListagemDisciplina[]>(this.API)
    .pipe(
      first()
    )
  }

  loadById(id: string) {
    return this.httpClient.get<Disciplina>(`${this.API}/${id}`);
  }

  save(disciplina: Partial<Disciplina>) {

    if (disciplina.id) {
      return this.update(disciplina);
    }
    return this.create(disciplina);
  }

  private create(disciplina: Partial<Disciplina>) {
    return this.httpClient.post<Disciplina>(this.API, disciplina);
  }

  private update(disciplina: Partial<Disciplina>) {
    return this.httpClient.put<Disciplina>(`${this.API}/${disciplina.id}`, disciplina);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
