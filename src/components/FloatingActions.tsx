"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingActions() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Phone - Mobile Only */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        href="tel:9677613716"
        className="w-14 h-14 bg-[#066337] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(6,99,55,0.39)] hover:bg-[#087d46] hover:shadow-[0_6px_20px_rgba(6,99,55,0.23)] transition-all"
        aria-label={t.contact.cta}
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
