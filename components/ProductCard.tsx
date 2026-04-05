"use client";

import { Product } from "@/lib/products";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
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
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col"
    >
      {/* Image Container */}
      <motion.div
        animate={{ y: isHovered ? -8 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-gray-100 aspect-square overflow-hidden"
      >
        <motion.img
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {product.badge && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded">
            {product.badge}
          </div>
        )}
      </motion.div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-3 flex-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-sm font-semibold text-red-600">
                {Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )}
                % off
              </span>
            </>
          )}
        </div>
      </div>

      {/* Action Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 transition-colors mx-4 mb-4 rounded"
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
}
