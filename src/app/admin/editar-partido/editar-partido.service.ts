import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantesService } from '../../servicios/constantes.service';


@Injectable()
export class EditarPartidoService {

  constructor(private http: Http) { }

  cargarPartido(id) {
    return this.http.get(ConstantesService.API_URL+"partido/"+id)
      .map(res => res.json());
  }

  modificarPartido(partido) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.put(ConstantesService.API_URL+"admin/partido", partido)
      .map(res => res.json());
  }
  cargarLocalidadesPartido(idPartido) {
    return this.http.get(ConstantesService.API_URL+"partidoLocalidades/"+idPartido)
      .map(res => res.json());
  }

}
