import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class SesionService {
  // router: any;

  constructor(private router: Router) { }

  usuario: Object;

  canActivate() {
    if (this.obtenerUsuario()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  crearSesion(usuario) {
    window.localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  destruirSesion() {
    this.usuario = null;
    window.localStorage.clear();
  }

  obtenerUsuario() {
    var usuario: any = this.usuario;
    if (!usuario) {
      usuario = window.localStorage.getItem('usuario');
    }
    return usuario;
  };

  estaAutenticado() {
    return (this.obtenerUsuario() != null);
  }

}
