import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'disciplina',
    loadChildren: () => import('./components/disciplina/disciplina.module').then(m => m.DisciplinaModule)
  },
  {
    path: 'turma',
    loadChildren: () => import('./components/turma/turma.module').then(m => m.TurmaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
