import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProyectoService } from '../services/proyecto.service';
import { Proyecto } from '../models/proyecto';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'nuevo-proyecto',
	templateUrl: '../views/proyecto-nuevo.html',
	providers: [ProyectoService]
})
export class ProyectoNuevoComponent{
	public titulo: string;
	public proyecto: Proyecto;
	public filesToUpload;
	public resultUpload;

	constructor(
		private _proyectoService: ProyectoService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.titulo = 'Crear un nuevo proyecto';
		this.proyecto = new Proyecto(null,'','','');
	}

	onSubmit(){
		this.saveProyecto();	
	}

	saveProyecto(){
		console.log(this.proyecto);
			this._proyectoService.addProyecto(this.proyecto).subscribe(
				response => {
					if(response == true){
						this._router.navigate(['/proyectos']);
					}else{
						alert("Ocurrió un error al guardar el proyecto");
						console.log(response);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
	}

}