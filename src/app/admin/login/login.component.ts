import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private SesionService: SesionService, private router: Router) { }

  ngOnInit() {
  }

  usuario = {
    correo: "roms@roms.com",
    contrasena: "roms@roms.com"
  }

  login(usuario){
    console.log(usuario);


    this.SesionService.crearSesion(usuario.correo);
    this.router.navigate(['/admin/partidos']);
  }

}
