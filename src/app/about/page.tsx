import Image from "next/image";
import React from "react";

export default function AboutPage() {
  const products = [
    {
      image: "/images/img1.webp",
      title: "ריהוט מותאם אישית",
      description:
        "עיצוב וייצור ריהוט ייחודי הבנוי לפי המידות והדרישות שלכם, מעץ איכותי ובעבודת יד מקצועית.",
    },
    {
      image: "/images/img2.webp",
      title: "ארונות מטבח",
      description:
        "פתרונות איחסון חכמים למטבח שלכם, עם דלתות איכותיות ומנגנוני פתיחה מתקדמים.",
    },
    {
      image: "/images/img3.webp",
      title: "ארונות בגדים",
      description:
        "ארונות מעוצבים ופרקטיים לחדר השינה, עם חלוקה פנימית מותאמת לצרכים האישיים.",
    },
    {
      image: "/images/img4.webp",
      title: "עיבוד עץ מקצועי",
      description:
        "שירותי עיבוד עץ מתקדמים כולל חיתוך, הקצעה ועיבוד פרטים מיוחדים ברמה הגבוהה ביותר.",
    },
    {
      image: "/images/img5.webp",
      title: "פרטי נגרות מיוחדים",
      description:
        "ייצור פרטים מותאמים אישית לפרויקטים מיוחדים, כולל מדרגות, מעקות ועבודות נגרות דקורטיביות.",
    },
    {
      image: "/images/img6.webp",
      title: "שיפוץ וחידוש ריהוט",
      description:
        "שירותי שיפוץ וחידוש לרהיטים קיימים, החזרת הברק והתאמה לעיצוב המודרני.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br mt-24 from-white via-gray-50 to-amber-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent mb-6">
            המוצרים והשירותים שלנו
          </h1>
          <p>
            אנחנו מתמחים במגוון רחב של פתרונות נגרות מקצועיים, כולם מיוצרים
            באיכות הגבוהה ביותר ובהתאמה אישית מלאה לצרכיכם.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              key={index}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font bold text-gray-800 mb-4">
              למה לבחור בנו?
            </h2>
            <p className="text-gray-600">
              עם שנים של ניסיון בתחום הנגרות, אנחנו מתמחים ביצירת פתרונות
              איכותיים ומותאמים אישית. כל פרויקט מתבצע בקפידה רבה, תוך שימוש
              בחומרים הטובים ביותר וטכניקות עבודה מתקדמות. אנחנו גאים לספק
              שירות. אישי ומקצועי שמבטיח תוצאה מושלמת בכל פעם
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
