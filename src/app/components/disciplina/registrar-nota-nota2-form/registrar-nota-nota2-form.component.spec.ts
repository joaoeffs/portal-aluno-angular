import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarNotaNota2FormComponent } from './registrar-nota-nota2-form.component';

describe('RegistrarNotaNota2FormComponent', () => {
  let component: RegistrarNotaNota2FormComponent;
  let fixture: ComponentFixture<RegistrarNotaNota2FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarNotaNota2FormComponent]
    });
    fixture = TestBed.createComponent(RegistrarNotaNota2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
