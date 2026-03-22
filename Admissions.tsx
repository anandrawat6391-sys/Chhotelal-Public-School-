import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList, Users, CheckSquare, CalendarDays, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Lang = "en" | "hi";

export function Admissions() {
  const [lang, setLang] = useState<Lang>("en");

  const steps = [
    {
      icon: ClipboardList,
      en: { title: "1. Inquire", desc: "Call us or send a WhatsApp message to learn about available seats, fee structure, and our school." },
      hi: { title: "१. जानकारी लें", desc: "उपलब्ध सीटों, शुल्क संरचना और हमारे विद्यालय के बारे में जानने के लिए हमें कॉल करें या WhatsApp संदेश भेजें।" },
    },
    {
      icon: Users,
      en: { title: "2. Campus Visit", desc: "Schedule a visit to see our campus, classrooms, playground, and meet our teachers in person." },
      hi: { title: "२. परिसर भ्रमण", desc: "हमारे परिसर, कक्षाओं, खेल के मैदान को देखने और शिक्षकों से मिलने के लिए विद्यालय आएं।" },
    },
    {
      icon: CheckSquare,
      en: { title: "3. Documents", desc: "Bring the required documents — birth certificate, previous school report card, passport photo, and Aadhaar card." },
      hi: { title: "३. दस्तावेज़", desc: "आवश्यक दस्तावेज़ लाएं — जन्म प्रमाण पत्र, पिछली कक्षा की अंकतालिका, पासपोर्ट फ़ोटो और आधार कार्ड।" },
    },
    {
      icon: CalendarDays,
      en: { title: "4. Enrolment", desc: "Fill out the application form and confirm your child's seat. You can also apply online using our Google Form below." },
      hi: { title: "४. नामांकन", desc: "आवेदन पत्र भरें और अपने बच्चे की सीट सुनिश्चित करें। आप नीचे दिए गए Google Form से ऑनलाइन भी आवेदन कर सकते हैं।" },
      hasForm: true,
    },
  ];

  return (
    <section id="admissions" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">
                {lang === "en" ? "Join Our Community" : "हमारे परिवार से जुड़ें"}
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight mb-6">
                {lang === "en" ? "Admissions Process" : "प्रवेश प्रक्रिया"}
              </h3>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                {lang === "en"
                  ? "Admissions are open for classes 1 to 8. We welcome every child who wishes to learn, grow, and succeed. Our process is simple and straightforward."
                  : "कक्षा 1 से 8 तक प्रवेश खुले हैं। हम हर उस बच्चे का स्वागत करते हैं जो सीखना, आगे बढ़ना और सफल होना चाहता है। हमारी प्रक्रिया सरल और स्पष्ट है।"}
              </p>

              {/* Lang toggle */}
              <div className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 p-1 gap-1">
                <button
                  onClick={() => setLang("en")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    lang === "en" ? "bg-white text-primary shadow-sm" : "text-primary-foreground/70 hover:text-white"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang("hi")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    lang === "hi" ? "bg-white text-primary shadow-sm" : "text-primary-foreground/70 hover:text-white"
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-offset-1 grid sm:grid-cols-2 gap-6 lg:ml-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-8 rounded-2xl hover:bg-primary-foreground/10 transition-colors flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-display">
                  {lang === "en" ? step.en.title : step.hi.title}
                </h4>
                <p className="text-primary-foreground/70 text-sm leading-relaxed flex-1">
                  {lang === "en" ? step.en.desc : step.hi.desc}
                </p>
                {step.hasForm && (
                  <a
                    href="https://forms.gle/pTnM9adH9mRNdzp89"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-enrolment-form"
                    className="mt-5 inline-flex items-center justify-center gap-2 w-full bg-secondary text-secondary-foreground font-semibold text-sm py-2.5 px-4 rounded-xl hover:bg-secondary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {lang === "en" ? "Apply Online" : "ऑनलाइन आवेदन करें"}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
