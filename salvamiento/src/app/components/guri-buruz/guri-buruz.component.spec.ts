import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuriBuruzComponent } from './guri-buruz.component';

describe('GuriBuruzComponent', () => {
  let component: GuriBuruzComponent;
  let fixture: ComponentFixture<GuriBuruzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuriBuruzComponent]
    });
    fixture = TestBed.createComponent(GuriBuruzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
