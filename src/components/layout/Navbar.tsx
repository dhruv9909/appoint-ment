"use client"
import { Building2, LogOut, Users } from 'lucide-react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Navbar({ session }: { session: Session | null }) {
  // manually redirect (since redirect: false)
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const result = await signOut({
        redirect: true, // prevent full page reload
        callbackUrl: "/login", // where to go after logout
      });

      console.log("Signed out:", result);

      // router.push("/");
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
          </div>
          {session?.user
            ? <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">{session?.user?.name}</span>
                <span className="text-xs text-muted-foreground">({session?.user?.role})</span>
              </div>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
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
