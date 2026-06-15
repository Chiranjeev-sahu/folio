import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chiranjeev - Portfolio",
    template: "%s | Chiranjeev",
  },
  description:
    "Full-stack developer building end-to-end modern websites and apps with a focus on functionality and attention to the details.",
  keywords: [
    "Chiranjeev",
    "chiruexe",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Web Developer",
    "Software Developer",
    "Javascript developer",
  ],

  // icons: {
  //   icon: [
  //     { url: "/favicon.ico", sizes: "any" },
  //     { url: "/icon.png", type: "image/png", sizes: "256x256" },
  //   ],
  //   apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  // },
  openGraph: {
    title: "chiranjeev.me",
    description: "Full stack developer building clean, modern websites.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
