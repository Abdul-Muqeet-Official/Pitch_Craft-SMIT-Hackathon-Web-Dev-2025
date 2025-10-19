// src/gemini.js
import { GoogleGenAI } from "@google/genai";

// ⚠️ Directly paste your API key here for testing (not secure for production)
const apiKey = "AIzaSyBk3Jvqux2EGIBfaMjb9I7GyORIUsnZWjM"; // 👈 apni key yahan paste karo

// Initialize Gemini client
const ai = new GoogleGenAI({ apiKey });

export async function generateGeminiResponse(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    // Return text output safely
    return response.output_text || response.text || "⚠️ No response received.";
  } catch (error) {
    console.error("❌ Gemini API Error:", error);
    return "⚠️ Gemini API error: please check your key or try again.";
  }
}
