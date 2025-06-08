import { GsapProvider } from "@/context/gsapContext";
import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
  title: {
    default: "Utkarsh Dev | Professional Web Developer & Software Engineer",
    template: "%s | Utkarsh Dev",
  },
  description:
    "Explore Utkarsh's professional portfolio showcasing frontend and full-stack development projects with expertise in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Utkarsh Singhal",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer India",
    "Freelance Web Developer",
    "Web Developer Portfolio",
  ],
  openGraph: {
    title: "Utkarsh Dev | Full Stack & Frontend Developer",
    description:
      "Dive into Utkarsh's powerful web dev portfolio – stunning frontend work, full stack skills, and real-world projects in React, Next.js, and more.",
    url: "https://utkarsh-work.vercel.app/",
    siteName: "Utkarsh Dev",
    images: [
      {
        url: "https://ibb.co/S4ttx4Zy",
        width: 800,
        height: 800,
        alt: "Utkarsh Singhal - Full Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Dev | Full Stack & Frontend Developer",
    description:
      "Explore Utkarsh's developer portfolio – React, Next.js, Node.js, MongoDB & more. Real projects. Real skills.",
    images: ["https://ibb.co/S4ttx4Zy"],
    site: "https://utkarsh-work.vercel.app/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  alternates: {
    canonical: "https://utkarsh-work.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="PNuI7BQmbGJ9mkygjTPjkjhU9yMfUOqWFaZfNsfIShw"
        />
        <meta name="author" content="Utkarsh Singhal" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${robotoFlex.variable} antialiased`}>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9L3G4DXEKJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9L3G4DXEKJ');
          `}
        </Script>

        {/* ✅ Structured Data / Schema */}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Utkarsh Singhal",
  "url": "https://utkarsh-work.vercel.app/",
  "sameAs": [
    "https://linkedin.com/in/utkarsh",
    "https://github.com/utkarsh"
  ],
  "jobTitle": "Full Stack Web Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelancer and Full-time Engineer"
  }
}
          `}
        </Script>

        <GsapProvider>{children}</GsapProvider>
      </body>
    </html>
  );
}
