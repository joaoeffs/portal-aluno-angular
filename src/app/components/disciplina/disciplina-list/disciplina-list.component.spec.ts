import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaListComponent } from './disciplina-list.component';

describe('DisciplinaListComponent', () => {
  let component: DisciplinaListComponent;
  let fixture: ComponentFixture<DisciplinaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinaListComponent]
    });
    fixture = TestBed.createComponent(DisciplinaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
