import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const englishTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Pandey",
    role: "Parent of Class 6 Student",
    content: "Chhotelal Public School has been instrumental in shaping my child's academic and personal growth. The teachers are incredibly dedicated and caring. I appreciate the affordable fees without compromising on quality education.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohit Patel",
    role: "Class 7 Student",
    content: "I love my school! The teachers make learning fun and interesting. The sports activities and cultural programs help us develop our talents. It's a great place to study and grow.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anita Yadav",
    role: "Parent of Class 5 Student",
    content: "The school provides excellent education at very reasonable fees. My child has improved significantly in academics and is more confident now. The school's focus on all-round development is commendable.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ajay Gautam",
    role: "Class 8 Student",
    content: "Chhotelal Public School is amazing! The teachers care about each student's progress. I've made great friends here and our sports team is really strong. This school has given me the best memories.",
    rating: 5,
  },
  {
    id: 5,
    name: "Neha Kannojiya",
    role: "Parent of Class 6 Student",
    content: "What impressed me most is how the school treats all children equally, regardless of their family background. The teachers go beyond academics to build character and values in our children.",
    rating: 5,
  },
];

const hindiTestimonials: Testimonial[] = [
  {
    id: 6,
    name: "राज गौतम",
    role: "कक्षा 6 के छात्र के पिता",
    content: "छोटेलाल पब्लिक स्कूल में मेरे बेटे को मिली शिक्षा बहुत अच्छी है। शिक्षकों का व्यवहार बहुत मधुर और समझदारीपूर्ण है। सस्ते शुल्क पर गुणवत्तापूर्ण शिक्षा का यह विद्यालय सच में प्रशंसनीय है।",
    rating: 5,
  },
  {
    id: 7,
    name: "दिव्या पासवान",
    role: "कक्षा 7 की छात्रा",
    content: "मुझे अपने स्कूल से बहुत प्यार है। यहाँ के शिक्षक पढ़ाई को बहुत रोचक तरीके से समझाते हैं। खेल-कूद और सांस्कृतिक कार्यक्रम हमारे प्रतिभा को निखारने में मदद करते हैं।",
    rating: 5,
  },
  {
    id: 8,
    name: "रीता पटेल",
    role: "कक्षा 5 के छात्र की माता",
    content: "इस स्कूल में पढ़ाई की गुणवत्ता बहुत अच्छी है और शुल्क भी किफायती है। मेरा बेटा पढ़ाई में बहुत आगे बढ़ गया है और उसका आत्मविश्वास भी बढ़ा है। सर्वांगीण विकास पर ध्यान देने के लिए सराहनीय है।",
    rating: 5,
  },
  {
    id: 9,
    name: "विकास कन्नौजिया",
    role: "कक्षा 8 के छात्र",
    content: "छोटेलाल पब्लिक स्कूल शानदार है! शिक्षकों को हर छात्र की प्रगति की परवाह है। मेरे यहाँ बहुत अच्छे मित्र हैं और हमारी खेल टीम बहुत मजबूत है। इस स्कूल ने मेरे जीवन में सबसे अच्छी यादें दी हैं।",
    rating: 5,
  },
  {
    id: 10,
    name: "उषा यादव",
    role: "कक्षा 6 के छात्र की माता",
    content: "जो बात मुझे सबसे ज्यादा प्रभावित करती है, वह यह है कि स्कूल सभी बच्चों के साथ बराबरी का व्यवहार करता है। शिक्षकों का ध्यान केवल पढ़ाई तक सीमित नहीं है, बल्कि बच्चों के चरित्र निर्माण और मूल्यों को भी प्रभावित करते हैं।",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const testimonials = language === "en" ? englishTestimonials : hindiTestimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const handleLanguageChange = (lang: "en" | "hi") => {
    setLanguage(lang);
    setCurrentIndex(0);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            What They Say About Us
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-4">
            {language === "en" ? "Testimonials" : "प्रशंसापत्र"}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Hear from our students and parents about their experience at Chhotelal Public School"
              : "हमारे छात्रों और अभिभावकों से सुनें कि छोटेलाल पब्लिक स्कूल का अनुभव कैसा है"}
          </p>

          {/* Language Toggle */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => handleLanguageChange("en")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                language === "en"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange("hi")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                language === "hi"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              हिन्दी
            </button>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-border p-8 md:p-12"
            >
              {/* Stars Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 italic">
                "{currentTestimonial.content}"
              </p>

              {/* Author Info */}
              <div>
                <p className="font-bold text-foreground text-lg">
                  {currentTestimonial.name}
                </p>
                <p className="text-secondary font-semibold">
                  {currentTestimonial.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-primary/20 w-2 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonial Counter */}
          <div className="text-center mt-6 text-muted-foreground">
            <p className="text-sm">
              {currentIndex + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
