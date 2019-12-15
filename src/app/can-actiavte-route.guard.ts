import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {RouterserviceService} from './routerservice.service';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CanActiavteRouteGuard implements CanActivate {

  constructor(private authSer: AuthenticationService, private routerservice: RouterserviceService) {}
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authSer.isUserAuthenticated(this.authSer.getBearerToken()).then((data) => {
        console.log('Guard component');
        console.log(data);
        if (!data) {
           console.log('Inside direct to login');
  
            this.routerservice.routeToLogin();
        }
        return data;
    }); }
  }