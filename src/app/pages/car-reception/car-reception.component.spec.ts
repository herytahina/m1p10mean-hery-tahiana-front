import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarReceptionComponent } from './car-reception.component';

describe('CarReceptionComponent', () => {
  let component: CarReceptionComponent;
  let fixture: ComponentFixture<CarReceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarReceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
