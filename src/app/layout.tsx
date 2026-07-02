import type { Metadata } from "next";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeRegistry } from "@/components/ThemeRegistry";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sean Scott — Senior Frontend Software Engineer",
  description:
    "Portfolio of Sean Scott, Senior Frontend Software Engineer specializing in React, Angular, Vue.js, and TypeScript.",
  keywords: [
    "Sean Scott",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Sean Scott" }],
  openGraph: {
    title: "Sean Scott — Senior Frontend Software Engineer",
    description:
      "Building scalable frontend systems for enterprise web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <InitColorSchemeScript attribute="class" defaultMode="dark" />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
