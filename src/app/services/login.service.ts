import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../models/usuario';
import { GLOBAL } from './global';

@Injectable()
export class LoginService {
	public url: string;

  constructor(
		public _http: Http
	){
		this.url = GLOBAL.url;
	}

  login(usuario:string, pass:string) {
  	console.log(usuario + ' ' + pass);
    return this._http.get(this.url+'login?usuario='+usuario+'&pass='+pass, "")
    	.map(res => res.json());    
  }

}