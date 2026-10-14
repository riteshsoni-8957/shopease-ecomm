import axios from "axios";

const API_URL = "https://shopease-api-q3o2.onrender.com"


// get all categories
export const getCategories = async() => {
    const url = `${API_URL}/categories`;
    const response = await axios.get(url);
    const categories = response.data;
    return categories;

    console.log("All categories: ", categories);
}


// get category by id
export const getCategoryById = async (id) => {
    const url = `${API_URL}/categories/${id}`;
    const response = await axios.get(url);
    const category = response.data;
    return category;

    console.log("Category ID:", id);
    console.log("URL:", url);
}


// create category
export const createCategory = async (newCategory) => {
    const url = `${API_URL}/categories`;
    const response = await axios.post(url, newCategory);
    return response.data;
    
    console.log("New Category: ", newCategory);
}


// update category
export const updateCategory = async (id, updatedData) => {
    const url = `${API_URL}/categories/${id}`;
    const response = await axios.put(url, updatedData);    
    return response.data;

    console.log("url: ", url);
    console.log("Category Id: ", id);
    console.log("Updated Category: ", updatedData);
}


// delete category
export const deleteCategory = async (id) => {
    const url = `${API_URL}/categories/${id}`;    
    const response = await axios.delete(url);

    return response.data;
}