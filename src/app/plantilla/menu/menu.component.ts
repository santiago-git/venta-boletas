import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../servicios/sesion.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private SesionService: SesionService) { }

  ngOnInit() {
  }

  cerrarSesion(){
    this.SesionService.cerrarSesion();
  }

}
