// Thanks to Jim for assistance with creating cards with Grouped Questions

import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../data/questions.service';

interface GroupedQuestions {
  [status: string]: any[];
};

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: GroupedQuestions;
  userIds: string[];
  page: number = 1;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
     this.questionsService.getQuestions()
    .subscribe(questions => {
      this.questions = questions.reduce((acc: GroupedQuestions, question) => {
          if (acc[question.userId]) {
            acc[question.userId].push(question);
          } else {
            acc[question.userId] = [question];
          }
          return acc;
        }, {});
        this.userIds = Object.keys(this.questions);
      }, error => alert(error));
  }
}
