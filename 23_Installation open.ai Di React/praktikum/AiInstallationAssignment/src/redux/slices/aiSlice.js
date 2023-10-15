import { createSlice } from "@reduxjs/toolkit";
import { generateText } from "../thunks/aiApi";

const initialState = {
    message: '',
    urlImage: '',
    error: '',
    loading: false
}

export const aiSlice = createSlice({
    name: "ai",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(generateText.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(generateText.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            console.log(action.payload);
            state.message = action.payload.choices[0].text;
        })
        .addCase(generateText.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export default aiSlice.reducer;