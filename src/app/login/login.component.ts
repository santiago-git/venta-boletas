import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../servicios/sesion.service';
import { LoginService } from './login.service';

declare var jQuery: any;
declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private SesionService: SesionService, private LoginService: LoginService, private router: Router) {
    if (this.SesionService.estaAutenticado()) {
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit() { }
  
  cargando: Boolean = false;
  usuario = {
    nom_usuario: "santi@santi.com",
    contrasena: "santi"
  }

  login(usuario) {
    this.cargando = true;
    // var this_ = this;

    this.LoginService.iniciarSesion(usuario).subscribe(
      res => {
        console.log(res);
        if (res.id != null) {
          this.SesionService.crearSesion(res);
          this.router.navigate(['/admin']);
        } else {
          Materialize.toast('Usuario o contraseña incorrecta', 4000) // 4000 is the duration of the toast
        }
        this.cargando = false;
      },
      err => {
        console.log(err);
        this.cargando = false;
        alert(err._body);
      }
    );


    // setTimeout(function(){
    // },3000);
    // console.log(usuario);



  }

}
