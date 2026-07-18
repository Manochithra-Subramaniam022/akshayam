"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-[#FFF8F2] relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#066337] mb-4">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_rgba(91,44,44,0.08)] border border-[#066337]/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#FFF8F2] rounded-full flex items-center justify-center">
                <Phone className="text-[#066337]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#066337]">{t.contact.phone}</h3>
              </div>
            </div>
            
            <div className="space-y-6">
              <a href="tel:9677613716" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#FFF8F2] transition-colors group">
                <span className="text-xl font-medium text-gray-800">96776 13716</span>
                <Phone size={20} className="text-[#D4AF37] group-hover:text-[#066337] transition-colors" />
              </a>
              <a href="tel:9345289217" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#FFF8F2] transition-colors group">
                <span className="text-xl font-medium text-gray-800">93452 89217</span>
                <Phone size={20} className="text-[#D4AF37] group-hover:text-[#066337] transition-colors" />
              </a>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="tel:9677613716"
                className="flex-1 flex items-center justify-center gap-2 bg-[#066337] hover:bg-[#087d46] text-white py-3 rounded-xl font-medium transition-colors shadow-md"
              >
                <Phone size={18} />
                {t.contact.cta}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_rgba(91,44,44,0.08)] border border-[#066337]/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#FFF8F2] rounded-full flex items-center justify-center">
                <MapPin className="text-[#066337]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#066337]">{t.contact.addressTitle}</h3>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl h-[calc(100%-80px)] flex flex-col items-center justify-center border border-gray-100">
              <img 
                src="/images/malaikovil.jpg" 
                alt="Malaikovil Temple" 
                className="w-full max-w-[280px] h-auto rounded-lg mb-6 shadow-sm object-cover border-4 border-white" 
              />
              <address 
                className="not-italic text-lg text-gray-700 leading-relaxed text-center"
                dangerouslySetInnerHTML={{ __html: t.contact.address }}
              />
              
              <div className="mt-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFF8F2] border-2 border-[#D4AF37]/30 text-[#066337]">
                   <MapPin size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
