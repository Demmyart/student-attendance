import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AuthguardService {

  constructor(private router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
