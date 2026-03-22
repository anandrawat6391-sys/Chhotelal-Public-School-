import { motion } from "framer-motion";
import { Phone, Heart } from "lucide-react";

export function FoundersMessage() {
  return (
    <section id="founders-message" className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">A Message from Our Leadership</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-4">
            Founder's Message
          </h3>
          <div className="flex justify-center">
            <Heart className="w-8 h-8 text-secondary" />
          </div>
        </motion.div>

        {/* Bilingual Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
          {/* English Version */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-border p-8 md:p-12 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Since its establishment in <strong>2013</strong>, Chhotelal Public Junior High School has been dedicated to providing <strong>quality and affordable education</strong> to the children of our region.
            </p>

            <p>
              Our institution was never created with the intention of making profit. Our true purpose has always been to <strong>serve society through education</strong>. We take pride in offering <strong>one of the most affordable education opportunities in the entire area</strong>, so that every child can have access to learning.
            </p>

            <p>
              We have always believed that <strong>no child should feel pressured or humiliated because of school fees</strong>. Therefore, we have never treated education as a business, and we have always tried to support students and parents with understanding and compassion.
            </p>

            <p>
              Our work is especially focused on the <strong>needs of families from rural areas and underprivileged backgrounds</strong>, ensuring that their children receive the education they deserve and the opportunity to build a better future.
            </p>

            <p>
              I sincerely request parents and guardians to <strong>give us the opportunity to serve your children through education</strong>.
            </p>

            {/* Signature Section */}
            <div className="pt-8 border-t border-border/30">
              <div className="space-y-3">
                <p className="font-bold text-foreground text-lg">— Rajesh Kumar</p>
                <p className="text-foreground font-semibold">Founder</p>
                <div className="flex items-center gap-2 text-foreground">
                  <Phone className="w-5 h-5 text-secondary" />
                  <span className="font-semibold">📞 Mobile: 9918706491</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hindi Version */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-border p-8 md:p-12 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              वर्ष <strong>2013</strong> में स्थापना के साथ ही छोटेलाल पब्लिक जूनियर हाई स्कूल का उद्देश्य क्षेत्र के बच्चों को <strong>गुणवत्तापूर्ण तथा सुलभ शिक्षा</strong> प्रदान करना रहा है।
            </p>

            <p>
              हमारी संस्था की स्थापना कभी भी लाभ कमाने के उद्देश्य से नहीं की गई। हमारा वास्तविक लक्ष्य सदैव <strong>शिक्षा के माध्यम से समाज की सेवा करना</strong> रहा है। हमें इस बात पर गर्व है कि हम पूरे क्षेत्र में <strong>सबसे सस्ती और सुलभ शिक्षा</strong> उपलब्ध कराने का प्रयास करते हैं, ताकि प्रत्येक बच्चे को सीखने का अवसर मिल सके।
            </p>

            <p>
              हमारा दृढ़ विश्वास है कि <strong>किसी भी बच्चे को विद्यालय शुल्क के कारण अपमानित या प्रताड़ित नहीं किया जाना चाहिए</strong>। इसलिए हमने शिक्षा को कभी व्यवसाय नहीं माना और सदैव विद्यार्थियों तथा अभिभावकों के साथ संवेदनशीलता और सहयोग की भावना से कार्य किया है।
            </p>

            <p>
              हम विशेष रूप से <strong>ग्रामीण क्षेत्रों के गरीब तथा वंचित परिवारों की आवश्यकताओं को ध्यान में रखते हुए</strong> कार्य करते हैं, ताकि उनके बच्चों को भी उचित शिक्षा प्राप्त हो और वे अपने भविष्य को बेहतर बना सकें।
            </p>

            <p>
              मैं सभी अभिभावकों से विनम्र निवेदन करता हूँ कि कृपया हमें <strong>आपके बच्चों की शिक्षा के माध्यम से सेवा करने का अवसर अवश्य प्रदान करें।</strong>
            </p>

            {/* Signature Section */}
            <div className="pt-8 border-t border-border/30">
              <div className="space-y-3">
                <p className="font-bold text-foreground text-lg">— राजेश कुमार</p>
                <p className="text-foreground font-semibold">संस्थापक</p>
                <div className="flex items-center gap-2 text-foreground">
                  <Phone className="w-5 h-5 text-secondary" />
                  <span className="font-semibold">📞 मोबाइल: 9918706491</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
