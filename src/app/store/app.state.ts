import { ActionReducerMap } from '@ngrx/store';
import * as reducers from 'src/app/store/reducers';


export interface AppState {
  user: reducers.UserState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  user: reducers.userReducer,
};
