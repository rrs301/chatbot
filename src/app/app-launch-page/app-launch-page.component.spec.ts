import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLaunchPageComponent } from './app-launch-page.component';

describe('AppLaunchPageComponent', () => {
  let component: AppLaunchPageComponent;
  let fixture: ComponentFixture<AppLaunchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLaunchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLaunchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
