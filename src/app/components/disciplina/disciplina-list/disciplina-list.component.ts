import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Disciplina } from 'src/app/interfaces/disciplina/disciplina';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.scss']
})
export class DisciplinaListComponent {

  @Input() disciplina : Disciplina[] = [];
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['actions', 'nome', 'codigo'];

  onEdit(disciplina: Disciplina) {
    this.edit.emit(disciplina);
  }

  onRemove(disciplina: Disciplina) {
    this.remove.emit(disciplina)
  }

}
