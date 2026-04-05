"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface PromoBannerProps {
  title: string;
  description: string;
  image: string;
  image2?: string;
}

export default function PromoBanner({
  title,
  description,
  image,
  image2,
}: PromoBannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-8 px-4 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Promo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 flex items-center justify-between relative overflow-hidden"
          >
            <div className="z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-700 text-sm mb-4">{description}</p>
              <motion.button
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition"
              >
                See more
                <ChevronRight size={18} />
              </motion.button>
            </div>
            <motion.img
              src={image}
              alt={title}
              className="w-32 h-32 object-cover hidden md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Right Promo */}
          {image2 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 flex items-center justify-between relative overflow-hidden"
            >
              <div className="z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Comfy styles for him
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Shop Amazon Fashion including clothing, shoes, jewelry,
                  watches, bags and more 👔
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  See more
                  <ChevronRight size={18} />
                </motion.button>
              </div>
              <motion.img
                src={image2}
                alt="Comfy styles for him"
                className="w-32 h-32 object-cover rounded hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
