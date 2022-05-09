import {ActionType} from '../constants/actionTypes'
import {Action} from '../actions'
import {Dispatch} from 'redux'
import * as api from "../api";

export const login = (formData: any, navigate: any) => async (dispatch: Dispatch<Action>) => {
  try {
    //JSON parsed to js obj returns as res and we grab the data prop.
    const { data } = await api.login(formData);
    dispatch({ type: ActionType.AUTH, payload: data });
    navigate("/");
  } catch (error: any) {
    console.log(error.response.data.message)
    const authError = error.response.data.message;
    dispatch({ type: ActionType.AUTH_ERROR, payload: authError });
  }
};
export const register = (formData: object, navigate: any) => async (dispatch: Dispatch<Action>) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: ActionType.AUTH, payload: data });
    navigate("/");
  } catch (error: any) {
    const authError = error.response.data.message;
    dispatch({ type: ActionType.AUTH_ERROR, payload: authError });
  }
};
// export const updateUser = (id, formData) => async (dispatch) => {
//   try {
//     const { data } = await api.updateUser(id, formData);
//     dispatch({ type: ActionType.LOGOUT });
//     dispatch({ type: ActionType.RESET_CART });
//   } catch (error) {
//     const authError = error.response.data.message;
//     dispatch({ type: ActionType.AUTH_ERROR, authError });
//   }
// };
export const updateFavorites = (id: string, formData: object, navigate: any) => async (dispatch: Dispatch<Action>) => {
  try {
    const { data } = await api.updateFavorites(id, formData);
    dispatch({ type: ActionType.UPDATE_FAVORITES, payload: data });
  } catch (error: any) {
    console.log(error.response.data.message)
    const authError = error.response.data.message;
    dispatch({ type: ActionType.AUTH_ERROR, payload: authError });
    setTimeout(() => {
      dispatch({ type: ActionType.LOGOUT });
      navigate("/login");
    }, 5000)
  }
};
