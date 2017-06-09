import { UserPageData } from './../../data/api.service';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.scss']
})
export class UsersTabComponent {
  @Input() page: number
  @Input() pageSize: number
  @Input() type: string
  @Input() pageData = <UserPageData>null
  @Output() pageChange = new EventEmitter<number>()
  
  onPageChange(page) {
    this.pageChange.emit(page)
  }
}
