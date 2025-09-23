"use client"

import { AuthContext } from "@/contexts/authContext";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const {data: session} = useSession();
    const { setUser } = useContext(AuthContext);
    useEffect(()=>{
        setUser(session?.user || null);
    }, [session, setUser]);
    return (
        <div className="min-h-screen bg-background">
                {children}
        </div>
    );
}
