import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { ConstantesService } from '../servicios/constantes.service';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  cargarPartidos() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(ConstantesService.API_URL+"partidos", options)
      .map(res => res.json());
  }

}
