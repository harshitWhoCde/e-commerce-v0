"use client";

import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Location */}
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-amber-600">amazon</div>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="text-gray-600">📍 Deliver to</span>
              <span className="font-semibold">Ukraine</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="flex w-full bg-amber-100 rounded">
              <input
                type="text"
                placeholder="Search Amazon"
                className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
              />
              <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-r">
                <Search size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col text-sm cursor-pointer hover:text-amber-600 transition">
              <span className="text-gray-600">Hello, Sign In</span>
              <span className="font-semibold">Account & Lists</span>
            </div>

            <div className="hidden md:flex flex-col text-sm cursor-pointer hover:text-amber-600 transition">
              <span className="text-gray-600">Returns</span>
              <span className="font-semibold">& Orders</span>
            </div>

            <button className="relative flex items-center gap-2 text-sm hover:text-amber-600 transition">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-gray-200"
          >
            <div className="space-y-3 pt-4">
              <input
                type="text"
                placeholder="Search Amazon"
                className="w-full px-4 py-2 bg-amber-100 rounded outline-none text-sm"
              />
              <div className="flex items-center gap-4 text-sm">
                <User size={20} />
                <span>Account & Lists</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <ShoppingCart size={20} />
                <span>Cart</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Bar */}
        <div className="bg-slate-700 text-white py-2 px-4 flex gap-4 overflow-x-auto scrollbar-hide">
          <button className="whitespace-nowrap text-sm hover:bg-slate-600 px-3 py-1 rounded transition">
            All
          </button>
          <button className="whitespace-nowrap text-sm hover:bg-slate-600 px-3 py-1 rounded transition">
            Today&apos;s Deals
          </button>
          <button className="whitespace-nowrap text-sm hover:bg-slate-600 px-3 py-1 rounded transition">
            Gift Cards
          </button>
          <button className="whitespace-nowrap text-sm hover:bg-slate-600 px-3 py-1 rounded transition">
            Registry & Gifting
          </button>
          <button className="whitespace-nowrap text-sm hover:bg-slate-600 px-3 py-1 rounded transition">
            Sell on Amazon
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
