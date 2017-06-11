import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';

export interface Question {
  questionId: number
  title: string
  content: string
  status: string
  createdAt: string
  updateAt: string
}

export interface User {
  userId: number
  firstName: string
  lastName: string
  type: string
  language: string
}

export interface QuestionsPageData {
  count: number
  rows: Question[]
}

export interface UserPageData {
  count: number
  rows: User[]
}

@Injectable()
export class ApiService {
  
  constructor(
  private http: Http
  ) { }
  
  login(credentials) {
    return this.http.post('http://localhost:4050/v1/auth/login', credentials)
    .map(response => response.json());
  }
  // if (res.status !== 402 || `${res.header.responseType}`) {
    // location.href('localhost/login')
    // next()
    // alert(err.msg)
    // }
    
    isLoggedIn(){
      if(localStorage.getItem('userType') === 'admin'){
        return true;
      }
    }
    
    logout() {
      localStorage.clear();
    }
    
    getQuestions(page: number, pageSize: number, status?: string) {
      const options = this.getRequestOptions()
      const params = new URLSearchParams()
      params.set('page', page.toString())
      params.set('pageSize', pageSize.toString())
      if (status) {
        params.set('status', status)
      }
      options.search = params
      return this.http.get('http://localhost:4050/v1/admin/questions', options)
      .map(response =>  {
        const data = response.json();
        data.page = page;
        return data;
      })
    }
    
    getUsers(page: number, pageSize: number, type?: string) {
      const options = this.getRequestOptions()
      const params = new URLSearchParams()
      params.set('page', page.toString())
      params.set('pageSize', pageSize.toString())
      if (type) {
        params.set('type', type)
      }
      options.search = params
      return this.http.get('http://localhost:4050/v1/admin/users', options)
      .map(response =>  {
        const data = response.json();
        data.page = page;
        return data;
      })
    }
    
    
    getRequestOptions(): RequestOptions {
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      headers.append('x-access-token', localStorage.getItem('x-access-token'))
      return new RequestOptions({ headers })
    }
    
  }
  