import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from "../api";

export const saveCart:any = createAsyncThunk(
  "cart/saveCartToDatabase",
  async (argumentObj:any, {rejectWithValue} ) => {
    try {
    //   await api.createCart(argumentObj.loginFormData);
    console.log("saveCart")
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartItems: [], addToCartNotice: null, error: false, loading: false, },
    reducers: {
      logoutUser: (state) => {
        localStorage.removeItem("profile");
        state.cartItems = [];
        state.error = false;
        state.loading = false;
      },
    },
    //Used when calling APIs
    extraReducers: (builder) => {
      //LOGIN
      builder.addCase(saveCart.pending, (state:any, action:any) => {
        state.loading = true;
        state.error = false
      })
      .addCase(saveCart.fulfilled, (state:any, action:any) => {
        state.loading = false;
        state.cartItems = action.payload;
        state.error = false
      })
      .addCase(saveCart.rejected, (state:any, action:any) => {
        state.loading = false;
        state.cartItems = [];
        state.error = action.payload;
      })
    },
})

// export const { saveCart } = cartSlice.actions;

export default cartSlice.reducer;