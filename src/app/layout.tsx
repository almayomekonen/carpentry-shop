import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://carpentry-shop.vercel.app"),
  title: {
    default:
      "מתאימים נגרות - נגר מקצועי בישראל | ארונות מטבח וריהוט מותאם אישית",
    template: "%s | מתאימים נגרות - נגר מקצועי בישראל",
  },
  description:
    "נגרות מקצועית בישראל ⭐ ארונות מטבח מותאמים אישית ⭐ ארונות בגדים ⭐ ריהוט מעוצב ⭐ עיבוד עץ מקצועי ⭐ 15+ שנות ניסיון ⭐ אחריות מלאה ⭐ התקנה מקצועית",
  keywords: [
    // מילות מפתח ראשיות
    "נגר בישראל",
    "נגרות מקצועית",
    "נגר מומחה",
    "בית מלאכה לנגרות",
    // ארונות מטבח
    "ארונות מטבח",
    "ארונות מטבח מותאמים",
    "מטבחים מעוצבים",
    "ארונות מטבח איכותיים",
    "מטבח חדש",
    "שיפוץ מטבח",
    "עיצוב מטבח",
    "ארונות מטבח מודרניים",
    // ארונות בגדים
    "ארונות בגדים",
    "ארון הזזה",
    "ארונות חדר שינה",
    "ארונות בגדים מותאמים",
    "ארון בגדים מעוצב",
    "פתרונות אחסון",
    "ארונות קיר",
    // ריהוט מותאם
    "ריהוט מותאם אישית",
    "רהיטים מעוצבים",
    "נגרות ריהוט",
    "שולחנות מעץ",
    "ספריות מעץ",
    "מזנונים מעוצבים",
    "כוורות מעץ",
    "ריהוט מעץ מלא",
    // עיבוד עץ
    "עיבוד עץ",
    "חיתוך עץ",
    "הקצעת עץ",
    "פיסול בעץ",
    "גימור עץ",
    // מיקומים
    "נגר תל אביב",
    "נגר רמת גן",
    "נגר פתח תקווה",
    "נגר חולון",
    "נגר בת ים",
    "נגר רחובות",
    "נגר ראשון לציון",
    "נגר הרצליה",
    "נגר כפר סבא",
    "נגר רעננה",
    "נגר מרכז",
    "נגרות במרכז",
    "נגר אזור המרכז",
    "נגר גוש דן",
    // שירותים
    "התקנת ארונות",
    "שיפוץ ריהוט",
    "תיקון רהיטים",
    "חידוש ריהוט",
    "הרכבת רהיטים",
    "מדידות לארונות",
    "תכנון מטבח",
    "עיצוב פנים נגרות",
  ],
  authors: [{ name: "מתאימים נגרות" }],
  creator: "מתאימים נגרות",
  publisher: "מתאימים נגרות",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://carpentry-shop.vercel.app",
    siteName: "מתאימים נגרות",
    title: "מתאימים נגרות - נגר מקצועי בישראל | ארונות מטבח וריהוט מותאם אישית",
    description:
      "נגרות מקצועית בישראל ⭐ ארונות מטבח מותאמים אישית ⭐ ארונות בגדים ⭐ ריהוט מעוצב ⭐ עיבוד עץ מקצועי ⭐ 15+ שנות ניסיון ⭐ אחריות מלאה",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "מתאימים נגרות - נגר מקצועי בישראל",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "מתאימים נגרות - נגר מקצועי בישראל",
    description:
      "נגרות מקצועית בישראל ⭐ ארונות מטבח מותאמים אישית ⭐ ריהוט מעוצב ⭐ 15+ שנות ניסיון",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://carpentry-shop.vercel.app",
  },
  category: "בית וגן",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <StructuredData />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d97706" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="מתאימים נגרות" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#d97706" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body>
        <Header />
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}
