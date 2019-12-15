import { Injectable } from '@angular/core';
import { Resturants } from '../app/resturants';
import { Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../app/authentication.service';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class FavouriteserviceService {

 rest_list: Array<Resturants>;
 RestSubject: BehaviorSubject<Array<Resturants>>;



  constructor(private httpclient: HttpClient, private authServ: AuthenticationService) {
    this.rest_list = [];
    this.RestSubject = new BehaviorSubject(this.rest_list);
    this.fetchNotesFromServer();

  }

  fetchNotesFromServer() {

    return this.httpclient.get<Array<Resturants>> ('http://localhost:3000/api/v1/favourites', {headers : new HttpHeaders().set(`Authorization` ,
    `Bearer ${this.authServ.getBearerToken()}`)
     }).subscribe((data) => {
       this.rest_list= data;
       this.RestSubject.next(this.rest_list);
     }, (err: any) => {
      this.RestSubject.error(err);
    });
  }

  getFavlist(): BehaviorSubject<Array<Resturants>> {
    return this.RestSubject;
  }

  addfav(note: Resturants): Observable<Resturants> {


    return this.httpclient.post<Resturants>('http://localhost:3000/api/v1/favourites', note, {headers : new HttpHeaders().set(`Authorization` ,
    `Bearer ${this.authServ.getBearerToken()}`)
   }).do((newnote =>  {

      this.rest_list.push(newnote);
      this.RestSubject.next(this.rest_list);

   })); }

   delFav(n: number): Observable<Resturants> {

    return this.httpclient.delete<Resturants> ('http://localhost:3000/api/v1/favourites/'+n, {headers : new HttpHeaders().set(`Authorization` ,
    `Bearer ${this.authServ.getBearerToken()}`)
     }).do(( data => {

      this.fetchNotesFromServer();
     }))
    }
 
}