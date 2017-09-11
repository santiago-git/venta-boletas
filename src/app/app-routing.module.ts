import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { PartidosComponent } from './admin/partidos/partidos.component';
import { NuevoPartidoComponent } from './admin/nuevo-partido/nuevo-partido.component';
import { LoginComponent } from './login/login.component';
import { DetallesPartidoComponent } from './detalles-partido/detalles-partido.component';
import { SesionService } from './servicios/sesion.service';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { EditarPartidoComponent } from './admin/editar-partido/editar-partido.component';
import { CompraBoletaComponent } from './compra-boleta/compra-boleta.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [SesionService], children: [
      {
        path: 'partido', children: [
          { path: '', component: PartidosComponent, data: { title: "nuevo" } },
          { path: 'editar/:partidoId', component: EditarPartidoComponent, data: { title: "Editar" } },
          { path: 'nuevo', component: NuevoPartidoComponent, data: { title: "nuevo" } },
        ]
      },
      { path: '', redirectTo: 'partido', pathMatch: 'full' },
      { path: '**', redirectTo: 'partido' },
    ]
  },
  {
    path: '', component: ClienteComponent, data: { title: "cliente" }, children: [
      { path: 'home', component: HomeComponent, data: { title: "Home" } },
      { path: 'detalles/:partidoId', component: DetallesPartidoComponent, data: { title: "Detalles" } },
      { path: 'registro', component: RegistroClienteComponent, data: { title: "Regsistrar cliente" } },
      { path: 'compra-boleta', component: CompraBoletaComponent, data: { title: "Comprar Boleta" } },
      { path: '', redirectTo: 'home', pathMatch: 'full' },            
    ]
  },
  
  { path: 'login', component: LoginComponent, data: { title: "Login" } },
  { path: '**', redirectTo: 'home' },
  // { path: 'libros', component: LibrosComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }