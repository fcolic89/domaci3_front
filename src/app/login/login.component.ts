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
    localStorage.setItem("jwt", jwt_decode(res.jwt));
    })
  }

  ngOnInit(): void {
    //sve je true
    // localStorage.setItem("jwt","eyJhbGciOiJIUzUxMiJ9.eyJjYW5fcmVhZCI6dHJ1ZSwiY2FuX2NyZWF0ZSI6dHJ1ZSwic3ViIjoidXNlcjBAbWFpbC5jb20iLCJjYW5fZGVsZXRlIjp0cnVlLCJjYW5fdXBkYXRlIjp0cnVlfQ.TNSLNv0XqzFBTsVpi4OLWNAziLZscbnGTka07pHz10dUruUfVkYARWX4r7Hz6ffTo42h__JXPoemVssCtWiBwQ");    
    //samo je read true
    localStorage.setItem("jwt", 'eyJhbGciOiJIUzUxMiJ9.eyJjYW5fcmVhZCI6dHJ1ZSwiY2FuX2NyZWF0ZSI6ZmFsc2UsInN1YiI6InVzZXIwQG1haWwuY29tIiwiY2FuX2RlbGV0ZSI6ZmFsc2UsImNhbl91cGRhdGUiOmZhbHNlfQ.IMbtZr2_NCSxI0CRNyKBywUfMZrms_zKSk800pOOTuBv1KVib-z6I40hdSL1Bf8HpOMDNSw23mL1OnPgAe1riw')
  }

}
