import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User, UserInfo } from 'src/model';
import { RequestService } from '../request.service';
import {HttpResponseBase} from "@angular/common/http";

@Component({
  selector: 'app-read-users',
  templateUrl: './read-users.component.html',
  styleUrls: ['./read-users.component.css']
})
export class ReadUsersComponent implements OnInit {

  users: User[] = [];

  constructor(public requestService: RequestService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.requestService.getUsers().subscribe(
      res => {
       this.users = res;
      },(err:User[])=>{alert("Doslo je do greske prilikom skupljanja korisniksa!")}
    );
  }

  deleteUser(id: number):void{
    this.requestService.deleteUser(id).subscribe(
      res => {
        this.getUsers();
      }, (err:HttpResponseBase)=>{alert("Doslo je do greske prilikom brisanja korisniksa!")}
    );
  }

}
