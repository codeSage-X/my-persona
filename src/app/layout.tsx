import type { Metadata } from "next";
// layout.tsx or layout.js
import { Albert_Sans, Open_Sans, Rubik } from 'next/font/google';
import './globals.css';

const albertSans = Albert_Sans({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] }); 

export const metadata: Metadata = {
  title: "CodeSage",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.className} ${openSans.className} ${rubik.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
