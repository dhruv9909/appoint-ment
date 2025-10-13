import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session{
        user?:{
            id?: string;
            name?: string | null;
            email?: string | null;
            role?: "customer" | "business" | null;
            businessInfo?: {
                businessName: string;
                address: string;
                phoneNumber: string;
                category: string;
                workingHours: string;
                description?: string | null;
            } | null;
            appointments?: Appointment[] | null;
        } & DefaultSession["user"];
    }
}