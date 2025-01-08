import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasieraComponent } from './hasiera.component';

describe('HasieraComponent', () => {
  let component: HasieraComponent;
  let fixture: ComponentFixture<HasieraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HasieraComponent]
    });
    fixture = TestBed.createComponent(HasieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
