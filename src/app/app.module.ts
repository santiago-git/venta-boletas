import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LibrosService } from './libros/libros.service';

import { MaterializeModule } from 'angular2-materialize';
import { LibrosComponent } from './libros/libros.component';
import { DetallesComponent } from './detalles/detalles.component';
import { PartidosComponent } from './admin/partidos/partidos.component';
import { NuevoPartidoComponent } from './admin/nuevo-partido/nuevo-partido.component';
import { CabeceraComponent } from './plantilla/cabecera/cabecera.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { MenuComponent } from './plantilla/menu/menu.component';
import { LoginComponent } from './admin/login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LibrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
