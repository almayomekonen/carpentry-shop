import Image from "next/image";
import Link from "next/link";

export default function WardrobesPage() {
  const wardrobeTypes = [
    {
      title: "ארון הזזה",
      description: "ארונות עם דלתות הזזה - חוסכים מקום ונראים מודרניים",
      features: ["מסילות איכותיות", "דלתות גדולות", "מגוון גימורים"],
      image: "/images/img3.webp",
    },
    {
      title: "ארון פתיחה",
      description: "ארונות קלאסיים עם דלתות פתיחה רגילות",
      features: ["גישה מלאה", "עמידות גבוהה", "עיצוב מסורתי"],
      image: "/images/img6.webp",
    },
    {
      title: "ארון פינתי",
      description: "מקסום שטח עם ארון מותאם לפינה",
      features: ["ניצול מקסימלי", "פתרון חכם", "עיצוב מיוחד"],
      image: "/images/img5.webp",
    },
  ];

  const interiorSolutions = [
    {
      title: "מדפים מתכווננים",
      description: "מדפים שניתן להזיז בגובה לפי הצורך",
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
            d="M4 5h16M4 12h16M4 19h16"
          />
        </svg>
      ),
    },
    {
      title: "מוטות תליה",
      description: "מוטות חזקים ואיכותיים לתליית בגדים",
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
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      title: "מגירות פנימיות",
      description: "מגירות נשלפות עם מסילות טלסקופיות",
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
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "מתלים מיוחדים",
      description: "מתלים למכנסיים, עניבות וחגורות",
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "תאורת LED",
      description: "תאורה פנימית אוטומטית לנוחות מקסימלית",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "ארגונית נעליים",
      description: "מדפים מיוחדים לנעליים עם אוורור",
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
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
    },
  ];

  const finishOptions = [
    {
      name: "למינציה",
      description: "עמיד וקל לתחזוקה",
      colors: "מגוון רחב של צבעים",
    },
    {
      name: "פורניר עץ",
      description: "מראה עץ טבעי ואצילי",
      colors: "אלון, אגוז, מייפל ועוד",
    },
    {
      name: "צבע פוליאסטר",
      description: "גימור מבריק ואיכותי",
      colors: "כל גוון לפי בחירה",
    },
    {
      name: "זכוכית",
      description: "מודרני ואלגנטי",
      colors: "שקוף, חלבי או צבעוני",
    },
  ];

  const customizationOptions = [
    "בחירת גובה, רוחב ועומק לפי המקום",
    "חלוקה פנימית מותאמת אישית",
    "בחירת צבע וגימור הדלתות",
    "הוספת מראות בדלתות",
    "תאורה פנימית עם חיישן",
    "מגירות בגדלים שונים",
    "מדפי זכוכית או עץ",
    "ידיות מעוצבות או פרופיל",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 mt-24">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent mb-6">
            ארונות בגדים מותאמים אישית
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ארונות בגדים מעוצבים ופונקציונליים שישדרגו את חדר השינה שלכם
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/images/img3.webp"
            width={1200}
            height={600}
            alt="ארונות בגדים"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Wardrobe Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            סוגי ארונות
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wardrobeTypes.map((type, index) => (
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
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
              </div>
            ))}
          </div>
        </div>

        {/* Interior Solutions */}
        <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            פתרונות פנימיים חכמים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorSolutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-amber-50 transition-all duration-300"
              >
                <div className="bg-amber-600 text-white rounded-full p-3 flex-shrink-0">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Finish Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            אפשרויות גימור
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {finishOptions.map((finish, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-amber-700 mb-2">
                  {finish.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {finish.description}
                </p>
                <div className="text-xs text-gray-500 bg-white rounded-lg p-2">
                  {finish.colors}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customization Options */}
        <div className="mb-16 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            אפשרויות התאמה אישית
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {customizationOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-lg p-4 hover:shadow-md transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-amber-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{option}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            למה לבחור בארונות שלנו?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                איכות מובטחת
              </h3>
              <p className="text-gray-600 text-sm">
                חומרים איכותיים ומנגנונים מהמובילים בעולם עם אחריות מלאה
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                עיצוב מותאם
              </h3>
              <p className="text-gray-600 text-sm">
                תכנון אישי לפי הצרכים והחלל שלכם, כל ארון ייחודי ומותאם במיוחד
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                התקנה מהירה
              </h3>
              <p className="text-gray-600 text-sm">
                התקנה מקצועית ומהירה עם הפרעה מינימלית לשגרה שלכם
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              מחירים שקופים
            </h3>
            <p className="text-gray-600 mb-6">המחיר נקבע לפי מספר פרמטרים:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span className="text-gray-600">
                  גודל הארון (גובה, רוחב, עומק)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span className="text-gray-600">סוג הדלתות (הזזה/פתיחה)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span className="text-gray-600">בחירת גימור וחומרים</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span className="text-gray-600">חלוקה פנימית ואביזרים</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span className="text-gray-600">
                  תוספות מיוחדות (תאורה, מראות וכו&apos;)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">קבלו הצעת מחיר מדויקת</h3>
            <p className="mb-6 text-amber-50">
              מלאו פרטים ונחזור אליכם תוך 24 שעות עם הצעת מחיר מפורטת והדמיה של
              הארון
            </p>
            <ul className="space-y-3 mb-6">
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
                <span>ייעוץ מקצועי חינם</span>
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
                <span>תכנון תלת מימד</span>
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
                <span>ללא התחייבות</span>
              </li>
            </ul>
            <Link
              href="/quote"
              className="block bg-white text-amber-700 font-bold py-3 px-6 rounded-lg hover:bg-amber-50 transition-all duration-300 text-center"
            >
              מלאו טופס לקבלת הצעת מחיר
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              מוכנים לארון החלומות שלכם?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              בואו ניפגש לתיאום פגישת ייעוץ ומדידות ללא התחייבות. נעזור לכם
              לתכנן את הארון המושלם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                התחילו עכשיו
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                ראו דוגמאות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
