import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";
import { portfolioData } from "@/lib/rag/portfolioData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: portfolioData.personal.name + " - " + portfolioData.personal.title,
    description: portfolioData.personal.tagline,
};

function Navbar() {
    return (
        <nav className="navbar glass">
            <div className="container">
                <div className="nav-brand">
                    <h2>{portfolioData.personal.name}</h2>
                    <p>{portfolioData.personal.title}</p>
                </div>

                {/* Mobile menu logic would need client component or simplified here */}
                {/* For simplicity in this migration, using a simple responsive layout or client component if needed */}
                {/* Keeping it simple for server component initially */}

                <ul className="nav-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/#education">Education</Link></li>
                    <li><Link href="/#certifications">Certifications</Link></li>
                    <li><Link href="/#skills">Skills</Link></li>
                    <li><Link href="/#contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} {portfolioData.personal.name}</p>
            </div>
        </footer>
    );
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="app">
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
