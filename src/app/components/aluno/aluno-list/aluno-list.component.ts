import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListagemAluno } from 'src/app/interfaces/aluno/aluno';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss']
})
export class AlunoListComponent {

  @Input() aluno : ListagemAluno[] = [];
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['actions', 'nome', 'sobrenome', 'matricula']

}
