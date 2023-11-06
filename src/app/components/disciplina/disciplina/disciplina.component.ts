import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Disciplina, ListagemDisciplina } from 'src/app/interfaces/disciplina/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.scss']
})
export class DisciplinaComponent implements OnInit {

  @Output() add = new EventEmitter(false);

  disciplina$: Observable<ListagemDisciplina[]> | null = null;

  constructor(
    private disciplinaService: DisciplinaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {
    this.refresh();
  }

  refresh() {
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

  onRemove(disciplina: Disciplina) {
    if (disciplina.id !== null) {
      this.disciplinaService.remove(disciplina.id).subscribe(
        () => {
          this.refresh()
          this.snackBar.open('Disciplina removida com sucesso!', '', { duration: 5000 });
        },
        error => this.onError('Erro ao tentar remover curso'),
      )
    }
  }

  onVincularAluno(disciplina: Disciplina) {
    this.router.navigate([disciplina.id, 'vincular-aluno'], { relativeTo: this.route })
  }

  onRegistrarNota(disciplina: Disciplina) {
    this.router.navigate([disciplina.id, 'registrar-nota'], { relativeTo: this.route })
  }

  ngOnInit(): void {

  }
}
