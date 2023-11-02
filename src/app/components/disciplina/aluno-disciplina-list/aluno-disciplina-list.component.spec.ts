import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDisciplinaListComponent } from './aluno-disciplina-list.component';

describe('AlunoDisciplinaListComponent', () => {
  let component: AlunoDisciplinaListComponent;
  let fixture: ComponentFixture<AlunoDisciplinaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunoDisciplinaListComponent]
    });
    fixture = TestBed.createComponent(AlunoDisciplinaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
