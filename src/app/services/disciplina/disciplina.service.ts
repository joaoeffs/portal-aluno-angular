import { Injectable } from '@angular/core';
import { Disciplina } from 'src/app/interfaces/disciplina/disciplina';
import { HttpClient } from '@angular/common/http'
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private readonly API = 'api/disciplina'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Disciplina[]>(this.API)
    .pipe(
      first()
    )
  }

  save(disciplina: Partial<Disciplina>) {
    return this.httpClient.post<Disciplina>(this.API, disciplina);
  }
}
