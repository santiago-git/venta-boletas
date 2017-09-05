import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantesService } from '../../servicios/constantes.service';

@Injectable()
export class PartidosService {

  constructor(private http: Http) { }

  cargarPartidos() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(ConstantesService.API_URL+"admin/partidos", options)
      .map(res => res.json());
  }

  eliminarPartido(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.delete(ConstantesService.API_URL+"admin/partido/"+id)
      .map(res => res.json());
  }

  cambiarEstadoPartido(partido) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.put(ConstantesService.API_URL+"admin/partido/cambiarEstado", partido)
      .map(res => res.json());
  }

}
