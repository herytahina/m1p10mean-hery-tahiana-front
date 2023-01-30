import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedCarsComponent } from './received-cars.component';

describe('ReceivedCarsComponent', () => {
  let component: ReceivedCarsComponent;
  let fixture: ComponentFixture<ReceivedCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
