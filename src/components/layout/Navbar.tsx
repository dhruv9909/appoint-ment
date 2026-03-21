"use client"
import { useUser } from '@/contexts/UserContext'
import { fetchProfile } from '@/services/httpServices'
import { Building2, LogOut, Users } from 'lucide-react'
import { Session } from 'next-auth'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Navbar(/* { session }: { session?: Session | null } */) {
  const { data: session } = useSession();
  const router = useRouter();
  // const userValues = useUser();

  const [open, setOpen] = useState(false);

  // const loadUserProfile = async () => {
  //   try {
  //     const res = await fetchProfile();
  //     userValues?.setUser(res.data);
  //   } catch (error) {
  //     console.error("Error loading user profile:", error);
  //   }
  // }

  const handleSignOut = async () => {
    try {
      await signOut({
        redirect: true,
        callbackUrl: "/login", // where to go after logout
      });
      setOpen(false);
    } catch (err) {
      console.error("Signout error:", err);
    }
  };
  return (
    <header className="border-b bg-card sticky top-0 w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className='flex items-center gap-12'>
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <Link href="/" className="text-lg font-semibold">BookingHub</Link>
            </div>
            <Link href="/businesses" className="text-sm text-muted-foreground">Businesses</Link>
            { }          </div>
          {session?.user
            ? <div className="flex items-center gap-4">


              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer hover:bg-muted px-2 py-1 rounded-md transition-colors">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{session?.user?.name}</span>
                    <span className="text-xs text-muted-foreground">({session?.user?.role})</span>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-40 p-2">
                  <Button onClick={() => { setOpen(false); router.push("/dashboard") }} className="flex justify-start w-full text-sm text-white bg-transparent hover:bg-white/20 cursor-pointer">
                    Dashboard
                  </Button>

                  <Button
                    className="bg-transparent w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 cursor-pointer"
                    onClick={handleSignOut}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
            :
            <>
              <Button className='cursor-pointer' variant="ghost" size="sm" onClick={() => router.push("/login")}>
                Login / Signup
              </Button>
            </>}
        </div>
      </div>
    </header>
  )
}
