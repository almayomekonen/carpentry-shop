"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `שלום! אני ${formData.name}
    
טלפון: ${formData.phone}
אימייל: ${formData.email}
${
  formData.projectType
    ? `סוג פרויקט: ${getProjectTypeName(formData.projectType)}`
    : ""
}
${formData.subject ? `נושא: ${formData.subject}` : ""}

הודעה:
${formData.message}`;

    const whatsappNumber = "972525090556";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        projectType: "",
      });
    }, 3000);
  };

  const getProjectTypeName = (type: string) => {
    const types: { [key: string]: string } = {
      "custom-furniture": "ריהוט מותאם אישית",
      "kitchen-cabinets": "ארונות מטבח",
      wardrobes: "ארונות בגדים",
      "wood-processing": "עיבוד עץ",
      renovation: "שיפוץ וחידוש",
      other: "אחר",
    };
    return types[type] || type;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 mt-24">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent mb-6">
            יצירת קשר
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            מעוניינים בפרויקט נגרות? נשמח לשמוע מכם ולתת הצעת מחיר מותאמת אישית
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              שלחו לנו הודעה
            </h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
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
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  הודעה נשלחה בהצלחה!
                </h3>
                <p className="text-gray-600">נחזור אליכם בהקדם האפשרי</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      שם מלא *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 placeholder-black text-black"
                      placeholder="הכנס את שמך המלא"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      טלפון *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 placeholder-black text-black"
                      placeholder="050-1234567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    אימייל *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 placeholder-black text-black"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    סוג הפרויקט
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-black"
                  >
                    <option value="">בחר סוג פרויקט</option>
                    <option value="custom-furniture">ריהוט מותאם אישית</option>
                    <option value="kitchen-cabinets">ארונות מטבח</option>
                    <option value="wardrobes">ארונות בגדים</option>
                    <option value="wood-processing">עיבוד עץ</option>
                    <option value="renovation">שיפוץ וחידוש</option>
                    <option value="other">אחר</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    נושא
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 placeholder-black text-black"
                    placeholder="נושא ההודעה"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    הודעה *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none placeholder-black text-black"
                    placeholder="ספרו לנו על הפרויקט שלכם..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  שלח הודעה בוואטסאפ
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                פרטי התקשרות
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-amber-100 rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      טלפון / וואטסאפ
                    </h3>
                    <p className="text-gray-600">050-123-4567</p>
                    <p className="text-sm text-gray-500">
                      זמינים 24/7 לשירותכם
                    </p>
                    <p className="text-xs text-green-600 font-medium">
                      💬 מעדיפים וואטסאפ למענה מהיר
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-amber-100 rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">אימייל</h3>
                    <p className="text-gray-600">info@carpentry-shop.co.il</p>
                    <p className="text-sm text-gray-500">מענה תוך 24 שעות</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-amber-100 rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">מיקום</h3>
                    <p className="text-gray-600">תל אביב והמרכז</p>
                    <p className="text-sm text-gray-500">שירות בכל הארץ</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-amber-100 rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-amber-600"
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
                    <h3 className="font-semibold text-gray-800">שעות פעילות</h3>
                    <p className="text-gray-600">א׳-ה׳: 8:00-18:00</p>
                    <p className="text-gray-600">ו׳: 8:00-14:00</p>
                    <p className="text-sm text-gray-500">שבת: סגור</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                למה לבחור בנו?
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-gray-700 mr-2">
                    ניסיון של מעל 15 שנה בתחום{" "}
                  </p>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-gray-700 mr-2">
                    עבודה עם חומרים איכותיים בלבד
                  </p>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-gray-700 mr-2">התאמה אישית מלאה לצרכיכם</p>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-gray-700 mr-2">
                    אחריות מלאה על כל העבודות
                  </p>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-gray-700 mr-2">מחירים הוגנים ושקופים</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  💡 <strong>טיפ:</strong> שלחו לנו תמונות של המקום ונוכל לתת
                  הערכת מחיר ראשונית
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            שאלות נפוצות
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                כמה זמן לוקח פרויקט?
              </h3>
              <p className="text-gray-600 text-sm">
                תלוי בגודל הפרויקט - בין שבועיים לחודשיים
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                האם יש אחריות?
              </h3>
              <p className="text-gray-600 text-sm">
                כן, אחריות מלאה של שנתיים על כל העבודות
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                איך מתבצע התשלום?
              </h3>
              <p className="text-gray-600 text-sm">
                50% מקדמה, 50% בסיום העבודה
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                האם אתם מגיעים לבית?
              </h3>
              <p className="text-gray-600 text-sm">
                כן, הערכת מחיר ללא תשלום בכל הארץ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
