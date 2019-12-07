import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable()
export class UserService {

  public isUserLoggedIn;
  public isAdmin;
  public usserLogged:Usuario;
  
  constructor() { 
  	this.isUserLoggedIn = false;
    this.isAdmin = false;
  }

  setUserLoggedIn(user:Usuario, admin) {
    this.isUserLoggedIn = true;
    this.isAdmin = admin
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isAdmin', this.isAdmin);
  
  }

  getUserLoggedIn() {
  	return JSON.parse(localStorage.getItem('currentUser'));
  }

  isLoggedAdmin(){
    return localStorage.getItem('isAdmin');
  }

  loggedOut(){
    this.isUserLoggedIn = false;
    this.usserLogged = new Usuario(null, '', '');
    localStorage.clear();
  }

}