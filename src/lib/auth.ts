import { connectDb } from "@/lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
import { AuthOptions, getServerSession } from "next-auth";
import User from "./models/user";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                identifier: { label: "Email or Phone", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectDb();
                // check if identifier is email
                const isEmail = credentials?.identifier.includes("@");

                const user = isEmail
                    ? await User.findOne({ email: credentials?.identifier })
                    : await User.findOne({ phone: credentials?.identifier });

                if (!user) throw new Error("User not found");

                // ⚠️ Use bcrypt in production, plain text only for testing
                // const isValid = await bcrypt.compare(credentials?.password || "", user.password);
                const isValid = credentials?.password === user.password;

                if (!isValid) throw new Error("Invalid credentials");

                return {
                    id: user._id,
                    role: user.role,
                    name: user.name,
                    email: user.email || null,
                    phone: user.phone || null,
                };
            },
        }),
    ],
    session: { strategy: "jwt" as const }, //fix typing
    callbacks: {
        async jwt({ token, user }) {
            if(user){
            token.id = (user as any).id;
            token.name = (user as any).name;
            token.role = (user as any).role;
            token.email = (user as any).email;
            token.phone = (user as any).phone;}
            return token;
        },
        async session({ session, token }) {
            if(token){
            (session.user as any).id = token.id;
            (session.user as any).name = token.name;
            (session.user as any).role = token.role;
            (session.user as any).email = token.email;
            (session.user as any).phone = token.phone;
            }
            return session;
        },
    },
};

export const handleServerSession = () => getServerSession(authOptions);