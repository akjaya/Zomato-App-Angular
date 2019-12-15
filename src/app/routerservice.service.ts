import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterserviceService {

  constructor(private route: Router ) { }

  routeToLogin() {

    this.route.navigate(['login']);

  }
  routeToDashboard() {
    this.route.navigate(['dashboard']);
  }
  routeToSignUp() {
    this.route.navigate(['signup']);
  }
  routeToHome() {
    this.route.navigate(['']);
  }
  
}

