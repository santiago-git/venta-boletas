import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class SesionService {
  // router: any;

  constructor(private router: Router) { }

  canActivate() {

    if("algo"=="algo"){
      return true;
    }

    console.log("No esta logueado")
    
    this.router.navigate(['/login']);
    return false;
  }

}
