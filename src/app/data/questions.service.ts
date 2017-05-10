import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class QuestionsService {
  
  constructor(private api: ApiService
  ) { }
  
  getQuestions() {
    // return this.api.get('/questions');
    return this.api.get('http://date.jsontest.com')
    .map(response => response.json());
  }
  
  
}
