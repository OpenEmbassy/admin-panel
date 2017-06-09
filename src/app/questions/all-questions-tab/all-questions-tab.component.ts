import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-all-questions-tab',
  templateUrl: './all-questions-tab.component.html',
  styleUrls: ['./all-questions-tab.component.scss']
})
export class AllQuestionsTabComponent implements OnInit {
  @Input() page: number
  @Input() pageSize: number
  @Input() pageData: any
  @Output() pageChange = new EventEmitter<number>()

  constructor() {
  }

  ngOnInit() {
  }

  onPageChange(page) {
    this.pageChange.emit(page)
  }

}
