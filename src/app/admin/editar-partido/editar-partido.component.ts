import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-editar-partido',
  templateUrl: './editar-partido.component.html',
  styleUrls: ['./editar-partido.component.css']
})
export class EditarPartidoComponent implements OnInit {

  parametro: Number;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      this.parametro = params.partidoId;
    })
  }

}
