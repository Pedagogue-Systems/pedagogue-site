import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./mobile-nav";

export const metadata = {
  title: "Pedagogue Systems",
  description:
    "Chris Loope — fractional transformation executive for mid-market services companies.",
  themeColor: "#FF8200",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="relative border-b">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/brand/mark.png"
                alt="Pedagogue Systems"
                width={32}
                height={32}
                priority
              />
              <span className="font-semibold">Pedagogue Systems</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/platform"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Platform
              </Link>
              <Link
                href="/perspectives"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Perspectives
              </Link>
              <a
                href="/#contact"
                className="rounded-xl bg-primary px-4 py-2 text-white hover:bg-primary-600"
              >
                Let&apos;s talk
              </a>
            </div>

            {/* Mobile hamburger */}
            <MobileNav />
          </nav>
        </header>

        <main className="container mx-auto flex-1 p-6">{children}</main>

        <footer className="border-t p-4 text-sm text-center text-smokey">
          &copy; {new Date().getFullYear()} Pedagogue Systems
        </footer>
      </body>
    </html>
  );
}
