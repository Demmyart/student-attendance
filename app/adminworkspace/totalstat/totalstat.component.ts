import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../shared/request.service';

@Component({
  selector: 'app-totalstat',
  templateUrl: './totalstat.component.html',
  styleUrls: ['./totalstat.component.css']
})
export class TotalstatComponent implements OnInit {

  list: any;
  fileToUpload: File;

  constructor(private http:RequestService) { }

  ngOnInit() {
  this.http.getaud().subscribe( data => this.list =data);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  sendSchedule() {
    if(this.fileToUpload != null){
    this.http.sendSchedule(this.fileToUpload).subscribe(data=>{
      console.log("File successfuly uploaded");
    })
  }

}


}
