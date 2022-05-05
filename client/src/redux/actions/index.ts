import {ActionType} from "../constants/actionTypes"

interface Auth {
    type: ActionType.AUTH,
    payload?: any,
  }

interface Logout {
    type: ActionType.LOGOUT,
    payload?: any,
  }

interface AuthError {
    type: ActionType.AUTH_ERROR,
    payload?: any,
  }
  
  export type Action = Auth | Logout | AuthError

  