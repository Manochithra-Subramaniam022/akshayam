"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#066337] mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-10 rounded-full"></div>
          
          <div className="bg-[#FFF8F2] p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#066337]/5">
            <p 
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: t.about.p1 }}
            />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {t.about.p2}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
