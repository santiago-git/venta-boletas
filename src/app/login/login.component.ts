import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../servicios/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private SesionService: SesionService, private router: Router) {
    if (this.SesionService.estaAutenticado()) {
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit() {}

  cargando: Boolean = false;
  usuario = {
    correo: "roms@roms.com",
    contrasena: "roms@roms.com"
  }

  login(usuario) {
    this.cargando = true;
    var this_ = this;
    // setTimeout(function(){
    this_.SesionService.crearSesion(usuario.correo);
    this_.router.navigate(['/admin']);
    this_.cargando = false;
    // },3000);
    // console.log(usuario);



  }

}
