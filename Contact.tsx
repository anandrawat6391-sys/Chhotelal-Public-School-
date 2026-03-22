import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

type Lang = "en" | "hi";

export function Contact() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            {lang === "en" ? "Get In Touch" : "संपर्क करें"}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-6">
            {lang === "en" ? "Contact Us" : "हमसे संपर्क करें"}
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            {lang === "en"
              ? "Have questions about admissions or want to visit? We're always here to help."
              : "प्रवेश के बारे में कोई प्रश्न है या विद्यालय देखना चाहते हैं? हम सदैव आपकी सहायता के लिए उपस्थित हैं।"}
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card rounded-3xl border border-border/50 shadow-sm divide-y divide-border/50"
        >
          {/* Visit Us */}
          <div className="flex gap-5 p-7">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-lg mb-2">
                {lang === "en" ? "Visit Us" : "हमसे मिलें"}
              </h4>
              <div className="text-muted-foreground leading-relaxed text-sm space-y-0.5">
                {lang === "en" ? (
                  <>
                    <p>Village: Padari (Buchwapur)</p>
                    <p>Post: Kusaura Bazar, Kalwari</p>
                    <p>District: Basti &nbsp;|&nbsp; Block: Bahadurpur</p>
                    <p>Pin Code: 272301, Uttar Pradesh, India</p>
                  </>
                ) : (
                  <>
                    <p>ग्राम: पडरी (बुचवापुर)</p>
                    <p>पोस्ट: कुसौरा बाजार, कलवारी</p>
                    <p>जिला: बस्ती &nbsp;|&nbsp; ब्लॉक: बहादुरपुर</p>
                    <p>पिन कोड: 272301, उत्तर प्रदेश, भारत</p>
                  </>
                )}
                <a
                  href="https://www.google.com/maps?q=26.660278,82.689778"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-google-maps"
                  className="inline-flex items-center gap-1.5 text-primary font-medium underline underline-offset-4 hover:text-primary/80 transition-colors mt-2 text-sm"
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  {lang === "en"
                    ? "26°39′37.0″N 82°41′23.2″E — Open in Google Maps"
                    : "26°39′37.0″N 82°41′23.2″E — Google Maps पर खोलें"}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex gap-5 p-7">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-lg mb-2">
                {lang === "en" ? "Call Us" : "फ़ोन करें"}
              </h4>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>
                  <a href="tel:+919918706491" className="hover:text-primary transition-colors">+91 9918706491</a>
                </p>
                <p>
                  <a href="tel:+917394854399" className="hover:text-primary transition-colors">+91 7394854399</a>
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-5 p-7">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-lg mb-2">
                {lang === "en" ? "Email Us" : "ईमेल करें"}
              </h4>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>
                  <a href="mailto:chhotelalpublicjuniorschoolpad@gmail.com" className="hover:text-primary transition-colors break-all">
                    chhotelalpublicjuniorschoolpad@gmail.com
                  </a>
                </p>
                <p>
                  <a href="mailto:Anandrawat6391@gmail.com" className="hover:text-primary transition-colors">
                    Anandrawat6391@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
