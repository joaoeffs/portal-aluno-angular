import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ListagemNotas } from 'src/app/interfaces/notas/notas';
import { NotasService } from 'src/app/services/notas/notas.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent {

  notas$: Observable<ListagemNotas[]> | null = null;

  constructor(
    private notasService: NotasService
  ) {
    this.refresh();
  }

  refresh() {
    this.notas$ = this.notasService.list()
    .pipe(
      catchError(error => {
        return of([])
      })
    )
  }


}
