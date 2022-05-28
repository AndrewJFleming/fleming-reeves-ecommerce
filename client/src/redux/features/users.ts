import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import * as api from "../api";
import axios from "axios";

export const login: any = createAsyncThunk(
  "user/signInUser",
  async (
    argumentObj: {
      loginFormData: {
        username: string;
        password: string;
      };
      navigate: NavigateFunction;
    },
    thunkAPI
  ) => {
    try {
      const { data } = await api.login(argumentObj.loginFormData);
      argumentObj.navigate("/");
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const register: any = createAsyncThunk(
  "user/signUpUser",
  async (
    argumentObj: {
      formData: {
        username: string;
        password: string;
        email: string;
      };
      navigate: NavigateFunction;
    },
    thunkAPI
  ) => {
    try {
      const { data } = await api.register(argumentObj.formData);
      argumentObj.navigate("/");
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateFavorites: any = createAsyncThunk(
  "user/updateUserFavorites",
  async (argumentObj: any, thunkAPI) => {
    try {
      const { data } = await api.updateFavorites(
        argumentObj.userId,
        argumentObj.updatedFavoritesIds
      );
      return data;
    } catch (error: any) {
      setTimeout(() => {
        //navigate passed from App.tsx in argumentObj arg
        thunkAPI.dispatch(logoutUser());
        argumentObj.navigate("/login");
      }, 5000);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateUser: any = createAsyncThunk(
  "user/updateUser",
  async (argumentObj: any, thunkAPI) => {
    try {
      const { data } = await api.updateUser(
        argumentObj.userId,
        argumentObj.updateFormData
      );
      argumentObj.navigate("/login");
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser: any = createAsyncThunk(
  "user/deleteUser",
  async (argumentObj: any, thunkAPI) => {
    try {
      const { data } = await api.deleteUser(
        argumentObj.userId,
        argumentObj.deleteFormData
      );
      console.log(data);
      argumentObj.navigate("/login");
      return data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { authData: {}, error: false, loading: false },
  reducers: {
    logoutUser: (state) => {
      //Also clear user data from local storage
      localStorage.removeItem("profile");
      state.authData = {};
      state.error = false;
      state.loading = false;
    },
  },
  //Used when calling APIs
  extraReducers: (builder) => {
    //LOGIN
    builder
      .addCase(login.pending, (state: any, action: any) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state: any, action: any) => {
        //Also add user data and token to localStorage
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.loading = false;
        state.authData = action.payload;
        state.error = false;
      })
      .addCase(login.rejected, (state: any, action: any) => {
        state.loading = false;
        state.authData = {};
        state.error = action.payload;
      })
      //REGISTER
      .addCase(register.pending, (state: any, action: any) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state: any, action: any) => {
        //Also add user data and token to localStorage
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.loading = false;
        state.authData = action.payload;
        state.error = false;
      })
      .addCase(register.rejected, (state: any, action: any) => {
        state.loading = false;
        state.authData = {};
        state.error = action.payload;
      })
      //UPDATE_FAVORITES
      .addCase(updateFavorites.pending, (state: any, action: any) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateFavorites.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.authData.user = action.payload;
        state.error = false;
      })
      .addCase(updateFavorites.rejected, (state: any, action: any) => {
        state.loading = false;
        state.authData = {};
        state.error = action.payload;
      })
      //UPDATE USER
      .addCase(updateUser.pending, (state: any, action: any) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateUser.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.authData = action.payload;
        state.error = false;
      })
      .addCase(updateUser.rejected, (state: any, action: any) => {
        state.error = true;
        state.loading = false;
      })

      //DELETE USER
      .addCase(deleteUser.pending, (state: any, action: any) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(deleteUser.rejected, (state: any, action: any) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
