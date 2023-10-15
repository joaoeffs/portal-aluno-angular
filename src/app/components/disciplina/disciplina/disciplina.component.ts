import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
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
    this.router.navigate(['novo'], { relativeTo: this.route })
  }

  onEdit(disciplina: Disciplina) {
    this.router.navigate(['editar', disciplina.id], { relativeTo: this.route })
  }

  ngOnInit(): void {

  }
}
