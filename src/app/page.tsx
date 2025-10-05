import { Hero } from "@/components/landing/hero";
import { Header } from "@/components/landing/header";
import { About } from "@/components/landing/about";
import { Benefits } from "@/components/landing/benefits";
import { Features } from "@/components/landing/features";
import { Testimonials } from "@/components/landing/testimonials";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Benefits />
        <Features />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
