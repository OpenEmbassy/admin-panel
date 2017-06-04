import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.scss']
})
export class UsersTabComponent implements OnInit {
  @Input() users;

  constructor() { }

  ngOnInit() {
  }

}
