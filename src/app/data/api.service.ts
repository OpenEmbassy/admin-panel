import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  
  constructor(
  private http: Http
  ) {}
  
  login(credentials) {
    return this.http.post('http://localhost:4050/v1/auth/login',credentials)
      .map(response => response.json());
  }
  // if (res.status !== 402 || `${res.header.responseType}`) {
    // location.href('localhost/login')
    // next()
    // alert(err.msg)
  // }
  logout() {
    localStorage.removeItem('x-access-token'); 
  }

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
  }
  
  getRequestOptions(): RequestOptions {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('x-access-token', localStorage.getItem('x-access-token'))
    return new RequestOptions ({ headers})
  }
  
}
