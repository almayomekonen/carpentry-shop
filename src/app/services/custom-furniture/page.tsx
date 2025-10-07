"use client";

import Image from "next/image";
import Link from "next/link";

export default function CustomFurniturePage() {
  const furnitureTypes = [
    {
      title: "שולחנות אוכל",
      description: "שולחנות אוכל מעוצבים מעץ מלא, בכל גודל ועיצוב",
      image: "/images/img1.webp",
    },
    {
      title: "ספות וכורסאות",
      description: "ריהוט ישיבה מרופד עם מסגרת עץ איכותית",
      image: "/images/img5.webp",
    },
    {
      title: "מזנונים וויטרינות",
      description: "פתרונות אחסון אלגנטיים לסלון ולפינת האוכל",
      image: "/images/img4.webp",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "פגישת ייעוץ",
      description: "נפגש איתכם להבנת הצרכים והחזון שלכם",
    },
    {
      number: "02",
      title: "תכנון ועיצוב",
      description: "יצירת תכנית מפורטת עם סקיצות ותלת מימד",
    },
    {
      number: "03",
      title: "בחירת חומרים",
      description: "בחירת עץ, גימור וחומרי עזר איכותיים",
    },
    {
      number: "04",
      title: "ייצור",
      description: "עבודה מדויקת בסדנה עם ציוד מקצועי",
    },
    {
      number: "05",
      title: "גימור ופוליש",
      description: "גימור ידני מושלם וליטוש לברק עליון",
    },
    {
      number: "06",
      title: "משלוח והתקנה",
      description: "הובלה והתקנה מקצועית עד הבית",
    },
  ];

  const woodTypes = [
    { name: "אלון", features: ["עמיד במיוחד", "גוון חם", "מרקם יפה"] },
    { name: "אגוז", features: ["אלגנטי", "צבע עשיר", "איכותי"] },
    { name: "מייפל", features: ["בהיר", "אחיד", "חזק"] },
    { name: "אורן", features: ["טבעי", "זמין", "כלכלי"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent mb-6">
            ריהוט מותאם אישית
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            יצירת רהיטים ייחודיים שמשקפים את האישיות שלכם ומתאימים בדיוק לחלל
            שלכם
          </p>
        </div>

        <div className="mb-16 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/images/img1.webp"
            width={1200}
            height={600}
            alt="ריהוט מותאם אישית"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            סוגי ריהוט שאנחנו מייצרים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {furnitureTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={type.image}
                    width={400}
                    height={300}
                    alt={type.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            תהליך העבודה
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 border-2 border-amber-100 rounded-lg hover:border-amber-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-5xl font-bold text-amber-100 absolute top-2 right-4">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            סוגי עץ זמינים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {woodTypes.map((wood, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-amber-700 mb-4">
                  {wood.name}
                </h3>
                <ul className="space-y-2">
                  {wood.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-amber-500 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            מה מייחד אותנו
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-600 text-white rounded-full p-3 flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  עבודת יד מקצועית
                </h3>
                <p className="text-gray-600 text-sm">
                  כל פריט מיוצר בעבודת יד מדויקת עם תשומת לב לכל פרט
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-600 text-white rounded-full p-3 flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  עיצוב מותאם אישית
                </h3>
                <p className="text-gray-600 text-sm">
                  תכנון מדויק לפי המידות והסגנון שלכם
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-600 text-white rounded-full p-3 flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  חומרים איכותיים
                </h3>
                <p className="text-gray-600 text-sm">
                  שימוש בעץ מלא ובחומרי גלם ברמה הגבוהה ביותר
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-600 text-white rounded-full p-3 flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  אחריות ושירות
                </h3>
                <p className="text-gray-600 text-sm">
                  אחריות מלאה על העבודה ושירות לקוחות מעולה
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              מוכנים ליצור את הריהוט המושלם?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              בואו ניפגש לשיחת ייעוץ ראשונית ללא התחייבות. נעזור לכם להגשים את
              החזון שלכם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                קבלו הצעת מחיר
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                צפו בעבודות שלנו
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
