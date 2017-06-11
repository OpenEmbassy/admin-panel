import { Component } from '@angular/core';
import { ApiService } from './data/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _auth: ApiService){ }

  logout() {
    this._auth.logout()
  }
  get user(): any {
      return localStorage.getItem('userName');
  }
 

}
