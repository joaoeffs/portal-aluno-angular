import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListagemTurma, Turma } from 'src/app/interfaces/turma/turma';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.scss']
})
export class TurmaListComponent {

  @Input() turma : ListagemTurma[] = [];
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);
  @Output() vincularDisciplina = new EventEmitter(false);

  readonly displayedColumns = ['actions', 'nome', 'nomeAbreviado', 'anoLetivo'];

  onEdit(turma: Turma) {
    this.edit.emit(turma);
  }

  onRemove(turma: Turma) {
    this.remove.emit(turma);
  }

  onVincularDisciplina(turma: Turma) {
    this.vincularDisciplina.emit(turma);
  }

}
