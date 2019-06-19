import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class StudentguardService {
  constructor(private router: Router) { }
  canActivate(): boolean {
    if (JSON.parse(localStorage.getItem('type')) === 'student') {
      return true;
    }
    else {
      return false;
    }
  }
}
