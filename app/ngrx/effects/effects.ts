import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { catchError, map, mergeMap,switchMap,delay  } from 'rxjs/operators';

import {getUser,setUser,updateUser,UserActionTypes } from '../actions/userActions';
import {setSchedule,getScheduleRequest,getScheduleTeacher,
  ScheduleActionTypes,getScheduleStudent } from '../actions/scheduleActions';
import {getStatUser,setStatUser,StatActionTypes } from '../actions/statActions';


import { RequestService } from './../../shared/request.service';



@Injectable()
export class UserEffects {

  constructor(
    private http: RequestService,
    private actions$: Actions,
    private router: Router
  ) {}

@Effect() 
  getUser$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.getUser),
    delay(1000),
    switchMap((action: any)  => 
      this.http.getLessonInfo(action.payload)),
      switchMap(data =>
      [
        new setUser({ users: data[0].map(obj => {
          obj.processing = false;
          return obj
        })
      }),
        new setSchedule({schedule: data[1]})
      ]
      )
    )

@Effect() 
sendUser$: Observable<Action> = this.actions$.pipe(
  ofType(UserActionTypes.sendUser),
  delay(1000),
  switchMap((action: any)  => 
    this.http.studentIsHere(action.payload).pipe(
    map(data => new updateUser({ user:  {id: data[0].id, changes: data[0]}})
  )
)

)
)


@Effect() 
getScheduleTeacher$: Observable<Action> = this.actions$.pipe(
  ofType(ScheduleActionTypes.getScheduleRequest),
  delay(1000),
  switchMap((action: any)  => 
    this.http.getScheduleList(action.payload).
    map(data => 
      new getScheduleTeacher({ schedule:  data})
    )
  )
)

@Effect() 
getScheduleStudent$: Observable<Action> = this.actions$.pipe(
  ofType(ScheduleActionTypes.getScheduleRequestStud),
  delay(1000),
  switchMap((action: any)  => 
    this.http.getScheduleStudent(action.payload).
    map(data => 
      new getScheduleStudent({ schedule:  data})
    )
  )
)

@Effect() 
searchByGroup$: Observable<Action> = this.actions$.pipe(
  ofType(ScheduleActionTypes.searchByGroup),
  delay(1000),
  switchMap((action: any)  => 
    this.http.searchByGroup(action.payload).
    map(data => 
      new getScheduleStudent({ schedule:  data})
    )
  )
)
 

@Effect() 
getStatUser$: Observable<Action> = this.actions$.pipe(
  ofType(StatActionTypes.getStatUser),
  delay(1000),
  switchMap((action: any)  => 
    this.http.getstatbygroup(action.payload).
    map(data =>
      new setStatUser({ stat: data })
    )
  )
)

@Effect() 
getStatStudent$: Observable<Action> = this.actions$.pipe(
  ofType(StatActionTypes.getStatStudent),
  delay(1000),
  switchMap((action: any)  => 
    this.http.getstatforstudent(action.payload).
    map(data =>
      new setStatUser({ stat: data })
    )
  )
)
 
}

  //   .reduce(function (r, a) {
        //   r[a.id] = r[a.id];
        //   r[a.id] = a;
        //   return r;
        //  }, {}) 
