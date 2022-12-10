import { Component } from '@angular/core';
import { RequestService } from './request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'domaci3_front';
  constructor(public requestService: RequestService, private router: Router){}
  ngOnInit(): void{
    console.log("hello from app");
    console.log("iz app: can_read - " + this.requestService.userInfo.can_read);
  }
  logout(): void{
    this.requestService.logout();
    this.router.navigate(['/login']);
  }
}
