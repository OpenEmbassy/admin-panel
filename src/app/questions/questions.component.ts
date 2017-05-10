import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../data/users.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: string[] = [];
  
  constructor(private usersService: UsersService) { }
  
  ngOnInit() {
     this.usersService.getUsers()
    .subscribe(question => {
      this.questions = question;
      error => alert(error);
      console.log(question.date);
    });
  }
}