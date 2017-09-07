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

  constructor(private NuevoPartidoService: NuevoPartidoService, private router: Router) {
    this.obtenerEquipos();
    this.obtenerEstadios();
  }

  ngOnInit() {
    $('.modal').modal();
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
    // fecha: "2017-09-13",
    max_cant_boletas: null,
    observaciones: null,
    estado: true,
    fecha: "2017-03-05",
    dtoEstadio: {
      id: null
    },
    dtoequipoVisitante: {
      id: null
    },
    dtoEquipoLocal: {
      id: null
    }
  };


  equipos = [];
  estadios = [];

  obtenerEquipos(): void {
    this.NuevoPartidoService.cargarEquipos().subscribe(
      res => { this.equipos = res; },
      err => { console.log(err); alert(err._body); }
    );
  }

  obtenerEstadios(): void {
    this.NuevoPartidoService.cargarEstadios().subscribe(
      res => { this.estadios = res; },
      err => { console.log(err); alert(err._body); }
    );
  }

  enviarPartido(partido): void {
    console.log(partido);
    // console.log(this.localidadPartido);
    this.NuevoPartidoService.crearPartido(partido).subscribe(
      res => {
        if (res != 0) {
          // this.router.navigate(['/admin']);
          $('#modalLocalidades').modal('open');
          Materialize.toast('Partido creado exitosamente!', 4000);
        } else {
          Materialize.toast('No se ha podido crear el partido', 4000); // 4000 is the duration of the toast
        }
      },
      err => { console.log(err); alert(err._body); }
    );
  }

  localidadesPartido = [
    { id_partido: 66, id_localidad: 1, nombre: "Norte", num_boletas: null, precio: null },
    { id_partido: 66, id_localidad: 2, nombre: "Sur", num_boletas: null, precio: null },
    { id_partido: 66, id_localidad: 3, nombre: "Oriente", num_boletas: null, precio: null },
    { id_partido: 66, id_localidad: 4, nombre: "Occidente", num_boletas: null, precio: null },
  ]

  enviarLocalidadesPartido(localidadesPartido): void {
    console.log(localidadesPartido);
    $('#modalLocalidades').modal('close');
    this.NuevoPartidoService.crearLocalidadPartido(localidadesPartido).subscribe(
      res => {
        console.log(res)
        if (res != 0) {
          Materialize.toast('Se ha insertado todo!', 4000);
        } else {
          Materialize.toast('fallo!', 4000);
        }
      },
      err => { console.log(err); alert(err._body); }
    );
    // for (let localidadPartido of localidadesPartido) {
    //   this.NuevoPartidoService.crearLocalidadPartido(localidadPartido).subscribe(
    //     res => {
    //       console.log(res)
    //       if (res != 0) {
    //         Materialize.toast('Se ha insertado todo!', 4000);
    //       }else{
    //         Materialize.toast('fallo!', 4000);
    //       }
    //     },
    //     err => { console.log(err); alert(err._body); }
    //   );
    // }


  }

}
