import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AppState } from '../state/app.state';
import { authReducers } from './auth.reducer';
import { routerReducer } from '@ngrx/router-store';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  auth: authReducers,
};
