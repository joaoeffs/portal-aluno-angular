import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurmaComponent } from './turma/turma.component';
import { TurmaFormComponent } from './turma-form/turma-form.component';
import { turmaResolver } from 'src/app/guards/turma/turma.resolver';

const routes: Routes = [
  { path: '', component: TurmaComponent },
  { path: 'novo', component: TurmaFormComponent, resolve: { turma: turmaResolver }},
  { path: 'editar/:id', component: TurmaFormComponent, resolve: { turma: turmaResolver }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurmaRoutingModule { }
