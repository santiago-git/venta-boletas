import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { EditarPartidoService } from './editar-partido.service';
import { NuevoPartidoService } from '../nuevo-partido/nuevo-partido.service';
import { Router } from '@angular/router';

declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-editar-partido',
  templateUrl: './editar-partido.component.html',
  styleUrls: ['./editar-partido.component.css']
})
export class EditarPartidoComponent implements OnInit {

  parametro: Number;
  partido = {
    id_usuario: null,
    // fecha: "2017-09-13",
    max_cant_boletas: null,
    observaciones: null,
    estado: null,
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


  constructor(private ruta: ActivatedRoute,
    private EditarPartidoService: EditarPartidoService,
    private NuevoPartidoService: NuevoPartidoService,
    private router: Router) {


    this.obtenerEquipos();
    this.obtenerEstadios();

  }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      this.parametro = params.partidoId;
      this.ObtenerPartido(this.parametro);
    })
    this.obtenerLocalidadesPartido();
    $('ul.tabs').tabs();
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

  ObtenerPartido(id): void {
    this.EditarPartidoService.cargarPartido(id).subscribe(
      res => { this.partido = res; },
      err => { console.log(err); alert(err._body); }
    );
  }

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

  modificarPartido(partido) {
    console.log(partido);
    this.EditarPartidoService.modificarPartido(partido).subscribe(
      res => {
        console.log(res)
        if (res != 0) {
          this.router.navigate(['/admin']);
          Materialize.toast('Se ha actualizado exitosamente!', 4000);
        } else {
          Materialize.toast('No se ha podido actualizar el partido', 4000); // 4000 is the duration of the toast
        }
      },
      err => { console.log(err); alert(err._body); }
    );
  }

  localidadesPartido = []

  existe: Boolean = false;
  obtenerLocalidadesPartido(): void {
    this.localidadesPartido = [
      { id_partido: this.parametro, id_localidad: 1, nombre: "Norte", num_boletas: null, precio: null },
      { id_partido: this.parametro, id_localidad: 2, nombre: "Sur", num_boletas: null, precio: null },
      { id_partido: this.parametro, id_localidad: 3, nombre: "Oriente", num_boletas: null, precio: null },
      { id_partido: this.parametro, id_localidad: 4, nombre: "Occidente", num_boletas: null, precio: null },
    ]

    this.EditarPartidoService.cargarLocalidadesPartido(this.parametro).subscribe(
      res => {
        if (res.length > 1) {
          this.existe = true;
          this.localidadesPartido = res;
        } else {
          this.existe = false;
        }
      },
      err => { console.log(err); alert(err._body); }
    );

  }



  guardarLocalidadesPartido(localidadesPartido): void {

    if (!this.existe) {
      this.NuevoPartidoService.crearLocalidadPartido(localidadesPartido).subscribe(
        res => {
          console.log(res)
          if (res != 0) {
            Materialize.toast('Se han guardado las localidades!', 4000);
            this.router.navigate(['/admin']);
          } else {
            Materialize.toast('fallo!', 4000);
          }
        },
        err => { console.log(err); alert(err._body); }
      );
    } else {
      this.modificarLocalidadesPartido(localidadesPartido);
    }
  }


  modificarLocalidadesPartido(localidadesPartido): void {
    console.log(localidadesPartido);
    Materialize.toast('Aun no se modifica!', 4000);    
  }

}
