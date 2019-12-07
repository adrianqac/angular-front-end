import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProyectosListComponent } from './components/proyectos-list.component';
import { ProyectoNuevoComponent } from './components/proyecto-nuevo.component';
import { ProyectoDetailComponent } from './components/proyecto-detail.component';
import { ProyectoEditComponent } from './components/proyecto-edit.component';
import { LoginComponent } from './components/login.component';

const appRoutes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'login', component: LoginComponent},
	{path: 'home', component: HomeComponent},
	{path: 'proyectos', component: ProyectosListComponent},
	{path: 'nuevo-proyecto', component: ProyectoNuevoComponent},
	{path: 'proyectos/:id', component: ProyectoDetailComponent},
	{path: 'editar-proyecto/:id', component: ProyectoEditComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);