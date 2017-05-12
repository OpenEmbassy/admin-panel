import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UsersService {

  constructor(
  	private api: ApiService
  ) {}

  getAllUsers() {
    // return this.api.get('/users/all');
    return this.api.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json());
  }

  getAdmins() {
    // return this.api.get('/users/admins');
    return this.api.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json());
  }

  getUsers() {
    // return this.api.get('/users/users');
    return this.api.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json());
  }

  getVolunteer() {
    // return this.api.get('/users/volunteers');
    return this.api.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json());
  }

  getTranslator() {
    // return this.api.get('/users/translators');
    return this.api.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json());
  }

}
