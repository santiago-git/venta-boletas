import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { ConstantesService } from '../servicios/constantes.service';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  iniciarSesion(usuario) {
    return this.http.post(ConstantesService.API_URL + "admin/login", usuario)
      .map(res => res.json());
  }

}
