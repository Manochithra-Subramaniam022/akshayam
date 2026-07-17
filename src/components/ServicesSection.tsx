"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#066337] mb-4">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto bg-[#FFF8F2] rounded-3xl overflow-hidden shadow-xl border border-[#066337]/10"
        >
          {/* Header */}
          <div className="bg-[#066337] py-4 px-6 text-center shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm">
              {t.services.cardTitle}
            </h3>
          </div>

          {/* List Content */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {/* Column 1 */}
              <div className="space-y-5">
                {t.services.col1.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <Star
                      className="text-[#D4AF37] fill-[#D4AF37] flex-shrink-0 group-hover:scale-125 transition-transform"
                      size={20}
                    />
                    <span className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-[#066337] transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-5 mt-5 md:mt-0">
                {t.services.col2.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <Star
                      className="text-[#D4AF37] fill-[#D4AF37] flex-shrink-0 group-hover:scale-125 transition-transform"
                      size={20}
                    />
                    <span className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-[#066337] transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#066337] py-4 px-6 text-center shadow-inner">
            <p className="text-xl md:text-2xl font-bold text-white tracking-wide">
              {t.services.footer}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
