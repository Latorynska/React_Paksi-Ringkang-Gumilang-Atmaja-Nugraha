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

export const generateChat = createAsyncThunk('ai/generateChat', async(messages) => {
    const maxLengthRes = 100;
    const lastMessageIndex = messages.length - 1;
    const updatedContent = messages[lastMessageIndex].content +  ` (balas dengan jumlah kata antara 0 sampai ${maxLengthRes}, lebih singkat pendek diutamakan)`;
    messages[lastMessageIndex] = { role: 'user', content: updatedContent};
    const openAi = new OpenAi({
        apiKey: OPEN_AI_KEY,
        dangerouslyAllowBrowser: true,
    })
    return await openAi.chat.completions.create({
        messages: messages,
        model: 'gpt-3.5-turbo',
        max_tokens: maxLengthRes,
    });
});

export const generateImage = createAsyncThunk('ai/generateImage', async(prompt) => {
    const openAi = new OpenAi({
        apiKey: OPEN_AI_KEY,
        dangerouslyAllowBrowser: true,
    })
    return await openAi.images.generate({
        prompt: prompt,
        response_format: 'url',
        size: '256x256',
    })
})