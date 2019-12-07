import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProyectoService } from '../services/proyecto.service';
import { UserService } from '../services/user.service';
import { Proyecto } from '../models/proyecto';

@Component({
	selector: 'productos-list',
	templateUrl: '../views/proyectos-list.html',
	providers: [ProyectoService, UserService]
})
export class ProyectosListComponent{
	public titulo: string;
	public proyectos: Proyecto[];
	public confirmado;
	public articulos;
	public isAdmin;

	constructor(
		private _userService: UserService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _proyectoService: ProyectoService
	){
		this.titulo = 'Listado de proyectos';
		this.confirmado = null;
	}

	ngOnInit(){
		this.isAdmin = this._userService.isLoggedAdmin();
		console.log("isAdmin: " + this.isAdmin);
		this.getProyectos();
	}

	getProyectos(){
		this._proyectoService.getProyectos().subscribe(
			result => {	
				console.log(result)			
				this.proyectos = result;				;
				if(!this.proyectos){
					console.log("Error en el servidor");
				}
			},
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);
			}
		);
	}

	borrarConfirm(id){
		this.confirmado = id;
	}

	cancelarConfirm(){
		this.confirmado = null;
	}

	onDeleteProyecto(id){
		this._proyectoService.deleteProyecto(id).subscribe(
			response => {
				if(response == true){
					this.getProyectos();
				} else {
					alert("Ocurrió un error al eliminar el proyecto");
				}
				
			},	
			error => {
				console.log(<any>error);
			}
		);
	}

}