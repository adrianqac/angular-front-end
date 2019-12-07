import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from './services/global';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  public title:string = 'Dish';
  public header_color: string;

  constructor(
  	private _userService: UserService,
  	private _router: Router,
  ){
  	this.header_color = GLOBAL.header_color;
  }

  cerrarSesion(){
  	this._userService.loggedOut();
  	this._router.navigateByUrl('/login');
  }

}
