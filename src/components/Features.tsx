import { GiWoodBeam, GiCutDiamond } from "react-icons/gi";
import { CiRuler } from "react-icons/ci";
import { GiChainsaw } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { FaHandshakeAngle, FaStar } from "react-icons/fa6";

export default function Features() {
  const features = [
    {
      icon: <GiWoodBeam className="w-8 h-8 text-amber-600" />,
      title: "נגרות מותאמת אישית",
      description: "עיצוב וייצור ריהוט מותאם בדיוק לצרכים ולמרחב שלכם",
    },
    {
      icon: <GiCutDiamond className="w-8 h-8 text-amber-600" />,
      title: "איכות גבוהה",
      description: "שימוש בחומרי גלם איכותיים ותשומת לב לכל פרט קטן",
    },
    {
      icon: <CiRuler className="w-8 h-8 text-amber-600" />,
      title: "מדידות מדויקות",
      description: "מדידות וחיתוכים מדויקים לביצוע מושלם בכל פרויקט",
    },
    {
      icon: <GiChainsaw className="w-8 h-8 text-amber-600" />,
      title: "עיבוד עץ מקצועי",
      description: "עבודה מקצועית עם סוגי עץ שונים ומגוונים לפי הצורך",
    },
    {
      icon: <BsTools className="w-8 h-8 text-amber-600" />,
      title: "כלים מקצועיים",
      description: "שימוש בכלים המתקדמים ביותר בתחום הנגרות לתוצאות מדויקות",
    },
    {
      icon: <FaHandshakeAngle className="w-8 h-8 text-amber-600" />,
      title: "שירות אישי",
      description: "ליווי צמוד לאורך כל הפרויקט עד לתוצאה המושלמת",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-800 font-bold">למה לבחור בנו?</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            אנחנו מתמחים במתן פתרונות נגרות מקצועיים ומותאמים אישית ברמה הגבוהה
            ביותר
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              key={index}
            >
              <div key={index}>
                <div className="to-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-md">
                  {feature.icon}
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-amber-600 flex-col">
            <div className="flex justify-center">
              <FaStar className="w-5 h-5" />
              <FaStar className="w-5 h-5" />
            </div>
            <span className="text-lg font-semibold">
              מעל 182 ביקורות מעולות
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
