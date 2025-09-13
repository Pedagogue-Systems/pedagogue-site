"use client";
import { useState } from "react";
export default function Page() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  async function onSubmit(formData: FormData) {
    setStatus("sending");
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  }
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Contact / Request for Proposal</h1>
      <form action={onSubmit} className="max-w-xl space-y-4">
        <input name="name" placeholder="Your name" required className="w-full border rounded p-2" />
        <input type="email" name="email" placeholder="Your email" required className="w-full border rounded p-2" />
        <textarea name="message" placeholder="Tell us about your needs…" required className="w-full border rounded p-2 h-32" />
        <button type="submit" disabled={status==="sending"} className="px-4 py-2 rounded bg-black text-white">
          {status==="sending" ? "Sending..." : "Send"}
        </button>
        {status === "sent" && <p className="text-green-600">Thanks! We’ll be in touch.</p>}
        {status === "error" && <p className="text-red-600">Something went wrong—try again.</p>}
      </form>
    </>
  );
}
