import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Disciplina, ListagemDisciplina } from 'src/app/interfaces/disciplina/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.scss']
})
export class DisciplinaComponent implements OnInit {

  @ViewChild('confirmModal') confirmModal!: ElementRef;

  @Output() add = new EventEmitter(false);

  disciplina$: Observable<ListagemDisciplina[]> | null = null;
  currentDisciplina!: Disciplina;

  constructor(
    private disciplinaService: DisciplinaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {
    this.refresh();
  }

  refresh() {
    this.disciplina$ = this.disciplinaService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar disciplina.')
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

  onEdit(disciplina: Disciplina) {
    this.router.navigate(['editar', disciplina.id], { relativeTo: this.route })
  }

  onRemove(disciplina: Disciplina) {
    // Armazene a disciplina atual, se necessário
    this.currentDisciplina = disciplina;
    this.openModal();
  }

  confirmRemoval() {
    if (this.currentDisciplina.id !== null) {
      this.disciplinaService.remove(this.currentDisciplina.id).subscribe(
        () => {
          this.refresh()
          this.snackBar.open('Disciplina removida com sucesso!', '', { duration: 5000 });
        },
        error => this.onError('Erro ao tentar remover curso'),
      )
    }

    this.closeModal();
  }
  onVincularAluno(disciplina: Disciplina) {
    this.router.navigate([disciplina.id, 'vincular-aluno'], { relativeTo: this.route })
  }

  onRegistrarNota(disciplina: Disciplina) {
    this.router.navigate([disciplina.id, 'registrar-nota'], { relativeTo: this.route })
  }

  openModal() {
    this.confirmModal.nativeElement.classList.add('show');
    this.confirmModal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.confirmModal.nativeElement.classList.remove('show');
    this.confirmModal.nativeElement.style.display = 'none';
  }

  ngOnInit(): void {

  }
}
