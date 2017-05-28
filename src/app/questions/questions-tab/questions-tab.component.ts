import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questions-tab',
  templateUrl: './questions-tab.component.html',
  styleUrls: ['./questions-tab.component.scss']
})
export class QuestionsTabComponent implements OnInit {
  @Input() questions;
  page = 1

  constructor() { }

  ngOnInit() {
  }

}
