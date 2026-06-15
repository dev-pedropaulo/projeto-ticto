import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";
import "@/styles.css";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lovable App",
  description: "Lovable Generated Project",
  authors: [{ name: "Lovable" }],
  openGraph: {
    title: "Lovable App",
    description: "Lovable Generated Project",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@Lovable",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
