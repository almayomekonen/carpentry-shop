"use client";

import Image from "next/image";
import Link from "next/link";

export default function WoodProcessingPage() {
  const services = [
    {
      title: "חיתוך מדויק",
      description: "חיתוך עץ בכל מידה ובכל זווית עם מכונות CNC ומסורים מתקדמים",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
          />
        </svg>
      ),
      details: [
        "חיתוך ישר ומדויק",
        "חיתוך בזוויות מיוחדות",
        "חיתוך עיגולים וקשתות",
        "חיתוך לפי תבניות",
      ],
    },
    {
      title: "הקצעה וכרסום",
      description: "עיבוד משטחי עץ ליצירת פרופילים, חריצים ופרטים מיוחדים",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      details: [
        "כרסום פרופילים מעוצבים",
        "חריצים לחיבורים",
        "הקצעה לדלתות וחלונות",
        "עיטורים דקורטיביים",
      ],
    },
    {
      title: "ליטוש וגימור",
      description: "ליטוש מקצועי למשטח חלק ומושלם, מגס גס ועד גימור עדין",
      icon: (
        <svg
          className="w-8 h-8"
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
      details: [
        "ליטוש ידני ומכני",
        "גימור עדין מושלם",
        "הכנה לצביעה",
        "פוליש וברק",
      ],
    },
    {
      title: "קידוח והברגה",
      description: "קידוחים מדויקים לציריות, מדפים ומחברים",
      icon: (
        <svg
          className="w-8 h-8"
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
      details: [
        "קידוח לציריות",
        "קידוח למדפים",
        "קידוחים סמויים",
        "הברגה מדויקת",
      ],
    },
    {
      title: "צביעה ולכה",
      description: "צביעה מקצועית במגוון גוונים ושיטות גימור",
      icon: (
        <svg
          className="w-8 h-8"
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
      details: [
        "צביעה בכלים מקצועיים",
        "לכה שקופה או צבעונית",
        "גימור מט או מבריק",
        "עמידות מקסימלית",
      ],
    },
    {
      title: "חיבורים ונגרות",
      description: "חיבורים איכותיים וחזקים בשיטות נגרות מסורתיות ומודרניות",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
      details: [
        "חיבורי זנב יונה",
        "חיבורי מיטר",
        "הדבקה חזקה",
        "חיבורי ביסקוויט",
      ],
    },
  ];

  const equipment = [
    {
      name: "מכונת CNC",
      description: "חיתוך וכרסום ממוחשב ברמת דיוק גבוהה",
    },
    {
      name: "מסור שולחן",
      description: "חיתוכים ישרים ומדויקים בכל סוגי העץ",
    },
    {
      name: "פלנר ופסיל",
      description: "יישור והחלקת משטחי עץ",
    },
    {
      name: "מכונות כרסום",
      description: "עיבוד פרופילים ופרטים מיוחדים",
    },
    {
      name: "מכונות ליטוש",
      description: "ליטוש מקצועי למשטח חלק",
    },
    {
      name: "תא צביעה",
      description: "צביעה בתנאים מבוקרים לתוצאה מושלמת",
    },
  ];

  const woodTypes = [
    { name: "עצים קשים", examples: "אלון, אגוז, מייפל, דובדבן" },
    { name: "עצים רכים", examples: "אורן, ארז, אשוח" },
    { name: "עץ אקזוטי", examples: "טיק, מהגוני, זברנו" },
    { name: "לוחות דיקט", examples: "דיקט ליבה, דיקט פורניר" },
  ];

  const projects = [
    "פרטי נגרות למבנים",
    "מעקות ומדרגות עץ",
    "דלתות ומשקופים",
    "חלונות עץ",
    "פרגולות ודקים",
    "פרטים דקורטיביים",
    "שיקום ריהוט עתיק",
    "פרויקטים מיוחדים",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent mb-6">
            עיבוד עץ מקצועי
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            שירותי עיבוד עץ מתקדמים עם ציוד מקצועי ומומחיות של שנים
          </p>
        </div>

        <div className="mb-16 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/images/img4.webp"
            width={1200}
            height={600}
            alt="עיבוד עץ מקצועי"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            השירותים שלנו
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-amber-600">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-amber-500 ml-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            הציוד המקצועי שלנו
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-amber-50 to-white hover:shadow-md transition-all duration-300"
              >
                <div className="bg-amber-600 text-white rounded-full p-2 flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            סוגי עץ שאנחנו עובדים איתם
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {woodTypes.map((wood, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-amber-700 mb-3">
                  {wood.name}
                </h3>
                <p className="text-gray-600 text-sm">{wood.examples}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            סוגי פרויקטים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {projects.map((project, index) => (
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
                <span className="text-gray-700 font-medium">{project}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            תהליך העבודה
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                הבנת הצורך
              </h3>
              <p className="text-gray-600 text-sm">
                שיחה מפורטת להבנת דרישות הפרויקט
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                בחירת חומרים
              </h3>
              <p className="text-gray-600 text-sm">
                סיוע בבחירת סוג העץ המתאים ביותר
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                עיבוד מקצועי
              </h3>
              <p className="text-gray-600 text-sm">
                ביצוע העבודה עם ציוד מתקדם
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                בדיקה ומסירה
              </h3>
              <p className="text-gray-600 text-sm">וידוא איכות ומסירה בזמן</p>
            </div>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              למה לבחור בנו?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-amber-600 text-white rounded-full p-1 flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">
                    ניסיון של שנים
                  </h4>
                  <p className="text-gray-600 text-sm">
                    מומחיות בעיבוד כל סוגי העץ ובכל רמות הקושי
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-amber-600 text-white rounded-full p-1 flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">ציוד מתקדם</h4>
                  <p className="text-gray-600 text-sm">
                    מכונות מקצועיות לדיוק ואיכות מקסימלית
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-amber-600 text-white rounded-full p-1 flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">
                    מחירים הוגנים
                  </h4>
                  <p className="text-gray-600 text-sm">
                    תמורה מצוינת למחיר תחרותי
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-amber-600 text-white rounded-full p-1 flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">שירות אישי</h4>
                  <p className="text-gray-600 text-sm">
                    יחס אישי וליווי צמוד לאורך הפרויקט
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-xl shadow-lg p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">יש לכם פרויקט בראש?</h3>
            <p className="mb-6 text-amber-50">
              ספרו לנו על הפרויקט שלכם ונעזור לכם להגשים אותו. אנחנו מטפלים
              בפרויקטים בכל הגדלים - מחריטה קטנה ועד ייצור סדרתי.
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
                <span>ייעוץ טכני חינם</span>
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
                <span>הצעת מחיר תוך 24 שעות</span>
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
                <span>ביצוע מהיר ומקצועי</span>
              </li>
            </ul>
            <Link
              href="/quote"
              className="block bg-white text-amber-700 font-bold py-3 px-6 rounded-lg hover:bg-amber-50 transition-all duration-300 text-center"
            >
              בואו נדבר על הפרויקט
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              מוכנים להתחיל?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              צרו איתנו קשר היום לשיחת ייעוץ ראשונית. נשמח לעזור לכם להגשים את
              הפרויקט שלכם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                קבלו הצעת מחיר
              </Link>
              <Link
                href="/contact"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                צרו קשר
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
