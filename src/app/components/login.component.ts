import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { Usuario } from '../models/usuario';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'login',
	templateUrl: '../views/login.html',
	providers: [LoginService, UserService ]
})

export class LoginComponent {
	public usuario:Usuario;
	public user:string;
	public pass:string;

	constructor(
		private _loginService: LoginService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService	
	){
		this.user="";
		this.pass="";
		this.usuario = new Usuario(null,'','');
	}
	
	onSubmit(){
		this.login();	
	}

	login(){
		this._loginService.login(this.user, this.pass).subscribe(
			response => {
				this.usuario = JSON.parse(JSON.stringify(response));
				if(this.usuario.usuario == 'admin'){
					this._userService.setUserLoggedIn(this.usuario, true);
				} else {
					this._userService.setUserLoggedIn(this.usuario, false);
				}
				
			},	
			error => {
				this.user="";
				this.pass="";
				this.usuario = new Usuario(null,'','');
				alert("Error al iniciar sesión");
			},
      		() => this.navigate()
		);
	}

	navigate() {    
    this._router.navigateByUrl('/home');
  }

}