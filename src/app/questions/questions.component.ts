import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../data/api.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
  questions: string[] = []
  statusOpen: string[] = []
  statusPickedUp: string[] = []
  statusAnswered: string[] = []
  page = 1
  
  constructor(private ApiService: ApiService) { }
  
  ngOnInit() {
    this.ApiService.getQuestions()
    .subscribe(questions => {
      this.questions = questions
      
      this.statusAnswered = questions.filter(question => question.status === 'answered')
      
      this.statusPickedUp = questions.filter(question => question.status === 'picked-up')
      
      this.statusOpen = questions.filter(question => question.status === 'open')
    },
    error => alert(error))
  }
}
