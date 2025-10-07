import React, { useState } from "react";
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
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigationItems = [
    { name: "בית", href: "/" },
    { name: "אודות", href: "/about" },
    {
      name: "שירותים",
      href: "/services",
      subItems: [
        { name: "ריהוט מותאם אישית", href: "/services/custom-furniture" },
        { name: "ארונות מטבח", href: "/services/kitchen-cabinets" },
        { name: "ארונות", href: "/services/wardrobes" },
        { name: "עיבוד עץ", href: "/services/wood-processing" },
      ],
    },
    { name: "גלריה", href: "/gallery" },
    { name: "איך זה עובד", href: "/process" },
    { name: "צור קשר", href: "/contact" },
    { name: "הצעת מחיר", href: "/quote" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className="hidden lg:flex items-center justify-center space-x-1 rtl:space-x-reverse">
        {navigationItems.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => item.subItems && setServicesOpen(true)}
            onMouseLeave={() => item.subItems && setServicesOpen(false)}
          >
            {item.subItems ? (
              <div className="relative">
                <div className="flex items-center">
                  {/* הלינק לעמוד שירותים */}
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 font-medium transition-colors duration-200 rounded-md ${
                      isActive(item.href) || pathname.startsWith("/services")
                        ? "text-amber-600 bg-amber-50"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>

                  {/* החץ - רק אינדיקטור, לא לחיצה */}
                  <svg
                    className={`w-3 h-3 mr-1 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
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
                </div>

                {/* תפריט המשנה */}
                <div
                  className={`absolute top-full right-0 mt-1 w-64 bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-200 z-50 ${
                    servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <div className="p-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-200 ${
                          isActive(subItem.href)
                            ? "bg-gray-100 text-gray-900"
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
                className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 font-medium transition-colors duration-200 rounded-md ${
                  isActive(item.href)
                    ? "text-amber-600 bg-amber-50"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 rtl:space-x-reverse transition-colors duration-200"
      >
        <svg
          className="w-5 h-5 transition-transform duration-200"
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
        <span className="text-sm font-medium">תפריט</span>
      </button>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white rounded-b-lg shadow-md border-t border-gray-200">
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <div className="space-y-2">
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 font-medium border-b border-gray-200 rounded-md transition-colors duration-200 ${
                        isActive(item.href) || pathname.startsWith("/services")
                          ? "text-amber-600 bg-amber-50"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-8 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 rounded-md ${
                            isActive(subItem.href)
                              ? "text-amber-600 bg-amber-50"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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
                    className={`block px-4 py-3 text-base font-medium transition-colors duration-200 rounded-md ${
                      isActive(item.href)
                        ? "text-amber-600 bg-amber-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
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
