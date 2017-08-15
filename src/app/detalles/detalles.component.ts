import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  parametro:String;
  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.ruta.params.subscribe( params=>{
      this.parametro=params.libroId;
    })
  }

}
