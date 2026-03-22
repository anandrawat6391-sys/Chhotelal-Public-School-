import { db } from "./db";
import { desc, eq } from "drizzle-orm";
import {
  inquiries,
  complaints,
  news,
  type CreateInquiryRequest,
  type InquiryResponse,
  type CreateComplaintRequest,
  type ComplaintResponse,
  type CreateNewsRequest,
  type NewsResponse,
} from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: CreateInquiryRequest): Promise<InquiryResponse>;
  createComplaint(complaint: CreateComplaintRequest): Promise<ComplaintResponse>;
  getAllNews(): Promise<NewsResponse[]>;
  getNewsById(id: number): Promise<NewsResponse | undefined>;
  createNews(item: CreateNewsRequest): Promise<NewsResponse>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(inquiry: CreateInquiryRequest): Promise<InquiryResponse> {
    const [created] = await db.insert(inquiries).values(inquiry).returning();
    return created;
  }

  async createComplaint(complaint: CreateComplaintRequest): Promise<ComplaintResponse> {
    const [created] = await db.insert(complaints).values(complaint).returning();
    return created;
  }

  async getAllNews(): Promise<NewsResponse[]> {
    return db.select().from(news).orderBy(desc(news.createdAt));
  }

  async getNewsById(id: number): Promise<NewsResponse | undefined> {
    const [item] = await db.select().from(news).where(eq(news.id, id));
    return item;
  }

  async createNews(item: CreateNewsRequest): Promise<NewsResponse> {
    const [created] = await db.insert(news).values(item).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
