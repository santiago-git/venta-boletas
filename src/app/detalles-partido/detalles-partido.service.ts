import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantesService } from '../servicios/constantes.service';

@Injectable()
export class DetallesPartidoService {

  constructor(private http: Http) { }

  cargarPartido(idPartido) {
    return this.http.get(ConstantesService.API_URL+"partido/"+idPartido)
      .map(res => res.json());
  }

  cargarLocalidadesPartido(idPartido) {
    return this.http.get(ConstantesService.API_URL+"partidoLocalidades/"+idPartido)
      .map(res => res.json());
  }

}
