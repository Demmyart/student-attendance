import { StatActionTypes, StatActions} from './../actions/statActions';
import { User } from './../models/user';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

export interface State extends EntityState<User> {
    loading: boolean
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export let initialState: State = adapter.getInitialState({
  loading:false
}); 



export function reducer(state = initialState, action: StatActions): State {
  switch (action.type) {
    case StatActionTypes.getStatUser: {
      return adapter.removeAll({...state,loading:true});
    }

    case StatActionTypes.getStatStudent: {
      return adapter.removeAll({...state,loading:true});
    }

    case StatActionTypes.setStatUser: {
      return adapter.addMany(
        action.payload.stat,{...state,loading:false})
    }
    default: {
      return state;
    }
  }
}


export const getStatState = createFeatureSelector<State>('statistic');

export const getPending = (state: State) => state.loading;


export const getPagePending = createSelector(
  getStatState,
  getPending
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(getStatState); 