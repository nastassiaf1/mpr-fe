import { User } from './../../interfaces/user';
import { Action } from "@ngrx/store";

export enum EUserActions {
  LOG_IN = '[USER] Log In',
  LOG_IN_SUCCESS = '[USER] Log In Success',
  LOG_IN_FAIL = '[USER] Log In Fail',
  LOG_OUT = '[USER] Log Out',
  REGISTER_USER = '[USER] Register User',
  REGISTER_USER_SUCCESS = '[USER] Register User Success',
  REGISTER_USER_FAIL ='[USER] Register User Fail',
}

export class LogIn implements Action {
  readonly type = EUserActions.LOG_IN;
  constructor(public payload: User) {}
}

export class LogInSuccess implements Action {
  readonly type = EUserActions.LOG_IN_SUCCESS;
  constructor(public payload: User) {}
}

export class LogInFail implements Action {
  readonly type = EUserActions.LOG_IN_FAIL;
  constructor() {}
}

export class LogOut implements Action {
  readonly type = EUserActions.LOG_OUT;
  constructor() {}
}

export class RegisterUser implements Action {
  readonly type = EUserActions.REGISTER_USER;
  constructor(public payload: User) {}
}

export class RegisterUserSuccess implements Action {
  readonly type = EUserActions.REGISTER_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class RegisterUserFail implements Action {
  readonly type = EUserActions.REGISTER_USER_FAIL;
  constructor() {}
}

export type UserActions = LogIn | LogInSuccess | LogInFail | LogOut | RegisterUser | RegisterUserSuccess | RegisterUserFail;
