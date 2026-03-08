from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import json

from prompts import build_prompt

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------
# Request Schema
# -----------------------------
class BrandInput(BaseModel):
    brand_name: str
    industry: str
    objective: str
    product_description: str


# -----------------------------
# Health Check Route
# -----------------------------
@app.get("/")
def read_root():
    return {"message": "Backend is running"}


# -----------------------------
# Tweet Generation Endpoint
# -----------------------------
@app.post("/generate-tweets")
def generate_tweets(data: BrandInput):

    prompt = build_prompt(data)

    # Call Ollama local API
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "mistral",
            "prompt": prompt,
            "stream": False
        }
    )

    result = response.json()

    try:
        # Parse AI JSON output
        ai_output = json.loads(result["response"])
        return ai_output

    except:
        # fallback if AI response not perfect JSON
        return {
            "summary": {
                "tone": "AI generated tone",
                "audience": "General audience",
                "themes": "Product features",
                "style": "Short tweets"
            },
            "tweets": [
                {"id": 1, "text": result["response"]}
            ]
        }