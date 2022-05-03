import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-child',
  templateUrl: './answer-child.component.html',
  styleUrls: ['./answer-child.component.scss'],
})
export class AnswerChildComponent implements OnInit {
  @Input() randomNumber: number;

  constructor() {}

  ngOnInit(): void {}
}
