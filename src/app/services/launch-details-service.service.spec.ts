import { TestBed } from '@angular/core/testing';

import { LaunchDetailsServiceService } from './launch-details-service.service';

describe('LaunchDetailsServiceService', () => {
  let service: LaunchDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
