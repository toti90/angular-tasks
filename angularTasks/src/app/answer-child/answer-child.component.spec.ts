import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerChildComponent } from './answer-child.component';

describe('AnswerChildComponent', () => {
  let component: AnswerChildComponent;
  let fixture: ComponentFixture<AnswerChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
