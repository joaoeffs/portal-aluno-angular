import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlunoDisciplina } from 'src/app/interfaces/aluno-disciplina/aluno-disciplina';
import { ListagemAlunos } from 'src/app/interfaces/aluno/aluno';
import { ListagemNotas, Notas } from 'src/app/interfaces/notas/notas';

@Component({
  selector: 'app-registrar-nota-aluno-list',
  templateUrl: './registrar-nota-aluno-list.component.html',
  styleUrls: ['./registrar-nota-aluno-list.component.scss']
})
export class RegistrarNotaAlunoListComponent {

  @Input() notas : ListagemNotas[] = [];
  @Output() registrar = new EventEmitter(false);
  @Output() registrarNota2 = new EventEmitter(false);
  @Output() registrarNota3 = new EventEmitter(false);

  readonly displayedColumns = ['actions', 'matricula', 'nome', 'sobrenome', 'n1', 'n2', 'n3'];

  onRegistrar(notas: ListagemNotas) {
    this.registrar.emit(notas);
  }

  onRegistrarNota2(notas: ListagemNotas) {
    this.registrarNota2.emit(notas);
  }

  onRegistrarNota3(notas: ListagemNotas) {
    this.registrarNota3.emit(notas);
  }

}
