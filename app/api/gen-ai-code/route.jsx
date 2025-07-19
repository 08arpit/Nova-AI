import { GenAiCode } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {prompt} = await req.json();
        
        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        console.log("[GEN-AI-CODE] Prompt:", prompt);
        const result = await GenAiCode.sendMessage(prompt);
        const resp = result.response.text();
        console.log("[GEN-AI-CODE] Raw AI response:", resp);
        
        try {
            const parsedResponse = JSON.parse(resp);
            return NextResponse.json(parsedResponse);
        } catch (parseError) {
            console.error("Failed to parse AI response:", parseError, resp);
            return NextResponse.json(
                { error: "Invalid response format from AI", details: resp, parseError: parseError.message },
                { status: 500 }
            );
        }
        
    } catch (error) {
        console.error("AI code generation error:", error);
        return NextResponse.json(
            { error: "Failed to generate code", details: error.message },
            { status: 500 }
        );
    }
}