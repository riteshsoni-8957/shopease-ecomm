"use server";
import axios from "axios";
// import { error } from "console";
import { deleteSession, getSession, setSession } from "../_lib/session";
import { createUser, getUserById, getUsers, updateUser } from '../api/users';
import { createCart, deleteCart } from '../api/carts';
import { redirect } from "next/navigation";
import { getProductById } from "@/api/products";

const API_URL = process.env.NEXT_PUBLIC_API_URL

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

        console.log("Login action called....")
        console.log("url: ", url);
        console.log("user...", user);


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
export const registerAction = async (prevState, formData) => {
    const users = await getUsers();
    console.log("Register action called.....");
    console.log("Users...", users);

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
    console.log("Existing user: ", existingUser);

    if(existingUser) {
        return {
            error: "Your email id is already registerdd!"      
        }
    }

    try {
        await createUser(newUser);
    } catch (error) {
        // if(error.response?.status === 404) {
        //     return {
        //         error: "Your email id is already registerdd!"
        //     }      
        // }
        // console.log("Register error: ", error.message);
        
        // return {
        //     error: "Something went wrong. Please try again."
        // }
    }
    redirect("/login");
}

// update user action
export const updateUserAction = async (formData) => {
    const session = await getSession();
    const user = session ? await getUserById(session.id) : "";
    console.log("Update user action is called.....");

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


// carts action
export const cartAction = async (productId) => {
    try {
        const session = await getSession();
        const product = await getProductById(productId);
        console.log("cart action called......")
        console.log("product by cart.......", product);

        const newCart = {
            cartId : session?.id,
            productId: productId,
            name: product.name,
            slug: product.slug,
            category: product.category,
            subcategory: product.subcategory,
            brand: product.brand,
            description: product.description,
            price: product.price,
            originalPrice: product.originalPrice,
            discount: product.discount,
            rating: product.rating,
            reviews: product.reviews,
            stock: product.stock,
            sku: product.sku,
            images: product.images.map((image) => image),
            colors: product.colors.map((color) => color),
            sizes: product.sizes.map((size) => size),
            features: product.features.map((feature) => feature),
            tags: product.tags.map((tag) => tag),
            isFeatured: true,
            isNew: true,
            isBestSeller: true
        }

        console.log("New cart product: ", newCart);

        await createCart(newCart);
    } catch (error) {
        console.log("error: ", error);
        throw new error;
    }
    redirect("/carts");
}

// delete carts
export const deleteCartAction = async (id) => {
    try {
        console.log("cart delete action called....");
        await deleteCart(id)
    } catch (error) {
        console.log("Error: ", error);
    }
}