"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { companyInfo } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 rounded-lg bg-[#0078D7] flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-110 shadow-md">
              D
            </div>
            <div className="hidden sm:block ml-2">
              <div className={`font-bold text-lg transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}>
                Delight
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`hover:text-[#0078D7] transition-colors font-medium text-sm ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="px-5 py-2 bg-[#0078D7] text-white rounded-full text-sm font-semibold hover:bg-[#005a9e] transition-all shadow-md"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 transition-all ${
                  isScrolled ? "bg-gray-700" : "bg-white"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block h-0.5 transition-all ${
                  isScrolled ? "bg-gray-700" : "bg-white"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 transition-all ${
                  isScrolled ? "bg-gray-700" : "bg-white"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-3 py-4 bg-white rounded-lg shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-gray-light transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="mx-4 px-5 py-2.5 bg-[#0078D7] text-white rounded-full text-sm font-semibold text-center hover:bg-[#005a9e] transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

