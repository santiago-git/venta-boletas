import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LibrosService } from './libros/libros.service';
import { SesionService } from './servicios/sesion.service';

import { MaterializeModule } from 'angular2-materialize';
import { LibrosComponent } from './libros/libros.component';
import { DetallesComponent } from './detalles/detalles.component';
import { PartidosComponent } from './admin/partidos/partidos.component';
import { NuevoPartidoComponent } from './admin/nuevo-partido/nuevo-partido.component';
import { CabeceraComponent } from './plantilla/cabecera/cabecera.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { MenuComponent } from './plantilla/menu/menu.component';
import { LoginComponent } from './admin/login/login.component';
import { DetallesPartidoComponent } from './detalles-partido/detalles-partido.component';
import { AdminComponent } from './admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    DetallesComponent,
    PartidosComponent,
    NuevoPartidoComponent,
    CabeceraComponent,
    PiePaginaComponent,
    MenuComponent,
    LoginComponent,
    DetallesPartidoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LibrosService,
    SesionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
