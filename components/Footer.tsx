"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      title: "Get to Know Us",
      links: ["Careers", "Blog", "About Amazon", "Investor Relations"],
    },
    {
      title: "Make Money with Us",
      links: [
        "Sell products on Amazon",
        "Sell on Amazon Business",
        "Sell apps on Amazon",
        "Become an Affiliate",
      ],
    },
    {
      title: "Amazon Payment Products",
      links: [
        "Amazon Business Card",
        "Shop with Points",
        "Reload Your Balance",
        "Amazon Currency Converter",
      ],
    },
    {
      title: "Let Us Help You",
      links: ["Amazon and COVID-19", "Your Account", "Returns Centre", "Help"],
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-900 text-white"
    >
      {/* Back to Top */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="w-full bg-slate-700 hover:bg-slate-600 py-4 flex items-center justify-center gap-2 font-semibold transition"
      >
        <ChevronUp size={20} />
        Back to top
      </motion.button>

      {/* Footer Content */}
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-sm mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 text-sm hover:text-white transition"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-slate-700 pt-8 text-center space-y-4"
          >
            <div className="flex justify-center mb-6">
              <span className="text-2xl font-bold text-amber-600">amazon</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Australia
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Brazil
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Canada
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Germany
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Spain
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                France
              </a>
            </div>

            <div className="text-gray-500 text-sm space-y-1">
              <p>
                &copy; 2024 Amazon-like E-commerce. All rights reserved.
              </p>
              <p>
                Terms & Conditions | Privacy Policy | Cookies
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
