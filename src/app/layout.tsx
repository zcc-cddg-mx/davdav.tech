import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davdav.tech"),
  title: {
    default: "Carlos David Duarte — Senior Software Engineer",
    template: "%s | Carlos David Duarte",
  },
  description:
    "Senior Software Engineer & Technical Lead specializing in Java, Spring Boot, Azure, and DevOps. Building and modernizing enterprise applications.",
  keywords: [
    "Senior Software Engineer",
    "Technical Lead",
    "Java",
    "Spring Boot",
    "Azure",
    "DevOps",
    "Carlos David Duarte",
  ],
  authors: [{ name: "Carlos David Duarte" }],
  creator: "Carlos David Duarte",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davdav.tech",
    siteName: "Carlos David Duarte",
    title: "Carlos David Duarte — Senior Software Engineer",
    description:
      "Senior Software Engineer & Technical Lead specializing in Java, Spring Boot, Azure, and DevOps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos David Duarte — Senior Software Engineer",
    description:
      "Senior Software Engineer & Technical Lead specializing in Java, Spring Boot, Azure, and DevOps.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-FOUC: apply dark class before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
