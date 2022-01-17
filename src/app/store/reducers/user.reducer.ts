import { createReducer, on } from '@ngrx/store';
import { loadUser, loadedUser } from '../actions';

export interface UserState { user: any; loading: boolean }

export const userState: UserState = { loading: false, user: null };

const userRed = createReducer(
  userState,
  on(loadUser, (state, { user }) => ({ ...state, loading: true, user })),
  on(loadedUser, (state, { user }) => ({ ...state, loading: false, user })),
);

export const userReducer = (state: any, action: any) => userRed(state, action);
