import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Turma } from 'src/app/interfaces/turma/turma';
import { TurmaService } from 'src/app/services/turma/turma.service';

export const turmaResolver: ResolveFn<Observable<Turma>> = (route, state) => {
  const service: TurmaService = inject(TurmaService);

  if (route.params?.['id']) {
    return service.loadById(route.params['id']);
  }

  return of({ id: '', nome: '', nomeAbreviado: '', anoLetivo: ''});
};
