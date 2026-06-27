import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_plan(task, deadline, hours, category):
    prompt = f"""
Create a productivity plan.

Task: {task}
Deadline: {deadline}
Hours Available: {hours}
Category: {category}

Return:
- Priority
- Schedule
- Tips
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    return response.text


def ask_ai(question):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=question,
    )

    return response.text