import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Proyecto } from '../models/proyecto';
import { GLOBAL } from './global';

@Injectable()
export class ProyectoService{
	public url: string;

	constructor(
		public _http: Http
	){
		this.url = GLOBAL.url;
	}

	getProyectos(){
		return this._http.get(this.url+'proyectos').map(res => res.json());
	}

	getProyecto(id){
		return this._http.get(this.url+'proyectos/'+id).map(res => res.json());
	}

	addProyecto(proyecto: Proyecto){
		return this._http.post(this.url+'proyectos/nuevo?nombre='+proyecto.nombre+'&descripcion='+proyecto.descripcion+'&projectManager='+proyecto.projectManager, "")
		.map(res => res.json());
	}

	editProyecto(id, proyecto: Proyecto){
		let json = JSON.stringify(proyecto);
		let params = "proyecto="+json;
		return this._http.patch(this.url+'proyectos/update?proyectoID='+proyecto.proyectoID+'&nombre='+proyecto.nombre+'&descripcion='+proyecto.descripcion+'&projectManager='+proyecto.projectManager, "")
						 .map(res => res.json());
	}

	deleteProyecto(id){
		return this._http.get(this.url+'proyectos/delete/'+id)
						 .map(res => res.json());
	}

}	