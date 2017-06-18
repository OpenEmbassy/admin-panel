import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './data/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(public apiService: ApiService, public _Router: Router) { }
  
  ngOnInit() {
    if (localStorage.getItem('x-access-token')) {
      this._Router.navigate(['/questions'])
    } else {
      this._Router.navigate(['/login'])
    }
  }

  logout() {
    this.apiService.logout()
  }
  
  get user(): any {
    return localStorage.getItem('userName');
  }
}
