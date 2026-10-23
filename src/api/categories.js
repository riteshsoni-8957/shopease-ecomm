import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL


// get all categories
export const getCategories = async() => {
    const url = `${API_URL}/categories`;
    const response = await axios.get(url);
    const categories = response.data;
    return categories;
}


// get category by id
export const getCategoryById = async (id) => {
    const url = `${API_URL}/categories/${id}`;
    const response = await axios.get(url);
    const category = response.data;
    return category;
}


// create category
export const createCategory = async (newCategory) => {
    const url = `${API_URL}/categories`;
    const response = await axios.post(url, newCategory);
    return response.data;
}


// update category
export const updateCategory = async (id, updatedData) => {
    const url = `${API_URL}/categories/${id}`;
    const response = await axios.put(url, updatedData);    
    return response.data;
}


// delete category
export const deleteCategory = async (id) => {
    const url = `${API_URL}/categories/${id}`;    
    const response = await axios.delete(url);

    return response.data;
}