import type { Metadata } from "next";
import "./globals.css";
import {Noto_Sans} from "next/font/google"

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Browser extensions manager UI",
  description: "Frontend Mentor | Browser extensions manager UI",
  icons: "./favicon-32x32.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} h-full antialiased dark`}
    >
      <body className="px-4 sm:px-8 min-h-full flex flex-col">{children}</body>
    </html>
  );
}
