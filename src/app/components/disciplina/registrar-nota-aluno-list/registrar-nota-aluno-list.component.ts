import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlunoDisciplina } from 'src/app/interfaces/aluno-disciplina/aluno-disciplina';
import { ListagemAlunos } from 'src/app/interfaces/aluno/aluno';
import { ListagemNotas } from 'src/app/interfaces/notas/notas';

@Component({
  selector: 'app-registrar-nota-aluno-list',
  templateUrl: './registrar-nota-aluno-list.component.html',
  styleUrls: ['./registrar-nota-aluno-list.component.scss']
})
export class RegistrarNotaAlunoListComponent {

  @Input() notas : ListagemNotas[] = [];
  @Output() registrar = new EventEmitter(false);

  readonly displayedColumns = ['actions', 'matricula', 'nome', 'sobrenome', 'n1', 'n2', 'n3'];

  onRegistrar(alunoDisciplina: AlunoDisciplina) {
    this.registrar.emit(alunoDisciplina);
  }

}
