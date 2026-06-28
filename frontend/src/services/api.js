import axios from "axios";

const API = axios.create({
  baseURL: "https://taskpilotai-backend-zl8q.onrender.com",
});

export const generatePlan = async (data) => {
  const response = await API.post("/generate-plan", data);
  return response.data;
};

export default API;