import "./globals.css";
import Link from "next/link";
export const metadata = {
  title: "Pedagogue Systems",
  description: "Products, services, projects, and articles by Pedagogue Systems",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="border-b">
          <nav className="container mx-auto flex gap-6 p-4">
            <Link href="/" className="font-semibold">Pedagogue Systems</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">GitHub Projects</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/about">About</Link>
            <Link href="/contact" className="ml-auto">Contact / RFP</Link>
          </nav>
        </header>
        <main className="container mx-auto flex-1 p-6">{children}</main>
        <footer className="border-t p-4 text-sm text-center">
          © {new Date().getFullYear()} Pedagogue Systems
        </footer>
      </body>
    </html>
  );
}
