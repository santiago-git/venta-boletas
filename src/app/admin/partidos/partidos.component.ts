import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  libros = [];

  constructor() {
    this.libros = [
      { id: 1, descripcion: "dfvdfv erdv drfververvcer verververve rver ververve rver vdrf verve rvcerdr fverver vcerdrfvber vervce rdrfververb vcerdrfver vervce rdrfverve rvcerdr fververv cererv erv" },
      { id: 2, descripcion: "dfvdfv erdv drfverv ervcerdrfve rvervce rdrfverve rvcer verververve rver ververve rver verv erv" },
      { id: 3, descripcion: "dfvdfv erdv drfververvce drfververvc erdrfverv ervcerdrfverver vcerdrfve rvervce rdrfv ervervce rdrfver vervcerdrfver vervcerdrfverve rvcerdrfver vervcerdrfververvcerd rfververvce rdrfve rvervcerdr fververvcerr verververve rver ververve rver verv erv" },
      { id: 4, descripcion: "dfvdfv erdv drfververvcer verververve rver ververve rver verv erv" },
      { id: 5, descripcion: "dfvdfv erdv drfverd rfververvcerdrfver verv erdrfververvcerdrfververvcerdrfverv ervcerdrfververvcerdrfververvcerdrfververvcerdrfververvcervervcer verververve rver ververve rver verv erv" },
      { id: 6, descripcion: "dfvdfv erdv drfververvcer verververve rver ververve  rver verv erv" },
      { id: 7, descripcion: "dfvdfv erdv drfververvcdrfververvcerdrfververvcerer verververve rver ververve rver verv erv" },
      { id: 8, descripcion: "dfvdfv erdv drfverv ervcer ververve rve rver ververve r verdrfververv cerdrfverver cerdrfver vervcerd rfververvc erdrfverver vcerdrfververv cerdrf ververvcerdr fververv cerdrfv ervervce rdrfve rvervcerd rfverver vcerdrfverve rvcerd rfververvcer verv erv" },
      { id: 9, descripcion: "dfvdfv erdv drfverv erdrfververvcervcer verververve rver ververve  rver verv erv" },
      { id: 10, descripcion: "dfvdfv erdv drfververvcer verververve rver ververve rver verv drfve rvervcerdrfververvcerdrfve rve rvcerd rfverve rvcerdrfverve rvcerdrfververvce rdrfverv ervcerdrfve rvervcererv" },
    ];
  }

  ngOnInit() {

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

  modalEliminar(id){
    console.log(id)
    $('#modalEliminar').modal('open');
  }

  eliminarPartido(id){
    console.log("Eliminar Partido");
    $('#modalEliminar').modal('close');
  }

}
