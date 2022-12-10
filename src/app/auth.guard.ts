import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/model';

@Injectable()
export class AuthGuard implements CanActivate {

  token: string | undefined | null = '';

  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.token = localStorage.getItem("jwt")?.toString();
    console.log("putanja " + route.url[0]);
    if((this.token == null || this.token == '')){
      alert("Portebno je da se prijavite!");
      this.router.navigate(["/login"]);
      return false;
    }
    let url: UrlSegment = route.url[0];
    let userInfo: UserInfo = jwtDecode(this.token);
    if(url.path.includes('create') && userInfo.can_create)
      return true;
    else if(url.path.includes('edit') && userInfo.can_update)
      return true;
    else if(url.path.includes('read') && userInfo.can_read)
      return true;

    alert("Korisnik nema mogucnost koriscenja ove funkcije!")

    return false;
  }
}
