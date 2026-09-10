"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "ta" | "en";

interface TranslationDictionary {
  nav: { home: string; about: string; services: string; contact: string };
  hero: { title: string; subtitle: string; description: string; cta: string };
  about: { title: string; p1: string; p2: string; features: string[] };
  services: { title: string; subtitle: string; cardTitle: string; col1: string[]; col2: string[]; footer: string };
  features: { title: string; list: { title: string; description: string }[] };
  contact: { title: string; phone: string; addressTitle: string; address: string; cta: string };
  footer: { title: string; subtitle: string; rights: string };
}

const translations: Record<Language, TranslationDictionary> = {
  ta: {
    nav: { home: "முகப்பு", about: "எங்களை பற்றி", services: "சேவைகள்", contact: "தொடர்புக்கு" },
    hero: {
      title: "அக்‌ஷயம் <br /> திருமணத் தகவல் மையம்",
      subtitle: "\"உங்கள் இல்லத்தின் இனிய உறவுக்கு நம்பிக்கையான துணை\"",
      description: "பல ஆண்டுகளாக நம்பிக்கையுடன் செயல்பட்டு வரும் திருமணத் தகவல் மையம். குடும்ப மதிப்புகளையும், தனியுரிமையையும் முன்னிலைப்படுத்தி சிறந்த வாழ்க்கைத்துணையை இணைத்து வருகிறோம்.",
      cta: "இப்போது அழைக்கவும்",
    },
    about: {
      title: "எங்களை பற்றி",
      p1: "<strong class=\"text-[#066337]\">அக்‌ஷயம் திருமணத் தகவல் மையம்</strong> என்பது நம்பகமான திருமணத் தகவல் சேவையாகும். மணமகன் மற்றும் மணமகளின் விருப்பங்களுக்கு ஏற்ப பொருத்தமான வாழ்க்கைத்துணையை அறிமுகப்படுத்துவது எங்கள் நோக்கம்.",
      p2: "கடந்த 10 ஆண்டுகளாக திருமணத் தகவல் சேவையில் ஈடுபட்டு, எங்கள் பகுதியில் 200 க்கும் மேற்பட்ட திருமணங்களை வெற்றிகரமாக நடத்தி வைத்துள்ளோம். நேர்மை, நம்பிக்கை, தனியுரிமை மற்றும் குடும்ப மதிப்புகளை அடிப்படையாகக் கொண்டு பல குடும்பங்களுக்கு வெற்றிகரமான திருமணங்களை உருவாக்கி வருகிறோம்.",
      features: ["நம்பகமான மற்றும் பாதுகாப்பான சேவை", "பொருத்தமான வரன்கள்", "முழுமையான வழிகாட்டுதல்", "குறைந்த கட்டணம்"],
    },
    services: {
      title: "எங்கள் சேவைகள்",
      subtitle: "குடும்பத்தின் தேவைக்கேற்ப முழுமையான திருமணத் தகவல் சேவைகள்.",
      cardTitle: "ஜாதகம் முதல் பந்தி வரை",
      col1: ["ஜாதகம் பதிவு", "வாழை மரம்", "ஐயர்", "மாங்கல்ய வாத்தியம்", "சீர்வரிசைத் தட்டு", "சமையல் கேட்டரிங் பொருட்கள்", "காய்கறி, காளான்", "பால், தயிர், நெய்"],
      col2: ["பால்கோவா, பன்னீர்", "இங்கிலிஷ் காய்கறிகள்", "தண்ணீர் 300ml to 20 லிட்டர்", "டெக்கரேஷன்", "போட்டோ வீடியோ", "ஐஸ்கிரீம், பீடா, பழங்கள்", "கரும்பு ஜூஸ் மற்றும் பல"],
      footer: "அனைத்தும் சிறந்த முறையில் செய்து தருகிறோம்",
    },
    features: {
      title: "ஏன் எங்களை தேர்வு செய்ய வேண்டும்?",
      list: [
        { title: "நம்பகமான சேவை", description: "உங்கள் நம்பிக்கையை மதிக்கும் உன்னதமான சேவை." },
        { title: "தனியுரிமை பாதுகாப்பு", description: "உங்கள் தகவல்கள் அனைத்தும் 100% பாதுகாப்பாக கையாளப்படும்." },
        { title: "அனுபவமிக்க வழிகாட்டுதல்", description: "சரியான துணையை தேர்ந்தெடுக்க சிறந்த ஆலோசனை." },
        { title: "தனிப்பட்ட ஆலோசனை", description: "உங்கள் தேவைகளை புரிந்து கொண்டு தனிப்பட்ட கவனம்." },
        { title: "குடும்ப மதிப்புகளுக்கு முன்னுரிமை", description: "பாரம்பரியம் மற்றும் குடும்ப மதிப்புகளுக்கு சிறப்பு முக்கியத்துவம்." }
      ]
    },
    contact: {
      title: "தொடர்புக்கு",
      phone: "தொலைபேசி எண்கள்",
      addressTitle: "முகவரி",
      address: "மலைக்கோயில்,<br />மங்கலம் ரோடு,<br />திருப்பூர் - 641 663",
      cta: "அழைக்க",
    },
    footer: {
      title: "அக்‌ஷயம் திருமணத் தகவல் மையம்",
      subtitle: "\"நம்பிக்கையுடன் உறவுகளை இணைக்கும் உங்கள் குடும்பத்தின் முதல் தேர்வு.\"",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
  },
  en: {
    nav: { home: "Home", about: "About Us", services: "Services", contact: "Contact" },
    hero: {
      title: "Akshayam <br /> Matrimony",
      subtitle: "\"A trusted partner for your family's beautiful relationships\"",
      description: "A matrimony service operating with trust for many years. We bring together the best life partners by prioritizing family values and privacy.",
      cta: "Call Now",
    },
    about: {
      title: "About Us",
      p1: "<strong class=\"text-[#066337]\">Akshayam Matrimony</strong> is a trusted matchmaking service. Our goal is to introduce the right life partner according to the preferences of the bride and groom.",
      p2: "For the past 10 years, we have been providing matrimony services and have successfully arranged over 200+ marriages across our region. Based on honesty, trust, privacy, and family values, we have created successful marriages for many families.",
      features: ["Trusted & Secure Service", "Matching Profiles", "Complete Guidance", "Affordable Fees"],
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive matrimony services tailored to your family's needs.",
      cardTitle: "From Horoscope to Banquet",
      col1: ["Horoscope Registration", "Banana Tree", "Priest (Iyer)", "Auspicious Music (Nadaswaram)", "Dowry & Gift Trays", "Cooking & Catering Items", "Vegetables & Mushrooms", "Milk, Curd, Ghee"],
      col2: ["Palkova & Paneer", "English Vegetables", "Water 300ml to 20 Liters", "Decoration", "Photo & Video", "Ice Cream, Beeda, Fruits", "Sugarcane Juice & more"],
      footer: "We provide everything in the best possible way",
    },
    features: {
      title: "Why Choose Us?",
      list: [
        { title: "Trusted Service", description: "A noble service that respects your trust." },
        { title: "Privacy Protection", description: "All your information is handled 100% securely." },
        { title: "Experienced Guidance", description: "Best advice to choose the right partner." },
        { title: "Personalized Advice", description: "Personal attention understanding your needs." },
        { title: "Priority to Family Values", description: "Special importance to tradition and family values." }
      ]
    },
    contact: {
      title: "Contact",
      phone: "Phone Numbers",
      addressTitle: "Address",
      address: "Malaikovil,<br />Mangalam Road,<br />Tiruppur - 641 663",
      cta: "Call",
    },
    footer: {
      title: "Akshayam Matrimony",
      subtitle: "\"Your family's first choice connecting relationships with trust.\"",
      rights: "All rights reserved.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ta");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ta" ? "en" : "ta"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
