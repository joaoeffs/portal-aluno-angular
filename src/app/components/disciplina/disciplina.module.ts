import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DisciplinaListComponent } from './disciplina-list/disciplina-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { AlunoDisciplinaComponent } from './aluno-disciplina/aluno-disciplina.component';
import { AlunoDisciplinaListComponent } from './aluno-disciplina-list/aluno-disciplina-list.component';
import { RegistrarNotaComponent } from './registrar-nota/registrar-nota.component';
import { RegistrarNotaFormComponent } from './registrar-nota-form/registrar-nota-form.component';
import { RegistrarNotaAlunoListComponent } from './registrar-nota-aluno-list/registrar-nota-aluno-list.component';
import { RegistrarNotaNota2FormComponent } from './registrar-nota-nota2-form/registrar-nota-nota2-form.component';
import { RegistrarNotaNota3FormComponent } from './registrar-nota-nota3-form/registrar-nota-nota3-form.component';

import { SideBarModule } from 'src/app/directives/sidebar/sidebar.module';


@NgModule({
  declarations: [
    DisciplinaComponent,
    DisciplinaFormComponent,
    DisciplinaListComponent,
    AlunoDisciplinaComponent,
    AlunoDisciplinaListComponent,
    RegistrarNotaComponent,
    RegistrarNotaFormComponent,
    RegistrarNotaAlunoListComponent,
    RegistrarNotaNota2FormComponent,
    RegistrarNotaNota3FormComponent
  ],
  imports: [
    CommonModule,
    DisciplinaRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    SideBarModule
  ]
})
export class DisciplinaModule { }
