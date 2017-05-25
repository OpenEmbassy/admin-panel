import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UsersService {
  token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJvcGVuZW1iYXNzeSIsInVzZXJJZCI6MywidXNlclR5cGUiOiJhZG1pbiIsImV4cCI6MTQ5Nzk5ODA4NywiaWF0IjoxNDk1NDA2MDg3fQ.g3UyhVcGQPRlvTnj3nCGJA73Re2Ad8ZjZEzW12jbvjQ'
  
  constructor(
  	private api: ApiService
  ) {}

  getAllUsers() {
<<<<<<< HEAD
    // return this.api.get('/users/all');
    return this.api.get('http://localhost:4050/v1/admin/users', { headers: { 'x-access-token': this.token } })
      .map(response => response.json());
=======
    return this.api.get('https://jsonplaceholder.typicode.com/posts')
    .map(response => response.json());
>>>>>>> front-end
  }
}
