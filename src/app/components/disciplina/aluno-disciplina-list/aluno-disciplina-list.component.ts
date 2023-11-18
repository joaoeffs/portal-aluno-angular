import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlunoDisciplina } from 'src/app/interfaces/aluno-disciplina/aluno-disciplina';
import { ListagemAlunos } from 'src/app/interfaces/aluno/aluno';

@Component({
  selector: 'app-aluno-disciplina-list',
  templateUrl: './aluno-disciplina-list.component.html',
  styleUrls: ['./aluno-disciplina-list.component.scss']
})
export class AlunoDisciplinaListComponent {

  @Input() alunoDisciplina : ListagemAlunos[] = [];
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['actions', 'nome', 'sobrenome', 'matricula'];

  onRemove(alunoDisciplina: ListagemAlunos) {
    this.remove.emit(alunoDisciplina);
  }

}
