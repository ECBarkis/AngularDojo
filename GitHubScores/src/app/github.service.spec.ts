import { TestBed, inject } from '@angular/core/testing';

import { GITHubService } from './github.service';

describe('GITHubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GITHubService]
    });
  });

  it('should be created', inject([GITHubService], (service: GITHubService) => {
    expect(service).toBeTruthy();
  }));
});
