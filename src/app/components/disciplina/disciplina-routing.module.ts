import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';
import { disciplinaResolver } from 'src/app/guards/disciplina/disciplina.resolver';
import { AlunoDisciplinaComponent } from './aluno-disciplina/aluno-disciplina.component';
import { RegistrarNotaComponent } from './registrar-nota/registrar-nota.component';
import { RegistrarNotaFormComponent } from './registrar-nota-form/registrar-nota-form.component';

const routes: Routes = [
  { path: '', component: DisciplinaComponent },
  { path: 'novo', component: DisciplinaFormComponent, resolve: { disciplina: disciplinaResolver } },
  { path: 'editar/:id', component: DisciplinaFormComponent, resolve: { disciplina: disciplinaResolver } },
  { path: ':id/vincular-aluno', component: AlunoDisciplinaComponent },
  { path: ':id/registrar-nota', component: RegistrarNotaComponent },
  { path: ':id/registrar-nota/:id/registrar', component: RegistrarNotaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
