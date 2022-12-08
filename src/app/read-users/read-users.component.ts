import { Component, OnInit } from '@angular/core';
import { User } from 'src/model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-read-users',
  templateUrl: './read-users.component.html',
  styleUrls: ['./read-users.component.css']
})
export class ReadUsersComponent implements OnInit {

  users: User[] = [];

  constructor(private requsetService: RequestService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.requsetService.getUsers().subscribe(
      res => {
       this.users = res;
      }
    );
  }

}
