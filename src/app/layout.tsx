import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = localFont({
  src: "../../public/assets/fonts/InterVariable-latin.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});

const jetBrainsMono = localFont({
  src: "../../public/assets/fonts/JetBrainsMono-latin.woff2",
  variable: "--font-geist-mono",
  weight: "100 800",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dade.studio"),
  title: {
    default: "Dade.Studio",
    template: "%s | Dade.Studio",
  },
  description: "An independent design and product studio in Pagosa Springs, Colorado.",
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
