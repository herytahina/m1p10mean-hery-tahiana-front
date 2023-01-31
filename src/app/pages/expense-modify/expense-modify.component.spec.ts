import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseModifyComponent } from './expense-modify.component';

describe('ExpenseModifyComponent', () => {
  let component: ExpenseModifyComponent;
  let fixture: ComponentFixture<ExpenseModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
