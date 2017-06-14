import { AppRoutingModule } from './../app-routing.module';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from '../data/api.service';
import { Observable } from 'rxjs/Rx'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiService, private _Router: Router) {
  }

  canActivate() {
    if (this.apiService.isLoggedIn()) {
      return true
    } else {
      this._Router.navigate(['/login'])
    }
  }
}
