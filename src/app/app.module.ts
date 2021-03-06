import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProyectosListComponent } from './components/proyectos-list.component';
import { ProyectoNuevoComponent } from './components/proyecto-nuevo.component';
import { ProyectoDetailComponent } from './components/proyecto-detail.component';
import { ProyectoEditComponent } from './components/proyecto-edit.component';
import { LoginComponent } from './components/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProyectosListComponent,
    ProyectoNuevoComponent,
    ProyectoDetailComponent,
    ProyectoEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
