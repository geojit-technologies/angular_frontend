import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipActivationComponent } from './membership-activation.component';

describe('MembershipActivationComponent', () => {
  let component: MembershipActivationComponent;
  let fixture: ComponentFixture<MembershipActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipActivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
