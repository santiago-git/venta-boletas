import { Component, OnInit } from '@angular/core';
import { PartidosService } from './partidos.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  partidos = [];

  constructor(private PartidosService: PartidosService) { }

  ngOnInit() {

    this.ObtenerPartidos();

    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      // ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      //   alert("Ready");
      //   console.log(modal, trigger);
      // }, 
      // complete: function() { alert('Closed'); } // Callback for Modal close
    }
    );
  }

  ObtenerPartidos(): void {
    this.PartidosService.cargarPartidos().subscribe(
      res => { this.partidos = res; console.log(res) },
      err => { console.log(err); alert(err._body); }
    );
  }

  idPartido: Number;

  modalEliminar(id) {
    this.idPartido = id;
    $('#modalEliminar').modal('open');
  }

  eliminarPartido() {
    this.PartidosService.eliminarPartido(this.idPartido).subscribe(
      res => {
        console.log(res);
        this.ObtenerPartidos();
        $('#modalEliminar').modal('close');
      },
      err => {
        console.log(err); alert(err._body);
      }
    );
  }

}
