import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofUploadComponent } from './proof-upload.component';

describe('ProofUploadComponent', () => {
  let component: ProofUploadComponent;
  let fixture: ComponentFixture<ProofUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
