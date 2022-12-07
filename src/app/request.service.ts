import { Injectable } from '@angular/core';

import {HttpClient, HttpParams} from "@angular/common/http";
import { LoginResponse } from 'src/model';
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

  getJwt(): string{
    let tmp: string | null | undefined;

    tmp = localStorage.getItem('jwt');
    if(tmp === null || tmp === undefined)
      return '';
    else
      return tmp.toString()
  }
}

