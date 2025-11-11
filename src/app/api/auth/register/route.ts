import Business from "@/lib/models/businessProfile";
import Customer from "@/lib/models/customerProfile";
import User from "@/lib/models/user";
import { connectDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        await connectDb();
        const { email, phone, role, password, ...rest } = await request.json();
        if (!email && !phone) {
            return NextResponse.json({ error: 'Either email or phone number is required' }, { status: 400 });
        }

        const user = await User.create({ email, phone, role, password });

        if (!user) {
            return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
        }

        if (user.role === 'business') {
            await Business.create({
                userId: user._id,
                ...rest
            });
        }
        if (user.role === 'customer') {
            await Customer.create({
                userId: user._id,
                ...rest
            });
        }

        return NextResponse.json({
            message: "User registered successfully",
            status: 201,
            success: true,
            data: user
        });
    } catch (error) {
        console.error("Error registering user:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}