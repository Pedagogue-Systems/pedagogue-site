import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Pedagogue Systems",
  description:
    "Products, services, projects, and articles by Pedagogue Systems",
  themeColor: "#FF8200", // brand orange
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="border-b">
          <nav className="container mx-auto flex items-center gap-6 p-4">
            <Link href="/" className="flex items-center gap-3">
              {/* If you added your logo: public/brand/mark.png */}
              <Image
                src="/brand/mark.png" //icon-only mark
                alt="Pedagogue Systems"
                width={32}
                height={32}
                priority
              />
              <span className="font-semibold">Pedagogue Systems</span>
            </Link>

            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">GitHub Projects</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/about">About</Link>

            <Link
              href="/contact"
              className="ml-auto rounded-xl bg-primary px-4 py-2 text-white hover:bg-primary-600"
            >
              Contact / RFP
            </Link>
          </nav>
        </header>

        <main className="container mx-auto flex-1 p-6">{children}</main>

        <footer className="border-t p-4 text-sm text-center text-smokey">
          © {new Date().getFullYear()} Pedagogue Systems
        </footer>
      </body>
    </html>
  );
}