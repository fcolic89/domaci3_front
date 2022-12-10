import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/model';
import { RequestService } from '../request.service';
import {HttpResponseBase} from "@angular/common/http";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User = {} as User;
  editGroup: FormGroup;

  constructor(private route: ActivatedRoute, private requestService: RequestService, private formBuilder: FormBuilder) { 
    this.editGroup = this.formBuilder.group({
      nameText: ['', Validators.required],
      lastnameText: ['', Validators.required],
      emailText: ['', Validators.required],
      readCheck: [false],
      createCheck: [false],
      updateCheck: [false],
      deleteCheck: [false],
    });
  }

  updateUser(): void{
    this.requestService.updateUser(this.user).subscribe(res => {
      console.log("uspesan send");
    },(err:HttpResponseBase)=>{alert("Doslo je do greske prilikom azuriranja korisnika!")})
  }

  ngOnInit(): void {
    let id: number;
    let s: string | null = this.route.snapshot.paramMap.get('id');
    if(s === null)
      console.log("no id");
    else{
     id = +s;
      this.requestService.getUserById(id).subscribe(res => {
        this.user = res;

      }, (err:HttpResponseBase)=>{alert("Doslo je do greske prilikom skupljanja informacija o  korisniku!")})
    }
  }

}
