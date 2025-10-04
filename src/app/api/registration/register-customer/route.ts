import Customer from "@/lib/models/customer";
import { connectDb } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  password: z.string().min(1, "Password is required"),
  phone: z.string().min(1, "Phone is required"),
});

export const POST = async (req: NextRequest) => {
    const { name, password, phone } = await req.json();
    const result = schema.safeParse({
        name,
        phone,
        password,
    });
    if (!result.success) {
        console.log(result);
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    try {
        await connectDb();
        const customer = await Customer.create(result?.data);
        return NextResponse.json({message: "User registered successfully", data: customer}, {status : 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to register user' }, { status: 500 });
    }
}
