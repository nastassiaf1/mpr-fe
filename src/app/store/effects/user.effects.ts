import { EUserActions, GetUserFail, GetUserSuccess } from './../actions/user.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, switchMap } from "rxjs/operators";
import { User } from 'src/app/interfaces/user';
import { AccountService } from 'src/app/services/account.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private accountService: AccountService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EUserActions.GET_USER),
      map(({ payload }) => payload),
      switchMap((user: User) => {
        return this.accountService.login(user).pipe(
          map((selectedUser: User) => {
            return new GetUserSuccess(selectedUser);
          }),
          catchError((error) => {
            console.log(error);
            return of(new GetUserFail())
          })
        )
      }),
    )
  })
}
