import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConstantesService } from '../servicios/constantes.service';

@Injectable()
export class RegistroClienteService {

  constructor(private http: Http) { }

  registrar(cliente) {
    return this.http.post(ConstantesService.API_URL + "cliente", cliente)
      .map(res => res.json());
  }

}
