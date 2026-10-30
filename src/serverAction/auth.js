"use server";
import { setSession, deleteSession, getSession } from "../_lib/session";   //loginAction,  logoutAction,  updateUserAction
import { createUser, getUserById, updateUser } from '../api/users';   //registerAction,  updateUserAction,  updateUserAction
import { createCart, deleteCart } from '../api/carts';
import { redirect } from "next/navigation";
import { getProductById } from "@/api/products";
import { pool } from "../_lib/db";


// Login action
export const loginAction = async (prevState, formData) => {
    const email = formData.get("email")?.trim().toLowerCase();
    const password = formData.get("password");

    if (!email || !password) {
        return {
            error: "Email and password are required."
        };
    }

    try {
        const result = await pool.query(
            `SELECT * FROM users
            WHERE email = $1
            LIMIT 1`,
            [email]
        );

        const user = result.rows[0];
        console.log("user: ", user);

        if (!user || user.password !== password) {
            return {
                error: "Invalid Credential"
            };
        }

        await setSession({
            name: user.name,
            email: user.email,
            id: user.id
        });

    } catch (error) {
        console.error("Login error:", error.message);

        return {
            error: "Something went wrong. Please try again."
        };
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
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim().toLowerCase();
    const password = formData.get("password");
    
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("password: ", password);

    if (!name || !email || !password) {
        return {
            error: "All fields are required.",
        };
    }

    const newUser = {
        name,
        email,
        password,
        role: "User",
        avatar: "",
        phone: null,
        address: {
            street: "",
            city: "",
            state: "",
            pincode: "",
            country: "",
        },
        createdAt: new Date().toISOString().slice(0, 10),
    };
    console.log("New user: ", newUser);

    try {
        const existingUser = await pool.query(
            "SELECT id FROM users WHERE email = $1 LIMIT 1",
            [email]
        );

        if (existingUser.rows.length > 0) {
            return {
                error: "Your email ID is already registered!",
            };
        }

        await createUser(newUser);

    } catch (error) {
        console.error("Register error:", error.message);

        // if (error.code === "23505") {
        //     return {
        //         error: "Your email ID is already registered!",
        //     };
        // }

        return {
            error: "Something went wrong. Please try again.",
        };
    }

    redirect("/login");
};

// update user action
export const updateUserAction = async (formData) => {
    const session = await getSession();

    if (!session?.id) {
        redirect("/login");
    }

    try {
        const user = await getUserById(session.id);
        console.log("login user: ", user);

        if (!user) {
            return {
                error: "User not found."
            };
        }

        const updatedUser = {
            name: formData.get("name")?.trim(),
            email: user.email,
            role: user.role,
            avatar: formData.get("avatar"),
            phone: formData.get("phone"),
            address: {
                street: formData.get("street"),
                city: formData.get("city"),
                state: formData.get("state"),
                pincode: formData.get("pincode"),
                country: formData.get("country")
            }
        };

        console.log("Updated User:", {
            id: session.id,
            name: updatedUser.name,
            email: updatedUser.email
        });

        await updateUser(session.id, updatedUser);

    } catch (error) {
        console.error("Update user action error:", error.message);

        return {
            error: "Unable to update profile. Please try again."
        };
    }

    redirect("/");
};


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