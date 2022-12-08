import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams, HttpResponse, HttpResponseBase} from "@angular/common/http";
import { GetUsersResponse, LoginResponse, User } from 'src/model';
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse>{

     return this.httpClient.post<LoginResponse>(`${this.url}/auth/login`, {
      email: email,
      password: password,
    })
  }

  getUsers(): Observable<User[]>{
    
    const headerDict = {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getJwt(),
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    
    return this.httpClient.get<User[]>('http://127.0.0.1:8081/api/users/all', requestOptions);
  }

  getUserById(num: Number):Observable<User>{

    const headerDict = {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getJwt(),
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.httpClient.get<User>('http://127.0.0.1:8081/api/users/'+num, requestOptions);
  }

  deleteUser(id: number):Observable<HttpResponseBase>{
    const headerDict = {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.getJwt(),
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };

    return this.httpClient.get<HttpResponseBase>('http://127.0.0.1:8081/api/users/'+id, requestOptions);
  }

  getJwt(): string{
    let tmp: string | null | undefined;

    tmp = localStorage.getItem('jwt');
    if(tmp === null || tmp === undefined)
      return '';
    else
      return tmp.toString()
  }

  getAuthHeader(): HttpHeaders{
    var h = new HttpHeaders();
    h.append('Authorization', 'Bearer ' + this.getJwt());
    return h;
  }

}

