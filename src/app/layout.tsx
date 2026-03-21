import Navbar from "@/components/layout/Navbar";
import { handleServerSession } from "@/lib/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/layout/Providers";

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
        <Providers>
            <Navbar />
            {children}
        </Providers>
      </body>
    </html>
  );
}