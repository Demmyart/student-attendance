import { TestBed, inject } from '@angular/core/testing';

import { StudentguardService } from './studentguard.service';

describe('StudentguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentguardService]
    });
  });

  it('should be created', inject([StudentguardService], (service: StudentguardService) => {
    expect(service).toBeTruthy();
  }));
});
