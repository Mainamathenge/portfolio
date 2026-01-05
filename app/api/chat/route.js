import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildRagContext } from '@/lib/rag/buildContext';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({
    model: 'models/gemini-2.5-flash'
});

export async function POST(request) {
    try {
        const { message } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Build RAG context based on the question
        const ragContext = buildRagContext(message);

        // Create prompt with RAG context
        const prompt = `
You are an AI assistant for Joseph Maina's portfolio.

MODE SELECTION:
- If the QUESTION is a greeting, casual message, or small talk:
  - Respond politely and briefly
  - Do NOT use headings or bullet points
  - Keep the response conversational
  - After the greeting, ALWAYS guide the user toward the portfolio by offering 2–3 concrete options, such as:
    - viewing projects
    - exploring skills or experience
    - checking fit for a specific role
  - Do NOT reference the CONTEXT directly

RULES:
- Use ONLY the information in the CONTEXT below.
- If the answer is not in the context, say: "I don't have that information in my knowledge base."
- Be concise, factual, and professional.
- ALWAYS format responses using bullet points and headings.
- NEVER write long paragraphs.
- Do NOT use prose or paragraphs under any heading.
- If a section has no applicable information, omit it entirely.

SPECIAL INSTRUCTION:
If the QUESTION contains a job description or asks about role fit:
- Compare job requirements against the CONTEXT
- Do not assume missing skills
- End with a clear recommendation

CONTACT GUIDANCE:
- When redirecting a user to contact Joseph:
  - Use a friendly and professional tone
  - Prefer email as the primary contact method
  - Optionally mention phone contact if appropriate
  - Encourage the user to continue exploring the portfolio

FORMAT:
## Summary
- One or two bullets only

## Key Strengths
- Bullet points only

## Relevant Experience / Evidence
- Bullet points with concrete examples

## Gaps or Unknowns
- Bullet points only

- When discussing projects, include:
  - Technologies
  - Scale or impact

CONTEXT:
${ragContext}

QUESTION:
${message}
`;



        // Get response from Gemini
        const result = await model.generateContent(prompt);
        const answer = result.response.text();

        return NextResponse.json({ answer });

    } catch (error) {
        console.error('Chat API Error:', error);

        // Handle specific error types
        if (error.message?.includes('API key')) {
            return NextResponse.json(
                { error: 'API configuration error. Please check server configuration.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to process your request. Please try again.' },
            { status: 500 }
        );
    }
}
