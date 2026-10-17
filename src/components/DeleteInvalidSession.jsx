"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DeleteInvalidSession() {
    const router = useRouter();

    useEffect(() => {
        const deleteSession = async () => {
            try {
                const response = await fetch("/api/session", {
                    method: "DELETE",
                })

                if(response.ok) {
                    router.refresh();  // session delete hone ke baad refresh hona 
                }
            } catch (error) {
                console.error("Session delete error:", error);
            }
        }

        deleteSession();
    }, [router]);

    return null;
}