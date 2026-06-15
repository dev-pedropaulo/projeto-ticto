import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/styles.css";
import { Providers } from "./providers";

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
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
