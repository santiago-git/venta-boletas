import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-detalles-partido',
  templateUrl: './detalles-partido.component.html',
  styleUrls: ['./detalles-partido.component.css']
})
export class DetallesPartidoComponent implements OnInit {

  parametro:Number;
  public cursos:Array<any>;
  constructor(private ruta: ActivatedRoute) {
    this.cursos = [
      {"id": 1, "titulo":"Curso de Symfony3"},
      {"id": 2, "titulo":"Curso de Zend Framework 2"},
      {"id": 3, "titulo":"Aprende PHP desde cero con 36 ejercicios prácticos"},
      {"id": 4, "titulo":"Curso de Angular 2"}
  ];
  }

  ngOnInit() {
    this.ruta.params.subscribe( params=>{
      this.parametro=params.partidoId;
    })
  }



}
