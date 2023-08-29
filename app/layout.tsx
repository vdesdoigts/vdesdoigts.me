import { Analytics } from "@vercel/analytics/react";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
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
