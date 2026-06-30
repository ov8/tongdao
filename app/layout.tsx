import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "同道 Bible — Scripture Together",
  description: "A calm bilingual Bible for English and Chinese readers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
