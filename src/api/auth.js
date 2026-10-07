import config from "@/config/config.js";
import axios from "axios";

export const loginUser = async (data) => {
    const respons = await axios.post(`${config.apiUrl}/api/auth/login`, data);

    return respons.data;
}

export const signupUser = async (data) => {
    const respons = await axios.post(`${config.apiUrl}/api/auth/register`, data);

    return respons.data;
}