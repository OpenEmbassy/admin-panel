import { QuestionsPageData } from './../../data/api.service';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-questions-tab',
  templateUrl: './questions-tab.component.html',
  styleUrls: ['./questions-tab.component.scss']
})
  
export class QuestionsTabComponent {
 @Input() page: number
  @Input() pageSize: number
  @Input() pageData = <QuestionsPageData>null
  @Input() status: string
  @Output() pageChange = new EventEmitter<number>()

  onPageChange(page) {
    this.pageChange.emit(page)
  }

}
