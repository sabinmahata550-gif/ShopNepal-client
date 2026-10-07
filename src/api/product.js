import config from "@/config/config.js";
import axios from "axios";

export const getProducts = async () => {
    const respons = await axios.get(`${config.apiUrl}/api/products`);

    return respons.data.products;
}