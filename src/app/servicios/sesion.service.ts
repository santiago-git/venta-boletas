import { Injectable } from '@angular/core';
import { Router, CanActivate, CanDeactivate } from '@angular/router';

@Injectable()
export class SesionService implements CanActivate {
  // router: any;

  usuario: Object;

  constructor(private router: Router) { }

  canActivate(): boolean {
    // console.log(this.estaAutenticado());
    if (this.estaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  CanDeactivate(): boolean {
    // console.log(this.estaAutenticado());
    if (this.estaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  crearSesion(usuario) {
    this.usuario = usuario;
    window.localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  cerrarSesion() {
    this.usuario = null;
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

  obtenerUsuario() {
    var us = this.usuario;
    if (!us) {
      us = window.localStorage.getItem('usuario');
    }
    return us;
  };

  estaAutenticado() {
    return (this.obtenerUsuario() != null);
  }

}
