import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { User } from "src/app/interfaces/user";
import { AuthState } from "../state/auth.state";

export const authData = (state: AppState) => state.auth;

export const getUser = createSelector(
  authData,
  (state: AuthState) => state.user
)
