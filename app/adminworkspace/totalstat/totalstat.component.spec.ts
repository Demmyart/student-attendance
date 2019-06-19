import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalstatComponent } from './totalstat.component';

describe('TotalstatComponent', () => {
  let component: TotalstatComponent;
  let fixture: ComponentFixture<TotalstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
