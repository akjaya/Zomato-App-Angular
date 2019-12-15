
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  constructor(private httpclient: HttpClient) {

  }

  authenticateUser(data) {

    return this.httpclient.post('http://localhost:3000/auth/v1/', data);
  }

  setBearerToken(token) {

    localStorage.setItem('authToken', token);

    
  }
  clearBearerToken() {

    localStorage.removeItem('authToken');

  }

  getBearerToken() {

    return localStorage.getItem('authToken');

  }

  isUserAuthenticated(token): Promise<boolean> {

    return this.httpclient.post('http://localhost:3000/auth/v1/isAuthenticated', {} ,
    {headers : new HttpHeaders().set(`Authorization`, `Bearer ${token}`)}).pipe(map( response => response['isAuthenticated'])).toPromise(); }
}


