import { pool } from "@/_lib/db";


// isme sare user ke sare carts aayega
export const getCarts = async () => {
    try {
        const result = await pool.query(
            `SELECT * FROM carts ORDER BY id`
        )

        return result.rowa;
    } catch (error) {
        console.log("getCarts error: ", error.message);
        throw error;
    }
}

// isme session id ke sare carts aayega
export const getCartsByCartId = async (sessionId) => {
    try {
        const result = await pool.query(
            `SELECT * FROM carts 
            WHERE "cartId" = $1`,
            [sessionId]
        )

        return result.rows
    } catch (error) {
        console.log("getCartsByCartId error: ", error.message);
        throw error;
    }
}

// isse carts me data save hoga 
export const createCart = async (newCart) => {
    try {
        const {
            cartId,
            productId,
            name,
            slug,
            category,
            subcategory,
            brand,
            description,
            price,
            originalPrice,
            discount,
            rating,
            reviews,
            stock,
            sku,
            images,
            colors,
            sizes,
            features,
            tags,
            isFeatured,
            isNew,
            isBestSeller,
            quantity
        } = newCart;

        const result = await pool.query(
            `INSERT INTO carts (
                "cartId",
                "productId",
                name,
                slug,
                category,
                subcategory,
                brand,
                description,
                price,
                "originalPrice",
                discount,
                rating,
                reviews,
                stock,
                sku,
                images,
                colors,
                sizes,
                features,
                tags,
                "isFeatured",
                "isNew",
                "isBestSeller",
                quantity
            )
            VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8,
                $9, $10, $11, $12, $13, $14, $15,
                $16, $17, $18, $19, $20, $21, $22, $23, $24
            )
            RETURNING *`,
            [
                cartId,
                productId,
                name,
                slug,
                category,
                subcategory,
                brand,
                description,
                price,
                originalPrice,
                discount,
                rating,
                reviews,
                stock,
                sku,
                images || [],
                colors || [],
                sizes || [],
                features || [],
                tags || [],
                isFeatured ?? false,
                isNew ?? false,
                isBestSeller ?? false,
                quantity ?? 1
            ]
        );

        return result.rows[0];

    } catch (error) {
        console.log("createCart error:", error.message);
        throw error;
    }
};

// isse cart ke id se cart delete hoga
export const deleteCart = async (id) => {
    try {
        const result = await pool.query(
            `DELETE FROM carts 
            WHERE id = $1`,
            [id]
        )

        return result.rows;
    } catch (error) {
        console.log("deleteCart error: ", error.message);
        throw error;
    }
}