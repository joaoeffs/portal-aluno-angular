import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Disciplina, ListagemDisciplina } from 'src/app/interfaces/disciplina/disciplina';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.scss']
})
export class DisciplinaListComponent {

  @Input() disciplinas : ListagemDisciplina[] = [];
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);
  @Output() vincularAluno = new EventEmitter(false);
  @Output() registrarNota = new EventEmitter(false);

  readonly displayedColumns = ['actions', 'nome', 'codigo'];

  onEdit(disciplina: ListagemDisciplina) {
    this.edit.emit(disciplina);
  }

  onRemove(disciplina: ListagemDisciplina) {
    this.remove.emit(disciplina)
  }

  onVincularAluno(disciplina: ListagemDisciplina) {
    this.vincularAluno.emit(disciplina);
  }

  onRegistrarNota(disciplina: ListagemDisciplina) {
    this.registrarNota.emit(disciplina);
  }

}
