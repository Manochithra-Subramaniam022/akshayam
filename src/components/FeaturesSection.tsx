"use client";

import { motion } from "framer-motion";
import { Heart, Lock, Compass, Users, PhoneCall, Handshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturesSection() {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Heart className="w-8 h-8 text-[#D4AF37]" />;
      case 1: return <Lock className="w-8 h-8 text-[#D4AF37]" />;
      case 2: return <Compass className="w-8 h-8 text-[#D4AF37]" />;
      case 3: return <Users className="w-8 h-8 text-[#D4AF37]" />;
      case 4: return <PhoneCall className="w-8 h-8 text-[#D4AF37]" />;
      case 5: return <Handshake className="w-8 h-8 text-[#D4AF37]" />;
      default: return <Heart className="w-8 h-8 text-[#D4AF37]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#066337] mb-4">
            {t.features.title}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.features.list.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#FFF8F2] p-8 rounded-2xl border border-[#066337]/10 hover:border-[#D4AF37]/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#066337]/5">
                {getIcon(index)}
              </div>
              <h3 className="text-xl font-bold text-[#066337] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
