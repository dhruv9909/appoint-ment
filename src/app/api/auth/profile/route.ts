import Business from "@/lib/models/businessProfile";
import Customer from "@/lib/models/customerProfile";
import { connectDb } from "@/lib/mongodb";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    try {
        await connectDb();
        console.log("db-connected")
        // const { token } = await request.json(); - not used sinc get requests doesn't have body, token is extracted from cookies using getToken
        const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized - token missing' }, { status: 401 });
        }
        const user = token.role === "business" ? await Business.findOne({ userId: token.id }) : await Customer.findOne({ userId: token.id });
        return NextResponse.json({
            message: "User profile fetched successfully",
            status: 200,
            data: user
        });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}