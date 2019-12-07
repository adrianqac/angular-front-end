import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProyectoService } from '../services/proyecto.service';
import { Proyecto } from '../models/proyecto';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'proyecto-edit',
	templateUrl: '../views/proyecto-nuevo.html',
	providers: [ProyectoService]
})
export class ProyectoEditComponent{
	public titulo: string;
	public proyecto: Proyecto;
	public filesToUpload;
	public resultUpload;
	public is_edit;

	constructor(
		private _proyectoService: ProyectoService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.titulo = 'Editar proyecto';
		this.proyecto = new Proyecto(null,'','','');
		this.is_edit = true;
	}

	ngOnInit(){
		console.log(this.titulo);
		this.getProyecto();
	}

	onSubmit(){
		console.log(this.proyecto);
		this.updateProyecto();	
	}

	updateProyecto(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			this._proyectoService.editProyecto(id, this.proyecto).subscribe(
				response => {
					if(response == true){
						this._router.navigate(['/proyectos']);
					}else{
						alert("Ocurrió un error al actualizar el proyecto");
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
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