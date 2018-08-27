import { TestBed, inject } from '@angular/core/testing';

import { GetvideosService } from './getvideos.service';

describe('GetvideosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetvideosService]
    });
  });

  it('should be created', inject([GetvideosService], (service: GetvideosService) => {
    expect(service).toBeTruthy();
  }));
});
