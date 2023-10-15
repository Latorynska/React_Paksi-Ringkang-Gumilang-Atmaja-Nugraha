import { createSlice } from "@reduxjs/toolkit";
import { generateText, generateChat, generateImage } from "../thunks/aiApi";

const initialState = {
    message: '',
    urlImage: '',
    error: '',
    chatMessages: [],
    loading: false
}

export const aiSlice = createSlice({
    name: "ai",
    initialState,
    reducers: {
        addUserMessage: (state, action) => ({
            ...state,
            chatMessages: [...state.chatMessages, { content: action.payload, role: "user" }]
        })
    },
    extraReducers: (builder) => {
        builder
        .addCase(generateText.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(generateText.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.message = action.payload.choices[0].text;
        })
        .addCase(generateText.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(generateChat.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(generateChat.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.chatMessages = [...state.chatMessages, action.payload.choices[0].message ];
        })
        .addCase(generateChat.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(generateImage.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(generateImage.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            console.log(action.payload);
            state.urlImage = action.payload.data[0].url;
        })
        .addCase(generateImage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const { addUserMessage } = aiSlice.actions;

export default aiSlice.reducer;