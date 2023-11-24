import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, of } from 'rxjs';
import { ListagemAlunos } from 'src/app/interfaces/aluno/aluno';
import { AlunoDisciplinaService } from 'src/app/services/aluno-disciplina/aluno-disciplina.service';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from 'src/app/services/aluno/aluno.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { AlunoDisciplina } from 'src/app/interfaces/aluno-disciplina/aluno-disciplina';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';

@Component({
  selector: 'app-aluno-disciplina',
  templateUrl: './aluno-disciplina.component.html',
  styleUrls: ['./aluno-disciplina.component.scss']
})
export class AlunoDisciplinaComponent implements OnInit {

  @ViewChild('confirmModal') confirmModal!: ElementRef;

  disciplinaId!: string;
  currentAlunoDisciplina!: AlunoDisciplina;

  form = this.formBuilder.group({
    id: [''],
    aluno: [''],
    disciplina: this.disciplinaId,
  })

  alunos: Observable<ListagemAlunos[]> | undefined;
  alunoDisciplina$: Observable<ListagemAlunos[]> | null = null;
  nomeDisciplina!: string;
  codigoDisciplina!: string;

  constructor(
    private formBuilder: FormBuilder,
    private service: AlunoDisciplinaService,
    private location: Location,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private alunoService: AlunoService,
    private disciplinaService: DisciplinaService
  ) {
    this.route.params.subscribe(params => {
      this.disciplinaId = params['id'];
    });

    this.form.get('disciplina')?.setValue(this.disciplinaId);

    this.refresh(this.disciplinaId);
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(data => this.onSucess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this.snackBar.open('Aluno vinculada com sucesso!', '', { duration: 5000 });
    window.location.reload()
  }

  private onError() {
    this.snackBar.open('Erro ao vincular aluno!', '', { duration: 5000 });
  }

  ngOnInit(): void {
    this.alunos = this.alunoService.list();
    this.disciplinaService.loadById(this.disciplinaId).subscribe(
      (disciplina) => {
        this.nomeDisciplina = disciplina.nome
        this.codigoDisciplina = disciplina.codigo
      }
    )
  }

  refresh(id: string) {
    this.alunoDisciplina$ = this.service.listById(id)
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

  onRemove(alunoDisciplina: AlunoDisciplina) {
    this.currentAlunoDisciplina = alunoDisciplina;
    this.openModal();
  }

  confirmRemoval() {
    if (this.currentAlunoDisciplina.id !== null) {
      this.service.remove(this.currentAlunoDisciplina.id).subscribe(
        () => {
          this.snackBar.open('Aluno desvinculado com sucesso!', '', { duration: 5000 });
          window.location.reload()
        }
      )
    }
  }

  openModal() {
    this.confirmModal.nativeElement.classList.add('show');
    this.confirmModal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.confirmModal.nativeElement.classList.remove('show');
    this.confirmModal.nativeElement.style.display = 'none';
  }

}
