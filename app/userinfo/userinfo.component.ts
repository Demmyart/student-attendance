import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {ActivatedRoute,Router} from '@angular/router';



@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  data = JSON.parse(localStorage.getItem('info'));
  constructor(private http:AuthService,
  private router: Router) { }

  ngOnInit() {
  // this.getUser();
  }

  exit(){
      this.http.logout();
      this.router.navigate["/main"];
  }
}
