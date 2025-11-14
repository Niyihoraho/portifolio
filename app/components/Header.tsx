"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { companyInfo } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
      style={{
        backgroundImage: `url('/blueprints/architectural-blueprints.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1a1a2e', // Fallback color
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md"
            : "bg-gradient-to-b from-black/50 via-black/35 to-black/25"
        }`}
      />
      {/* Additional subtle gradient overlay for depth */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#0078D7]/10 via-transparent to-[#0078D7]/10 pointer-events-none" />
      )}
      
      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
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
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-[#0078D7] transition-colors font-medium text-sm ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="px-5 py-2 bg-[#0078D7] text-white rounded-full text-sm font-semibold hover:bg-[#005a9e] transition-all shadow-md"
              >
                Contact
              </Link>
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-foreground hover:text-primary hover:bg-gray-light transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 px-5 py-2.5 bg-[#0078D7] text-white rounded-full text-sm font-semibold text-center hover:bg-[#005a9e] transition-all"
              >
                Contact
              </Link>
          </div>
        </div>
      </nav>
      </div>
    </header>
  );
}

