'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`top-0 z-50 fixed backdrop-blur-sm border-gray-800 border-b w-full ${isOpen ? "bg-gray-900/80" : "bg-transparent"}`}
    >
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center font-bold text-white text-lg"
          >
            <span className="mr-2 text-secondary">{"{"}</span>
            Dagmawi Yoseph
            <span className="ml-2 text-secondary">{"}"}</span>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ label, href }) => (
              <motion.li
                key={href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={href}
                  className="relative px-3 py-2 text-gray-300 hover:text-secondary transition-colors"
                >
                  {label}
                  <motion.span
                    className="bottom-0 left-0 absolute bg-gray-900 hover:bg-secondary w-full h-0.5"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-gray-300 hover:text-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="space-y-4 px-4 pb-4">
                {navItems.map(({ label, href }) => (
                  <motion.li
                    key={href}
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <a
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="block hover:bg-gray-800 px-4 py-3 rounded-lg text-gray-300 hover:text-secondary transition-colors"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}