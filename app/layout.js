import "./globals.css";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin"], weight: ["400", "500", "700"] });

const siteUrl = "https://orscale.com";

export const metadata = {
  title: "OrScale — AI Automation & Solutions",
  description:
    "OrScale builds AI-powered automation, intelligent platforms and scalable solutions for global businesses.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "OrScale — AI Automation & Solutions",
    description:
      "Explore OrScale: automation, AI integration, and scalable solutions for your business.",
    url: siteUrl,
    siteName: "OrScale",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OrScale Website Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrScale — AI Automation & Solutions",
    description:
      "AI-powered automation, intelligent platforms and scalable solutions for global businesses.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${exo2.className} antialiased relative`}>
        <iframe
          src="/galaxy.html"
          title="Galaxy Background"
          className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
          style={{ border: "none" }}
          loading="eager"
        />

        <div className="relative z-10 min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}