import { Component, OnInit, Output } from '@angular/core';
import { UsersService } from '../data/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  data: string[] = []
  admins: string[] = []
  users: string[] = []
  volunteers: string[] = []
  translators: string[] = []

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getAllUsers()
    .subscribe(data => {
      this.data = data;
      this.admins = data.filter(user => user.type === 'admin')
      this.users = data.filter(user => user.type === 'user')
      this.volunteers = data.filter(user => user.type === 'volunteer')
      this.translators = data.filter(user => user.type === 'translator')
    }, error => alert(error))
  }
}
