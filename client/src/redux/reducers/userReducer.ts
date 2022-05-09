import { ActionType } from "../constants/actionTypes";
import { Action } from "../actions";

const userReducer = (state: any = { authData: {}, error: false }, action: Action ) => {
  switch (action.type) {
    case ActionType.AUTH:
      //Save user data to local storage under 'profile' label (accessToken included).
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload, error: false };
    case ActionType.UPDATE_FAVORITES:
      localStorage.setItem("profile", JSON.stringify({ ...state.authData, user: action?.payload }));
      return { ...state, authData: {...state.authData, user: action?.payload}, error: false };
    case ActionType.LOGOUT:
      localStorage.removeItem("profile");
      return { ...state, authData: {}, error: false };
    case ActionType.AUTH_ERROR:
      return { ...state, error: action?.payload };
    // case actionTypes.CLEAR_AUTH_ERROR:
    //   return { ...state, error: false };
    default:
      return state;
  }
};

export default userReducer;
