import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const mockApiUrl = "https://6521213fa4199548356cd527.mockapi.io";

export const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
    return axios
        .get(`${mockApiUrl}/products`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            throw err;
    });
});

export const postProduct = createAsyncThunk('product/postProduct', async(newProduct) => {
    return axios
        .post(`${mockApiUrl}/products`, newProduct)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
            throw err;
    })
})

export const updateProduct = createAsyncThunk('product/putProduct', async(updatedProduct) => {
    const { uuid } = updatedProduct;
    return axios
        .put(`${mockApiUrl}/products/${uuid}`, updatedProduct)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            throw err;
    });
})

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (uuid) => {
    return axios
        .delete(`${mockApiUrl}/products/${uuid}`)
        .then(() => uuid) 
        .catch((err) => {
            console.log(err);
            throw err; 
        });
});