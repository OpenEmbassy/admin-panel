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

  constructor(private _auth: ApiService, private _Router: Router) {}

  onLogin(email, password) {
    // Validate inputs
    const credentials = {email, password}
    this._auth.login(credentials)
    .subscribe(data => {
      localStorage.setItem('x-access-token', data.jwt)
      localStorage.setItem('userType', data.profile.type)
      localStorage.setItem('userName', data.profile.firstName)
      this._Router.navigate(['questions'])
    },

    err => {
      if (err.status === '403' || err.status === '404'){ // 403= wrong password, 404= wrong email
        alert('wrong email or password')
        this._Router.navigate(['login'])
      } else if (err.status === '400'){
        alert('Please fill all fields')
        this._Router.navigate(['login'])
      } else {
        alert(err)   // other errors
        this._Router.navigate(['login'])
      }
    }
    );
    this._Router.navigate(['']);
  }
}
