import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-4 rtl:space-x-reverse group"
    >
      <div className="relative">
        <div className="w-14 h-14 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-2xl relative overflow-hidden shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="absolute top-2 left-2 w-4 h-4 bg-black rounded-md shadow-lg"></div>
          <div className="absolute top-2 left-8 w-4 h-4 bg-black rounded-md shadow-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/50 to-red-500/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent group-hover:from-amber-600 group-hover:via-orange-600 group-hover:to-red-600 transition-all duration-500">
          מתאימים הנגרייה האינטרנטית
        </h1>
        <div className="h-1 bg-gradient-to-r from-amber-400 to-red-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </Link>
  );
}
