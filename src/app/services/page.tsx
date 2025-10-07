import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "ריהוט מותאם אישית",
      description:
        "עיצוב וייצור ריהוט ייחודי הבנוי לפי המידות והדרישות שלכם. מספות וכורסאות ועד שולחנות ומזנונים - כל פריט מיוצר בקפידה ובאיכות הגבוהה ביותר.",
      image: "/images/img1.webp",
      link: "/services/custom-furniture",
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      features: [
        "תכנון ועיצוב אישי",
        "בחירת חומרים איכותיים",
        "התאמה מושלמת לחלל",
        "גימור ידני מקצועי",
      ],
    },
    {
      title: "ארונות מטבח",
      description:
        "פתרונות מטבח מושלמים המשלבים עיצוב, פונקציונליות ואיכות. מארונות תחתונים ועליונים ועד פתרונות אחסון חכמים - נייצר עבורכם את המטבח המושלם.",
      image: "/images/img2.webp",
      link: "/services/kitchen-cabinets",
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      features: [
        "תכנון מטבח מלא",
        "מנגנוני סגירה שקטה",
        "משטחי עבודה איכותיים",
        "פתרונות אחסון מקסימליים",
      ],
    },
    {
      title: "ארונות בגדים",
      description:
        "ארונות בגדים מעוצבים ופונקציונליים לחדר השינה. מארונות הזזה מודרניים ועד ארונות קלאסיים - עם חלוקה פנימית מותאמת לצרכיכם.",
      image: "/images/img3.webp",
      link: "/services/wardrobes",
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
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
      features: [
        "חלוקה פנימית חכמה",
        "דלתות הזזה/רגילות",
        "תאורת LED פנימית",
        "גימור איכותי",
      ],
    },
    {
      title: "עיבוד עץ מקצועי",
      description:
        "שירותי עיבוד עץ מתקדמים עם ציוד מקצועי. מחיתוך מדויק ועד הקצעה ועיבוד פרטים מיוחדים - כל עבודה מבוצעת ברמה הגבוהה ביותר.",
      image: "/images/img4.webp",
      link: "/services/wood-processing",
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
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      features: [
        "חיתוך מדויק לפי מידות",
        "הקצעה וכרסום",
        "ליטוש ומילוי",
        "צביעה וגימור",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 mt-24">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent mb-6">
            השירותים שלנו
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            פתרונות נגרות מקצועיים ומותאמים אישית לכל צורך. מארונות מטבח ועד
            ריהוט ייחודי - אנחנו כאן בשבילכם
          </p>

          {/* Price Range Indicator */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              טווח מחירים כללי
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-sm text-green-700">עיבוד עץ</div>
                <div className="font-bold text-green-800">₪500-5K</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-sm text-blue-700">ריהוט מותאם</div>
                <div className="font-bold text-blue-800">₪3K-20K</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="text-sm text-purple-700">ארונות בגדים</div>
                <div className="font-bold text-purple-800">₪8K-25K</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-3">
                <div className="text-sm text-orange-700">ארונות מטבח</div>
                <div className="font-bold text-orange-800">₪15K-45K</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              * המחירים משתנים לפי מידות, חומרים וסיבוכיות הפרויקט
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative overflow-hidden h-64 md:h-auto">
                  <Image
                    src={service.image}
                    width={400}
                    height={400}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-amber-600">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-3 text-sm">
                        מה כולל השירות:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <svg
                              className="w-5 h-5 text-amber-500 ml-2 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={service.link}
                    className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                  >
                    למידע נוסף ←
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl shadow-xl p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            איך התהליך עובד?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">פגישת ייעוץ</h3>
              <p className="text-amber-100 text-sm leading-relaxed">
                פגישה ראשונית לבירור הצרכים, העדפות ותקציב
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">מדידות ותכנון</h3>
              <p className="text-amber-100 text-sm leading-relaxed">
                מדידות מדויקות, תכנון הפרויקט ובחירת חומרים
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">הצעת מחיר</h3>
              <p className="text-amber-100 text-sm leading-relaxed">
                הצעת מחיר מפורטת וברורה עם לוח זמנים מדויק
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">ייצור והתקנה</h3>
              <p className="text-amber-100 text-sm leading-relaxed">
                ייצור מקצועי בבית המלאכה והתקנה מושלמת אצלכם
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            למה לבחור בנו?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                איכות מעולה
              </h3>
              <p className="text-gray-600">
                שימוש בחומרים הטובים ביותר וטכניקות עבודה מתקדמות
              </p>
            </div>

            <div className="text-center">
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
                עמידה בלוחות זמנים
              </h3>
              <p className="text-gray-600">
                אנחנו מתחייבים לעמוד בזמנים המוסכמים ללא פשרות
              </p>
            </div>

            <div className="text-center">
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                שירות אישי
              </h3>
              <p className="text-gray-600">
                ליווי צמוד לאורך כל הפרויקט עד לתוצאה המושלמת
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              מעוניינים להתחיל פרויקט?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              צרו איתנו קשר לקבלת ייעוץ מקצועי והצעת מחיר מותאמת אישית
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
