import { TestBed } from '@angular/core/testing';

import { AddinfoserviceService } from './addinfoservice.service';

describe('AddinfoserviceService', () => {
  let service: AddinfoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddinfoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
