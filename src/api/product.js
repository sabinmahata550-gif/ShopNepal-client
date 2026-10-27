import config from "@/config/config.js";
import axios from "axios";
import api from "./api";

export const getProducts = async () => {
    const respons = await axios.get(`${config.apiUrl}/api/products`);

    return respons.data.products;
}

export const addProduct = async (productData) => {
    return await api.post(`/api/products/create`, productData);

}