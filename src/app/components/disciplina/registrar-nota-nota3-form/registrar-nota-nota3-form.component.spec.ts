import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarNotaNota3FormComponent } from './registrar-nota-nota3-form.component';

describe('RegistrarNotaNota3FormComponent', () => {
  let component: RegistrarNotaNota3FormComponent;
  let fixture: ComponentFixture<RegistrarNotaNota3FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarNotaNota3FormComponent]
    });
    fixture = TestBed.createComponent(RegistrarNotaNota3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
