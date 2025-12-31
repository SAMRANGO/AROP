"use server";

import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export const getAiResult = async (
    prompt: string = "You are an expert plant pathologist. Analyze the following image or description of a plant and identify any diseases present. Provide the following information: 1. The name of the disease (if any). 2. The likely cause (e.g., fungal, bacterial, viral, environmental). 3. Key symptoms observed. 4. Recommended treatment or management steps. 5. Preventive measures to avoid future occurrences. If no disease is detected, explain why and suggest general plant health tips.",
    file: File
) => {
    const arrayBuffer = await file.arrayBuffer();
    const base64string = Buffer.from(arrayBuffer).toString('base64');



    const result = await generateText({
        model: google('gemini-1.5-flash'),
        messages: [
            {
                role: 'user',
                content: [
                    {
                        type: 'text',
                        text: "You are an expert plant pathologist. Analyze the following image or description of a plant and identify any diseases present. Provide the following information: 1. The name of the disease (if any). 2. The likely cause (e.g., fungal, bacterial, viral, environmental). 3. Key symptoms observed. 4. Recommended treatment or management steps. 5. Preventive measures to avoid future occurrences. If no disease is detected, explain why and suggest general plant health tips.",
                    },
                    {
                        type: 'file',
                        data: base64string,
                        mediaType: file.type,
                    },
                ],
            },
        ],
    });

    return result.steps[0].text;
};