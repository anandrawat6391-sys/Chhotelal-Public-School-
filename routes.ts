import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

const SAMPLE_NEWS = [
  {
    title: "Annual Sports Day 2025 — A Grand Success!",
    titleHi: "वार्षिक खेल दिवस 2025 — एक शानदार सफलता!",
    excerpt: "Our Annual Sports Day was a spectacular event filled with enthusiasm and team spirit. Students from all classes participated in various athletic events.",
    excerptHi: "हमारा वार्षिक खेल दिवस उत्साह और टीम भावना से भरा एक शानदार आयोजन था। सभी कक्षाओं के छात्रों ने विभिन्न खेल स्पर्धाओं में भाग लिया।",
    category: "achievement" as const,
    date: "March 10, 2025",
  },
  {
    title: "Admissions Open for Academic Year 2025–26",
    titleHi: "शैक्षणिक वर्ष 2025–26 के लिए प्रवेश खुले",
    excerpt: "Admissions are now open for classes 1 to 8 for the upcoming academic year. Apply early to secure your child's seat. Limited seats available.",
    excerptHi: "आगामी शैक्षणिक वर्ष के लिए कक्षा 1 से 8 तक प्रवेश अब खुले हैं। जल्दी आवेदन करें। सीटें सीमित हैं।",
    category: "announcement" as const,
    date: "February 28, 2025",
  },
  {
    title: "Students Excel in District Science Olympiad",
    titleHi: "जिला विज्ञान ओलंपियाड में छात्रों का उत्कृष्ट प्रदर्शन",
    excerpt: "Three of our students secured top positions in the District Science Olympiad held in Basti. The school takes great pride in their achievement.",
    excerptHi: "बस्ती में आयोजित जिला विज्ञान ओलंपियाड में हमारे तीन छात्रों ने शीर्ष स्थान प्राप्त किया। विद्यालय को उनकी उपलब्धि पर गर्व है।",
    category: "achievement" as const,
    date: "February 15, 2025",
  },
  {
    title: "Republic Day Celebration 2025",
    titleHi: "गणतंत्र दिवस समारोह 2025",
    excerpt: "Chhotelal Public Junior High School celebrated Republic Day with great patriotic fervour. Students performed cultural programmes and the flag was hoisted.",
    excerptHi: "छोटेलाल पब्लिक जूनियर हाई स्कूल ने गणतंत्र दिवस बड़े देशभक्ति के उत्साह के साथ मनाया। छात्रों ने सांस्कृतिक कार्यक्रम प्रस्तुत किए और ध्वजारोहण हुआ।",
    category: "news" as const,
    date: "January 26, 2025",
  },
  {
    title: "Parent-Teacher Meeting Scheduled",
    titleHi: "अभिभावक-शिक्षक बैठक निर्धारित",
    excerpt: "A Parent-Teacher Meeting is scheduled for 20th March 2025. All parents are requested to attend and discuss their ward's academic progress.",
    excerptHi: "20 मार्च 2025 को अभिभावक-शिक्षक बैठक निर्धारित है। सभी अभिभावकों से अनुरोध है कि वे उपस्थित हों।",
    category: "announcement" as const,
    date: "March 5, 2025",
  },
  {
    title: "Mid-Term Exam Schedule Released",
    titleHi: "अर्धवार्षिक परीक्षा कार्यक्रम जारी",
    excerpt: "The mid-term examination schedule for classes 6, 7 and 8 has been released. Students are advised to prepare accordingly and attend school regularly.",
    excerptHi: "कक्षा 6, 7 और 8 के लिए अर्धवार्षिक परीक्षा का कार्यक्रम जारी किया गया है। छात्रों को तैयारी करने एवं नियमित रूप से विद्यालय आने की सलाह दी जाती है।",
    category: "announcement" as const,
    date: "January 10, 2025",
  },
];

async function seedNewsIfEmpty() {
  try {
    const existing = await storage.getAllNews();
    if (existing.length === 0) {
      for (const item of SAMPLE_NEWS) {
        await storage.createNews(item);
      }
      console.log("Seeded sample news items.");
    }
  } catch (err) {
    console.error("Failed to seed news:", err);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  await seedNewsIfEmpty();

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      console.log(`New Enquiry received: ${JSON.stringify(input)}`);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post(api.complaints.create.path, async (req, res) => {
    try {
      const input = api.complaints.create.input.parse(req.body);
      const complaint = await storage.createComplaint(input);
      console.log(`New Complaint received: ${JSON.stringify(input)}`);
      console.log(`Email notification would be sent to: chhotelalpublicjuniorschoolpad@gmail.com`);
      res.status(201).json(complaint);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(api.news.list.path, async (_req, res) => {
    try {
      const items = await storage.getAllNews();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post(api.news.create.path, async (req, res) => {
    try {
      const input = api.news.create.input.parse(req.body);
      const item = await storage.createNews(input);
      res.status(201).json(item);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
