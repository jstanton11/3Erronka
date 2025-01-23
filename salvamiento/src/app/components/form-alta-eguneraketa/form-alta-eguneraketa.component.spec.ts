import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAltaEguneraketaComponent } from './form-alta-eguneraketa.component';

describe('FormAltaEguneraketaComponent', () => {
  let component: FormAltaEguneraketaComponent;
  let fixture: ComponentFixture<FormAltaEguneraketaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAltaEguneraketaComponent]
    });
    fixture = TestBed.createComponent(FormAltaEguneraketaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
