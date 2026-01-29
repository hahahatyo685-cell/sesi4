const express = require("express");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();
app.use(express.json());

// Init Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Cek server
app.get("/", (req, res) => {
  res.send("✅ Gemini 2.5 Flash API is running");
});

// Generate text (POST)
app.post("/generate-text", async (req, res) => {
  try {
    console.log("BODY:", req.body); // DEBUG

    const prompt = req.body.prompt;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt kosong" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      result: response.text,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
