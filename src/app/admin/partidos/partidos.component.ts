import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  constructor() { }

  libros=[];

  ngOnInit() {
    this.libros=[1,2,3,4,5,6,7,8,9];
  }

}
