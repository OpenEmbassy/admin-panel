import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-questions-tab',
  templateUrl: './all-questions-tab.component.html',
  styleUrls: ['./all-questions-tab.component.scss']
})
export class AllQuestionsTabComponent implements OnInit {
  @Input() questions
  
  constructor() { }
  
  ngOnInit() {
  }
  
}
