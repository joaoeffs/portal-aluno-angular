import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';
import { disciplinaResolver } from 'src/app/guards/disciplina/disciplina.resolver';

const routes: Routes = [
  { path: '', component: DisciplinaComponent },
  { path: 'novo', component: DisciplinaFormComponent, resolve: { disciplina: disciplinaResolver } },
  { path: 'editar/:id', component: DisciplinaFormComponent, resolve: { disciplina: disciplinaResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
