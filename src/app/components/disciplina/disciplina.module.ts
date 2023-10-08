import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DisciplinaComponent
  ],
  imports: [
    CommonModule,
    DisciplinaRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    SharedModule
  ]
})
export class DisciplinaModule { }
