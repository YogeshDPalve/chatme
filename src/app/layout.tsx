import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "ChatMe",
  description: "A video calling web application built using NextJs and ZEGOCLOUD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen antialiased ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
