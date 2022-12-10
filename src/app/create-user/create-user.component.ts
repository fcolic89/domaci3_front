import { Component, OnInit } from '@angular/core';
import { User } from 'src/model';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = {} as User;

  createGroup: FormGroup;

  constructor(private route: ActivatedRoute, private requestService: RequestService, private formBuilder: FormBuilder) { 
    this.createGroup = this.formBuilder.group({
      nameText: ['', Validators.required],
      lastnameText: ['', Validators.required],
      emailText: ['', Validators.required],
      passwordText: ['', Validators.required],
      readCheck: [false],
      createCheck: [false],
      updateCheck: [false],
      deleteCheck: [false],
    });
  }

  createUser(): void{
    this.requestService.createUser(this.user).subscribe(res=>{
      console.log(res.status);
      if(res.status === 200)
        alert("Uspesno kreiran korisnik");
    }, (err:HttpResponseBase)=>{alert("Doslo je do greske prilikom kreiranja korisniksa!")})
  }

  ngOnInit(): void {
  }

}
