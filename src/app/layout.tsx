import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HSpace - Professional Networking Platform | Connect, Share, Grow",
  description: "HSpace is the ultimate online professional networking platform designed for professionals to connect, share knowledge, and grow their careers. Engage in secure, casual conversations with like-minded individuals and boost your business opportunities.",
  keywords: "professional networking, business networking, career growth, share ideas, connect with professionals, business connections, secure networking, online networking platform, thought leadership, professional development, business opportunities, network safely, build connections, industry insights, job opportunities, social networking for professionals, career networking platform, secure professional network, business community, professional collaboration",
  openGraph: {
    title: "HSpace - The Ultimate Professional Networking Platform",
    description: "Explore HSpace, the top-rated professional networking platform where you can safely connect with industry professionals, share your thoughts, and grow your business or career. Join the conversation today!",
    url: "https://hspace.hdev.uk",
    type: "website",
    images: [
      {
        url: "https://hspace.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HSpace Professional Networking Platform"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HSpaceNetwork",
    title: "HSpace - Connect, Collaborate, and Advance Your Career",
    description: "HSpace is the go-to platform for professionals to network, collaborate, and advance in their careers. Create meaningful connections in a secure environment and grow your professional network.",
  },
  robots: "index, follow",
  themeColor: "#1a73e8",
  publisher: "Hdev Group",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
