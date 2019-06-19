import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    username: "",
    password: ""
  };
  errorMessage: string;
  constructor(private route: ActivatedRoute,
    private authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    this.authService.doLogin(this.user).subscribe(result => {
      if (result.data) {
        localStorage.setItem("user", JSON.stringify(result.data[0].name));
        if(result.data[0].type === 'student'){
        this.router.navigate(['/workspace/student']);}
        if(result.data[0].type === 'teacher'){
          this.router.navigate(['/workspace/teacher']);}
        if(result.data[0].type === 'admin'){
            this.router.navigate(['/workspace/admin']);}
        // console.log(result) 
      }
      else {
        this.errorMessage = result.message;
      }
    });
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
