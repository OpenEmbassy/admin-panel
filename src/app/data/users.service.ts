import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UsersService {

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJvcGVuZW1iYXNzeSIsInVzZXJJZCI6MywidXNlclR5cGUiOiJhZG1pbiIsImV4cCI6MTQ5Nzk5MTY4MSwiaWF0IjoxNDk1Mzk5NjgxfQ.eHFRwtNQdBIJFYtRrflB1TWUdlubs-vOdHkEH8Pe0h4';
  
  constructor(
  	private api: ApiService
  ) {}

  getAllUsers() {
    // return this.api.get('/users/all');
    return this.api.get('http://localhost:4050/v1/admin/users', { headers: {'x-access-token': this.token} })
    .map(response => response.json());
  }
}
