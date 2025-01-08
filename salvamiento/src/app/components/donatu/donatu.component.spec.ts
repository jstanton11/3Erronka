import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatuComponent } from './donatu.component';

describe('DonatuComponent', () => {
  let component: DonatuComponent;
  let fixture: ComponentFixture<DonatuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonatuComponent]
    });
    fixture = TestBed.createComponent(DonatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
