"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#FFF8F2]">
      {/* Background Image - Bride and Groom (Left Side) */}
      <div className="absolute top-0 left-0 w-full md:w-[55%] h-full z-0">
        <Image
          src="/images/generated_bride_groom.png"
          alt="இந்திய மணமக்கள்"
          fill
          priority
          className="object-cover object-top md:object-[center_20%]"
        />
        {/* Gradient overlays to blend the image seamlessly into the cream background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#FFF8F2] md:hidden"></div>
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FFF8F2]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center h-full">
        {/* Spacer for desktop to push content to the right */}
        <div className="hidden md:block md:w-[45%]"></div>
        
        {/* Text Content */}
        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left mt-12 md:mt-0 md:pl-12 bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-3xl md:rounded-none shadow-lg md:shadow-none border border-white/40 md:border-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#066337] mb-6 drop-shadow-sm leading-tight"
            dangerouslySetInnerHTML={{ __html: t.hero.title }}
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-[#b58c21] mb-6"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-gray-800 mb-10 max-w-xl font-medium"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="tel:9677613716"
              className="flex items-center justify-center gap-2 bg-[#066337] hover:bg-[#087d46] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Phone size={24} />
              {t.hero.cta}
            </a>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.8 }}
             className="mt-10 flex items-center justify-center md:justify-start gap-6 text-[#066337] text-lg font-bold"
          >
              <a href="tel:9677613716" className="hover:text-[#b58c21] transition-colors">96776 13716</a>
              <span className="text-[#D4AF37] opacity-50">|</span>
              <a href="tel:9345289217" className="hover:text-[#b58c21] transition-colors">93452 89217</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
