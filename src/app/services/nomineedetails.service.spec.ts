import { TestBed } from '@angular/core/testing';

import { NomineedetailsService } from './nomineedetails.service';

describe('NomineedetailsService', () => {
  let service: NomineedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomineedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
