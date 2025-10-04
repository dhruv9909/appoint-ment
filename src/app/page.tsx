import { Hero } from "@/components/homepage/Hero";
import { Features } from "@/components/homepage/Features";
import { Testimonials } from "@/components/homepage/Testimonials";
import { CTA } from "@/components/homepage/Cta";
import { Footer } from "@/components/homepage/Footer";

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