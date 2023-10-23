import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaDisciplinaComponent } from './turma-disciplina.component';

describe('TurmaDisciplinaComponent', () => {
  let component: TurmaDisciplinaComponent;
  let fixture: ComponentFixture<TurmaDisciplinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurmaDisciplinaComponent]
    });
    fixture = TestBed.createComponent(TurmaDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
