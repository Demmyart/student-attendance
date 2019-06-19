import { Action } from '@ngrx/store';
import { User } from './../models/user';
import { Update } from '@ngrx/entity/src/models'; 

export enum UserActionTypes {
    getUser =     '[user] get',
    setUser =     '[user] set',
    updateUser =  '[user] update',
    sendUser =    '[user] sendUser',
    loadUser = '[user] loadUser'
}

export class getUser implements Action {
  readonly type = UserActionTypes.getUser;
  constructor(public payload: {} ) {}
}


export class setUser implements Action {
    readonly type = UserActionTypes.setUser;
    constructor(public payload: { users : User[] }) {}
  }

  export class sendUser implements Action {
    readonly type = UserActionTypes.sendUser;
    constructor(public payload: {} ) {}
  }

  export class loadUser implements Action {
    readonly type = UserActionTypes.loadUser;
    constructor(public payload: { user : Update<User> }) {}
  }

export class updateUser implements Action {
    readonly type = UserActionTypes.updateUser;
    constructor(public payload: { user : Update<User> }) {}
  }

export type UserActions = getUser | setUser | updateUser | sendUser | loadUser ;
