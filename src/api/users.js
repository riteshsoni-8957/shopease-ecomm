import { pool } from "@/_lib/db";

// return All Users
export const getUsers = async () => {
    try {
        const result = await pool.query(
            "SELECT * FROM users ORDER BY id"
        )
        return result.rows
    } catch (error) {
        console.log("get users error: ", error.message);
        throw error;        
    }
}

// return user by id
export const getUserById = async (id) => {
    try {
        const result = await pool.query(
            "SELECT * FROM users WHERE id = $1 LIMIT 1",
            [id]
        );

        return result.rows[0] || null;
    } catch (error) {
        console.error("getUserById error:", error.message);
        throw error;
    }
};


// create user
export const createUser = async (newUser) => {
    try {
        const {
            name,
            email,
            password,
            role,
            avatar,
            phone,
            address,
            createdAt,
        } = newUser;

        // const hashedPassword = await bcrypt.hash(password, 12);

        const result = await pool.query(
            `INSERT INTO users (
                name,
                email,
                password,
                role,
                avatar,
                phone,
                address,
                "createdAt"
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7::jsonb, $8)
            RETURNING id, name, email, role, avatar, phone, address, "createdAt"`,
            [
                name,
                email,
                password,
                role || "User",
                avatar || null,
                phone || null,
                JSON.stringify(address || {}),
                createdAt || new Date().toISOString().slice(0, 10),
            ]
        );

        return result.rows[0];

    } catch (error) {
        console.error("createUser error:", error.message);
        throw error;
    }
};

// update user
export const updateUser = async (sessionId, updatedUser) => {
    try {
        const {
            name,
            email,
            role,
            avatar,
            phone,
            address
        } = updatedUser;

        const result = await pool.query(
            `UPDATE users
             SET
                name = $1,
                email = $2,
                role = $3,
                avatar = $4,
                phone = $5,
                address = $6::jsonb
             WHERE id = $7
             RETURNING id, name, email, role, avatar, phone,
                       address, "createdAt"`,
            [
                name,
                email,
                role,
                avatar,
                phone,
                JSON.stringify(address),
                sessionId
            ]
        );

        return result.rows[0] || null;

    } catch (error) {
        console.error("updateUser error:", error.message);
        throw error;
    }
};

// delete user
export const deleteUser = async (id) => {
    try {
        const result = await pool.query(
            `DELETE FROM users 
            WHERE id = $1
            RETURNING id, name, email`,
            [id]
        );

        return result.rows[0] || null
    } catch (error) {
        console.log("DeleteUser Error: ". error.message);
        throw error;
    }
}

// update user password
export const updateUserPassword = async (sessionId, newPassword) => {
    try {
        const result = await pool.query(
            `UPDATE users
             SET password = $1
             WHERE id = $2
             RETURNING id, name, email`,
            [newPassword, sessionId]
        );

        return result.rows[0] || null;

    } catch (error) {
        console.error("updateUserPassword error:", error.message);
        throw error;
    }
};