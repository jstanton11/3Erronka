import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GureGaleriaComponent } from './gure-galeria.component';

describe('GureGaleriaComponent', () => {
  let component: GureGaleriaComponent;
  let fixture: ComponentFixture<GureGaleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GureGaleriaComponent]
    });
    fixture = TestBed.createComponent(GureGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
