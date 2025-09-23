"use client"

import { Building2, LogOut, Users } from 'lucide-react'
import React, { useContext } from 'react'
import { Button } from '../ui/button'
import { AuthContext } from '@/contexts/authContext'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function Navbar() {
  const { user } = useContext(AuthContext);
  // manually redirect (since redirect: false)
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const result = await signOut({
        redirect: false, // prevent full page reload
        callbackUrl: "/login", // where to go after logout
      });

      console.log("Signed out:", result);

      router.push("/");
    } catch (err) {
      console.error("Signout error:", err);
    }
  };
  return (
    <header className="border-b bg-card sticky top-0 w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-semibold">BookingHub</h1>
          </div>
          {user && <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="text-sm">{user.name}</span>
              <span className="text-xs text-muted-foreground">({user.role})</span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>}
        </div>
      </div>
    </header>
  )
}

export default Navbar