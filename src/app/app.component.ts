import { Component } from '@angular/core';
import { ApiService } from './data/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private apiService: ApiService) { }

  logout() {
    this.apiService.logout()
  }
  get user(): any {
      return localStorage.getItem('userName');
  }
}
