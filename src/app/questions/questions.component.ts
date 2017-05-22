import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../data/questions.service';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
  questions: string[];
  page: number = 1;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questionsService.getQuestions()
    .subscribe(question => {
      this.questions = question;
    },
    error => alert(error));
  }
}
