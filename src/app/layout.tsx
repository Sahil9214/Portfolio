import { GsapProvider } from "@/context/gsapContext";
import type { Metadata } from "next";
import Head from "next/head";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
  title: {
    default: "Utkarsh Dev | Professional Web Developer & Software Engineer",
    template: "%s | Utkarsh Dev", // For dynamic page titles
  },
  description:
    "Explore Utkarsh's professional portfolio showcasing web development projects, software engineering expertise, and technical skills in React, Next.js, and more.",
  keywords: [
    "Utkarsh Singhal",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer India",
  ],
  openGraph: {
    title: "Utkarsh Dev | Professional Web Developer & Software Engineer",
    description:
      "Explore Utkarsh's professional portfolio showcasing web development projects, software engineering expertise, and technical skills in React, Next.js,Node.js , Database and more.",
    url: "https://utkarsh-work.vercel.app/", // Replace with your portfolio URL
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
    title: "Utkarsh Dev | Professional Web Developer & Software Engineer",
    description:
      "Explore Utkarsh's professional portfolio showcasing web development projects, software engineering expertise, and technical skills in React, Next.js,Node.js,Database and more.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="PNuI7BQmbGJ9mkygjTPjkjhU9yMfUOqWFaZfNsfIShw"
        />{" "}
      </Head>
      <body className={`${robotoFlex.variable} antialiased`}>
        <GsapProvider>{children}</GsapProvider>
      </body>
    </html>
  );
}
