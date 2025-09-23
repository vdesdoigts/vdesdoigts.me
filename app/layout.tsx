import { Analytics } from "@vercel/analytics/react";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "block", // Prevents invisible text during font load
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "block", // Prevents invisible text during font load
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata = {
  title: "Vincent Desdoigts",
  description:
    "I'm Vincent, a multidisciplinary developer and creative. With strong skills in development and user experience, I love creating user-friendly interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoSlab.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
