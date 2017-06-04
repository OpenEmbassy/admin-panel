import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJvcGVuZW1iYXNzeSIsInVzZXJJZCI6MywidXNlclR5cGUiOiJhZG1pbiIsImV4cCI6MTQ5Nzk5ODA4NywiaWF0IjoxNDk1NDA2MDg3fQ.g3UyhVcGQPRlvTnj3nCGJA73Re2Ad8ZjZEzW12jbvjQ'

@Injectable()
export class ApiService {
  
  constructor(
  private http: Http
  ) {}
  
  getQuestions() {
    return this.http.get('http://localhost:4050/v1/admin/questions', this.getRequestOptions())
    .map(response => response.json())
    // a loop for testing purposes only 
    .map(questions => {
      for (let i = 0; i < 3; i++) {
        questions = questions.concat(questions)
      }
      return questions
    })
    // end of loop
  }
  
  getAllUsers() {
    return this.http.get('http://localhost:4050/v1/admin/users', this.getRequestOptions())
      .map(response => response.json())
    // a loop for testing purposes only 
    .map(users => {
      for (let i = 0; i < 3; i++) {
        users = users.concat(users)
      }
      return users
    })
    // end of loop
  }
  
  getRequestOptions(): RequestOptions {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('x-access-token', TOKEN)
    return new RequestOptions ({ headers})
  }
  
}
