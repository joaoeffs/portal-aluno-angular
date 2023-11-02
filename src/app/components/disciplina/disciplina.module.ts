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


@NgModule({
  declarations: [
    DisciplinaComponent,
    DisciplinaFormComponent,
    DisciplinaListComponent,
    AlunoDisciplinaComponent,
    AlunoDisciplinaListComponent,
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
    MatMenuModule
  ]
})
export class DisciplinaModule { }
