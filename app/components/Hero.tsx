"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { companyInfo } from "@/lib/data";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div
            className={`inline-block mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/20">
              🇷🇼 Based in Kigali, Rwanda
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            From Idea to Market —
            <br />
            <span className="bg-gradient-to-r from-secondary via-secondary to-white bg-clip-text text-transparent font-extrabold">
              We Design, Prototype, and Manufacture
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-xl sm:text-2xl text-white/95 mb-12 max-w-3xl mx-auto font-medium leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {companyInfo.description}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/projects"
              className="px-10 py-5 bg-secondary text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto inline-flex items-center justify-center gap-2 shadow-lg"
            >
              View Our Projects
              <ArrowRight className="w-5 h-5 font-bold" />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105 w-full sm:w-auto shadow-lg"
            >
              Get In Touch
            </Link>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          href="/about"
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
          aria-label="Learn more"
        >
          <span className="text-xs mb-2">Learn More</span>
          <ChevronDown className="w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}

