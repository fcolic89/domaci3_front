import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import jwtDecode from 'jwt-decode';
import { LoginResponse, UserInfo } from 'src/model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginGroup: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private requestService: RequestService, private router: Router) {
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
      if(res.jwt.length === 0)
      localStorage.removeItem("jwt")
    localStorage.setItem("jwt", res.jwt);
    this.requestService.userInfo = jwtDecode(res.jwt) as UserInfo;
    if(this.requestService.userInfo.can_read)
      this.router.navigate(['/read']);
    else if(this.requestService.userInfo.can_create)
      this.router.navigate(['create']);
    else if(!this.requestService.userInfo.can_delete && !this.requestService.userInfo.can_update){
      alert("Korisnik nema nijednu permisiju! Odjavljivanje!");
      this.requestService.logout();
    }
    },(err:LoginResponse)=>{alert("Doslo je do greske prilikom prijavljivanja!")})
  }

  ngOnInit(): void {
  }

}
