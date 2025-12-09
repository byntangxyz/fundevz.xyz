import { Inter, Geist_Mono, Gelasio, Sora, Chewy } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const chewy = Chewy({
  variable: "--font-chewy",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gelasio = Gelasio({
  variable: "--font-gelasio",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL("https://fundevz.xyz"),
  title: {
    default: "Bintang Murtifandy - Fullstack Developer & DevOps Enthusiast",
    template: "%s | Bintang Murtifandy",
  },
  description:
    "Fullstack developer specializing in web applications, DevOps, networking, and IoT solutions. Expert in React, Next.js, Node.js, Python, and Docker. Available for freelance projects.",
  keywords: [
    "Fullstack Developer",
    "Web Developer",
    "DevOps Engineer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Python",
    "Docker",
    "IoT Solutions",
    "Bintang Murtifandy",
    "Portfolio",
    "Freelance Developer",
    "JavaScript Developer",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Networking",
    "System Administrator",
  ],
  authors: [{ name: "Bintang Murtifandy", url: "https://fundevz.xyz" }],
  creator: "Bintang Murtifandy",
  publisher: "Bintang Murtifandy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fundevz.xyz",
    title: "Bintang Murtifandy - Fullstack Developer & DevOps Enthusiast",
    description:
      "Fullstack developer specializing in web applications, DevOps, networking, and IoT solutions. Building innovative digital experiences.",
    siteName: "Bintang Murtifandy Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bintang Murtifandy - Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bintang Murtifandy - Fullstack Developer",
    description:
      "Fullstack developer specializing in web applications, DevOps, networking, and IoT solutions.",
    images: ["/og-image.png"],
    creator: "@byntangxyz",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth no-scrollbar dark">
      <body
        className={`${inter.variable} ${geistMono.variable} ${gelasio.variable} ${sora.variable} ${chewy.variable} antialiased `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
