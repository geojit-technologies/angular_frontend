import { TestBed } from '@angular/core/testing';


import { ProofUploadService } from './proof-upload.service';

describe('ProofUploadService', () => {
  let service: ProofUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProofUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
