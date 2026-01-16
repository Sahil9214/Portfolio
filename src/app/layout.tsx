import { GsapProvider } from "@/context/gsapContext";
import { I18nProvider } from "@/components/i18n-provider";
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
    "React Developer India",
    "Next.js Expert",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Hire React Developer",
    "Portfolio Website",
    "Web Development Services",
  ],
  openGraph: {
    title: "Utkarsh Dev | Full Stack & Frontend Developer",
    description:
      "Dive into Utkarsh's powerful web dev portfolio – stunning frontend work, full stack skills, and real-world projects in React, Next.js, and more.",
    url: "https://utkarsh-work.vercel.app/",
    siteName: "Utkarsh Dev",
    images: [
      {
        url: "https://utkarsh-work.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Utkarsh Singhal - Full Stack Developer Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Dev | Full Stack & Frontend Developer",
    description:
      "Explore Utkarsh's developer portfolio – React, Next.js, Node.js, MongoDB & more. Real projects. Real skills.",
    images: ["https://utkarsh-work.vercel.app/og-image.png"],
    creator: "@UtkarshSinghal",
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
          content="ZH7E-C7bShyXOB3374D-FkBeF69YAP65FKZPBVS-eg8"
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
          id="json-ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Utkarsh Singhal",
            alternateName: "Utkarsh Dev",
            url: "https://utkarsh-work.vercel.app/",
            image: "https://utkarsh-work.vercel.app/og-image.png",
            sameAs: [
              "https://www.linkedin.com/in/utkarsh-singhal-3171b7182/",
              "https://github.com/utkarsh",
            ],
            jobTitle: "Full Stack Web Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelancer and Full-time Engineer",
            },
            knowsAbout: [
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "Web Development",
              "Full Stack Development",
            ],
            description:
              "Full Stack Web Developer specializing in React, Next.js, and modern web technologies. Building scalable and high-performance web applications.",
          })}
        </Script>

        {/* Website Schema */}
        <Script
          id="json-ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Utkarsh Dev Portfolio",
            url: "https://utkarsh-work.vercel.app/",
            description:
              "Professional portfolio of Utkarsh Singhal - Full Stack Web Developer specializing in React, Next.js, and modern web technologies.",
            author: {
              "@type": "Person",
              name: "Utkarsh Singhal",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://utkarsh-work.vercel.app/?s={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>

        {/* Breadcrumb Schema */}
        <Script
          id="json-ld-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://utkarsh-work.vercel.app/",
              },
            ],
          })}
        </Script>

        <I18nProvider>
          <GsapProvider>{children}</GsapProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
