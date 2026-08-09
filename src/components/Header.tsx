"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const homeNav = [
  { name: "Offers", href: "#services" },
  { name: "Websites", href: "#websites" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const cvNav = [
  { name: "Experiences", href: "#experiences" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Volunteering", href: "#volunteering" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isCv = pathname?.startsWith("/cv") ?? false;
  const navItems = isCv ? cvNav : homeNav;
  const crossLink = isCv
    ? { name: "Offers", href: "/" }
    : { name: "Full CV", href: "/cv" };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-white/5"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold flex items-center">
          <span className="text-primary">Ercole</span>Dev
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={crossLink.href}
            className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
          >
            {crossLink.name}
          </Link>
          <div className="border-l border-white/10 pl-6 ml-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button className="p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={crossLink.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-primary"
              >
                {crossLink.name}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
