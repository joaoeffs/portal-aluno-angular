import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { AlunoDisciplina, AlunoDisciplinaForm } from 'src/app/interfaces/aluno-disciplina/aluno-disciplina';
import { ListagemAlunos } from 'src/app/interfaces/aluno/aluno';
import { Disciplina } from 'src/app/interfaces/disciplina/disciplina';
import { ListagemNotas, Notas } from 'src/app/interfaces/notas/notas';
import { AlunoDisciplinaService } from 'src/app/services/aluno-disciplina/aluno-disciplina.service';
import { NotasService } from 'src/app/services/notas/notas.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-registrar-nota',
  templateUrl: './registrar-nota.component.html',
  styleUrls: ['./registrar-nota.component.scss']
})
export class RegistrarNotaComponent {

  disciplinaId!: string;
  notas$: Observable<ListagemNotas[]> | null = null;

  constructor(
    private service: NotasService,
    private alunoDisciplina: AlunoDisciplinaService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    this.route.params.subscribe(params => {
      this.disciplinaId = params['id'];
    });

    this.refresh(this.disciplinaId);
  }

  refresh(disciplinaId: string) {
    this.notas$ = this.alunoDisciplina.listByDisciplinaId(disciplinaId)
    .pipe(
      catchError(error => {
        this.onErrorCarregamento('Erro ao carregar lista de alunos vinculadas.')
        return of([])
      })
    );
  }

  onErrorCarregamento(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onRegistrar(alunoDisciplina: AlunoDisciplinaForm) {
    this.router.navigate([alunoDisciplina.id, 'registrar-nota-1'], { relativeTo: this.route })
  }

  onRegistrarNota2(notas: ListagemNotas) {
    this.router.navigate([notas.id, 'registrar-nota-2', notas.notaId], { relativeTo: this.route })
  }

  onRegistrarNota3(notas: ListagemNotas) {
    this.router.navigate([notas.id, 'registrar-nota-3', notas.notaId], { relativeTo: this.route })
  }

}
