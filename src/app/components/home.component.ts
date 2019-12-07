import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
	selector: 'home',
	templateUrl: '../views/home.html',
	providers: [UserService]
})
export class HomeComponent{
	public titulo: string;

	constructor(
		private _userService: UserService
	){
		this.titulo = 'Webapp con Angular';
	}

	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts');
	}
}