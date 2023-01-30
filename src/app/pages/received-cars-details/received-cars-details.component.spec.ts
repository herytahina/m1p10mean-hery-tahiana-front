import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedCarsDetailsComponent } from './received-cars-details.component';

describe('ReceivedCarsDetailsComponent', () => {
  let component: ReceivedCarsDetailsComponent;
  let fixture: ComponentFixture<ReceivedCarsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedCarsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedCarsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
