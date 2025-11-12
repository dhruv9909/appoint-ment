import Business from "@/lib/models/businessProfile";
import Customer from "@/lib/models/customerProfile";
import { connectDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
    try {
        await connectDb();
        console.log("db-connected")
        const { token } = await request.json();
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized - token missing' }, { status: 401 });
        }
        console.log("token-data", token.id, token.userId, token.role);
        const user = token.role === "business" ? await Business.find({ userId: token.id }) : Customer.find({ userId: token.id });
        return NextResponse.json({
            message: "User profile fetched successfully",
            status: 200,
            data: user
        });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}