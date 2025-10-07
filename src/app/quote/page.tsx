"use client";

import { useState } from "react";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    customProject: "",
    budget: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    description: "",
    timeline: "",
    location: "",
    additionalServices: [] as string[],
    attachments: null as File[] | null,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const projectTypes = [
    { id: "kitchen-cabinets", name: "ארונות מטבח", icon: "🏠" },
    { id: "wardrobes", name: "ארונות בגדים", icon: "👔" },
    { id: "custom-furniture", name: "ריהוט מותאם אישית", icon: "🪑" },
    { id: "office-furniture", name: "ריהוט משרדי", icon: "💼" },
    { id: "storage-solutions", name: "פתרונות אחסון", icon: "📦" },
    { id: "renovation", name: "שיפוץ וחידוש", icon: "🔨" },
    { id: "wood-processing", name: "עיבוד עץ מיוחד", icon: "🌳" },
    { id: "other", name: "אחר", icon: "✨" },
  ];

  const budgetRanges = [
    { id: "under-5k", name: "עד 5,000 ₪" },
    { id: "5k-10k", name: "5,000 - 10,000 ₪" },
    { id: "10k-20k", name: "10,000 - 20,000 ₪" },
    { id: "20k-50k", name: "20,000 - 50,000 ₪" },
    { id: "above-50k", name: "מעל 50,000 ₪" },
    { id: "flexible", name: "גמיש לפי ההצעה" },
  ];

  const timelineOptions = [
    { id: "urgent", name: "דחוף - תוך שבועיים" },
    { id: "month", name: "תוך חודש" },
    { id: "two-months", name: "תוך חודשיים" },
    { id: "three-months", name: "תוך 3 חודשים" },
    { id: "flexible", name: "גמיש - אין לחץ זמן" },
  ];

  const additionalServicesList = [
    { id: "delivery", name: "משלוח והתקנה" },
    { id: "design", name: "שירותי עיצוב" },
    { id: "removal", name: "פינוי ריהוט ישן" },
    { id: "painting", name: "צביעה וגימור" },
    { id: "hardware", name: "ציוד וחומרה מתקדמים" },
  ];

  // Price calculation function
  const calculateEstimatedPrice = () => {
    let basePrice = 0;

    // Base prices by project type
    const basePrices: { [key: string]: number } = {
      "kitchen-cabinets": 20000,
      wardrobes: 12000,
      "custom-furniture": 8000,
      "office-furniture": 10000,
      "storage-solutions": 6000,
      renovation: 5000,
      "wood-processing": 2000,
      other: 5000,
    };

    basePrice = basePrices[formData.projectType] || 5000;

    // Calculate area if dimensions are provided
    const length = parseFloat(formData.dimensions.length) || 0;
    const width = parseFloat(formData.dimensions.width) || 0;
    const height = parseFloat(formData.dimensions.height) || 0;

    if (length && width) {
      const area = (length * width) / 10000; // Convert cm² to m²
      basePrice = basePrice * Math.max(area, 1);
    }

    // Height multiplier
    if (height > 250) {
      basePrice *= 1.2;
    }

    return Math.round(basePrice);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as Record<string, string>),
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Update estimated price when relevant fields change
    if (name === "projectType" || name.includes("dimensions.")) {
      setTimeout(() => {
        setEstimatedPrice(calculateEstimatedPrice());
      }, 100);
    }
  };

  const handleCheckboxChange = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceId)
        ? prev.additionalServices.filter((id) => id !== serviceId)
        : [...prev.additionalServices, serviceId],
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        attachments: Array.from(e.target.files!),
      }));
    }
  };

  const nextStep = () => {
    if (!getCurrentStepValidation()) {
      let message = "";
      switch (currentStep) {
        case 1:
          message = "אנא מלא את כל הפרטים האישיים: שם, אימייל וטלפון";
          break;
        case 2:
          message = "אנא בחר סוג פרויקט";
          break;
        case 3:
          message = "אנא כתב תיאור של הפרויקט";
          break;
        case 4:
          message = "אנא בחר לוח זמנים ומלא את המיקום";
          break;
      }
      alert(message);
      return;
    }

    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Step-by-step validation functions
  const isStep1Valid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== ""
    );
  };

  const isStep2Valid = () => {
    return formData.projectType !== "";
  };

  const isStep3Valid = () => {
    return formData.description.trim() !== "";
  };

  const isStep4Valid = () => {
    return formData.timeline !== "" && formData.location.trim() !== "";
  };

  // Overall form validation function
  const isFormValid = () => {
    return isStep1Valid() && isStep2Valid() && isStep3Valid() && isStep4Valid();
  };

  // Get validation status for current step
  const getCurrentStepValidation = () => {
    switch (currentStep) {
      case 1:
        return isStep1Valid();
      case 2:
        return isStep2Valid();
      case 3:
        return isStep3Valid();
      case 4:
        return isStep4Valid();
      default:
        return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("אנא מלא את כל השדות החובה");
      return;
    }

    // Create WhatsApp message without emojis
    const getProjectTypeName = (type: string) => {
      const types: { [key: string]: string } = {
        "kitchen-cabinets": "ארונות מטבח",
        wardrobes: "ארונות בגדים",
        "custom-furniture": "ריהוט מותאם אישית",
        "office-furniture": "ריהוט משרדי",
        "storage-solutions": "פתרונות אחסון",
        renovation: "שיפוץ וחידוש",
        "wood-processing": "עיבוד עץ מיוחד",
        other: "אחר",
      };
      return types[type] || type;
    };

    const getBudgetName = (budget: string) => {
      const budgets: { [key: string]: string } = {
        "under-5k": "עד 5,000 ₪",
        "5k-10k": "5,000 - 10,000 ₪",
        "10k-20k": "10,000 - 20,000 ₪",
        "20k-50k": "20,000 - 50,000 ₪",
        "above-50k": "מעל 50,000 ₪",
        flexible: "גמיש לפי ההצעה",
      };
      return budgets[budget] || budget;
    };

    const getTimelineName = (timeline: string) => {
      const timelines: { [key: string]: string } = {
        urgent: "דחוף - תוך שבועיים",
        month: "תוך חודש",
        "2-months": "תוך חודשיים",
        "3-months": "תוך 3 חודשים",
        flexible: "גמיש",
      };
      return timelines[timeline] || timeline;
    };

    const whatsappMessage = `בקשת הצעת מחיר - נגרות

פרטים אישיים:
• שם: ${formData.name}
• טלפון: ${formData.phone}
• אימייל: ${formData.email}

סוג פרויקט: ${getProjectTypeName(formData.projectType)}
${formData.customProject ? `פרויקט מותאם: ${formData.customProject}` : ""}

${formData.budget ? `תקציב: ${getBudgetName(formData.budget)}` : ""}

${
  formData.dimensions.length ||
  formData.dimensions.width ||
  formData.dimensions.height
    ? `מידות משוערות (סמ):
• אורך: ${formData.dimensions.length || "לא צוין"}
• רוחב: ${formData.dimensions.width || "לא צוין"}
• גובה: ${formData.dimensions.height || "לא צוין"}`
    : ""
}

תיאור:
${formData.description}

לוח זמנים: ${getTimelineName(formData.timeline)}

מיקום: ${formData.location}

${
  formData.additionalServices.length > 0
    ? `שירותים נוספים: ${formData.additionalServices.join(", ")}`
    : ""
}`;

    // WhatsApp business number
    const whatsappNumber = "972525090556";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    console.log("Quote request submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 mt-24 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center p-8">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              בקשה נשלחה בהצלחה!
            </h2>
            <p className="text-gray-600 mb-6">
              תודה שפניתם אלינו. אנחנו נחזור אליכם תוך 24 שעות עם הצעת מחיר
              מפורטת ומותאמת אישית.
            </p>
            <div className="bg-amber-50 rounded-lg p-4 mb-6">
              <p className="text-amber-800 font-semibold">מה הלאה?</p>
              <p className="text-amber-700 text-sm mt-1">
                נציג יצור איתכם קשר לתיאום פגישה וסיור במקום, ונתחיל לתכנן את
                הפרויקט המושלם עבורכם.
              </p>
            </div>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              חזרה לעמוד הבית
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 mt-24">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-amber-700 to-gray-800 bg-clip-text text-transparent mb-6">
            בקשת הצעת מחיר
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ספרו לנו על הפרויקט שלכם ואנחנו נכין עבורכם הצעת מחיר מפורטת ומותאמת
            אישית
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    currentStep >= step
                      ? "bg-amber-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`h-1 w-24 mx-4 ${
                      currentStep > step ? "bg-amber-600" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <span>פרטים אישיים</span>
            <span>סוג הפרויקט</span>
            <span>מפרט ומידות</span>
            <span>פרטים נוספים</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  פרטים אישיים
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      שם מלא *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-black text-black"
                      placeholder="הכנס את שמך המלא"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-black text-black"
                      placeholder="050-1234567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    אימייל *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-black text-black"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    מיקום הפרויקט
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-black text-black"
                    placeholder="עיר ואזור"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Project Type */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  סוג הפרויקט
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {projectTypes.map((type) => (
                    <div
                      key={type.id}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          projectType: type.id,
                        }))
                      }
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 text-center ${
                        formData.projectType === type.id
                          ? "border-amber-500 bg-amber-50 text-amber-700"
                          : "border-gray-200 hover:border-amber-300 hover:bg-amber-50"
                      }`}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <div className="font-medium text-sm">{type.name}</div>
                    </div>
                  ))}
                </div>

                {formData.projectType === "other" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      תאר את הפרויקט שלך
                    </label>
                    <input
                      type="text"
                      name="customProject"
                      value={formData.customProject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-black text-black"
                      placeholder="תאר את סוג הפרויקט שאתה מחפש"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    תקציב משוער
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {budgetRanges.map((budget) => (
                      <div
                        key={budget.id}
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            budget: budget.id,
                          }))
                        }
                        className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-300 text-center text-sm ${
                          formData.budget === budget.id
                            ? "border-amber-500 bg-amber-50 text-amber-700"
                            : "border-gray-200 hover:border-amber-300"
                        }`}
                      >
                        {budget.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Specifications */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    מפרט ומידות
                  </h2>
                  {estimatedPrice > 0 && (
                    <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg px-4 py-2">
                      <div className="text-sm text-green-700">
                        הערכת מחיר ראשונית
                      </div>
                      <div className="text-xl font-bold text-green-800">
                        ₪{estimatedPrice.toLocaleString()}
                      </div>
                      <div className="text-xs text-green-600">
                        *מחיר משוער בלבד
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    מידות משוערות (ס&quot;מ)
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <input
                        type="number"
                        name="dimensions.length"
                        value={formData.dimensions.length}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-black text-black"
                        placeholder="אורך"
                      />
                      <label className="text-xs text-gray-500 mt-1 block">
                        אורך
                      </label>
                    </div>
                    <div>
                      <input
                        type="number"
                        name="dimensions.width"
                        value={formData.dimensions.width}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-black text-black"
                        placeholder="רוחב"
                      />
                      <label className="text-xs text-gray-500 mt-1 block">
                        רוחב
                      </label>
                    </div>
                    <div>
                      <input
                        type="number"
                        name="dimensions.height"
                        value={formData.dimensions.height}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-black text-black"
                        placeholder="גובה"
                      />
                      <label className="text-xs text-gray-500 mt-1 block">
                        גובה
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    תיאור מפורט של הפרויקט
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none placeholder-black text-black"
                    placeholder="תאר את הפרויקט בפירוט: סגנון, חומרים מועדפים, דרישות מיוחדות, השראה..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    לוח זמנים מועדף
                  </label>
                  <div className="space-y-2">
                    {timelineOptions.map((timeline) => (
                      <label
                        key={timeline.id}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="timeline"
                          value={timeline.id}
                          checked={formData.timeline === timeline.id}
                          onChange={handleInputChange}
                          className="mr-3 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="text-gray-700">{timeline.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Additional Details */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  פרטים נוספים
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    שירותים נוספים
                  </label>
                  <div className="space-y-3">
                    {additionalServicesList.map((service) => (
                      <label
                        key={service.id}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.additionalServices.includes(
                            service.id
                          )}
                          onChange={() => handleCheckboxChange(service.id)}
                          className="mr-3 text-amber-600 focus:ring-amber-500 rounded"
                        />
                        <span className="text-gray-700">{service.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    קבצים ותמונות השראה
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-black text-black"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    ניתן להעלות תמונות, שרטוטים או קבצים רלוונטיים אחרים
                  </p>
                </div>

                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="font-bold text-amber-800 mb-3">
                    מה יקרה אחרי שליחת הבקשה?
                  </h3>
                  <div className="space-y-2 text-sm text-amber-700">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        1
                      </span>
                      נחזור אליכם תוך 24 שעות
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        2
                      </span>
                      נתאם פגישה וסיור במקום
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        3
                      </span>
                      נכין הצעת מחיר מפורטת ומותאמת
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        4
                      </span>
                      נתחיל לתכנן ולבצע את הפרויקט
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentStep === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                ← חזור
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!getCurrentStepValidation()}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg ${
                    getCurrentStepValidation()
                      ? "bg-amber-600 hover:bg-amber-700 text-white hover:shadow-xl cursor-pointer"
                      : "bg-gray-400 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  {getCurrentStepValidation()
                    ? "המשך →"
                    : "אנא מלא את השדות החובה"}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg transform ${
                    isFormValid()
                      ? "bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                      : "bg-gray-400 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  {isFormValid() ? "שלח בקשה 🚀" : "אנא מלא את כל השדות החובה"}
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-8 space-x-reverse">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">15+</div>
                <div className="text-sm text-gray-600">שנות ניסיון</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">500+</div>
                <div className="text-sm text-gray-600">פרויקטים</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">24h</div>
                <div className="text-sm text-gray-600">זמן תגובה</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">100%</div>
                <div className="text-sm text-gray-600">שביעות רצון</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
