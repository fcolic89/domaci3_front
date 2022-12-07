import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import { RequestService } from '../request.service';
import jwt_decode from 'jwt-decode';
import { UserInfo } from 'src/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginGroup: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private requestService: RequestService) {
    this.loginGroup = this.formBuilder.group({
      lgEmail: ['', Validators.required],
      lgPassword: ['', Validators.required]
    })
   }

  login(){
    this.requestService.login(
      this.loginGroup.get("lgEmail")?.value,
      this.loginGroup.get("lgPassword")?.value
    ).subscribe(res => {
      if(res.jwt.length == 0)
      localStorage.removeItem("jwt")
    localStorage.setItem("jwt", JSON.parse(jwt_decode(res.jwt)));
    })
  }

  ngOnInit(): void {
    localStorage.setItem("jwt","eyJhbGciOiJIUzUxMiJ9.eyJjYW5fcmVhZCI6dHJ1ZSwiY2FuX2NyZWF0ZSI6dHJ1ZSwic3ViIjoidXNlcjBAbWFpbC5jb20iLCJjYW5fZGVsZXRlIjp0cnVlLCJjYW5fdXBkYXRlIjp0cnVlfQ.TNSLNv0XqzFBTsVpi4OLWNAziLZscbnGTka07pHz10dUruUfVkYARWX4r7Hz6ffTo42h__JXPoemVssCtWiBwQ");    
  }

}
