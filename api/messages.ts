export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { channel, message, recipients } = req.body || {};
  if (!message || !Array.isArray(recipients)) {
    return res.status(400).json({ error: "message and recipients are required" });
  }

  return res.status(200).json({
    ok: true,
    channel: channel || "sms",
    sent: recipients.length,
    queuedAt: new Date().toISOString(),
  });
}
