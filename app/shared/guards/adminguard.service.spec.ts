import { TestBed, inject } from '@angular/core/testing';

import { AdminguardService } from './adminguard.service';

describe('AdminguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminguardService]
    });
  });

  it('should be created', inject([AdminguardService], (service: AdminguardService) => {
    expect(service).toBeTruthy();
  }));
});
