import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDisciplinaComponent } from './aluno-disciplina.component';

describe('AlunoDisciplinaComponent', () => {
  let component: AlunoDisciplinaComponent;
  let fixture: ComponentFixture<AlunoDisciplinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunoDisciplinaComponent]
    });
    fixture = TestBed.createComponent(AlunoDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
