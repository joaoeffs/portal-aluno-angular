import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Professor } from 'src/app/interfaces/professor/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private readonly API = 'api/professor'

  constructor(private http: HttpClient) { }

  getProfessor() {
    return this.http.get<Professor[]>(this.API)
    .pipe(
      first()
    )
  }
}
