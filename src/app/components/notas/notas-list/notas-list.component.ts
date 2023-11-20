import { Component, Input } from '@angular/core';
import { ListagemNotas } from 'src/app/interfaces/notas/notas';

@Component({
  selector: 'app-notas-list',
  templateUrl: './notas-list.component.html',
  styleUrls: ['./notas-list.component.scss']
})
export class NotasListComponent {

  @Input() notas : ListagemNotas[] = [];

  readonly displayedColumns = ['disciplina', 'n1', 'n2', 'n3', 'media', 'situacao'];

}
