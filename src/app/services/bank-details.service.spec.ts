import { TestBed } from '@angular/core/testing';

import { BankDetailsService } from './bank-details.service';

describe('BankDetailsService', () => {
  let service: BankDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
