import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private ClienteService: ClienteService) { }

  ngOnInit() {
  }

  partidoSeleccionado(){
    this.ClienteService.obtenerPinfo();
    // return this.ClienteService.obtenerPartidoSeleccionado();
  }

}
