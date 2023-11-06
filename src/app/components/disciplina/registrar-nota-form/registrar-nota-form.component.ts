import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotasService } from 'src/app/services/notas/notas.service';
import { Notas } from 'src/app/interfaces/notas/notas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrar-nota-form',
  templateUrl: './registrar-nota-form.component.html',
  styleUrls: ['./registrar-nota-form.component.scss']
})
export class RegistrarNotaFormComponent implements OnInit {

  alunoDisciplinaId!: string;

  form = this.formBuilder.group({
    id: [''],
    n1: new FormControl('', { nonNullable: true }),
    n2: new FormControl('', { nonNullable: true }),
    n3: new FormControl('', { nonNullable: true }),
    alunoDisciplina: this.alunoDisciplinaId,
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: NotasService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.alunoDisciplinaId = params['id'];
    })

    this.form.get('alunoDisciplina')?.setValue(this.alunoDisciplinaId);
  }

  ngOnInit(): void {

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
