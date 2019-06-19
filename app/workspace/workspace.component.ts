import { Component, OnInit } from '@angular/core';
import {RequestService} from '../shared/request.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor(private http:RequestService) {}
  ngOnInit() {
  }

}
