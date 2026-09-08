import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CalorieSelector } from "@/components/CalorieSelector";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CalorieSelector />
        <About />
        <Menu />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
