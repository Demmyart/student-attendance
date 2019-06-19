import { ScheduleActionTypes, ScheduleActions } from './../actions/scheduleActions';
import { Schedule } from './../models/schedule';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

export interface State extends EntityState<Schedule> {
  loading: boolean
}

export const adapter: EntityAdapter<Schedule> = createEntityAdapter<Schedule>();

export let initialState: State = adapter.getInitialState({
  loading:false
    
}); 



export function reducer(state = initialState, action: ScheduleActions): State {
  switch (action.type) {
    case ScheduleActionTypes.setSchedule: {
      return adapter.addAll(action.payload.schedule,state);
    }
    case ScheduleActionTypes.searchByGroup: {
      return adapter.removeAll({...state,loading:true});
    }
    case ScheduleActionTypes.getScheduleRequest: {
      return adapter.removeAll({...state,loading:true});
    }

    case ScheduleActionTypes.getScheduleRequestStud: {
      return adapter.removeAll({...state,loading:true});
    }
    
    case ScheduleActionTypes.getScheduleTeacher: {
      return adapter.addMany(action.payload.schedule,{...state,loading:false});
    }

    case ScheduleActionTypes.getScheduleStudent: {
      return adapter.addMany(action.payload.schedule,{...state,loading:false});
    }

    default: {
      return state;
    }
  }
}


export const getScheduleState = createFeatureSelector<State>('schedule');
export const getPending = (state: State) => state.loading;

export const getPagePending = createSelector(
  getScheduleState,
  getPending
);
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(getScheduleState); 