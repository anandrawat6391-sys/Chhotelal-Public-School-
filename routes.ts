import { z } from 'zod';
import { insertInquirySchema, insertComplaintSchema, insertNewsSchema, inquiries, complaints, news } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  inquiries: {
    create: {
      method: 'POST' as const,
      path: '/api/inquiries' as const,
      input: insertInquirySchema,
      responses: {
        201: z.custom<typeof inquiries.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  complaints: {
    create: {
      method: 'POST' as const,
      path: '/api/complaints' as const,
      input: insertComplaintSchema,
      responses: {
        201: z.custom<typeof complaints.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  news: {
    list: {
      method: 'GET' as const,
      path: '/api/news' as const,
      responses: {
        200: z.array(z.custom<typeof news.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/news' as const,
      input: insertNewsSchema,
      responses: {
        201: z.custom<typeof news.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type InquiryInput = z.infer<typeof api.inquiries.create.input>;
export type InquiryResponse = z.infer<typeof api.inquiries.create.responses[201]>;
export type ComplaintInput = z.infer<typeof api.complaints.create.input>;
export type ComplaintResponse = z.infer<typeof api.complaints.create.responses[201]>;
export type ValidationError = z.infer<typeof errorSchemas.validation>;
