import axios from "axios";

const API_URL = "https://shopease-api-q3o2.onrender.com";

// isme sare user ke sare carts aayega
export const getCarts = async () => {
    const url = `${API_URL}/carts`;
    const response = await axios.get(url);

    return response.data;
}

// isme session id ke sare carts aayega
export const getCartsByCartId = async (sessionId) => {
    const url = `${API_URL}/carts/?cartId=${sessionId}`;
    const response = await axios.get(url);

    return response.data;
}

// isse carts me data save hoga 
export const createCart = async (newCart) => {
    const url = `${API_URL}/carts`;
    const response = await axios.post(url, newCart);

    return response.data;
}

// isse cart ke id se cart delete hoga
export const deleteCart = async (id) => {
    const url = `${API_URL}/carts/${id}`;
    const response = await axios.delete(url);

    return response.data;
}