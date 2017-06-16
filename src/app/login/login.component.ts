import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ApiService } from '../data/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  
  email: string
  password: string
  invalidCredentials = false
  unauthoriseduser = false
  
  constructor(private _apiService: ApiService, private _router: Router) { }
  
  onLogin() {
    // Validate inputs
    const credentials = { email: this.email, password: this.password }
    this._apiService.login(credentials)
    .subscribe(data => {
      localStorage.setItem('x-access-token', data.jwt)
      localStorage.setItem('userType', data.profile.type)
      localStorage.setItem('userName', data.profile.firstName)
      this._router.navigate(['questions'])
    }, err => {
      if (err.status === 403) {
        this.unauthoriseduser = true
      } else if (err.status !== 403) {
        this.invalidCredentials = true
      }
      this._router.navigate([''])
      })
  }
  }