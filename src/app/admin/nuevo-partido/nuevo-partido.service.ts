import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantesService } from '../../servicios/constantes.service';

@Injectable()
export class NuevoPartidoService {

  constructor(private http: Http) { }

  cargarEquipos() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(ConstantesService.API_URL+"admin/equipos", options)
      .map(res => res.json());
  }

  cargarEstadios() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(ConstantesService.API_URL+"admin/estadios", options)
      .map(res => res.json());
  }

  crearPartido(partido) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(ConstantesService.API_URL+"admin/partido", partido)
      .map(res => res.json());
  }

  crearLocalidadPartido(localidadesPartido) {
    return this.http.post(ConstantesService.API_URL+"partidoLocalidades", localidadesPartido)
      .map(res => res.json());
  }

}
