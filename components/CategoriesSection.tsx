"use client";

import { categories } from "@/lib/categories";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection() {
  // Split categories by section
  const categoryByCategories = categories.filter(
    (c) => c.section === "Shop by categories"
  );
  const featuredCollections = categories.filter(
    (c) => c.section === "Featured Collections"
  );

  return (
    <>
      {/* Shop by Categories */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 px-4 bg-gray-50 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Shop by categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoryByCategories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Collections */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 px-4 bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredCollections.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
