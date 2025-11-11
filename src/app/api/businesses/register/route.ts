import Business from "@/lib/models/businessProfile";
import { connectDb } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  ownerName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
  phone: z.string().min(1, "Phone is required"),
  openingHours: z.string().min(1),
  closingHours: z.string().min(1),
  category: z.string().min(1),
  businessName: z.string().min(1),
});

export const POST = async (req: NextRequest) => {
    const { ownerName, email, password, phone, openingHours, category, businessName, closingHours } = await req.json();
    const result = schema.safeParse({
        ownerName,
        email,
        phone,
        password,
        businessName,
        category,
        openingHours,
        closingHours
    });
    if (!result.success) {
        console.log(result);
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    try {
        await connectDb();
        const business = await Business.create(result?.data);
        return NextResponse.json({message: "User registered successfully", data: business}, {status : 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to register user' }, { status: 500 });
    }
}
