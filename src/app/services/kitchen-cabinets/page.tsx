import Image from "next/image";
import Link from "next/link";

export default function KitchenCabinetsPage() {
  const kitchenStyles = [
    {
      title: "מטבח מודרני",
      description: "עיצוב נקי עם קווים ישרים ומינימליסטיים",
      features: ["דלתות חלקות", "ידיות נסתרות", "גימור מבריק"],
    },
    {
      title: "מטבח קלאסי",
      description: "עיצוב מסורתי עם פרטים מעוצבים",
      features: ["דלתות מסגרת", "ידיות מעוצבות", "גימור עץ"],
    },
    {
      title: "מטבח כפרי",
      description: "חם ומזמין עם אווירה ביתית",
      features: ["עץ טבעי", "פרטים מקושטים", "צבעים חמים"],
    },
  ];

  const cabinetFeatures = [
    {
      icon: (
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
      ),
      title: "מנגנוני Soft-Close",
      description: "סגירה שקטה ועדינה לכל הדלתות והמגירות",
    },
    {
      icon: (
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
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
      title: "פתרונות אחסון חכמים",
      description: "מגירות עמוקות, מתלים נשלפים ומדפים מתכווננים",
    },
    {
      icon: (
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
      ),
      title: "גימור איכותי",
      description: "צבעים עמידים, למינציה או פורניר עץ טבעי",
    },
    {
      icon: (
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
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "התאמה מדויקת",
      description: "תכנון לפי המידות המדויקות של המטבח שלכם",
    },
  ];

  const countertopOptions = [
    { name: "גרניט", features: ["עמיד מאוד", "עמיד בחום", "מגוון צבעים"] },
    { name: "קוורץ", features: ["אחיד", "ללא תחזוקה", "היגייני"] },
    { name: "עץ מלא", features: ["חם ומזמין", "טבעי", "ניתן לשיפוץ"] },
    { name: "קוריאן", features: ["חלק", "ללא חיבורים", "קל לתחזוקה"] },
  ];

  const designProcess = [
    {
      step: "1",
      title: "מדידות ראשוניות",
      description: "הגעה למקום למדידות מדויקות והבנת הצרכים",
    },
    {
      step: "2",
      title: "תכנון תלת מימד",
      description: "יצירת תכנית מפורטת עם הדמיה ויזואלית",
    },
    {
      step: "3",
      title: "בחירת חומרים",
      description: "בחירת דלתות, משטח עבודה וציוד משלים",
    },
    {
      step: "4",
      title: "ייצור מדויק",
      description: "ייצור הארונות בסדנה המקצועית שלנו",
    },
    {
      step: "5",
      title: "התקנה מקצועית",
      description: "התקנה מושלמת כולל אינסטלציה וחשמל",
    },
    {
      step: "6",
      title: "גימור ובדיקות",
      description: "התאמות אחרונות ווידוא שכל דבר עובד מצוין",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 mt-24">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent mb-6">
            ארונות מטבח מקצועיים
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            תכנון וייצור מטבחים מושלמים המשלבים עיצוב, איכות ופונקציונליות
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/images/img2.webp"
            width={1200}
            height={600}
            alt="ארונות מטבח"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Kitchen Styles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            סגנונות מטבח
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kitchenStyles.map((style, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-amber-700 mb-3">
                  {style.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {style.description}
                </p>
                <ul className="space-y-2">
                  {style.features.map((feature, idx) => (
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

        {/* Cabinet Features */}
        <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            מה כולל המטבח שלנו
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cabinetFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-amber-50 transition-all duration-300"
              >
                <div className="bg-amber-600 text-white rounded-full p-3 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Countertop Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            אפשרויות משטח עבודה
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countertopOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-amber-700 mb-4">
                  {option.name}
                </h3>
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
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

        {/* Design Process */}
        <div className="mb-16 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            תהליך התכנון וההתקנה
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcess.map((process, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {process.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              למה לבחור במטבח שלנו?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">
                  אחריות מלאה על כל הארונות והמנגנונים
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">
                  ציוד ומנגנונים מהמובילים בתעשייה
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">
                  התקנה מקצועית כולל תיאום אינסטלציה וחשמל
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">
                  ליווי אישי ושירות לאחר ההתקנה
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">מבצע מיוחד!</h3>
            <p className="mb-6 text-amber-50">
              קבלו 10% הנחה על מטבח מלא בהזמנה החודש! כולל תכנון, ייצור והתקנה
              מקצועית.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>תכנון תלת מימדי חינם</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>ייעוץ מקצועי ללא עלות</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>אחריות מורחבת</span>
              </li>
            </ul>
            <Link
              href="/quote"
              className="block bg-white text-amber-700 font-bold py-3 px-6 rounded-lg hover:bg-amber-50 transition-all duration-300 text-center"
            >
              קבלו הצעת מחיר עכשיו
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              מוכנים להתחיל את המטבח של החלומות?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              צרו איתנו קשר היום לתיאום פגישת ייעוץ ומדידות ללא התחייבות
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                בקשו הצעת מחיר
              </Link>
              <Link
                href="/contact"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                דברו איתנו
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
