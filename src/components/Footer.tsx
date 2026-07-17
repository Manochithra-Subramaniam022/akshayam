"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const displayYear = 2026;
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2a1414] text-white py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">
          {t.footer.title}
        </h3>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto italic">
          {t.footer.subtitle}
        </p>
        
        <div className="w-full h-px bg-white/10 my-8"></div>
        
        <p className="text-gray-400 text-sm">
          &copy; {displayYear} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
