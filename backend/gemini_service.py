import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_plan(task, deadline, hours, category):

    prompt = f"""
You are an AI Productivity Coach.

Create a professional productivity plan.

Task:
{task}

Deadline:
{deadline}

Hours Available:
{hours}

Category:
{category}

Return:

🚀 Priority

📅 Suggested Schedule

💡 Productivity Tips

⚠️ Risk Level

Keep the answer concise.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    return response.text


def ask_ai(question):

    prompt = f"""
You are TaskPilot AI.

Answer the user's productivity question clearly.

Question:

{question}
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    return response.text