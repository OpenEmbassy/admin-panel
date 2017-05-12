import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class QuestionsService {
  
  constructor(private api: ApiService
  ) { }
  
  getQuestions() {
    return this.api.get('https://jsonplaceholder.typicode.com/posts')
    .map(response => response.json());
  }

  getQuestionsStatusOpen() {
    return this.api.get('https://jsonplaceholder.typicode.com/posts')
    .map(response => response.json());
  }
  
  getQuestionsStatusPickedUp() {
    return this.api.get('https://jsonplaceholder.typicode.com/posts')
    .map(response => response.json());
  }

  getQuestionsStatusAnswered() {
    return this.api.get('https://jsonplaceholder.typicode.com/posts')
    .map(response => response.json());
  }
  
}
