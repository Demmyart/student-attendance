
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdminguardService {
  constructor(private router: Router) { }
  canActivate(): boolean {
    if (JSON.parse(localStorage.getItem('type')) === 'admin') {
      return true;
    }
    else {
      return false;
    }
  }
}
