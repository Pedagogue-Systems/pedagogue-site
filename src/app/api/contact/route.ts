import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return new Response("Invalid input", { status: 400 });

  if (!process.env.RESEND_API_KEY) {
    return new Response("Email service not configured", { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Pedagogue Systems <noreply@pedagogue.co>",
      to: ["chris@pedagogue.co"],
      subject: `New inquiry from ${parsed.data.name}`,
      text: `Email: ${parsed.data.email}\n\n${parsed.data.message}`,
    });
  } catch {
    return new Response("Failed to send message", { status: 502 });
  }

  // Auto-reply (best-effort, don't fail the request)
  try {
    await resend.emails.send({
      from: "Pedagogue Systems <noreply@pedagogue.co>",
      to: [parsed.data.email],
      subject: "Thanks for reaching out",
      text: "We received your message and will get back to you shortly.",
    });
  } catch {
    // auto-reply failed, but main message was sent
  }

  return new Response("OK", { status: 200 });
}
