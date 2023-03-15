import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  try {
    const response = await axios.get(
      "https://honey-badgers-ecommerce.glitch.me/products"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ProductsSlice.reducer;
