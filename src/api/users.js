import axios from "axios"

const API_URL = "https://shopease-api-q3o2.onrender.com"

// return All Users
export const getUsers = async () => {
    const url = `${API_URL}/users`;
    const response = await axios.get(url);

    return response.data;

    console.log("url: ", url);
}

// return user by id
export const getUserById = async (id) => {
    try {
        const url = `${API_URL}/users/${id}`;
        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        // User API mein nahi mila
        if (error.response?.status === 404) {
            return null;
        }

        // Baaki errors ko aage bhejo
        throw error;
    }
};

// create user
export const createUser = async (newUser) => {
    console.log("new user: ", newUser);
    const url = `${API_URL}/users`;
    const response = await axios.post(url, newUser);

    return response.data;
}

// update user
export const updateUser = async (sessionId, updatedUser) => {
    const url = `${API_URL}/users/${sessionId}`;
    const response = await axios.put(url, updatedUser);

    return response.data;
}

// delete user
export const deleteUser = async (id) => {
    const url = `${API_URL}/users/${id}`;
    const response = await axios.delete(url);

    return response.data;
}

// update user password
export const updateUserPassword = async (sessionId, newPassword) => {
    const url = `${API_URL}/users/${sessionId}`
    const response = await axios.patch(url, {newPassword});
    
    return response.data;
}