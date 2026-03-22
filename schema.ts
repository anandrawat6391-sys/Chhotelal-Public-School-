import { pgTable, text, serial, timestamp, boolean, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const complaints = pgTable("complaints", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  isAnonymous: boolean("is_anonymous").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsCategoryEnum = pgEnum("news_category", ["news", "announcement", "achievement"]);

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  titleHi: text("title_hi").notNull(),
  excerpt: text("excerpt").notNull(),
  excerptHi: text("excerpt_hi").notNull(),
  category: newsCategoryEnum("category").notNull(),
  date: text("date").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });
export const insertComplaintSchema = createInsertSchema(complaints).omit({ id: true, createdAt: true });
export const insertNewsSchema = createInsertSchema(news).omit({ id: true, createdAt: true });

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Complaint = typeof complaints.$inferSelect;
export type InsertComplaint = z.infer<typeof insertComplaintSchema>;
export type News = typeof news.$inferSelect;
export type InsertNews = z.infer<typeof insertNewsSchema>;

export type CreateInquiryRequest = InsertInquiry;
export type InquiryResponse = Inquiry;
export type CreateComplaintRequest = InsertComplaint;
export type ComplaintResponse = Complaint;
export type CreateNewsRequest = InsertNews;
export type NewsResponse = News;
