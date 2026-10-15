"use server";
import axios from "axios";
// import { error } from "console";
import { deleteSession, getSession, setSession } from "../_lib/session";
import { createUser, getUserById, updateUser } from '../api/users';
import { redirect } from "next/navigation";
import { error } from "console";

const API_URL = "https://shopease-api-q3o2.onrender.com";

// Login action
export const loginAction = async (prevstate, formData) => {
    try {
        // const email = formData.get("email");
        // const password = formData.get("password");

        console.log("Input email: ", formData.get("email"));
        console.log("Input password: ", formData.get("password"));

        const url = `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`;
        const response = await axios.get(url);

        const user = response.data[0];

        console.log("url: ", url);
        console.log("response: ", response);
        console.log("user: ", user);

        if (!user) {
            return {
                error: "Invalid Credential"
            };   // throw ke niche ka code nahi chalta matlab ye code chalne par niche ka code nahi chalega 
        }     

        await setSession(
            {
                name: user.name, 
                email: user.email, 
                id: user.id
            }
        )

    } catch (error) {
        // if(error.response?.status === 404) {
        //     return {
        //         error: "Invalid Credential"
        //     }      
        // }
        // console.log("Login error: ", error.message);
        
        // return {
        //     error: "Something went wrong. Please try again."
        // }
    }

    redirect("/");
};


// logout action
export const logoutAction = async () => {
    try {
        await deleteSession()
    } catch (error) {
        console.log("Error: ", error);     
        throw error;
    }
    redirect("/login");
}


// register action
export const registerAction = async (formData) => {
    const url = `${API_URL}/users`;
    const response = await axios.get(url);
    const users = response.data;

    const newUser = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        role: "User",
        avatar: "",
        phone: null,
        address: {
            street: "",
            city: "",
            state: "",
            pincode: "",
            country: ""
        },
        createdAt: new Date().toLocaleDateString("en-GB")
    }
    console.log("new User: ", newUser);

    const existingUser = users.find((user) => user.email === formData.get("email"));
    if(existingUser) {
        console.log("existing user: ", existingUser);
        throw new Error("Your Email Id is Already Registerd! ")   // throw ke niche ka code nahi chalta matlab ye code chalne par niche ka code nahi chalega 
    }

    try {
        await createUser(newUser);
    } catch (error) {
        console.log("Error: ", error);
        throw error;
    }
    redirect("/login");
}

// update user action
export const updateUserAction = async (formData) => {
    const session = await getSession();
    const user = session ? await getUserById(session.id) : "";

    const updatedUser = {
        id: session?.id,
        name: formData.get("name"),
        email: user.email,
        password: user.password,
        role: "User",
        avatar: formData.get("avatar"),
        phone: formData.get("phone"),
        address: {
            street: formData.get("street"),
            city: formData.get("city"),
            state: formData.get("state"),
            pincode: formData.get("pincode"),
            country: formData.get("country")
        },
        createdAt: user.createdAt
    }
    console.log("Updated User: ", updatedUser);

    try {
        await updateUser(session?.id, updatedUser)
    } catch (error) {
        console.log("Error: ", error);
        throw new error;
    }
    redirect("/");
}