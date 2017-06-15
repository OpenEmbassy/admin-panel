import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ApiService } from '../data/api.service';
import { NgForm } from '@angular/forms';
import { MdSnackBar } from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  
  email: string
  password: string
  
  constructor(private _auth: ApiService, private _Router: Router, public snackBar: MdSnackBar) {}
  
  onLogin() {
    // Validate inputs
    const credentials = {email: this.email, password: this.password}
    this._auth.login(credentials)
    .subscribe(data => {
      localStorage.setItem('x-access-token', data.jwt)
      localStorage.setItem('userType', data.profile.type)
      localStorage.setItem('userName', data.profile.firstName)
      this._Router.navigate(['questions'])
    }, err => {
        this.snackBar.open('Invalid Credintials: ', 'Please check your email and/or password', {
          duration: 5000
        })
        this._Router.navigate(['login'])
      }
    );
    this._Router.navigate(['']);
  }
}
