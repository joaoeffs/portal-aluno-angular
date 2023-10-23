import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { ListagemTurma, Turma } from 'src/app/interfaces/turma/turma';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit {

  @Output() add = new EventEmitter(false);

  turma$: Observable<ListagemTurma[]> | null = null;

  constructor(
    private turmaService: TurmaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {
    this.refresh();
  }

  refresh() {
    this.turma$ = this.turmaService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar turma.')
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

  onEdit(turma: Turma) {
    this.router.navigate(['editar', turma.id], { relativeTo: this.route })
  }

  onRemove(turma: Turma) {
    if (turma.id !== null) {
      this.turmaService.remove(turma.id).subscribe(
        () => {
          this.refresh()
          this.snackBar.open('Turma removida com sucesso!', '', { duration: 5000 });
        },
        error => this.onError('Erro ao tentar remover turma'),
      )
    }
  }

  onVincularDisciplina(turma: Turma) {
    this.router.navigate([turma.id, 'vincular-disciplina'], { relativeTo: this.route })
  }

  ngOnInit(): void {

  }

}
