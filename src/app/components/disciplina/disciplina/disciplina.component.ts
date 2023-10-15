import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { Disciplina } from 'src/app/interfaces/disciplina/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.scss']
})
export class DisciplinaComponent implements OnInit {

  @Output() add = new EventEmitter(false);

  disciplina$: Observable<Disciplina[]>;

  constructor(
    private disciplinaService: DisciplinaService,
    public dialog: MatDialog
  ) {
    this.disciplina$ = this.disciplinaService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar disciplina.')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.add.emit(true);
  }

  ngOnInit(): void {

  }
}
