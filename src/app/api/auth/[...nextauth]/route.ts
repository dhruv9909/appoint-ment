// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDb } from "@/lib/mongodb";
// import bcrypt from "bcryptjs";
import Customer from "@/lib/models/customer";
import Business from "@/lib/models/business";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                identifier: { label: "Email or Phone", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                let user;
                await connectDb();
                // check if identifier is email
                const isEmail = credentials?.identifier.includes("@");

                if (isEmail) {
                    user = await Business.findOne({ email: credentials?.identifier });
                } else {
                    user = await Customer.findOne({ phone: credentials?.identifier });
                }

                if (!user) throw new Error("User not found");

                // ⚠️ Use bcrypt in production, plain text only for testing
                // const isValid = await bcrypt.compare(credentials?.password || "", user.password);
                const isValid = credentials?.password === user.password;

                if (!isValid) throw new Error("Invalid credentials");

                return {
                    id: user._id,
                    name: user.name || user.ownerName,
                    role: user.category ? "business" : "customer",
                    email: user.email || null,
                    phone: user.phone || null,
                };
            },
        }),
    ],
    session: { strategy: "jwt" as const }, //fix typing
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = (user as any).role;
            return token;
        },
        async session({ session, token }) {
            if (token) (session.user as any).role = token.role;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
