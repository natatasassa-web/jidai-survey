import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "みじかな人の生きてきた時代調べ",
  description: "お孫さんの学校の調べ学習のための回答シートです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
