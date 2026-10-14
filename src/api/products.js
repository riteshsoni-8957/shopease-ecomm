import axios from "axios";

const API_URL = "https://shopease-api-q3o2.onrender.com"


// get all products
export const getProducts = async() => {
    const url = `${API_URL}/products`;
    const response = await axios.get(url);
    const products = response.data;
    return products;

    console.log("All Products: ", products);
}


// get product by Pid
export const getProductById = async (pId) => {
    const url = `${API_URL}/products/?productId=${pId}`;
    const response = await axios.get(url);
    const product = response.data[0];
    return product;
}


// create product
export const createProduct = async (newProduct) => {
    const url = `${API_URL}/products`;
    const response = await axios.post(url, newProduct);
    return response.data;
    
    console.log("New Produc: ", newProduct);
}


// update product
export const updateProduct = async (pId, updatedData) => {
    const url = `${API_URL}/products/?productId=${pId}`;
    const response = await axios.put(url, updatedData);    
    return response.data[0];

    console.log("url: ", url);
    console.log("Product Id: ". pId);
    console.log("Updated Product: ", updateProduct);
}


// delete Product
export const deleteProduct = async (pId) => {
    const url = `${API_URL}/products/?productId=${pId}`; 
    const response = await axios.delete(url);

    return response.data;
}