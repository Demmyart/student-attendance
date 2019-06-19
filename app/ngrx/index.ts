import { User } from './models/user';
import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
import * as users from './reducers/getUserReducer';
import * as schedule from './reducers/scheduleReducer';
import * as stat from './reducers/statReducer';

import { EntityState } from '@ngrx/entity';

export interface AppState {
    users: users.State,
    schedule: schedule.State,
    statistic: stat.State

  }
  

export const reducers: ActionReducerMap<AppState> = {
    users : users.reducer,
    schedule: schedule.reducer,
    statistic: stat.reducer
};

