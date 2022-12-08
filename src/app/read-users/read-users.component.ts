import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User, UserInfo } from 'src/model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-read-users',
  templateUrl: './read-users.component.html',
  styleUrls: ['./read-users.component.css']
})
export class ReadUsersComponent implements OnInit {

  users: User[] = [];
  hide: boolean = false;
  constructor(private requsetService: RequestService) { }

  ngOnInit(): void {
    this.getUsers();
    let jwt = this.requsetService.getJwt();
    console.log(jwt_decode(jwt));
    if(!(jwt_decode(jwt) as UserInfo).can_delete)
      this.hide = true;
  }

  getUsers(): void{
    this.requsetService.getUsers().subscribe(
      res => {
       this.users = res;
      }
    );
  }

  editUser(user: User):void{
    console.log("edit user: " + user.email);
  }

  deleteUser(id: number):void{
    this.requsetService.deleteUser(id).subscribe(
      res => {
        console.log(res);
      }
    )
  }

}
