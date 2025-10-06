"use client";

import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const [imageFilter, setImageFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      image: "/images/img1.webp",
      title: "ריהוט מותאם אישית",
      description: "פרויקט ריהוט מותאם אישית עם עיצוב מיוחד",
      category: "furniture",
    },
    {
      image: "/images/img2.webp",
      title: "ארונות מטבח מודרניים",
      description: "מטבח מעוצב עם ארונות איכותיים ופתרונות אחסון חכמים",
      category: "kitchen",
    },
    {
      image: "/images/img3.webp",
      title: "ארון בגדים מעוצב",
      description: "ארון בגדים עם חלוקה פנימית מותאמת וגימור מושלם",
      category: "wardrobe",
    },
    {
      image: "/images/img4.webp",
      title: "עבודת עץ מקצועית",
      description: "עיבוד עץ ברמה הגבוהה ביותר עם פרטי גימור מיוחדים",
      category: "woodwork",
    },
    {
      image: "/images/img5.webp",
      title: "פרטי נגרות מיוחדים",
      description: "פרטי נגרות דקורטיביים ומיוחדים לעיצוב הבית",
      category: "special",
    },
    {
      image: "/images/img6.webp",
      title: "שיפוץ וחידוש",
      description: "שיפוץ וחידוש רהיטים קיימים עם תוצאה מרשימה",
      category: "renovation",
    },
  ];

  const categories = [
    { id: "all", name: "הכל" },
    { id: "furniture", name: "ריהוט" },
    { id: "kitchen", name: "מטבחים" },
    { id: "wardrobe", name: "ארונות" },
    { id: "woodwork", name: "עיבוד עץ" },
    { id: "special", name: "מיוחדים" },
    { id: "renovation", name: "שיפוצים" },
  ];

  const filteredImages =
    imageFilter === "all"
      ? images
      : images.filter((img) => img.category === imageFilter);

  function openLightBox(imageSrc: string) {
    setSelectedImage(imageSrc);
  }

  function closeLightBox() {
    setSelectedImage(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent mb-6">
            הגלריה שלנו
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            צפו בפרויקטים שביצענו ועבודות הנגרות המקצועיות שלנו
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              onClick={() => setImageFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer duration-300 ${
                imageFilter === category.id
                  ? "bg-amber-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-700 shadow-md hover:shadow-lg"
              }`}
              key={category.id}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
              key={index}
              onClick={() => openLightBox(image.image)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.image}
                  alt={image.title}
                  width={400}
                  height={300}
                  priority
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImage}
                alt="תמונה מוגדלת"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              <button
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-black/70 text-black hover:text-white cursor-pointer rounded-full p-2 transition-all duration-200"
                onClick={closeLightBox}
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
