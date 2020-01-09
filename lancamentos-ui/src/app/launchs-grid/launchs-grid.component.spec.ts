import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchsGridComponent } from './launchs-grid.component';

describe('LaunchsGridComponent', () => {
  let component: LaunchsGridComponent;
  let fixture: ComponentFixture<LaunchsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
