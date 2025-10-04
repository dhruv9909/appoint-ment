import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { handleServerSession } from "@/lib/auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await handleServerSession();
  return (
    <html lang="en">
      <body className="antialiased dark">
        <Navbar session={session} />
        {children}
      </body>
    </html>
  );
}