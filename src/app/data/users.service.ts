import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UsersService {

  constructor(
  	private api: ApiService
  ) {}

  getUsers() {
    // return this.api.get('/users');
    return this.api.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json());
  }

}
