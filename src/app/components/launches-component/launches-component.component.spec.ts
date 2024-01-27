import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesComponentComponent } from './launches-component.component';

describe('LaunchesComponentComponent', () => {
  let component: LaunchesComponentComponent;
  let fixture: ComponentFixture<LaunchesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchesComponentComponent]
    });
    fixture = TestBed.createComponent(LaunchesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
