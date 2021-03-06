import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LibrosService } from './libros/libros.service';
import { LoginService } from './login/login.service';
import { HomeService } from './home/home.service';
import { SesionService } from './servicios/sesion.service';
import { ConstantesService } from './servicios/constantes.service';
import { PartidosService } from './admin/partidos/partidos.service';
import { NuevoPartidoService } from './admin/nuevo-partido/nuevo-partido.service';
import { EditarPartidoService } from './admin/editar-partido/editar-partido.service';
import { DetallesPartidoService } from './detalles-partido/detalles-partido.service';
import { RegistroClienteService } from './registro-cliente/registro-cliente.service';
import { ClienteService } from './cliente/cliente.service';

import { MaterializeModule } from 'angular2-materialize';
import { LibrosComponent } from './libros/libros.component';
import { PartidosComponent } from './admin/partidos/partidos.component';
import { NuevoPartidoComponent } from './admin/nuevo-partido/nuevo-partido.component';
import { CabeceraComponent } from './plantilla/cabecera/cabecera.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { MenuComponent } from './plantilla/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { DetallesPartidoComponent } from './detalles-partido/detalles-partido.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { EditarPartidoComponent } from './admin/editar-partido/editar-partido.component';
import { CompraBoletaComponent } from './compra-boleta/compra-boleta.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    PartidosComponent,
    NuevoPartidoComponent,
    CabeceraComponent,
    PiePaginaComponent,
    MenuComponent,
    LoginComponent,
    DetallesPartidoComponent,
    AdminComponent,
    HomeComponent,
    EditarPartidoComponent,
    CompraBoletaComponent,
    RegistroClienteComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ConstantesService,
    SesionService,
    LibrosService,
    HomeService,
    LoginService,
    PartidosService,
    NuevoPartidoService,
    EditarPartidoService,
    DetallesPartidoService,
    RegistroClienteService,
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
