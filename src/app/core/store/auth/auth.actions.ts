import { createAction, props } from "@ngrx/store";
import { IAuthLogin } from "../../components/login/models/auth-login";
import { IUserAuthentication } from "../../components/login/models/user-authentication";

export const enum AuthTypeAction {
  AUTHENTICATION = '[AUTHENTICATION] AUTH USER',
  AUTHENTICATION_SUCCESS = '[AUTHENTICATION_SUCCESS] AUTH USER SUCCESS',
  AUTHENTICATION_FAIL = '[AUTHENTICATION_FAIL] AUTH USER FAIL',

  REFRESHTOKEN = '[REFRESHTOKEN] REFRESH TOKEN',
  REFRESHTOKEN_SUCCESS = '[REFRESHTOKEN_SUCCESS] REFRESH TOKEN SUCCESS',
  REFRESHTOKEN_FAIL = '[REFRESHTOKEN_FAIL] REFRESH TOKEN FAIL',
}

export const Authentication = createAction(
  AuthTypeAction.AUTHENTICATION,
  props<{ payload: IUserAuthentication }>()
)

export const AuthenticationSuccess = createAction(
  AuthTypeAction.AUTHENTICATION_SUCCESS,
  props<{ payload: IAuthLogin }>()
)

export const AuthenticationFail = createAction(
  AuthTypeAction.AUTHENTICATION_FAIL,
  props<{ error: string }>()
)

export const RefresToken = createAction(
  AuthTypeAction.REFRESHTOKEN,
  props<{ payload: IAuthLogin }>()
)

export const RefresTokenSuccess = createAction(
  AuthTypeAction.REFRESHTOKEN_SUCCESS,
  props<{ payload: IAuthLogin }>()
)

export const RefresTokenFail = createAction(
  AuthTypeAction.REFRESHTOKEN_FAIL,
  props<{ error: string }>()
)
