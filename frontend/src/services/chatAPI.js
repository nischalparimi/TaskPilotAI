import axios from "axios";

const API = axios.create({
  baseURL: "https://taskpilotai-backend-zl8q.onrender.com",
});

export const askAssistant = async (question) => {
  const response = await API.post("/chat", {
    question,
  });

  return response.data;
};

export default API;