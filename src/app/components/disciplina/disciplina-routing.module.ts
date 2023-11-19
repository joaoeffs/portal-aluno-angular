import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';
import { disciplinaResolver } from 'src/app/guards/disciplina/disciplina.resolver';
import { AlunoDisciplinaComponent } from './aluno-disciplina/aluno-disciplina.component';
import { RegistrarNotaComponent } from './registrar-nota/registrar-nota.component';
import { RegistrarNotaFormComponent } from './registrar-nota-form/registrar-nota-form.component';
import { RegistrarNotaNota2FormComponent } from './registrar-nota-nota2-form/registrar-nota-nota2-form.component';
import { RegistrarNotaNota3FormComponent } from './registrar-nota-nota3-form/registrar-nota-nota3-form.component';
import { notasResolver } from 'src/app/guards/notas/notas.resolver';

const routes: Routes = [
  { path: '', component: DisciplinaComponent },
  { path: 'novo', component: DisciplinaFormComponent, resolve: { disciplina: disciplinaResolver } },
  { path: 'editar/:id', component: DisciplinaFormComponent, resolve: { disciplina: disciplinaResolver } },
  { path: ':id/vincular-aluno', component: AlunoDisciplinaComponent },
  { path: ':id/registrar-nota', component: RegistrarNotaComponent },
  { path: ':id/registrar-nota/:id/registrar-nota-1', component: RegistrarNotaFormComponent, resolve: { notas: notasResolver } },
  { path: ':id/registrar-nota/:id/registrar-nota-2/:notaId', component: RegistrarNotaNota2FormComponent, resolve: { notas: notasResolver } },
  { path: ':id/registrar-nota/:id/registrar-nota-3/:nota_id', component: RegistrarNotaNota3FormComponent, resolve: { notas: notasResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
