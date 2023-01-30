import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorModifyComponent } from './administrator-modify.component';

describe('AdministratorModifyComponent', () => {
  let component: AdministratorModifyComponent;
  let fixture: ComponentFixture<AdministratorModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
