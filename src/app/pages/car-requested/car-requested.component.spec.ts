import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRequestedComponent } from './car-requested.component';

describe('CarRequestedComponent', () => {
  let component: CarRequestedComponent;
  let fixture: ComponentFixture<CarRequestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRequestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
