import Link from "next/link";
export default function Page() {
  const posts = [
    { slug: "hello-world", title: "Hello, world" },
    { slug: "ai-in-staffing", title: "AI in Staffing (overview)" },
  ];
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Articles</h1>
      <ul className="list-disc pl-5 space-y-2">
        {posts.map(p => (
          <li key={p.slug}>
            <Link className="underline" href={`/articles/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
