import Navbar from "@/components/layout/Navbar";
import QueryProvider from "@/components/layout/QueryProvider";
import { UserProvider } from "@/contexts/UserContext";
import { handleServerSession } from "@/lib/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await handleServerSession();
  return (
    <html lang="en">
      <body className="antialiased dark">
        <Toaster position="top-right" /> {/* Add Toaster here */}
        <QueryProvider>
          <UserProvider>
            <Navbar session={session} />
            {children}
          </UserProvider>
        </QueryProvider>
      </body>
    </html>
  );
}