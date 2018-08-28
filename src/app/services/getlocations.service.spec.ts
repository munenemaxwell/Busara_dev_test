import { TestBed, inject } from '@angular/core/testing';

import { GetlocationsService } from './getlocations.service';

describe('GetlocationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetlocationsService]
    });
  });

  it('should be created', inject([GetlocationsService], (service: GetlocationsService) => {
    expect(service).toBeTruthy();
  }));
});
