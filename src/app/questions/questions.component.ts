import { Component, OnInit, Input, Output } from '@angular/core';
import { ApiService, QuestionsPageData } from '../data/api.service';

const PAGE_SIZE = 10

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
  pageSize = PAGE_SIZE
  allQuestionsPage: QuestionsPageData
  openQuestionsPage: QuestionsPageData
  pickedUpQuestionsPage: QuestionsPageData
  answeredQuestionsPage: QuestionsPageData


  constructor(private ApiService: ApiService) { }

  ngOnInit() {
    this.onAllPageChange(1)
    this.onOpenPageChange(1)
    this.onPickedUpPageChange(1)
    this.onAnsweredPageChange(1)
  }

  onAllPageChange(page) {
    this.ApiService.getQuestions(page, PAGE_SIZE)
    .subscribe(questionsPage => {
      this.allQuestionsPage = questionsPage
    }, error => window.alert(error))
  }

  onOpenPageChange(page) {
    this.ApiService.getQuestions(page, PAGE_SIZE, 'open')
    .subscribe(questionsPage => {
      this.openQuestionsPage = questionsPage
    }, error => window.alert(error))
  }

  onPickedUpPageChange(page) {
    this.ApiService.getQuestions(page, PAGE_SIZE, 'picked-up')
    .subscribe(questionsPage => {
      this.pickedUpQuestionsPage = questionsPage
    }, error => window.alert(error))
  }

  onAnsweredPageChange(page) {
    this.ApiService.getQuestions(page, PAGE_SIZE, 'answered')
    .subscribe(questionsPage => {
      this.answeredQuestionsPage = questionsPage
    }, error => window.alert(error))
  }
}
