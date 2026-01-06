import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildRagContext } from '@/lib/rag/buildContext';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash'
});

const FALLBACK_RESPONSE =
    "I don’t have that information in my knowledge base. For more details or clarification, feel free to reach out to Joseph at mainamathengej@gmail.com.";

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

        // If no context is available at all, return controlled fallback
        if (!ragContext || ragContext.trim().length === 0) {
            return NextResponse.json({ answer: FALLBACK_RESPONSE });
        }

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
- Do NOT guess, infer, or fabricate information.
- Be concise, factual, and professional.

LIMITATION HANDLING:
- If the requested information is NOT present in the CONTEXT:
  - Respond using the LIMITATION RESPONSE TEMPLATE exactly
  - Do NOT add headings, bullet points, summaries, or extra suggestions

LIMITATION RESPONSE TEMPLATE (use verbatim):
"I don’t have that information in my knowledge base. For more details or clarification, feel free to reach out to Joseph at mainamathengej@gmail.com."

FORMAT (ONLY when the answer exists in the CONTEXT):
## Summary
- One or two bullets only

## Key Strengths
- Bullet points only

## Relevant Experience / Evidence
- Bullet points with concrete examples

## Gaps or Unknowns
- Bullet points only

SPECIAL INSTRUCTION:
If the QUESTION contains a job description or asks about role fit:
- Compare job requirements against the CONTEXT
- Do not assume missing skills
- End with a clear recommendation

CONTACT GUIDANCE (ONLY if the user explicitly asks how to contact Joseph):
- Use a friendly and professional tone
- Prefer email as the primary contact method
- Optionally mention phone contact if appropriate

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
