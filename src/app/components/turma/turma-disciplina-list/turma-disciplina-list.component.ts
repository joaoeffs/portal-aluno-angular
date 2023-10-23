import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListagemTurmaDisciplina, TurmaDisciplina } from 'src/app/interfaces/turma-disciplina/turma-disciplina';

@Component({
  selector: 'app-turma-disciplina-list',
  templateUrl: './turma-disciplina-list.component.html',
  styleUrls: ['./turma-disciplina-list.component.scss']
})
export class TurmaDisciplinaListComponent {

  @Input() turmaDisciplina : ListagemTurmaDisciplina[] = [];
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['actions', 'nome', 'professor'];

  onRemove(turmaDisciplina: TurmaDisciplina) {
    this.remove.emit(turmaDisciplina);
  }

}
