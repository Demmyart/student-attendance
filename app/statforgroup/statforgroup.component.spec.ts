import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatforgroupComponent } from './statforgroup.component';

describe('StatforgroupComponent', () => {
  let component: StatforgroupComponent;
  let fixture: ComponentFixture<StatforgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatforgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatforgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
