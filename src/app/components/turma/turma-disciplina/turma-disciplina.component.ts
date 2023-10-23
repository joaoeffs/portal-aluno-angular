import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { DisciplinaVincular } from 'src/app/interfaces/disciplina/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { TurmaDisciplinaService } from 'src/app/services/turma-disciplina/turma-disciplina.service';
import { ListagemTurmaDisciplina, TurmaDisciplina } from 'src/app/interfaces/turma-disciplina/turma-disciplina';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-turma-disciplina',
  templateUrl: './turma-disciplina.component.html',
  styleUrls: ['./turma-disciplina.component.scss']
})
export class TurmaDisciplinaComponent implements OnInit {

  turmaId!: string;

  form = this.formBuilder.group({
    id: [''],
    turma: this.turmaId,
    disciplina: ['']
  })

  disciplinas: Observable<DisciplinaVincular[]> | undefined;
  turmaDisciplina$: Observable<ListagemTurmaDisciplina[]> | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private service: TurmaDisciplinaService,
    private route: ActivatedRoute,
    private disciplinaService: DisciplinaService,
    private snackBar: MatSnackBar,
    private location: Location,
    public dialog: MatDialog,
  ) {
    this.route.params.subscribe(pararms => {
      this.turmaId = pararms['id'];
    });

    this.form.get('turma')?.setValue(this.turmaId);

    this.refresh(this.turmaId);
  }

  ngOnInit(): void {
    this.disciplinas = this.disciplinaService.list();
  }

  onErrorCarregamento(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  refresh(id: string) {
    this.turmaDisciplina$ = this.service.listById(id)
    .pipe(
      catchError(error => {
        this.onErrorCarregamento('Erro ao carregar lista de disciplinas vinculadas.')
        return of([])
      })
    );
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(data => this.onSucess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this.snackBar.open('Disciplina vinculada com sucesso!', '', { duration: 5000 });
    window.location.reload()
  }

  private onError() {
    this.snackBar.open('Erro ao vincular disciplina!', '', { duration: 5000 });
  }

  onRemove(turmaDisciplina: TurmaDisciplina) {
    if (turmaDisciplina.id !== null) {
      this.service.remove(turmaDisciplina.id).subscribe(
        () => {
          this.snackBar.open('Disciplina desvinculada com sucesso!', '', { duration: 5000 });
          window.location.reload()
        }
      )
    }
  }

}
