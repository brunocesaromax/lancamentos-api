import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LaunchsSearchComponent} from './launchs-search.component';

describe('LaunchsSearchComponent', () => {
  let component: LaunchsSearchComponent;
  let fixture: ComponentFixture<LaunchsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
