"use client";

import { Product } from "@/lib/products";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { ChevronRight } from "lucide-react";

interface ProductsSectionProps {
  title: string;
  products: Product[];
}

export default function ProductsSection({
  title,
  products,
}: ProductsSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 px-4 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-amber-600 font-semibold text-sm flex items-center gap-1 hover:text-amber-700"
          >
            View more
            <ChevronRight size={18} />
          </motion.button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
