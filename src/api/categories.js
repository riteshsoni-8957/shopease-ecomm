import { pool } from "@/_lib/db";


// get all categories
export const getCategories = async() => {
    try {
        const result = await pool.query(
            "SELECT * FROM categories ORDER BY id"
        )

        return result.rows;
    } catch (error) {
        console.log("getCategories error: ", error.message);
        throw error;
    }
}


// // get category by id
// export const getCategoryById = async (id) => {
//     const url = `${API_URL}/categories/${id}`;
//     const response = await axios.get(url);
//     const category = response.data;
//     return category;
// }


// // create category
// export const createCategory = async (newCategory) => {
//     const url = `${API_URL}/categories`;
//     const response = await axios.post(url, newCategory);
//     return response.data;
// }


// // update category
// export const updateCategory = async (id, updatedData) => {
//     const url = `${API_URL}/categories/${id}`;
//     const response = await axios.put(url, updatedData);    
//     return response.data;
// }


// // delete category
// export const deleteCategory = async (id) => {
//     const url = `${API_URL}/categories/${id}`;    
//     const response = await axios.delete(url);

//     return response.data;
// }