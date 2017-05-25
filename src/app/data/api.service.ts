import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(
  	private http: Http
  ) {}

  get(path, options?) {
  	return this.http.get(path, options)
  }

  post(path, params, options?) {
  	return this.http.post(path, params, options)
  }

}
