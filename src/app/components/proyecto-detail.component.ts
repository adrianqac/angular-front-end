import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProyectoService } from '../services/proyecto.service';
import { Proyecto } from '../models/proyecto';

@Component({
	selector: 'proyecto-detail',
	templateUrl: '../views/proyecto-detail.html',
	providers: [ProyectoService]
})
export class ProyectoDetailComponent{
	public proyecto: Proyecto;

	constructor(
		private _proyectoService: ProyectoService,
		private _route: ActivatedRoute,
		private _router: Router
	){}

	ngOnInit(){
		console.log('proyecto-detail.Component.ts cargado...');

		this.getProyecto();
	}

	getProyecto(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			this._proyectoService.getProyecto(id).subscribe(
				response => {
					this.proyecto = response;
					console.log(this.proyecto);
					if(!this.proyecto){
						console.log("Error en el servidor");
					} 
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}

}