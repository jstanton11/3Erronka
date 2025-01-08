import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreskateakComponent } from './erreskateak.component';

describe('ErreskateakComponent', () => {
  let component: ErreskateakComponent;
  let fixture: ComponentFixture<ErreskateakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErreskateakComponent]
    });
    fixture = TestBed.createComponent(ErreskateakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
