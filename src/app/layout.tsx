import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "מתאימים הנגרייה האינטרנטית",
  description: "שירותי נגרות מקצועיים ועבודות עץ מותאמות אישית",
  keywords: "נגרות, ארונות מטבח, ארונות בגדים, רהיטים מותאמים, עיבוד עץ, נגר",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Header />
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}
