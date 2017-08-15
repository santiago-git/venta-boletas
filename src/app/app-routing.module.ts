import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { DetallesComponent } from './detalles/detalles.component';
import { PartidosComponent } from './admin/partidos/partidos.component';
import { NuevoPartidoComponent } from './admin/nuevo-partido/nuevo-partido.component';
import { LoginComponent } from './admin/login/login.component';


const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'partidos', component: PartidosComponent, data: { title: "partidos" } },
      { path: 'partidos/nuevo', component: NuevoPartidoComponent, data: { title: "nuevo" } },
      { path: 'login', component: LoginComponent, data: { title: "nuevo" } },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent, data: { title: "Login" } },
  { path: 'libros', component: LibrosComponent },
  { path: 'detalles/:libroId', component: DetallesComponent },
  { path: '**', redirectTo: 'login' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
