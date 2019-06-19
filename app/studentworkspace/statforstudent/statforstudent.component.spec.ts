import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatforstudentComponent } from './statforstudent.component';

describe('StatforstudentComponent', () => {
  let component: StatforstudentComponent;
  let fixture: ComponentFixture<StatforstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatforstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatforstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
