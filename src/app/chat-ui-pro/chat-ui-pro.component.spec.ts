import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUiProComponent } from './chat-ui-pro.component';

describe('ChatUiProComponent', () => {
  let component: ChatUiProComponent;
  let fixture: ComponentFixture<ChatUiProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatUiProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatUiProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
