import Navbar from "@/components/layout/Navbar";
import { UserProvider } from "@/contexts/UserContext";
import { handleServerSession } from "@/lib/auth";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await handleServerSession();
  return (
    <html lang="en">
      <body className="antialiased dark">
        <UserProvider>
          <Navbar session={session} />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}