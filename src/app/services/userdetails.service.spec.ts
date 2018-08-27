import { TestBed, inject } from '@angular/core/testing';

import { UserdetailsService } from './userdetails.service';

describe('UserdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserdetailsService]
    });
  });

  it('should be created', inject([UserdetailsService], (service: UserdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
