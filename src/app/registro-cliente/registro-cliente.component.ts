import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroClienteService } from './registro-cliente.service';
import { ClienteService } from '../cliente/cliente.service';

declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  constructor(private router: Router, private RegistroClienteService: RegistroClienteService, private ClienteService: ClienteService) { }

  ngOnInit() {
  }

  cliente = {};

  registrar(cliente) {
    // console.log(cliente);

    this.RegistroClienteService.registrar(cliente).subscribe(
      res => {
        console.log(res);
        if (res == 1) {
          this.guardarCliente(cliente);
          Materialize.toast('Se ha registrado correctamente', 4000) // 4000 is the duration of the toast
          this.router.navigate(['/compra-boleta']);
        } else {
          Materialize.toast('No se ha podido registrar', 4000) // 4000 is the duration of the toast
        }
      },
      err => {
        console.log(err);
        alert(err._body);
      }
    );
  }

  guardarCliente(cliente){
    this.ClienteService.almacenarCliente(cliente);
  }

}
