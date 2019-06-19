import { Action } from '@ngrx/store';
import { User } from './../models/user';
import { Update } from '@ngrx/entity/src/models'; 

export enum StatActionTypes {
    getStatUser =     '[stat] getStatUser',
    setStatUser =     '[stat] setStatUser',
    getStatStudent = '[stat] getStatStudent'

}

export class getStatUser implements Action {
  readonly type = StatActionTypes.getStatUser;
  constructor(public payload: {} ) {}
}

export class getStatStudent implements Action {
  readonly type = StatActionTypes.getStatStudent;
  constructor(public payload: {} ) {}
}


export class setStatUser implements Action {
    readonly type = StatActionTypes.setStatUser;
    constructor(public payload: { stat : User[] }) {}
  }


export type StatActions = getStatUser | setStatUser | getStatStudent; 
