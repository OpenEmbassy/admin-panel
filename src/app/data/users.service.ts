import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UsersService {

  constructor(
  	private api: ApiService
  ) {}

  getUsers() {
    // return this.api.get('/users');
    return this.api.get('http://date.jsontest.com')
      .map(response => response.json());
  }

}
