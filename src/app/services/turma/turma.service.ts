import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { ListagemTurma, Turma } from 'src/app/interfaces/turma/turma';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private readonly API = 'api/turma'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<ListagemTurma[]>(this.API)
    .pipe(
      first()
    )
  }

  loadById(id: string) {
    return this.httpClient.get<Turma>(`${this.API}/${id}`)
  }

  save(turma: Partial<Turma>) {

    if (turma.id) {
      return this.update(turma)
    }

    return this.create(turma);
  }

  private create(turma: Partial<Turma>) {
    return this.httpClient.post<Turma>(this.API, turma);
  }

  private update(turma: Partial<Turma>) {
    return this.httpClient.put<Turma>(`${this.API}/${turma.id}`, turma);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
