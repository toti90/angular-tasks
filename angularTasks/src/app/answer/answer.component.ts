import { Component, OnInit } from '@angular/core';
import { USERS } from '../Users';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
})
export class AnswerComponent implements OnInit {
  users = USERS;

  constructor() {}

  ngOnInit(): void {}
}
