import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center space-y-3 group">
      <div className="relative">
        <div className="w-16 h-16 bg-amber-500 rounded-lg relative overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-300">
          <div className="absolute top-3 left-3 w-4 h-4 bg-black rounded-sm"></div>
          <div className="absolute top-3 left-9 w-4 h-4 bg-black rounded-sm"></div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300 text-center">
          מתאימים הנגרייה האינטרנטית
        </h1>
      </div>
    </Link>
  );
}
