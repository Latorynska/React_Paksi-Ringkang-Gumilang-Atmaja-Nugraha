import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, postProduct, updateProduct, deleteProduct } from "../thunks/productAPI";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postProduct.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(postProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProductIndex = state.data.findIndex(
          (prod) => prod.uuid === action.payload.uuid
        );
        if (updatedProductIndex !== -1) {
          state.data[updatedProductIndex] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        const uuidToRemove = action.payload;
        const updatedProducts = state.data.filter(
          (prod) => prod.uuid !== uuidToRemove
        );
        state.data = updatedProducts;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
