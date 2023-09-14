import { EUserActions, UserActions } from '../actions/user.actions';
import { AuthState, initialAuthState } from '../state/auth.state';

export const authReducers = (state: AuthState = initialAuthState, action: UserActions): AuthState => {
  switch(action.type) {
    case EUserActions.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    };
    case EUserActions.GET_USER_FAIL:
    default: {
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    }
  }
};
