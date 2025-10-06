"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "ארון בגדים 2 דלתות",
    description:
      "ארון בגדים מעוצב עם 2 דלתות, מדפים פנימיים ומוט תליה. עשוי מעץ מלא איכותי.",
    price: 2500,
    originalPrice: 2800,
    image: "/images/img3.webp",
    category: "wardrobes",
    specifications: ['גובה: 240 ס"מ', 'רוחב: 120 ס"מ', 'עומק: 60 ס"מ'],
    growProductId: "aron-bgadim-2-dlatot",
  },
  {
    id: 2,
    title: "ארונות מטבח מלאים",
    description:
      "מערכת ארונות מטבח מלאה כולל ארונות תחתונים ועליונים עם משטח עבודה.",
    price: 8500,
    originalPrice: 9200,
    image: "/images/img2.webp",
    category: "kitchen",
    specifications: ["אורך: 3 מטר", "כולל משטח עבודה", "דלתות soft-close"],
    growProductId: "aronot-matbech-mlaim",
  },
  {
    id: 3,
    title: "שולחן אוכל מעץ מלא",
    description: "שולחן אוכל מהודר מעץ אלון מלא, מתאים ל-6 סועדים.",
    price: 3200,
    originalPrice: 3600,
    image: "/images/img1.webp",
    category: "furniture",
    specifications: ['אורך: 180 ס"מ', 'רוחב: 90 ס"מ', 'גובה: 75 ס"מ'],
    growProductId: "shulchan-ochel-etz-mala",
  },
  {
    id: 4,
    title: "ספרייה מעוצבת",
    description: "ספרייה גדולה ומעוצבת עם מדפים מתכווננים ומגירות אחסון.",
    price: 1800,
    originalPrice: 2100,
    image: "/images/img4.webp",
    category: "furniture",
    specifications: ['גובה: 220 ס"מ', 'רוחב: 150 ס"מ', "5 מדפים מתכווננים"],
    growProductId: "sifriya-meutzevet",
  },
  {
    id: 5,
    title: "מזנון לסלון",
    description: "מזנון אלגנטי לסלון עם דלתות וחללי אחסון מוסתרים.",
    price: 2200,
    originalPrice: 2500,
    image: "/images/img5.webp",
    category: "furniture",
    specifications: ['אורך: 160 ס"מ', 'עומק: 45 ס"מ', 'גובה: 85 ס"מ'],
    growProductId: "miznon-salon",
  },
  {
    id: 6,
    title: "ארון נעליים",
    description: "ארון נעליים מעוצב עם מדפים מתכווננים ואוורור טבעי.",
    price: 950,
    originalPrice: 1200,
    image: "/images/img6.webp",
    category: "storage",
    specifications: ['גובה: 120 ס"מ', 'רוחב: 80 ס"מ', "6 תאי אחסון"],
    growProductId: "aron-naalaim",
  },
];

const generateGrowPaymentLink = (product: (typeof products)[0]) => {
  const businessId = "073b14ee401507b2746687163d859c64-MjQ3Mjc2NQ";
  const description = encodeURIComponent(
    `${product.description} | מפרט: ${product.specifications.join(", ")}`
  );

  return `https://pay.grow.link/${businessId}/${product.price}/${product.growProductId}?description=${description}`;
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "כל המוצרים" },
    { id: "wardrobes", name: "ארונות בגדים" },
    { id: "kitchen", name: "מטבחים" },
    { id: "furniture", name: "ריהוט" },
    { id: "storage", name: "פתרונות אחסון" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent mb-6">
            המוצרים שלנו
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            מגוון רחב של מוצרי נגרות איכותיים בהתאמה אישית עם תשלום מאובטח ונוח
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-amber-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-700 shadow-md hover:shadow-lg"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  width={400}
                  height={300}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {product.originalPrice > product.price && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    חסכון ₪{product.originalPrice - product.price}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">
                    מפרט טכני:
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-amber-500 rounded-full mr-2"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-amber-600">
                      ₪{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through mr-2">
                        ₪{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <a
                  href={generateGrowPaymentLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group"
                >
                  <svg
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  שלם עכשיו בצורה מאובטחת
                </a>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    💳 אשראי | 📱 Bit | 🍎 Apple Pay | 🔒 תשלום מאובטח
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              לא מצאתם בדיוק מה שחיפשתם?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              כל המוצרים שלנו ניתנים להתאמה אישית. צרו איתנו קשר לקבלת הצעת מחיר
              מותאמת לצרכיכם הייחודיים.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                בקשה להתאמה אישית
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                צור קשר לייעוץ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
