import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from "../api";

export const createCart:any = createAsyncThunk(
  "cart/saveCartToDB",
  async (newCartData:any, {rejectWithValue} ) => {
    try {
      await api.createCart(newCartData);
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartItems: [], error: false, loading: false, },
    reducers: {
      addToCart: (state, action:any) => {
        const cartItemsCopy:any = state.cartItems
        cartItemsCopy.push(action.payload)
        state.cartItems = cartItemsCopy;
      },
      changeQuantity: (state:any, action:any) => {
        state.cartItems = action.payload
      },
      removeFromCart: (state:any, action:any) => {
        state.cartItems = action.payload
      },
      emptyCart: (state) => {
        state.cartItems = [];
        state.error = false;
        state.loading = false;
      },
    },
    //Used when calling APIs
    extraReducers: (builder) => {
      builder.addCase(createCart.pending, (state:any, action:any) => {
        state.loading = true;
        state.error = false
      })
      .addCase(createCart.fulfilled, (state:any, action:any) => {
        state.loading = false;
        state.cartItems = [];
        state.error = false
      })
      .addCase(createCart.rejected, (state:any, action:any) => {
        state.loading = false;
        state.error = action.payload;
      })
    },
})

export const { addToCart, emptyCart, changeQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;