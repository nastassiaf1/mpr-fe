import { User } from './../../interfaces/user';
import { Action } from "@ngrx/store";

export enum EUserActions {
  GET_USER = '[USER] Get User',
  GET_USER_SUCCESS = '[USER] Get User Success',
  GET_USER_FAIL = '[USER] Get User Fail',
}

export class GetUser implements Action {
  readonly type = EUserActions.GET_USER;
  constructor(public payload: User) {}
}

export class GetUserSuccess implements Action {
  readonly type = EUserActions.GET_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class GetUserFail implements Action {
  readonly type = EUserActions.GET_USER_FAIL;
  constructor() {}
}

export type UserActions = GetUser | GetUserSuccess | GetUserFail;
