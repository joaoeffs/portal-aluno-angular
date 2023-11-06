import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarNotaAlunoListComponent } from './registrar-nota-aluno-list.component';

describe('RegistrarNotaAlunoListComponent', () => {
  let component: RegistrarNotaAlunoListComponent;
  let fixture: ComponentFixture<RegistrarNotaAlunoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarNotaAlunoListComponent]
    });
    fixture = TestBed.createComponent(RegistrarNotaAlunoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
