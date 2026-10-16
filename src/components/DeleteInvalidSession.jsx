"use client";

import { useEffect } from "react";

export default function DeleteInvalidSession() {
    useEffect(() => {
        fetch("/api/session", {
            method: "DELETE",
        });
    }, []);

    return null;
}