import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Disciplina } from 'src/app/interfaces/disciplina/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';

export const disciplinaResolver: ResolveFn<Observable<Disciplina>> = (route, state, service: DisciplinaService =
  inject(DisciplinaService)) => {

  if (route.params?.['id']) {
    return service.loadById(route.params['id']);
  }

  return of ({ id:'', nome:'', codigo:'' });
};
