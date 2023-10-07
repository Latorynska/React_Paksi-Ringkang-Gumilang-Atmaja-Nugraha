import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = JSON.parse(localStorage.getItem("products")) || [];
// const initialState = axios({
//   url: "https://6521213fa4199548356cd527.mockapi.io/products",
//   method: "GET",

// })

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { payload } = action;
      const newProduct = {
        ...payload,
      };
      const updatedProducts = [...state, newProduct];
      updateLocalStorage(updatedProducts); // Save to localStorage
      return updatedProducts;
    },
    updateProduct: (state, action) => {
      const updatedProduct = action.payload;
      const updatedProducts = state.map((prod) =>
        prod.uuid === updatedProduct.uuid ? updatedProduct : prod
      );
      updateLocalStorage(updatedProducts); // Save to localStorage
      return updatedProducts;
    },
    removeProduct: (state, action) => {
      const uuidToRemove = action.payload;
      const indexToRemove = state.findIndex((prod) => prod.uuid === uuidToRemove);

      if (indexToRemove !== -1) {
        const updatedProducts = [
          ...state.slice(0, indexToRemove),
          ...state.slice(indexToRemove + 1),
        ];

        updateLocalStorage(updatedProducts); // Save to localStorage
        return updatedProducts;
      }

      return state;
    },
  },
});

// Function to update the localStorage
const updateLocalStorage = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const { addProduct, updateProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
