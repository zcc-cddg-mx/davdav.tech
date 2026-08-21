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
    "Application Owner",
    "Java",
    "Spring Boot",
    "Azure",
    "DevOps",
    "Solution Architecture",
    "Carlos David Duarte",
    "davdav.tech",
  ],
  authors: [{ name: "Carlos David Duarte", url: "https://davdav.tech" }],
  creator: "Carlos David Duarte",
  alternates: {
    canonical: "/",
  },
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
        {/* Schema.org JSON-LD — Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Carlos David Duarte",
              url: "https://davdav.tech",
              jobTitle: "Senior Software Engineer & Technical Lead",
              description:
                "Senior Software Engineer and Technical Lead specializing in Java, Spring Boot, Azure, DevOps, and Solution Architecture.",
              sameAs: [
                "https://www.linkedin.com/in/dav-gill",
                "https://github.com/RamRider89",
              ],
              knowsAbout: [
                "Java",
                "Spring Boot",
                "Azure",
                "DevOps",
                "CI/CD",
                "Solution Architecture",
                "Technical Leadership",
                "Microservices",
                "REST APIs",
              ],
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Universidad Autónoma de Chihuahua",
                },
              ],
              worksFor: {
                "@type": "Organization",
                name: "Zurich Insurance",
              },
            }),
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
