import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice"
import languageReducer from "../slices/languageSlice";
import articleReducer from "../slices/articleSlice";

export default  configureStore({
    reducer: {
        products: productReducer,
        language: languageReducer,
        articles: articleReducer,
    },
});