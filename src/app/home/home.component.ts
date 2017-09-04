import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  partidos = [];

  constructor(private HomeService: HomeService) { }

  ngOnInit() {
    this.ObtenerPartidos();
  }

  ObtenerPartidos(): void {
    this.HomeService.cargarPartidos().subscribe(
      res => { this.partidos = res; console.log(res) },
      err => { console.log(err); alert(err._body); }
    );
  }

}
