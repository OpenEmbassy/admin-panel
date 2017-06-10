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
  
  constructor(private _auth: ApiService) {}

  onLogin(email, password) {
    // Validate inputs
    const credentials = {email, password}
    this._auth.login(credentials)
              .subscribe(data => localStorage.setItem('x-access-token', data.jwt),
                          err => alert(err));
    location.href="users"
    //this.router.navigate(['login']);
  }
}
