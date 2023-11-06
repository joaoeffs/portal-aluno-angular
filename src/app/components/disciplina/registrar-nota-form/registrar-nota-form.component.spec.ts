import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarNotaFormComponent } from './registrar-nota-form.component';

describe('RegistrarNotaFormComponent', () => {
  let component: RegistrarNotaFormComponent;
  let fixture: ComponentFixture<RegistrarNotaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarNotaFormComponent]
    });
    fixture = TestBed.createComponent(RegistrarNotaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
