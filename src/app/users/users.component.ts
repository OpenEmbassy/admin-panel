import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../data/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  allUsers: string[] = []
  admins: string[] = []
  users: string[] = []
  volunteers: string[] = []
  translators: string[] = []
  page = 1

  constructor(private ApiService: ApiService) {
  }

  ngOnInit() {
    this.ApiService.getAllUsers()
    .subscribe(data => {
      this.allUsers = data;
      this.admins = data.filter(user => user.type === 'admin')
      this.users = data.filter(user => user.type === 'user')
      this.volunteers = data.filter(user => user.type === 'volunteer')
      this.translators = data.filter(user => user.type === 'translator')
    }, error => alert(error))
  }
}
