import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "בית מלאכה לנגרות",
  description: "שירותי נגרות מקצועיים ועבודות עץ מותאמות אישית",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
