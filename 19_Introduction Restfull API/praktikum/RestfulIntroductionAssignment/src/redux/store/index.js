import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice"
import languageReducer from "../slices/languageSlice";

export default  configureStore({
    reducer: {
        products: productReducer,
        language: languageReducer,
    },
});