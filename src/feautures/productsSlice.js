import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favoriteItems: [],
  isShowFav: false,
  items: [],
  status: "",
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
  reducers: {
    favorite: (state, action) => {
      state.favoriteItems = action.payload;
    },
    showFavorites: (state,action) => {
      state.isShowFav = action.payload
    }
  },
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
export const { favorite, showFavorites } = ProductsSlice.actions;
export default ProductsSlice.reducer;
