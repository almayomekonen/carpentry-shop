"use client";

import Link from "next/link";

export default function ProcessPage() {
  const processSteps = [
    {
      step: 1,
      title: "פגישת ייעוץ ראשונית",
      description:
        "פגישה חינמית לבירור הצרכים, העדפות ותקציב. אנחנו מקשיבים לחלומות שלכם ומתרגמים אותם לתכנית מעשית.",
      duration: "30-60 דקות",
      icon: "💬",
      details: [
        "בירור צרכים ודרישות מיוחדות",
        "הצגת דוגמאות ורעיונות עיצוביים",
        "הערכת תקציב ראשונית",
        "קביעת לוח זמנים מקדים",
      ],
    },
    {
      step: 2,
      title: "מדידות מדויקות ותכנון",
      description:
        "מגיעים אליכם לביצוע מדידות מקצועיות ויצירת תכנית מפורטת. כל סנטימטר נמדד בקפידה להתאמה מושלמת.",
      duration: "1-2 שעות",
      icon: "📏",
      details: [
        "מדידות מדויקות עם ציוד מקצועי",
        "תכנון הפרויקט בתוכנות CAD",
        "בחירת חומרים וגימורים",
        "יצירת הדמיות ותרשימים",
      ],
    },
    {
      step: 3,
      title: "הצעת מחיר מפורטת",
      description:
        "מכינים הצעת מחיר שקופה וברורה עם פירוט מלא של כל הרכיבים. ללא הפתעות או עלויות נסתרות.",
      duration: "2-3 ימי עבודה",
      icon: "💰",
      details: [
        "פירוט מלא של עלויות חומרים",
        "חישוב שעות עבודה מדויק",
        "הצגת אלטרנטיבות במחיר",
        "לוח זמנים מפורט לביצוע",
      ],
    },
    {
      step: 4,
      title: "ייצור מקצועי",
      description:
        "הייצור מתבצע בבית המלאכה שלנו עם ציוד מתקדם וטכניקות מסורתיות. כל פריט עובר בקרת איכות קפדנית.",
      duration: "1-6 שבועות",
      icon: "🔨",
      details: [
        "עבודה עם חומרי גלם איכותיים",
        "שימוש בציוד מתקדם ומדויק",
        "בקרת איכות בכל שלב",
        "עדכונים שוטפים על התקדמות",
      ],
    },
    {
      step: 5,
      title: "התקנה מושלמת",
      description:
        "מגיעים אליכם להתקנה מקצועית ומדויקת. אנחנו דואגים שהכל יהיה מושלם ומוכן לשימוש.",
      duration: "1-3 ימים",
      icon: "🏠",
      details: [
        "התקנה מקצועית ומדויקת",
        "הגנה על הרהיטים והרצפה",
        "בדיקה וכוונון סופי",
        "הסבר על תחזוקה נכונה",
      ],
    },
    {
      step: 6,
      title: "מעקב ואחריות",
      description:
        "אנחנו כאן גם אחרי ההתקנה. אחריות מלאה ושירות מעקב לוודא שאתם מרוצים לחלוטין מהתוצאה.",
      duration: "עד 5 שנים",
      icon: "🛡️",
      details: [
        "אחריות מלאה על חומרים ועבודה",
        "שירות תחזוקה ותיקונים",
        "מעקב שביעות רצון",
        "ייעוץ לטיפוח והארכת חיים",
      ],
    },
  ];

  const qualityStandards = [
    {
      title: "חומרים איכותיים",
      description:
        "אנחנו עובדים רק עם ספקים מובילים ובוחרים את החומרים הטובים ביותר",
      icon: "🌟",
    },
    {
      title: "ציוד מתקדם",
      description:
        "בית המלאכה שלנו מצויד בציוד הכי מתקדם לעיבוד עץ מדויק ואיכותי",
      icon: "⚙️",
    },
    {
      title: "בקרת איכות",
      description: "כל פריט עובר בדיקות איכות קפדניות בכל שלב של הייצור",
      icon: "✅",
    },
    {
      title: "צוות מקצועי",
      description: "נגרים מנוסים עם שנים של ניסיון ומומחיות בתחום",
      icon: "👨‍🔧",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 mt-24">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent mb-6">
            איך התהליך עובד?
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            מהרעיון הראשוני ועד לתוצאה המושלמת - הנה התהליך המלא שלנו בשישה
            שלבים ברורים
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 mb-20">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {step.title}
                    </h3>
                    <div className="text-sm text-amber-600 font-medium">
                      משך זמן: {step.duration}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {step.description}
                </p>

                <div className="grid md:grid-cols-2 gap-3">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center text-6xl">
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Standards */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            סטנדרטי האיכות שלנו
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {standard.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Overview */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl shadow-xl p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">
            לוח זמנים כללי
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">1-2 שבועות</div>
              <div className="text-amber-100">פרויקטים קטנים</div>
              <div className="text-sm text-amber-200 mt-1">
                עיבוד עץ, תיקונים
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3-6 שבועות</div>
              <div className="text-amber-100">פרויקטים בינוניים</div>
              <div className="text-sm text-amber-200 mt-1">
                ארונות, ריהוט מותאם
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6-12 שבועות</div>
              <div className="text-amber-100">פרויקטים גדולים</div>
              <div className="text-sm text-amber-200 mt-1">
                מטבחים שלמים, שיפוצים
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-amber-100 text-sm">
              * הזמנים משתנים לפי מורכבות הפרויקט ועומס העבודה
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            שאלות נפוצות על התהליך
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                האם הייעוץ הראשוני בתשלום?
              </h3>
              <p className="text-gray-600 text-sm">
                לא, הפגישה הראשונית והייעוץ הם חינם לחלוטין
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                מה קורה אם אני רוצה לשנות משהו באמצע?
              </h3>
              <p className="text-gray-600 text-sm">
                ניתן לבצע שינויים עד שלב מסוים, נתאם את ההשלכות על המחיר והזמנים
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                איך מתבצע התשלום?
              </h3>
              <p className="text-gray-600 text-sm">
                בדרך כלל 50% מקדמה ו-50% בסיום, אבל ניתן להתאים לפרויקטים גדולים
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">מה כלול באחריות?</h3>
              <p className="text-gray-600 text-sm">
                אחריות מלאה על חומרים, עבודה והתקנה למשך שנתיים-5 שנים
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              מוכנים להתחיל את התהליך?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              בואו נקבע פגישת ייעוץ חינמית ונתחיל לתכנן יחד את הפרויקט המושלם
              עבורכם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  התחילו עכשיו
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  צרו קשר
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
