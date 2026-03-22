import { useState } from "react";
import { motion } from "framer-motion";

type Lang = "en" | "hi";

export function Academics() {
  const [lang, setLang] = useState<Lang>("en");

  const programs = [
    {
      image: "/media/school_primary.jpg",
      fallback: "/media/school_1.jpg",
      en: {
        title: "Primary School",
        age: "Ages 5 – 11",
        desc: "Building a strong foundation in literacy, numeracy, and creative thinking through play-based and structured learning environments.",
        features: ["Foundational Literacy", "Interactive Science", "Creative Arts", "Physical Education"],
      },
      hi: {
        title: "प्राथमिक विद्यालय",
        age: "आयु 5 – 11",
        desc: "खेल-आधारित और संरचित शिक्षण के माध्यम से साक्षरता, संख्यात्मकता और रचनात्मक सोच की मजबूत नींव तैयार करना।",
        features: ["आधारभूत साक्षरता", "इंटरैक्टिव विज्ञान", "रचनात्मक कला", "शारीरिक शिक्षा"],
      },
    },
    {
      image: "/media/school_3.jpg",
      fallback: "/media/school_1.jpg",
      en: {
        title: "Secondary School",
        age: "Ages 12 – 18",
        desc: "Comprehensive curriculum designed to foster critical thinking, independence, and preparation for higher education and future careers.",
        features: ["Advanced Mathematics", "Science & Technology", "Social Studies", "Extracurricular Clubs"],
      },
      hi: {
        title: "माध्यमिक विद्यालय",
        age: "आयु 12 – 18",
        desc: "आलोचनात्मक सोच, स्वतंत्रता और उच्च शिक्षा तथा भविष्य के करियर की तैयारी के लिए तैयार किया गया व्यापक पाठ्यक्रम।",
        features: ["उन्नत गणित", "विज्ञान एवं प्रौद्योगिकी", "सामाजिक अध्ययन", "सह-शैक्षिक क्लब"],
      },
    },
  ];

  return (
    <section id="academics" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            {lang === "en" ? "Academic Excellence" : "शैक्षणिक उत्कृष्टता"}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-6">
            {lang === "en"
              ? "Programs Designed for Every Stage of Growth"
              : "हर विकास चरण के लिए तैयार कार्यक्रम"}
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            {lang === "en"
              ? "We provide an engaging, rigorous, and supportive learning environment that adapts to the developmental needs of our students."
              : "हम एक आकर्षक, कठोर और सहायक शिक्षण वातावरण प्रदान करते हैं जो हमारे छात्रों की विकास संबंधी जरूरतों के अनुकूल होता है।"}
          </p>

          {/* Language toggle */}
          <div className="inline-flex items-center rounded-full border border-border bg-background p-1 gap-1">
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                lang === "en" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("hi")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                lang === "hi" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {programs.map((program, index) => {
            const p = lang === "en" ? program.en : program.hi;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col bg-card">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={program.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = program.fallback;
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-foreground font-semibold px-4 py-1.5 rounded-full text-sm shadow-sm">
                      {p.age}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h4 className="text-2xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-muted-foreground mb-6 flex-1">{p.desc}</p>
                    <div className="grid grid-cols-2 gap-y-3 mt-auto pt-6 border-t border-border/60">
                      {p.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
