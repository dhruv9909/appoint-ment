import { CTA } from "@/components/homepage/Cta";
import { Features } from "@/components/homepage/Features";
import { Footer } from "@/components/homepage/Footer";
import { Hero } from "@/components/homepage/Hero";
import { Testimonials } from "@/components/homepage/Testimonials";

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}