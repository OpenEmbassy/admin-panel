import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../data/users.service';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
  questions: string[];
  page: number = 1;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllUsers()
    .subscribe(question => {
      this.questions = question;
    },
    error => alert(error));
  }
}
