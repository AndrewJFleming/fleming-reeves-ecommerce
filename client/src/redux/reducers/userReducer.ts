import { ActionType } from "../constants/actionTypes";
import { Action } from "../actions";
import { createSlice } from "@reduxjs/toolkit";
import { StarRateTwoTone } from "@material-ui/icons";

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

//with @reduxjs/toolkit

// export const userSlice = createSlice({
//   name:"user",
//   initialState: {...},
//   reducers: {
//     login: (state, action) => {
//    state.value = action.payload;
//     },
//   },
// })

// export userSlice.reducer; 

export default userReducer;
