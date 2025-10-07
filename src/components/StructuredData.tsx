export default function StructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://carpentry-shop.vercel.app/#business",
    name: "מתאימים נגרות",
    alternateName: "מתאימים הנגרייה האינטרנטית",
    description:
      "נגרות מקצועית בישראל - ארונות מטבח מותאמים אישית, ארונות בגדים, ריהוט מעוצב ועיבוד עץ מקצועי. 15+ שנות ניסיון, אחריות מלאה והתקנה מקצועית.",
    url: "https://carpentry-shop.vercel.app",
    telephone: "+972-52-509-0556",
    email: "info@carpentry-shop.co.il",
    address: {
      "@type": "PostalAddress",
      addressLocality: "תל אביב",
      addressRegion: "מחוז תל אביב",
      addressCountry: "IL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "32.0853",
      longitude: "34.7818",
    },
    areaServed: [
      {
        "@type": "City",
        name: "תל אביב",
      },
      {
        "@type": "City",
        name: "רמת גן",
      },
      {
        "@type": "City",
        name: "פתח תקווה",
      },
      {
        "@type": "City",
        name: "חולון",
      },
      {
        "@type": "City",
        name: "בת ים",
      },
      {
        "@type": "City",
        name: "רחובות",
      },
      {
        "@type": "City",
        name: "ראשון לציון",
      },
      {
        "@type": "City",
        name: "הרצליה",
      },
    ],
    serviceType: [
      "נגרות מקצועית",
      "ארונות מטבח",
      "ארונות בגדים",
      "ריהוט מותאם אישית",
      "עיבוד עץ",
      "שיפוץ ריהוט",
    ],
    priceRange: "₪₪₪",
    currenciesAccepted: "ILS",
    paymentAccepted: "מזומן, העברה בנקאית, צ'ק",
    openingHours: ["Mo-Th 08:00-18:00", "Fr 08:00-14:00"],
    image: [
      "https://carpentry-shop.vercel.app/images/img1.webp",
      "https://carpentry-shop.vercel.app/images/img2.webp",
      "https://carpentry-shop.vercel.app/images/img3.webp",
    ],
    logo: "https://carpentry-shop.vercel.app/logo.png",
    sameAs: [
      "https://www.facebook.com/carpentry-shop",
      "https://www.instagram.com/carpentry-shop",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "דני כהן",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "עבודה מקצועית ברמה הגבוהה ביותר! הארונות שהם בנו לנו במטבח פשוט מושלמים. מומלץ בחום!",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "שרה לוי",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "שירות מעולה, זמנים מדויקים ואיכות ללא פשרות. הארון בגדים שהם עשו לנו מדהים!",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "שירותי נגרות",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ארונות מטבח מותאמים אישית",
            description:
              "עיצוב וייצור ארונות מטבח מותאמים אישית עם פתרונות אחסון חכמים ומנגנונים מתקדמים",
          },
          priceRange: "₪15,000 - ₪45,000",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ארונות בגדים מעוצבים",
            description:
              "ארונות בגדים מעוצבים עם חלוקה פנימית מותאמת, מגירות איכותיות ומערכות תליה מתקדמות",
          },
          priceRange: "₪8,000 - ₪25,000",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ריהוט מותאם אישית",
            description:
              "עיצוב וייצור ריהוט ייחודי לפי הדרישות שלכם - שולחנות, כוורות, ספריות ועוד",
          },
          priceRange: "₪3,000 - ₪20,000",
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://carpentry-shop.vercel.app/#website",
    url: "https://carpentry-shop.vercel.app",
    name: "מתאימים נגרות",
    description:
      "נגרות מקצועית בישראל - ארונות מטבח, ארונות בגדים וריהוט מותאם אישית",
    publisher: {
      "@id": "https://carpentry-shop.vercel.app/#business",
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://carpentry-shop.vercel.app/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "בית",
        item: "https://carpentry-shop.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "שירותים",
        item: "https://carpentry-shop.vercel.app/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "יצירת קשר",
        item: "https://carpentry-shop.vercel.app/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
