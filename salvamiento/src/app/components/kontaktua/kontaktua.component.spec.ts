import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktuaComponent } from './kontaktua.component';

describe('KontaktuaComponent', () => {
  let component: KontaktuaComponent;
  let fixture: ComponentFixture<KontaktuaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KontaktuaComponent]
    });
    fixture = TestBed.createComponent(KontaktuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
