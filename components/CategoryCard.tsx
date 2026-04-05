"use client";

import { Category } from "@/lib/categories";
import { motion } from "framer-motion";
import { useState } from "react";

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export default function CategoryCard({
  category,
  index = 0,
}: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.08,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
    >
      {/* Image */}
      <motion.div
        className="relative bg-gray-100 aspect-square overflow-hidden"
        animate={{ y: isHovered ? -4 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Title */}
      <motion.div
        className="p-4 text-center"
        animate={{
          backgroundColor: isHovered ? "#f9fafb" : "#ffffff",
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
          {category.name}
        </p>
      </motion.div>
    </motion.div>
  );
}
