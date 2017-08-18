import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { DetallesComponent } from './detalles/detalles.component';
import { PartidosComponent } from './admin/partidos/partidos.component';
import { NuevoPartidoComponent } from './admin/nuevo-partido/nuevo-partido.component';
import { LoginComponent } from './admin/login/login.component';
import { DetallesPartidoComponent } from './detalles-partido/detalles-partido.component';
import { SesionService } from './servicios/sesion.service';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [SesionService], children: [
      {
        path: 'partido', children: [
          { path: '', component: PartidosComponent, data: { title: "nuevo" } },
          { path: 'nuevo', component: NuevoPartidoComponent, data: { title: "nuevo" } },
          { path: ':libroId', component: DetallesComponent },
        ]
      },
      { path: '', redirectTo: 'partido', pathMatch: 'full' },
      { path: '**', redirectTo: 'partido' },
    ]
  },
  // { path: 'login', canDeactivate: [SesionService], component: LoginComponent, data: { title: "Login" } },
  { path: 'login', component: LoginComponent, data: { title: "Login" } },
  { path: 'libros', component: LibrosComponent },
  { path: '**', redirectTo: 'login' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }