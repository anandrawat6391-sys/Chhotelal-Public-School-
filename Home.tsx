import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Academics } from "@/components/sections/Academics";
import { FoundersMessage } from "@/components/sections/FoundersMessage";
import { Testimonials } from "@/components/sections/Testimonials";
import { Admissions } from "@/components/sections/Admissions";
import { News } from "@/components/sections/News";
import { Complaints } from "@/components/sections/Complaints";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Academics />
        <FoundersMessage />
        <Testimonials />
        <Admissions />
        <News />
        <Complaints />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
