import Link from "next/link";
export default function Page() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold mb-4">Pedagogue Systems</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        Practical AI and transformation for staffing, workforce, and operations.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/products" className="px-4 py-2 rounded bg-black text-white">Explore Products</Link>
        <Link href="/articles" className="px-4 py-2 rounded border">Read Articles</Link>
      </div>
    </section>
  );
}
