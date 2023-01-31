import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCarListComponent } from './payment-car-list.component';

describe('PaymentCarListComponent', () => {
  let component: PaymentCarListComponent;
  let fixture: ComponentFixture<PaymentCarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentCarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
