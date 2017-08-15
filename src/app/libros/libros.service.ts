import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LibrosService {

  constructor(private http: Http) {
  }


  cargarLibros() {
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsIm5vbWJyZSI6IkNhbWlsbyIsImVtYWlsIjoicm9tc18xOTVAaG90bWFpbC5jb20iLCJjb250cmFzZW5hIjoicm9tc18xOTVAaG90bWFpbC5jb20iLCJ0aXBvX3VzdWFyaW8iOiJhZG1pbiIsInNhbGRvIjoyMDAwMCwiY3JlYXRlZEF0IjoiMjAxNy0wNy0yNFQwNToxODo1OC4wMDBaIiwidXBkYXRlZEF0IjoiMjAxNy0wNy0yNFQwNToxODo1OC4wMDBaIiwiaWF0IjoxNTAwODc0NzY0LCJleHAiOjE1MzI0MzIzNjR9.nc6_tIfygNdNRH6p2TrQgvnc4V20ZWQqOdK3Frp-6Gg";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append("token", token);

    let options = new RequestOptions({ headers: headers });

    return this.http.get("https://api-tiendalibros.herokuapp.com/libro", options)
    // return this.http.get("http://localhost:2000/admin/ciudades", options)
    
      .map(res => res.json());
  }

}