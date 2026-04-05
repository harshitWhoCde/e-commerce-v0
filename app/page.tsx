import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import CategoriesSection from "@/components/CategoriesSection";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import { shoeProducts, topSellerProducts } from "@/lib/products";

export const metadata = {
  title: "Amazon-like E-commerce | Shop Online",
  description: "Shop computers, accessories, electronics, and more. Fast shipping and great deals on millions of products.",
};

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <ProductsSection title="Recently Viewed" products={shoeProducts} />
      <ProductsSection title="Amazon Top Sellers" products={topSellerProducts} />
      <CategoriesSection />
      <PromoBanner
        title="Comfy styles for her"
        description="Shop Amazon Fashion including clothing, shoes, jewelry, watches, bags and more 👗"
        image="https://images.unsplash.com/photo-1544656728-042cc02d7qf7?w=200&h=200&fit=crop"
        image2="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
      />
      <div className="py-8 px-4 bg-white text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Torunas, this must have for you 👌
        </h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {shoeProducts.slice(0, 5).map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded mb-3"
              />
              <p className="text-sm font-semibold text-gray-900 line-clamp-2">
                {product.name}
              </p>
              <p className="text-amber-600 font-bold mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
