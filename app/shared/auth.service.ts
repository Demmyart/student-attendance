import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Router} from "@angular/router";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  user: any;
  constructor(private http: Http, private router: Router) {}

  doLogin(user:{username: string, password: string}): Observable<any> {
    return this.http.post("http://127.0.0.1:5000/auth", user).map((response:Response) => {
    let responseObject = response.json();
    localStorage.setItem("info",JSON.stringify(responseObject));
    if(responseObject.data){
    localStorage.setItem('type',JSON.stringify(responseObject.data[0].type))
    }
    return response.json();
  });
  }

  isLoggedIn(){
    return !!localStorage.getItem("user");
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("info");
    this.router.navigate([""]);
  }
}
