import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Trophy, Megaphone, Newspaper, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { News } from "@shared/schema";

type Category = "all" | "news" | "announcement" | "achievement";

const CATEGORY_META: Record<Exclude<Category, "all">, { label: string; icon: typeof Trophy; color: string }> = {
  achievement: {
    label: "उपलब्धि",
    icon: Trophy,
    color: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400",
  },
  announcement: {
    label: "सूचना",
    icon: Megaphone,
    color: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400",
  },
  news: {
    label: "समाचार",
    icon: Newspaper,
    color: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400",
  },
};

const FILTER_TABS: { key: Category; label: string }[] = [
  { key: "all", label: "सभी" },
  { key: "news", label: "समाचार" },
  { key: "announcement", label: "सूचनाएँ" },
  { key: "achievement", label: "उपलब्धियाँ" },
];

const SHOW_STEP = 3;

export function News() {
  const [filter, setFilter] = useState<Category>("all");
  const [showCount, setShowCount] = useState(SHOW_STEP);

  const { data: items = [], isLoading } = useQuery<News[]>({
    queryKey: ["/api/news"],
  });

  const filtered = filter === "all" ? items : items.filter((n) => n.category === filter);
  const visible = filtered.slice(0, showCount);
  const hasMore = showCount < filtered.length;

  return (
    <section id="news" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            नवीनतम अपडेट
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-4">
            समाचार एवं सूचनाएँ
          </h3>
          <p className="text-lg text-muted-foreground">
            हमारे विद्यालय की नवीनतम गतिविधियों, उपलब्धियों और महत्वपूर्ण सूचनाओं से अवगत रहें।
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setFilter(tab.key); setShowCount(SHOW_STEP); }}
              data-testid={`filter-${tab.key}`}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                filter === tab.key
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-52 rounded-2xl bg-muted animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            इस श्रेणी में अभी कोई आइटम नहीं है।
          </p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((item, index) => {
                const meta = CATEGORY_META[item.category];
                const Icon = meta.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: (index % SHOW_STEP) * 0.1 }}
                    data-testid={`card-news-${item.id}`}
                    className="group rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Top accent bar */}
                    <div className={`h-1 w-full ${
                      item.category === "achievement" ? "bg-amber-400" :
                      item.category === "announcement" ? "bg-blue-400" : "bg-green-400"
                    }`} />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Category badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${meta.color}`}>
                          <Icon className="w-3 h-3" />
                          {meta.label}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-base font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {item.titleHi}
                      </h4>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {item.excerptHi}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Load more */}
            {hasMore && (
              <div className="flex justify-center mt-10">
                <Button
                  variant="outline"
                  onClick={() => setShowCount((c) => c + SHOW_STEP)}
                  className="gap-2"
                  data-testid="button-load-more-news"
                >
                  और देखें
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
