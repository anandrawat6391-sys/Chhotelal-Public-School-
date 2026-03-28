import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  const scrollToAcademics = () => {
    document.querySelector("#academics")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 w-full h-full z-0 bg-primary">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/media/school_hallway.mp4" type="video/mp4" />
        </video>
        
        {/* Dark wash gradient to ensure text readability in all modes */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/40 z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 font-medium text-sm mb-6 backdrop-blur-sm">
              Empowering Tomorrow's Leaders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-[1.1] mb-6 shadow-sm"
          >
            Chhotelal Public School
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mb-10 max-w-2xl"
          >
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              A vibrant community dedicated to fostering academic achievement, personal growth, and a lifelong love of learning for primary and secondary students.
            </p>
            <p className="text-base md:text-lg text-slate-300/80 leading-relaxed mt-2">
              एक जीवंत समुदाय जो प्राथमिक एवं माध्यमिक विद्यार्थियों के शैक्षणिक विकास, व्यक्तिगत उन्नति और जीवनभर के सीखने के प्रति समर्पित है।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-elevate font-semibold px-8 h-14 text-base"
            >
              Begin Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAcademics}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md font-semibold px-8 h-14 text-base group"
            >
              Explore Programs
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-secondary absolute top-0"
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
