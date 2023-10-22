import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { Location } from '@angular/common';
import { Turma } from 'src/app/interfaces/turma/turma';

@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.scss']
})
export class TurmaFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    nome: new FormControl('', { nonNullable: true }),
    nomeAbreviado: new FormControl('', { nonNullable: true }),
    anoLetivo: new FormControl('', { nonNullable: true }),
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: TurmaService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const turma: Turma = this.route.snapshot.data['turma'];

    this.form.setValue({
      id: turma.id,
      nome: turma.nome,
      nomeAbreviado: turma.nomeAbreviado,
      anoLetivo: turma.anoLetivo
    })
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(data => this.onSucess(), error => this.onError())
  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this.snackBar.open('Disciplina salva com sucesso!', '', { duration: 5000 });
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar disciplina!', '', { duration: 5000 });
  }

}
