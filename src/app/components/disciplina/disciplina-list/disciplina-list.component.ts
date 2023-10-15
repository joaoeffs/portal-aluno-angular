import { Component, Input } from '@angular/core';
import { Disciplina } from 'src/app/interfaces/disciplina/disciplina';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.scss']
})
export class DisciplinaListComponent {

  @Input() disciplina : Disciplina[] = [];

  readonly displayedColumns = ['nome', 'codigo'];

}
