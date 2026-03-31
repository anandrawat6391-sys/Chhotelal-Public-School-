export const env = {
  DATABASE_URL: process.env.DATABASE_URL || "",
  SESSION_SECRET: process.env.SESSION_SECRET || "",
  WHATSAPP_TOKEN: process.env.WHATSAPP_TOKEN || "",
  WHATSAPP_PHONE_ID: process.env.WHATSAPP_PHONE_ID || "",
};

export function validateEnv() {
  const required = ["DATABASE_URL", "SESSION_SECRET"] as const;
  const missing = required.filter((key) => !env[key]);
  if (missing.length) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}
