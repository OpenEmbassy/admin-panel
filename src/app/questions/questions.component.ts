import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../data/users.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: string[] = ['Q1', 'Q2', 'Q3'];
  
  constructor(private usersService: UsersService) { }
  
  ngOnInit() {
     this.usersService.getUsers()
    .subscribe(question => {
      this.questions.push(question.date)
      error => alert(error);
      console.log(question.date);
    });
  }
}
