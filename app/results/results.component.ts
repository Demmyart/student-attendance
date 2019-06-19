import { Component, OnInit } from '@angular/core';
import {RequestService} from '../shared/request.service';
import {ActivatedRoute,Router} from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  // data: any;
  // studentList: any[];
  // id_schedule: any;
  // buttonClicked = false;
  // fileToUpload: File;
  // isHere: boolean;


  constructor(private http:RequestService,private router: Router) {
    // this.http.scheduleData.subscribe(result => {
    //   this.data = result;
    //   this.buttonClicked = false; 
      // if(this.data != null && this.data.length != 0) {
      //   this.id_groups = this.data[0].id_group;
      // console.log(this.data)
      // }
    }
  
  
  ngOnInit()  {
   }

  // getLessonInfo(i){
  //   this.buttonClicked = true;
  //   this.http.getLessonInfo({id_group: this.data[i].id_group, id_schedule: this.data[i].id}).subscribe(result => {
  //     this.studentList = result;
  //     this.id_schedule = result[0].id_schedule;
  //     console.log(this.studentList)
  //     // console.log(result[0].id_schedule);
  //   });
  // }

//   handleFileInput(files: FileList) {
//     this.fileToUpload = files.item(0);
//   }

//   sendPhoto() {
//     if(this.fileToUpload != null){
//     this.http.sendPhoto(this.fileToUpload,this.id_schedule).subscribe(data=>{
//       console.log("File successfuly uploaded");
//     })
//   }
// }

// studentIsHere(i){
//     // let x=document.getElementsByClassName('btn');
//     this.studentList

// }
}

