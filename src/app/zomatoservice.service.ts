import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZomatoserviceService {
  arryy : Array<any> = [];
  

  constructor(private httpClient: HttpClient) {

   
   }

  searchloacationName(place : string): Observable<any> {

    return this.httpClient.get<any>(`https://developers.zomato.com/api/v2.1/cities?q=${place}`, {
      headers: new HttpHeaders().set('user-key', '19cc9aa3a02e0890215865daa4617a0e')
 });
    
}



  searchresturantsById(place_id: number) {

    return this.httpClient.get<any>(`https://developers.zomato.com/api/v2.1/search?entity_id=${place_id}&entity_type=city&count=5`, {
      headers: new HttpHeaders().set('user-key', '19cc9aa3a02e0890215865daa4617a0e')
 });
  }

  get_array_all( )  {
    return this.arryy;
  }
  setVisitedIdToken(token: string, data:any ) {
    this.arryy = data;

    localStorage.setItem('set_id', token);

  }
  getVisitedIdToken(){
    return localStorage.getItem('set_id');
  }

}
