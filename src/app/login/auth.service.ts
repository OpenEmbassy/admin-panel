import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AUTH_CONFIG } from '../auth0-variables';
import { tokenNotExpired } from 'angular2-jwt';


export class AuthService {
    signinUser(email: string, password: string)
}