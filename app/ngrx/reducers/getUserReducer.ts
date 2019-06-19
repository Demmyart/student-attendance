import { UserActionTypes, UserActions, loadUser } from './../actions/userActions';
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



export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.getUser: {
      return adapter.removeAll({...state,loading:true});
    }

    case UserActionTypes.setUser: {
      return adapter.addMany(
        action.payload.users,{...state,loading:false})
    }

    case UserActionTypes.sendUser: {
      return {...state}
    }

    case UserActionTypes.loadUser: {
      return adapter.updateOne(action.payload.user,state)
    }

    case UserActionTypes.updateUser: {
      return adapter.updateOne(action.payload.user,state)
    }

    default: {
      return state;
    }
  }
}


export const getUserState = createFeatureSelector<State>('users');

export const getPending = (state: State) => state.loading;


export const getPagePending = createSelector(
  getUserState,
  getPending
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(getUserState); 