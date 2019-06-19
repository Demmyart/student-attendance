import { Component, OnInit, EventEmitter } from '@angular/core';
import {RequestService} from '../shared/request.service';
import {ActivatedRoute,Router} from '@angular/router';
import {IMyDpOptions, IMyDateModel} from 'angular4-datepicker/src/my-date-picker';


import {Store} from '@ngrx/store'
import * as scheduleActions from '../ngrx/actions/scheduleActions'
import * as fromState from './../ngrx/index'


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd',
    openSelectorOnInputClick: true,
    satHighlight: true,
    inline: true
  };

  datas = JSON.parse(localStorage.getItem("info"));
  type = this.datas.data[0].type;
  id = this.datas.data[0].id;
  id_group =this.datas.data[0].group_id;
  todayDate = new Date().toISOString().slice(0,10);
  // public model:any = { jsdate: new Date()};
  
  constructor(
    private http:RequestService,
    private router: Router,
    private store: Store<fromState.AppState>) { }


  ngOnInit() {
    if (JSON.parse(localStorage.getItem('type')) === 'teacher') {
      this.store.dispatch(new scheduleActions.getScheduleRequest({id_teacher: this.id,date: this.todayDate}));
    }
    if (JSON.parse(localStorage.getItem('type')) === 'student') {
      this.store.dispatch(new scheduleActions.getScheduleRequestStud({id_group: this.id_group,date: this.todayDate}));
    }
    // this.http.getScheduleList({id_teacher: this.id,date: this.todayDate}).subscribe();
    // this.http.getScheduleStudent({id_group: this.id_group,date: this.todayDate}).subscribe();
  }

  onDateChanged(event: IMyDateModel) {
    if (JSON.parse(localStorage.getItem('type')) === 'teacher') {
      // this.http.getScheduleList({id_teacher: this.id,date: event.formatted}).subscribe();
      this.store.dispatch(new scheduleActions.getScheduleRequest({id_teacher: this.id,date: event.formatted}));
      this.router.navigate(['workspace/LessonListComponent']);
    }
    if (JSON.parse(localStorage.getItem('type')) === 'student') {
      this.store.dispatch(new scheduleActions.getScheduleRequestStud({id_group: this.id_group,date: event.formatted}));

      // this.http.getScheduleStudent({id_group: this.id_group,date: event.formatted}).subscribe();
      this.router.navigate(['workspace/LessonliststudentComponent']);
    }
}

}
