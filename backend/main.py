from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from gemini_service import generate_plan, ask_ai

app = FastAPI(title="TaskPilot AI Backend")


# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://task-pilot-ai-steel.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Request Models

class TaskRequest(BaseModel):
    task: str
    deadline: str
    hours: int
    category: str


class ChatRequest(BaseModel):
    question: str


# Home

@app.get("/")
def home():
    return {
        "message": "TaskPilot AI Backend Running!"
    }


# AI Planner

@app.post("/generate-plan")
def ai_plan(data: TaskRequest):

    try:

        plan = generate_plan(
            data.task,
            data.deadline,
            data.hours,
            data.category,
        )

        return {
            "plan": plan
        }

    except Exception as e:

        return {
            "plan": f"Error: {str(e)}"
        }


# AI Assistant

@app.post("/chat")
def chat(request: ChatRequest):

    try:

        answer = ask_ai(request.question)

        return {
            "answer": answer
        }

    except Exception as e:

        return {
            "answer": f"Error: {str(e)}"
        }