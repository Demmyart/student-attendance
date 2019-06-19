import { Action } from '@ngrx/store';
import { Schedule } from './../models/schedule';

export enum ScheduleActionTypes {
    setSchedule = '[schedule] setSchedule',
    getScheduleTeacher = '[schedule] getScheduleTeacher',
    getScheduleRequest = '[schedule] getScheduleRequest',
    getScheduleStudent = '[schedule] getScheduleStudent',
    getScheduleRequestStud = '[schedule] getScheduleRequestStud',
    searchByGroup = '[schedule] SearchByGroup'
}

export class setSchedule implements Action {
  readonly type = ScheduleActionTypes.setSchedule;
  constructor(public payload: { schedule: Schedule[] } ) {}
}

export class getScheduleRequest implements Action {
  readonly type = ScheduleActionTypes.getScheduleRequest;
  constructor(public payload: {} ) {}
}

export class searchByGroup implements Action {
  readonly type = ScheduleActionTypes.searchByGroup;
  constructor(public payload: {} ) {}
}


export class getScheduleRequestStud implements Action {
  readonly type = ScheduleActionTypes.getScheduleRequestStud;
  constructor(public payload: {} ) {}
}

export class getScheduleTeacher implements Action {
  readonly type = ScheduleActionTypes.getScheduleTeacher;
  constructor(public payload: { schedule: Schedule[] } ) {}
}

export class getScheduleStudent implements Action {
  readonly type = ScheduleActionTypes.getScheduleStudent;
  constructor(public payload: { schedule: Schedule[] } ) {}
}





export type ScheduleActions = setSchedule | 
getScheduleTeacher | getScheduleRequestStud |
getScheduleRequest | getScheduleStudent | searchByGroup;
