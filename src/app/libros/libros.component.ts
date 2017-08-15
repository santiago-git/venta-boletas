import { Component, OnInit, Renderer2 } from '@angular/core';
import { LibrosService } from "./libros.service"
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  results: Array<Object>;

  constructor(private http: Http, private renderer: Renderer2, private LibrosService: LibrosService) { }

  ngOnInit() {
    this.cargarLibros();
  }

  libros: Array<Object>;

  cargarLibros(): void {

    this.LibrosService.cargarLibros().subscribe(
      res => { this.libros = res; console.log(res) },
      err => { console.log(err); alert(err._body); }
    );
  }

  antiguo: HTMLElement;

  mostrarActivo(elemento: HTMLElement, libro) {
    console.log(libro)
    if (this.antiguo) {
      this.renderer.removeClass(this.antiguo, "seleccionado");
      this.renderer.removeClass(this.antiguo, "active");
    }
    this.renderer.addClass(elemento, "seleccionado");
    this.renderer.addClass(elemento, "active");

    this.antiguo = elemento;
  }

}
