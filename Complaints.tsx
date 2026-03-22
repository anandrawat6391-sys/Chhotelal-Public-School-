import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import { useCreateComplaint } from "@/hooks/use-complaints";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Complaints() {
  const { mutate: submitComplaint, isPending } = useCreateComplaint();
  const [isAnonymous, setIsAnonymous] = useState(false);

  const form = useForm({
    resolver: zodResolver(api.complaints.create.input),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      isAnonymous: false,
    },
  });

  const onSubmit = (data: any) => {
    const complaintData = {
      ...data,
      isAnonymous,
      name: isAnonymous ? null : data.name,
      email: isAnonymous ? null : data.email,
    };
    submitComplaint(complaintData, {
      onSuccess: () => {
        form.reset();
        setIsAnonymous(false);
      },
    });
  };

  return (
    <section id="complaints" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
              Your Voice Matters
            </h2>
            <p className="text-xs text-muted-foreground mb-6">आपकी आवाज़ महत्वपूर्ण है</p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-6">
              Lodge a Complaint
            </h3>
            <p className="text-sm text-muted-foreground mb-6">शिकायत दर्ज करें</p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We value your feedback and take all complaints seriously. Share your concerns with us confidentially. You can submit your complaint anonymously or with your contact details.
            </p>
            <p className="text-xs text-muted-foreground mb-10">
              हम आपकी प्रतिक्रिया को महत्व देते हैं और सभी शिकायतों को गंभीरता से लेते हैं। अपनी चिंताओं को हमारे साथ गोपनीयता के साथ साझा करें। आप अपनी शिकायत गुमनाम रूप से या अपने संपर्क विवरण के साथ जमा कर सकते हैं।
            </p>

            <div className="space-y-6 bg-muted/30 p-6 rounded-xl border border-border/50">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">How We Handle Complaints</h4>
                  <p className="text-xs text-muted-foreground mb-3">हम शिकायतों को कैसे संभालते हैं</p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>✓ All complaints are reviewed with utmost seriousness</li>
                    <li>✓ Confidentiality is guaranteed</li>
                    <li>✓ Anonymous submissions are respected</li>
                    <li>✓ Swift action is taken on valid concerns</li>
                    <li>✓ You'll receive updates on complaint status</li>
                  </ul>
                  <ul className="text-muted-foreground space-y-2 text-xs mt-3">
                    <li>✓ सभी शिकायतों की गंभीरता से समीक्षा की जाती है</li>
                    <li>✓ गोपनीयता की गारंटी दी जाती है</li>
                    <li>✓ गुमनाम सबमिशन का सम्मान किया जाता है</li>
                    <li>✓ वैध चिंताओं पर तेजी से कार्रवाई की जाती है</li>
                    <li>✓ आपको शिकायत की स्थिति के बारे में अपडेट मिलेंगे</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary/5 rounded-xl border border-secondary/20">
              <p className="text-sm text-muted-foreground">
                <strong>Direct Email:</strong> chhotelalpublicjuniorschoolpad@gmail.com
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                <strong>सीधी ईमेल:</strong> chhotelalpublicjuniorschoolpad@gmail.com
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-border/50">
              <h4 className="text-2xl font-bold font-display text-foreground mb-2">
                Submit Your Complaint
              </h4>
              <p className="text-sm text-muted-foreground mb-6">अपनी शिकायत सबमिट करें</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Anonymous Toggle */}
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="w-5 h-5 cursor-pointer"
                    />
                    <div>
                      <label htmlFor="anonymous" className="cursor-pointer font-medium text-foreground block">
                        Submit Anonymously &nbsp;<span className="text-xs text-muted-foreground font-normal">(गुमनाम रूप से सबमिट करें)</span>
                      </label>
                    </div>
                  </div>

                  {/* Name Field - Conditional */}
                  {!isAnonymous && (
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Full Name <span className="text-xs text-muted-foreground font-normal">(पूरा नाम)</span></FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                              {...field}
                              className="bg-background h-12 rounded-xl border-border focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {/* Email Field - Conditional */}
                  {!isAnonymous && (
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email Address <span className="text-xs text-muted-foreground font-normal">(ईमेल पता)</span></FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              {...field}
                              className="bg-background h-12 rounded-xl border-border focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {/* Subject */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Subject * <span className="text-xs text-muted-foreground font-normal">(विषय)</span></FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Brief subject of complaint"
                            {...field}
                            className="bg-background h-12 rounded-xl border-border focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Complaint Details * <span className="text-xs text-muted-foreground font-normal">(शिकायत विवरण)</span></FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please describe your complaint in detail..."
                            className="bg-background min-h-[150px] resize-none rounded-xl border-border focus-visible:ring-primary/20 focus-visible:border-primary transition-all p-4"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full h-14 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 hover-elevate shadow-md shadow-primary/20"
                  >
                    {isPending ? "Submitting… / सबमिट हो रहा है…" : "Submit Complaint / शिकायत सबमिट करें"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Your complaint will be forwarded to: chhotelalpublicjuniorschoolpad@gmail.com
                  </p>
                  <p className="text-xs text-center text-muted-foreground">
                    आपकी शिकायत को इस पते पर भेजा जाएगा: chhotelalpublicjuniorschoolpad@gmail.com
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
