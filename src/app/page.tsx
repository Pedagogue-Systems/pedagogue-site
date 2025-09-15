import Link from "next/link";

export default function Page() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold mb-4">Pedagogue Systems</h1>
      <p className="text-lg text-smokey max-w-2xl">
        Practical, responsible AI and transformation for operations.
        We build clear roadmaps, ship useful software, and keep humans in the loop.
      </p>

      <div className="mt-6 flex gap-3">
        <Link href="/products" className="rounded-xl bg-primary px-4 py-2 text-white hover:bg-primary-600">
          Explore Products
        </Link>
        <Link href="/articles" className="rounded-xl border px-4 py-2 hover:bg-black/5">
          Read Articles
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border p-4">
          <h3 className="font-semibold mb-2">Advisory</h3>
          <p className="text-sm text-smokey">Needs assessment, strategic roadmap, Program Leadership.</p>
        </div>
        <div className="rounded-xl border p-4">
          <h3 className="font-semibold mb-2">Products</h3>
          <p className="text-sm text-smokey">Data, Mobile, and Platform.</p>
        </div>
        <div className="rounded-xl border p-4">
          <h3 className="font-semibold mb-2">Articles</h3>
          <p className="text-sm text-smokey">Perspectives on technology and business.</p>
        </div>
      </div>
    </section>
  );
}