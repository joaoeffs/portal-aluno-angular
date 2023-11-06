import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { ActivatedRoute } from '@angular/router';
import { Disciplina } from 'src/app/interfaces/disciplina/disciplina';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.scss']
})
export class DisciplinaFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    nome: new FormControl('', { nonNullable: true }),
    codigo: new FormControl('', { nonNullable: true }),
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: DisciplinaService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const disciplina: Disciplina = this.route.snapshot.data['disciplina'];
    this.form.setValue({
      id: disciplina.id,
      nome: disciplina.nome,
      codigo: disciplina.codigo
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
    this.snackBar.open('Disciplina salva com sucesso!', '', { duration: 5000 });
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar disciplina!', '', { duration: 5000 });
  }

}
