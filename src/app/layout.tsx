import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import PcbSectionBackground from "@/components/ui/PcbSectionBackground";

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Tahir Pathan — Full Stack Developer",
  description:
    "Portfolio of Tahir Pathan, a Full Stack Developer building modern web applications across frontend, backend, data, and deployment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* The wrapper establishes the stacking context for the whole page and
              is as tall as the document, so the absolutely-positioned board
              spans the entire scroll height and scrolls with the content:
              page background -> global PCB board + ambient orbs (absolute, -z-10)
              -> sections (z-10). The board is mounted ONCE, here at the root and
              outside <main>, so it is one continuous field behind every section
              and can never be scoped to a single one. */}
          <div className="relative isolate">
            <PcbSectionBackground />
            <Navbar />
            <main className="relative z-10 min-h-screen">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}