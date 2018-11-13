import { TestBed, inject } from '@angular/core/testing';

import { GlobalServiceManagerService } from './global-service-manager.service';

describe('GlobalServiceManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalServiceManagerService]
    });
  });

  it('should be created', inject([GlobalServiceManagerService], (service: GlobalServiceManagerService) => {
    expect(service).toBeTruthy();
  }));
});
