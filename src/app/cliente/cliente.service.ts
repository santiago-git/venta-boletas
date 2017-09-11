import { Injectable } from '@angular/core';

@Injectable()
export class ClienteService {

  constructor() { }

  partidoSeleccionado:object;
  localidadesPartido:Array<object>;
  clienteCompra:object;
  almacenarPartidoSeleccionado(partido){
    this.partidoSeleccionado=partido;
  }

  obtenerPinfo():void{
    console.log(this.partidoSeleccionado);
    console.log(this.localidadesPartido);    
    console.log(this.clienteCompra);
    // return this.partidoSeleccionado;
  }

  almacenarCliente(cliente){
    this.clienteCompra=cliente;
  }

  almacenarLocalidades(localidades){
    this.localidadesPartido=localidades;
  }

  obtenerCliente():object{
    return this.clienteCompra;
  }

}
