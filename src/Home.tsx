import Navbar from "../Navbar";
import Hero from "../Hero";
import About from "../About";
import Academics from "../Academics";
import FoundersMessage from "../FoundersMessage";
import Testimonials from "../Testimonials";
import Admissions from "../Admissions";
import News from "../News";
import Complaints from "../Complaints";
import Contact from "../Contact";
import Footer from "../Footer";

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
