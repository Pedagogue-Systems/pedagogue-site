export async function POST(req: Request) {
  // Placeholder: accept submissions. Replace with Resend later.
  try {
    await req.json(); // validate/parse if you want
    return new Response("OK", { status: 200 });
  } catch {
    return new Response("Bad Request", { status: 400 });
  }
}
