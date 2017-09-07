import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { DetallesPartidoService } from "./detalles-partido.service";

@Component({
  selector: 'app-detalles-partido',
  templateUrl: './detalles-partido.component.html',
  styleUrls: ['./detalles-partido.component.css']
})
export class DetallesPartidoComponent implements OnInit {

  parametro: Number;

  constructor(private ruta: ActivatedRoute, private DetallesPartidoService: DetallesPartidoService) { }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      this.parametro = params.partidoId;
    })
    this.ObtenerPartido(this.parametro);
    this.obtenerLocalidadesPartido(this.parametro);
  }

  partido = {
    id_usuario: null,
    // fecha: "2017-09-13",
    max_cant_boletas: null,
    observaciones: null,
    estado: null,
    dtoEstadio: {
      id: null,
      ciudad:{}
    },
    dtoequipoVisitante: {
      id: null
    },
    dtoEquipoLocal: {
      id: null
    }
  };
  ObtenerPartido(idPartido): void {
    this.DetallesPartidoService.cargarPartido(idPartido).subscribe(
      res => { this.partido = res; console.log(res) },
      err => { console.log(err); alert(err._body); }
    );
  }

  localidadesPartido = []

  obtenerLocalidadesPartido(idPartido): void {
    this.DetallesPartidoService.cargarLocalidadesPartido(idPartido).subscribe(
      res => {
        console.log(res);
        this.localidadesPartido=res;
      },
      err => { console.log(err); alert(err._body); }
    );

  }



}
