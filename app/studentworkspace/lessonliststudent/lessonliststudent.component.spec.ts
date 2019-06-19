import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonliststudentComponent } from './lessonliststudent.component';

describe('LessonliststudentComponent', () => {
  let component: LessonliststudentComponent;
  let fixture: ComponentFixture<LessonliststudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonliststudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonliststudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
