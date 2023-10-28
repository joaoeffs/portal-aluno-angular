import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { ListagemAluno } from 'src/app/interfaces/aluno/aluno';
import { AlunoService } from 'src/app/services/aluno/aluno.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  @Output() add = new EventEmitter(false);

  aluno$: Observable<ListagemAluno[]> | null = null;

  constructor(
    private service: AlunoService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    this.refresh();
  }

  refresh() {
    this.aluno$ = this.service.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar alunos.')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['novo'], { relativeTo: this.route })
  }

  ngOnInit(): void {

  }

}
