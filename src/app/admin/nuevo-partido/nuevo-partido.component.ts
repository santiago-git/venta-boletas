import { Component, OnInit } from '@angular/core';
import { NuevoPartidoService } from './nuevo-partido.service';
import { Router } from '@angular/router';

declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-nuevo-partido',
  templateUrl: './nuevo-partido.component.html',
  styleUrls: ['./nuevo-partido.component.css']
})
export class NuevoPartidoComponent implements OnInit {

  constructor(private NuevoPartidoService: NuevoPartidoService, private router: Router) { }

  ngOnInit() {
    this.obtenerEquipos();
    this.obtenerEstadios();
    $('select').material_select();
    $('.datepicker').pickadate({
      selectMonths: false, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Hoy',
      clear: 'Limpiar',
      close: 'Aceptar',
      closeOnSelect: false // Close upon selecting a date,
    });
  }

  partido = {
    id_usuario: 2,
    fecha: "2017-09-13",
    max_cant_boletas: 200,
    observaciones: "observaciones",
    estado: true,
    dtoEstadio: {
      id: 1
    },
    dtoequipoVisitante: {
      id: 5
    },
    dtoEquipoLocal: {
      id: 3
    }
  };


  equipos = [];
  estadios = [];

  obtenerEquipos(): void {
    this.NuevoPartidoService.cargarEquipos().subscribe(
      res => { this.equipos = res; console.log(res) },
      err => { console.log(err); alert(err._body); }
    );
  }

  obtenerEstadios(): void {
    this.NuevoPartidoService.cargarEstadios().subscribe(
      res => { this.estadios = res; console.log(res) },
      err => { console.log(err); alert(err._body); }
    );
  }

  enviarPartido(partido): void {
    console.log(partido);

    this.NuevoPartidoService.crearPartido(partido).subscribe(
      res => {
        console.log(res)
        if (res != 0) {
          this.router.navigate(['/admin']);
          Materialize.toast('Partido creado exitosamente!', 4000);
        } else {
          Materialize.toast('No se ha podido crear el partido', 4000); // 4000 is the duration of the toast
        }
      },
      err => { console.log(err); alert(err._body); }
    );
  }

}
