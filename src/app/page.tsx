"use client";

import Features from "@/components/Features";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="p-8">
        <section className="relative py-40 px-8 overflow-hidden">
          {/* video */}
          <div className="absolute inset-0 z-0">
            <video loop autoPlay muted playsInline>
              <source
                className="absolute w-full h-full object-cover"
                src="/videos/background.mp4"
              />
              Your browser does not support this video.
            </video>

            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/15 to-amber-100/15"></div>
          </div>

          {/* content */}
          <div className="container mx-auto text-center relative z-1">
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent mb-8 leading-tight">
              ברוכים הבאים למתאימים הנגרייה האינטרנטית
            </h1>
            <p className="text-xl md:text-2xl text-white text-center max-w-4xl mx-auto leading-relaxed mb-8">
              פתרונות מותאמים אישית באיכות הגבוהה ביותר. אנחנו מתמחים בייצור
              ריהוט מותאם אישית, ארונות מטבח, ארונות ועיבוד עץ מקצועי.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-1 cursor-pointer">
                הצעת מחיר
              </button>

              <Link href="/gallery">
                <button className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-amber-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 cursor-pointer shadow-lg">
                  צפו בגלריה
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Features />
    </>
  );
}
