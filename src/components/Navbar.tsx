"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 bg-[#FFF8F2]/95 backdrop-blur-md ${
        isScrolled ? "shadow-md py-2" : "pt-4 pb-3 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="#home" className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="relative w-28 h-10 md:w-32 md:h-12 flex items-center justify-center">
            <img 
              src="/images/logo.png" 
              alt="அக்‌ஷயம் லோகோ" 
              className="w-full h-full object-contain drop-shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className={`hidden text-2xl font-bold text-[#066337]`}>
              அக்‌ஷயம்
            </span>
          </div>
          <span className="text-[10px] md:text-[11px] text-[#066337] font-semibold tracking-wide text-center mt-[-4px]">
            ஜாதகம் முதல் பந்தி வரை
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold hover:text-[#066337] transition-colors text-black drop-shadow-sm`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Toggle Desktop */}
          <button 
            onClick={toggleLanguage}
            className="relative inline-flex h-8 w-16 items-center rounded-full bg-[#066337] focus:outline-none transition-colors shadow-inner"
            title="Translate English/Tamil"
          >
            <span className="absolute left-2 text-[10px] font-bold text-white z-0">EN</span>
            <span className="absolute right-2 text-[10px] font-bold text-white z-0">TA</span>
            <span
              className={`${
                language === "en" ? "translate-x-1" : "translate-x-9"
              } inline-block h-6 w-6 transform rounded-full bg-white transition-transform shadow-md z-10`}
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Language Toggle Mobile */}
          <button 
            onClick={toggleLanguage}
            className="relative inline-flex h-7 w-14 items-center rounded-full bg-[#066337] focus:outline-none transition-colors shadow-inner"
          >
            <span className="absolute left-1.5 text-[9px] font-bold text-white z-0">EN</span>
            <span className="absolute right-1.5 text-[9px] font-bold text-white z-0">TA</span>
            <span
              className={`${
                language === "en" ? "translate-x-1" : "translate-x-8"
              } inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-md z-10`}
            />
          </button>

          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-[#066337]" />
            ) : (
              <Menu className="text-[#066337]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 font-medium hover:text-[#066337]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
