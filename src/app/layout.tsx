import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: "../../public/fonts/display-placeholder.ttf",
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: "../../public/fonts/body-placeholder.ttf",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dade.Studio",
  description: "Homepage and navigation hub for the Dade.Studio universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
