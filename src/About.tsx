import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const values = [
    "Innovative Curriculum & Active Learning",
    "Dedicated & Passionate Faculty",
    "Inclusive & Diverse Community",
    "Focus on Holistic Development",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-12 lg:gap-20">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* English Version */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">About Us</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-6">
                Chotelal Public Junior High School
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  "Chotelal Public Junior High School, Padri (Basti), has been committed to providing quality education and excellent values to children since 2013. Our main objective is that every student should not only excel in the field of education, but also perform at their best in sports and other co-curricular activities."
                </p>
                
                <p>
                  Our school is committed to providing quality education at the most affordable fees in the area. We strongly believe that every child deserves access to excellent learning opportunities without financial burden, and we work continuously to make education both accessible and meaningful.
                </p>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Experienced & Dedicated Teachers</h4>
                  <p>
                    We have highly qualified, disciplined, and dedicated teachers who teach students with honesty, sincerity, and passion. Our teachers not only focus on academic excellence but also guide and motivate students to develop confidence, strong moral values, and a sense of responsibility. We encourage students to think logically and critically so that they become rational, independent thinkers capable of making wise decisions in life.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Better Facilities & Clean Environment</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Playground:</strong> The school campus offers a spacious and well-maintained playground that supports physical development and promotes a healthy lifestyle.</li>
                    <li><strong>Hygiene & Water:</strong> Separate and hygienic washroom and toilet facilities are available for both boys and girls. We also ensure the availability of clean and safe drinking water for all students.</li>
                    <li><strong>Positive Atmosphere:</strong> The school provides a clean, open, and refreshing environment with plenty of fresh air, creating a healthy and positive atmosphere for learning.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Holistic Development (Sports & Activities)</h4>
                  <p>
                    Sports activities and competitions are organized regularly to encourage teamwork, discipline, leadership, and a spirit of healthy competition. Special programs, cultural events, and co-curricular activities are conducted from time to time to nurture creativity, talent, and overall personality development.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Our Aim</h4>
                  <p>
                    Our aim is to provide a balanced education that promotes academic excellence, character building, physical well-being, and holistic growth, preparing students to succeed confidently in every aspect of life.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hindi Version */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">हमारे बारे में</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-6">
                छोटेलाल पब्लिक जूनियर हाई स्कूल
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  "छोटेलाल पब्लिक जूनियर हाई स्कूल, पडऱी (बस्ती), वर्ष 2013 से ही बालकों को गुणवत्तापूर्ण शिक्षा एवं उत्तम संस्कार प्रदान करने के लिए संकल्पित है। हमारा मुख्य ध्येय है कि प्रत्येक विद्यार्थी न केवल शिक्षा के क्षेत्र में, अपितु खेल-कूद एवं अन्य सह-शैक्षिक गतिविधियों में भी सर्वश्रेष्ठ प्रदर्शन करे।"
                </p>
                
                <p>
                  हमारा विद्यालय क्षेत्र में सबसे किफायती शुल्क पर गुणवत्तापूर्ण शिक्षा प्रदान करने के लिए प्रतिबद्ध है। हमारा दृढ़ विश्वास है कि प्रत्येक बच्चे को बिना किसी आर्थिक बोझ के उत्कृष्ट शिक्षण के अवसर मिलने चाहिए। हम शिक्षा को सुलभ और अर्थपूर्ण बनाने के लिए निरंतर प्रयासरत हैं।
                </p>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">अनुभवी एवं समर्पित शिक्षक</h4>
                  <p>
                    हमारे पास उच्च योग्य, अनुशासित और समर्पित शिक्षकों की टीम है जो पूरी ईमानदारी, निष्ठा और जुनून के साथ विद्यार्थियों को पढ़ाते हैं। हमारे शिक्षक न केवल शैक्षणिक उत्कृष्टता पर ध्यान केंद्रित करते हैं, बल्कि छात्रों का मार्गदर्शन भी करते हैं ताकि उनमें आत्मविश्वास, मजबूत नैतिक मूल्य और जिम्मेदारी की भावना विकसित हो सके। हम विद्यार्थियों को तार्किक और गंभीर रूप से सोचने के लिए प्रोत्साहित करते हैं ताकि वे बुद्धिमान और स्वतंत्र विचारक बन सकें।
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">बेहतर सुविधाएँ और स्वच्छ वातावरण</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>खेल का मैदान:</strong> विद्यालय परिसर में एक विशाल और सुव्यवस्थित खेल का मैदान है जो शारीरिक विकास और स्वस्थ जीवनशैली को बढ़ावा देता है।</li>
                    <li><strong>स्वच्छता और पेयजल:</strong> छात्र-छात्राओं के लिए अलग-अलग और स्वच्छ शौचालय की सुविधा उपलब्ध है। हम सभी विद्यार्थियों के लिए स्वच्छ और सुरक्षित पेयजल सुनिश्चित करते हैं।</li>
                    <li><strong>सकारात्मक वातावरण:</strong> विद्यालय का वातावरण खुला, स्वच्छ और ताजी हवा से भरपूर है, जो सीखने के लिए एक सकारात्मक माहौल तैयार करता है।</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">सर्वांगीण विकास (खेल-कूद एवं गतिविधियाँ)</h4>
                  <p>
                    हम टीम वर्क, अनुशासन और नेतृत्व की भावना जगाने के लिए नियमित रूप से खेल प्रतियोगिताओं का आयोजन करते हैं। समय-समय पर विशेष सांस्कृतिक कार्यक्रम और सह-शैक्षिक गतिविधियाँ आयोजित की जाती हैं ताकि बच्चों की रचनात्मकता, प्रतिभा और समग्र व्यक्तित्व को निखारा जा सके।
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">हमारा लक्ष्य</h4>
                  <p>
                    हमारा उद्देश्य एक संतुलित शिक्षा प्रदान करना है जो शैक्षणिक उत्कृष्टता, चरित्र निर्माण, शारीरिक कल्याण और सर्वांगीण विकास को बढ़ावा दे, जिससे विद्यार्थी जीवन के हर क्षेत्र में आत्मविश्वास के साथ सफल हो सकें।
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{value}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
