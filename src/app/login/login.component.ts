import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import { RequestService } from '../request.service';

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
      alert(res.jwt);
    })
  }

  ngOnInit(): void {
  }

}
