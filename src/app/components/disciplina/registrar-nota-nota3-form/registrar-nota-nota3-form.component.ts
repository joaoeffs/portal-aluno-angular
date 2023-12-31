import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl } from '@angular/forms';
import { NotasService } from 'src/app/services/notas/notas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Notas } from 'src/app/interfaces/notas/notas';
import { AlunoDisciplinaService } from 'src/app/services/aluno-disciplina/aluno-disciplina.service';

@Component({
  selector: 'app-registrar-nota-nota3-form',
  templateUrl: './registrar-nota-nota3-form.component.html',
  styleUrls: ['./registrar-nota-nota3-form.component.scss']
})
export class RegistrarNotaNota3FormComponent {

  alunoDisciplinaId!: string;

  form = this.formBuilder.group({
    id: [''],
    n1: new FormControl('', { nonNullable: true }),
    n2: new FormControl('', { nonNullable: true }),
    n3: new FormControl('', { nonNullable: true })
  });

  nomeAluno!: string;
  sobrenomeAluno!: string;
  matriculaAluno!: string;

  constructor(
    private formBuilder: FormBuilder,
    private service: NotasService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    private alunoDisciplinaService: AlunoDisciplinaService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.alunoDisciplinaId = params['idAlunoDisciplina'];
    })

    this.alunoDisciplinaService.getById(this.alunoDisciplinaId).subscribe(
      (alunoDisciplina) => {
        this.nomeAluno = alunoDisciplina.aluno.nome;
        this.sobrenomeAluno = alunoDisciplina.aluno.sobrenome;
        this.matriculaAluno = alunoDisciplina.aluno.matricula;
      }
    )

    const notas: Notas = this.route.snapshot.data['notas'];
    this.form.setValue({
      id: notas.id,
      n1: notas.n1,
      n2: notas.n2,
      n3: notas.n3
    })
   }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(data => this.onSucess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this.snackBar.open('Notas salva com sucesso!', '', { duration: 5000 });
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao registrar Notas!', '', { duration: 5000 });
  }

}
