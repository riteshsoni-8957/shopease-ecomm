import { pool } from "../_lib/db"

// const API_URL = process.env.NEXT_PUBLIC_API_URL


// get all products
export const getProducts = async () => {
    try {
        const result = await pool.query(
            "SELECT * FROM products ORDER BY id"
        );

        return result.rows;
    } catch (error) {
        console.log("get products error: ", error.message);
        throw error;
    }
};


// get product by Pid
export const getProductById = async (pId) => {
    try {
        const result = await pool.query(
            'SELECT * FROM products WHERE "productId" = $1 LIMIT 1',
            [pId]
        );

        return result.rows[0] || null;
    } catch (error) {
        console.error("getProductById error:", error.message);
        throw error;
    }
};


// // create product
// export const createProduct = async (newProduct) => {
//     const url = `${API_URL}/products`;
//     const response = await axios.post(url, newProduct);
//     return response.data;
// }


// // update product
// export const updateProduct = async (pId, updatedData) => {
//     const url = `${API_URL}/products/?productId=${pId}`;
//     const response = await axios.put(url, updatedData);    
//     return response.data[0];
// }


// // delete Product using unique pId
// export const deleteProduct = async (pId) => {
//     const url = `${API_URL}/products/?productId=${pId}`; 
//     const response = await axios.delete(url);

//     return response.data;
// }