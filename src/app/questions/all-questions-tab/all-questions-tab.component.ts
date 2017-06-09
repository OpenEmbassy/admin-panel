import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-all-questions-tab',
  templateUrl: './all-questions-tab.component.html',
  styleUrls: ['./all-questions-tab.component.scss']
})
export class AllQuestionsTabComponent {
  @Input() page: number
  @Input() pageSize: number
  @Input() pageData: any
  @Output() pageChange = new EventEmitter<number>()

  onPageChange(page) {
    this.pageChange.emit(page)
  }

}
