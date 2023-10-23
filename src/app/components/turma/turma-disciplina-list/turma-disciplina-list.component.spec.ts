import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaDisciplinaListComponent } from './turma-disciplina-list.component';

describe('TurmaDisciplinaListComponent', () => {
  let component: TurmaDisciplinaListComponent;
  let fixture: ComponentFixture<TurmaDisciplinaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurmaDisciplinaListComponent]
    });
    fixture = TestBed.createComponent(TurmaDisciplinaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
