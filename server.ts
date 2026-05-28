import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy initialization for Gemini to catch missing API keys gracefully
let genAI: GoogleGenAI | null = null;
function getGenAI() {
  if (!genAI) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is missing");
    }
    genAI = new GoogleGenAI({ 
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return genAI;
}

// API routes
app.post("/api/analyze-biometric", async (req, res) => {
  const { input } = req.body;
  
  if (!input) {
    return res.status(400).json({ error: "Input is required" });
  }

  try {
    const ai = getGenAI();
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Analyze this respiratory or clinical scenario and provide a medical technology recommendation using AtrioCare's suite (Haal-Chaal Pravartak 1.0, V-sync, or NOVICULE-TA).
      Focus on non-invasive screening and AI-driven insights.
      
      Scenario: ${input}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            diagnosis_insight: { type: Type.STRING },
            recommended_tech: { type: Type.STRING },
            rehab_protocol: { type: Type.STRING },
            confidence_score: { type: Type.NUMBER }
          },
          required: ["diagnosis_insight", "recommended_tech", "rehab_protocol", "confidence_score"]
        }
      }
    });

    res.json(JSON.parse(response.text || '{}'));
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: "Failed to generate recommendation" });
  }
});

app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const ai = getGenAI();
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [...(history || []), { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: `You are the Tech AtrioCare AI, a high-end medical technology assistant. 
        You specialize in medical robotics, AI diagnostics, and patient rehabilitation.
        
        Rules:
        1. Be professional, clinical, and reassuring.
        2. Mention Tech AtrioCare technologies where relevant (Neural Sync, Robotic Physio, Biomed AI).
        3. Always add a disclaimer: "This is an AI-powered simulation and not a substitute for professional medical advice."
        4. Use structured markdown formatting.`,
      }
    });

    res.json({ text: response.text });
  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({ error: "Connectivity lost. Please check your secure bio-link." });
  }
});

async function startServer() {
  if (!process.env.VERCEL) {
    if (process.env.NODE_ENV !== "production") {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } else {
      const distPath = path.join(process.cwd(), "dist");
      app.use(express.static(distPath));
      app.get("*", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

startServer();

export default app;
