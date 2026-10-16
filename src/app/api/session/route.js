import { NextResponse } from "next/server";
import { deleteSession } from "@/_lib/session";

export const DELETE = async () => {
    try {
        await deleteSession();

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        return NextResponse.json(
            { success: false },
            { status: 500 }
        );
    }
};