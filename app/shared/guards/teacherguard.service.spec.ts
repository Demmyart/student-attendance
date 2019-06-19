import { TestBed, inject } from '@angular/core/testing';

import { TeacherguardService } from './teacherguard.service';

describe('TeacherguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherguardService]
    });
  });

  it('should be created', inject([TeacherguardService], (service: TeacherguardService) => {
    expect(service).toBeTruthy();
  }));
});
