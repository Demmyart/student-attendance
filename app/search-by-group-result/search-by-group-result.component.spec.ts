import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByGroupResultComponent } from './search-by-group-result.component';

describe('SearchByGroupResultComponent', () => {
  let component: SearchByGroupResultComponent;
  let fixture: ComponentFixture<SearchByGroupResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByGroupResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByGroupResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
