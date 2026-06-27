import axios from "axios";

const api = axios.create({

    baseURL:"http://127.0.0.1:8000"

});

export const generatePlan = async(taskData)=>{

    const response = await api.post(

        "/generate-plan",

        taskData

    );

    return response.data;

};

export default api;