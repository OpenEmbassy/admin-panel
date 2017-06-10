import { Component, OnInit, Output } from '@angular/core';
import { ApiService, UserPageData } from '../data/api.service';

const PAGE_SIZE = 10

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

pageSize = PAGE_SIZE
  allUsersPage: UserPageData
  userUsersPage: UserPageData
  adminUsersPage: UserPageData
  volunteerUsersPage: UserPageData
  translatorUsersPage: UserPageData

  constructor(private ApiService: ApiService) { }

  ngOnInit() {
    this.onAllPageChange(1)
    this.onUserPageChange(1)
    this.onAdminPageChange(1)
    this.onVolunteerPageChange(1)
    this.onTranslatorPageChange(1)
  }

  onAllPageChange(page) {
    this.ApiService.getUsers(page, PAGE_SIZE)
      .subscribe(usersPage => {
        this.allUsersPage = usersPage
      }, error => window.alert(error))
  }

   onUserPageChange(page) {
    this.ApiService.getUsers(page, PAGE_SIZE, 'user')
      .subscribe(usersPage => {
        this.userUsersPage = usersPage
      }, error => window.alert(error))
   }

   onAdminPageChange(page) {
    this.ApiService.getUsers(page, PAGE_SIZE, 'admin')
      .subscribe(usersPage => {
        this.adminUsersPage = usersPage
      }, error => window.alert(error))
   }

   onVolunteerPageChange(page) {
    this.ApiService.getUsers(page, PAGE_SIZE, 'volunteer')
      .subscribe(usersPage => {
        this.volunteerUsersPage = usersPage
      }, error => window.alert(error))
   }

   onTranslatorPageChange(page) {
    this.ApiService.getUsers(page, PAGE_SIZE, 'translator')
      .subscribe(usersPage => {
        this.translatorUsersPage = usersPage
      }, error => window.alert(error))
  }
}
