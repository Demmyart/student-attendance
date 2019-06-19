import { Component, OnInit, state } from '@angular/core';
import {RequestService} from '../shared/request.service';
import {ActivatedRoute,Router} from '@angular/router';

import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromUser from './../ngrx/reducers/getUserReducer'
import * as fromSchedule from './../ngrx/reducers/scheduleReducer'
import * as fromState from './../ngrx/index'
import * as userActions from '../ngrx/actions/userActions'
import { Update } from '@ngrx/entity/src/models';


@Component({
  selector: 'app-lesson-info',
  templateUrl: './lesson-info.component.html',
  styleUrls: ['./lesson-info.component.css']
})


export class LessonInfoComponent implements OnInit {
 
  lessonInfoList: Observable<any>;
  fileToUpload: File;
  id_schedule: any;
  // studentListHere = [];
  // studentListNotHere = [];
  // responseStudents: any;

  todayDate = new Date().toISOString().slice(0,10);
  loader: Observable<boolean> = this.store.select(fromUser.getPagePending);

  constructor(
    private http:RequestService,
    private router: Router,
    private store: Store<fromState.AppState>) {
  }

  ngOnInit() {
    
  this.lessonInfoList = this.store.select(fromUser.selectAll);
  this.store.select(fromSchedule.selectAll).subscribe(data => { this.id_schedule = data[0] });

    // this.http.lessonInfoList.subscribe(result => {
    //   if(result) {
    //     this.lessonInfoList = result[0];
    //     this.id_schedule = result[1][0].id_schedule;
    //     console.log(this.lessonInfoList);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  sendPhoto() {
    if(this.fileToUpload != null){
    this.http.sendPhoto(this.fileToUpload,this.id_schedule.id).subscribe(data=>{
      console.log("File successfuly uploaded");
    })
  }

}


studentIsHere(student){
  student.processing = true;
  // this.store.dispatch(new userActions.updateUser({
  //   user: {id: student.id, changes: student}
  this.store.dispatch(new userActions.sendUser({ 
    id:student.id , 
    id_schedule:  this.id_schedule.id, 
    flag: true,
    date: this.todayDate
  })
  
);

this.store.dispatch(new userActions.loadUser({ 
  user : {id:student.id, changes: student.processing} 
}))
  
  // if(this.studentListHere.indexOf(this.lessonInfoList[i+1].id) === -1)
  //   {this.studentListHere.push(this.lessonInfoList[i+1].id);}
  //   console.log(this.studentListHere);
    // this.status[i] = false;
    
}

studentIsNotHere(student){
  student.processing = true;
  this.store.dispatch(new userActions.sendUser({ 
    id:student.id, 
    id_schedule:  this.id_schedule.id, 
    flag: false,
    date: this.todayDate
  })
)

this.store.dispatch(new userActions.loadUser({ 
  user : {id:student.id, changes: student.processing} 
}))
  // if(this.studentListNotHere.indexOf(this.lessonInfoList[i+1].student_id) === -1)
  //   {this.studentListNotHere.push(this.lessonInfoList[i+1].student_id);}
  //   console.log(this.studentListNotHere);
  
}


// sendInfo(){
//   this.http.studentIsHere({listhere: this.studentListHere.toString(),listnothere: this.studentListNotHere.toString(), id_schedule: this.id_schedule}).subscribe(result =>{
//     this.responseStudents = result;
//     console.log(this.responseStudents);
//   })
// }
}
