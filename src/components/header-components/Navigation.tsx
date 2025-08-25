import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navigation({
  isMenuOpen,
  setIsMenuOpen,
}: NavigationProps) {
  const pathname = usePathname();

  const navigationItems = [
    { name: "בית", href: "/", icon: "🏠" },
    { name: "אודות", href: "/about", icon: "ℹ️" },
    {
      name: "שירותים",
      href: "/services",
      icon: "🔧",
      subItems: [
        { name: "ריהוט מותאם אישית", href: "/services/custom-furniture" },
        { name: "ארונות מטבח", href: "/services/kitchen-cabinets" },
        { name: "ארונות", href: "/services/wardrobes" },
        { name: "עיבוד עץ", href: "/services/wood-processing" },
      ],
    },
    { name: "גלריה", href: "/gallery", icon: "🖼️" },
    { name: "צור קשר", href: "/contact", icon: "📞" },
    { name: "הצעת מחיר", href: "/quote", icon: "💰" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
        {navigationItems.map((item) => (
          <div key={item.name} className="relative group">
            {item.subItems ? (
              <div className="relative">
                <button className="flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 group-hover:shadow-lg">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="absolute top-full right-0 mt-3 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-xl transition-all duration-200 ${
                          isActive(subItem.href)
                            ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 border-r-2 border-blue-500 shadow-sm"
                            : ""
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href={item.href}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 font-medium transition-all duration-300 rounded-xl relative overflow-hidden group ${
                  isActive(item.href)
                    ? "text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-red-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <span className="text-lg relative z-10">{item.icon}</span>
                <span className="relative z-10">{item.name}</span>

                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                )}
              </Link>
            )}
          </div>
        ))}
      </nav>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 rtl:space-x-reverse transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <svg
          className="w-5 h-5 relative z-10 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
        <span className="text-sm font-semibold relative z-10">תפריט</span>
      </button>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl border-t border-gray-200/50">
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <div className="space-y-2">
                    <div className="px-4 py-3 text-gray-600 font-medium border-b border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                      <span className="text-lg mr-2">{item.icon}</span>
                      {item.name}
                    </div>
                    <div className="pl-8 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-4 py-3 text-sm transition-all duration-200 rounded-lg ${
                            isActive(subItem.href)
                              ? "text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 border-r-2 border-blue-500 shadow-sm"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                      isActive(item.href)
                        ? "text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 border-r-2 border-blue-500 shadow-sm"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
                    }`}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
