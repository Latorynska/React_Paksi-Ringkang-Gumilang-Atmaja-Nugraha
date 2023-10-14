import { createAsyncThunk } from "@reduxjs/toolkit";
import OpenAi from "openai";

const OPEN_AI_KEY = process.env.OPEN_AI_KEY;

export const generateText = createAsyncThunk('ai/generateText', async(prompt) => {
    const openAi = new OpenAi({
        apiKey: OPEN_AI_KEY,
        dangerouslyAllowBrowser: true,
    })
    return await openAi.completions.create({
        prompt: prompt,
        model: 'text-davinci-003',
        max_tokens: 50,
    })
});