import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../data/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: string[] = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getAllUsers()
      .subscribe(user => {
        this.users = user;
      }, error => alert(error));
  }
}
