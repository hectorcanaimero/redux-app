import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import * as userActions from '../actions/user.actions';


@Injectable()
export class UserEffect {
  user$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUser),
      map((user) => userActions.loadedUser({ user })),
      catchError(() => EMPTY)
    )
  );

  constructor(
    private actions$: Actions,
  ) {}

}
