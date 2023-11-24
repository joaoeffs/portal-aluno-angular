import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { ListagemNotas, Notas } from 'src/app/interfaces/notas/notas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private readonly API = environment.apiUrl + '/api/notas'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<ListagemNotas[]>(`${this.API}/aluno`)
    .pipe(
      first()
    )
  }

  listById(id: string) {
    return this.httpClient.get<ListagemNotas[]>(`${this.API}/${id}/listar-notas`);
  }

    loadById(id: string) {
    return this.httpClient.get<Notas>(`${this.API}/${id}`);
  }

  save(notas: Partial<Notas>) {
    if (notas.id) {
      return this.update(notas);
    }

    return this.create(notas);
  }

  private create(notas: Partial<Notas>) {
    return this.httpClient.post<Notas>(this.API, notas);
  }

  private update(notas: Partial<Notas>) {
    return this.httpClient.put<Notas>(`${this.API}/${notas.id}`, notas)
  }
}
