import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { Observable, of } from "rxjs";
import { Notas } from "src/app/interfaces/notas/notas";
import { NotasService } from "src/app/services/notas/notas.service";


export const notasResolver: ResolveFn<Observable<Notas>> = (route, state) => {
  const service: NotasService = inject(NotasService);

  if (route.params?.['id']) {
    return service.loadById(route.params['id']);
  }

  return of({ id: '', n1: '', n2: '', n3: '', alunoDisciplina: ''});
}
