import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRequestedDetailsComponent } from './car-requested-details.component';

describe('CarRequestedDetailsComponent', () => {
  let component: CarRequestedDetailsComponent;
  let fixture: ComponentFixture<CarRequestedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRequestedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRequestedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
