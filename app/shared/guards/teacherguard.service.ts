import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class TeacherguardService {
  constructor(private router: Router) { }
  canActivate(): boolean {
    if (JSON.parse(localStorage.getItem('type')) === 'teacher') {
      return true;
    }
    else {
      return false;
    }
  }
}
