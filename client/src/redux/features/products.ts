import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from "../api";

export const getProducts:any = createAsyncThunk(
  "products/fetchAllProducts",
  async (_, {rejectWithValue} ) => {
    try {
    const { data } = await api.getProducts();
    return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productsSlice = createSlice({
    name: "products",
    initialState: { allProducts: [], error: false, loading: false, },
    reducers: {

    },
    //Used when calling APIs
    extraReducers: (builder) => {
      builder.addCase(getProducts.pending, (state:any, action:any) => {
        state.loading = true;
        state.error = false
      })
      .addCase(getProducts.fulfilled, (state:any, action:any) => {
        state.loading = false;
        state.allProducts = action.payload;
        state.error = false
      })
      .addCase(getProducts.rejected, (state:any, action:any) => {
        state.loading = false;
        state.allProducts = [];
        state.error = action.payload;
      })
    },
})

// export const { getProducts } = cartSlice.actions;

export default productsSlice.reducer;