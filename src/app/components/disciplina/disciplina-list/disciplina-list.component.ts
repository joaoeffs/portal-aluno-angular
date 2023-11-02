import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Disciplina, ListagemDisciplina } from 'src/app/interfaces/disciplina/disciplina';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.scss']
})
export class DisciplinaListComponent {

  @Input() disciplina : ListagemDisciplina[] = [];
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);
  @Output() vincularAluno = new EventEmitter(false);

  readonly displayedColumns = ['actions', 'nome', 'codigo'];

  onEdit(disciplina: Disciplina) {
    this.edit.emit(disciplina);
  }

  onRemove(disciplina: Disciplina) {
    this.remove.emit(disciplina)
  }

  onVincularAluno(disciplina: Disciplina) {
    this.vincularAluno.emit(disciplina);
  }

}
