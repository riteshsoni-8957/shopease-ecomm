import { cookies } from "next/headers";

// Set session in coockie
export const setSession = async(user) => {
    (await cookies()).set("session", JSON.stringify(user),{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60*60*24*7,
        path: "/",
    })
}

// get session in cookies
export const getSession = async() => {
    const session = (await cookies()).get("session")?.value;
    if(!session) return null;
    const user = JSON.parse(session);
    
    return user;
}

// delete session in cookies
export const deleteSession = async () => {
    (await cookies()).delete("session");
}